import Image from "next/image";

type SdLogoProps = {
  size?: number;
  className?: string;
};

export function SdLogo({ size = 96, className = "" }: SdLogoProps) {
  return (
    <Image
      src="/brand/sd-badge.jpg"
      alt="Shwe Dunn"
      width={size}
      height={size}
      className={`rounded-full object-cover shadow-[0_0_28px_rgba(212,175,55,0.45)] ${className}`}
      priority
    />
  );
}
