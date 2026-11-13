import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(
  root,
  "..",
  "documentations",
  "mockups",
  "admin-game",
  "admin-login-game-desktop.jpg",
);
const out = path.join(root, "public", "brand", "admin-login-bg.jpg");

const meta = await sharp(src).metadata();
const fullW = meta.width;
const fullH = meta.height;

// Slightly oversized rect so gold border + filigree are fully covered
const L = 290;
const T = 28;
const R = 990;
const B = 670;
const W = R - L;
const H = B - T;

// Build a fill from the LEFT and RIGHT casino scene (outside the card),
// stretched across the center — keeps cards/chips look, no UI.
const leftBand = await sharp(src)
  .extract({
    left: 40,
    top: 80,
    width: Math.max(80, L - 60),
    height: fullH - 160,
  })
  .resize(Math.ceil(W / 2), H, { fit: "cover", position: "right" })
  .blur(18)
  .toBuffer();

const rightBand = await sharp(src)
  .extract({
    left: Math.min(R + 20, fullW - 120),
    top: 80,
    width: 110,
    height: fullH - 160,
  })
  .resize(Math.ceil(W / 2), H, { fit: "cover", position: "left" })
  .blur(18)
  .toBuffer();

const solidFill = await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: { r: 18, g: 28, b: 16 },
  },
})
  .composite([
    { input: leftBand, left: 0, top: 0 },
    { input: rightBand, left: Math.floor(W / 2), top: 0 },
  ])
  .blur(14)
  .modulate({ brightness: 0.72, saturation: 0.85 })
  .jpeg()
  .toBuffer();

// Soft edge only — center is fully opaque so no ghost form remains
const feather = 28;
const softMask = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="f"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="black"/>
  <rect x="${feather}" y="${feather}" width="${W - feather * 2}" height="${H - feather * 2}" rx="36" ry="36" fill="white" filter="url(#f)"/>
</svg>`);

const patchMasked = await sharp(solidFill)
  .ensureAlpha()
  .composite([
    {
      input: await sharp(softMask).resize(W, H).png().toBuffer(),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

await sharp(src)
  .composite([{ input: patchMasked, left: L, top: T }])
  .jpeg({ quality: 90 })
  .toFile(out);

console.log("Wrote cleaned background (no login box):", out);
