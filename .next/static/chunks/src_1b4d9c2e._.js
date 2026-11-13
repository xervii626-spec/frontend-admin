(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/players/PlayersToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayersToolbar",
    ()=>PlayersToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PlayersToolbar(param) {
    let { query, onQueryChange, statusFilter, onStatusFilterChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: query,
                        onChange: (e)=>onQueryChange(e.target.value),
                        placeholder: "Search users, nick or ID...",
                        className: "sd-input w-full rounded-lg border border-[#3a3220] bg-[#101010] py-2.5 pl-11 pr-3 text-sm text-[#f5efe0] placeholder:text-[#8a8070]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                        active: statusFilter === "VIP",
                        onClick: ()=>onStatusFilterChange(statusFilter === "VIP" ? "all" : "VIP"),
                        tone: "gold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrownIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            "VIP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                        active: statusFilter === "Active",
                        onClick: ()=>onStatusFilterChange(statusFilter === "Active" ? "all" : "Active"),
                        tone: "green",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 rounded-full bg-[#2ecc71]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            "ACTIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                        active: statusFilter === "Blocked",
                        onClick: ()=>onStatusFilterChange(statusFilter === "Blocked" ? "all" : "Blocked"),
                        tone: "red",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 rounded-full bg-[#e74c3c]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            "BLOCKED"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/45 bg-[#121212] px-3 py-2 text-[0.72rem] font-semibold tracking-[0.12em] text-[#e8c547] transition hover:border-[#d4af37]/75",
                        children: [
                            "Filters",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PlayersToolbar;
function FilterChip(param) {
    let { children, active, onClick, tone } = param;
    const activeClass = tone === "gold" ? "border-[#d4af37] bg-[rgba(120,90,20,0.35)] text-[#e8c547]" : tone === "green" ? "border-[#2ecc71]/55 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]" : "border-[#e74c3c]/55 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[0.68rem] font-semibold tracking-[0.12em] transition ".concat(active ? activeClass : "border-[#3a3220] bg-[#121212] text-[#c5bba3] hover:border-[#d4af37]/40"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c1 = FilterChip;
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "6.5"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m16.5 16.5 4 4"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c2 = SearchIcon;
function CrownIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z"
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersToolbar.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c3 = CrownIcon;
function ChevronIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersToolbar.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_c4 = ChevronIcon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PlayersToolbar");
__turbopack_context__.k.register(_c1, "FilterChip");
__turbopack_context__.k.register(_c2, "SearchIcon");
__turbopack_context__.k.register(_c3, "CrownIcon");
__turbopack_context__.k.register(_c4, "ChevronIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/players/PlayersTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayersTable",
    ()=>PlayersTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const STATUS_CLASS = {
    Active: "border-[#2ecc71]/40 bg-[rgba(22,90,50,0.4)] text-[#7dffa3]",
    VIP: "border-[#d4af37]/55 bg-[rgba(120,90,20,0.35)] text-[#e8c547]",
    Blocked: "border-[#e74c3c]/45 bg-[rgba(120,30,30,0.4)] text-[#ff8f8f]"
};
function formatUsd(n) {
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function PlayersTable(param) {
    let { players, loading, actionBusy, onToggleBlock } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[760px] border-collapse text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "USER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "NICK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "BALANCE USD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "STATUS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-center text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "ACTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 5,
                                className: "px-4 py-10 text-center text-sm text-[#8a8070]",
                                children: "Loading players…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this) : players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 5,
                                className: "px-4 py-10 text-center text-sm text-[#8a8070]",
                                children: "No players match your filters."
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this) : players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-t border-[#2a2418] transition hover:bg-white/[0.02]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#1a160c] text-[0.7rem] font-bold text-[#e8c547]",
                                                    children: p.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-sm font-semibold text-[#f5efe0]",
                                                            children: p.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-[0.68rem] text-[#8a8070]",
                                                            children: [
                                                                "ID ",
                                                                p.id,
                                                                " · Registered: ",
                                                                p.registered
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 text-sm text-[#e8e0d0]",
                                        children: p.nick
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold tabular-nums text-[#f5efe0]",
                                                    children: formatUsd(p.balanceUsd)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.3)] px-1.5 py-0.5 text-[0.58rem] font-bold tracking-wide text-[#7dffa3]",
                                                    children: "USD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ".concat(STATUS_CLASS[p.status]),
                                            children: [
                                                p.status === "VIP" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrownIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-1.5 rounded-full ".concat(p.status === "Active" ? "bg-[#2ecc71]" : "bg-[#e74c3c]"),
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 25
                                                }, this),
                                                p.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                                label: p.isBlocked ? "Unblock player" : "Block player",
                                                danger: !p.isBlocked,
                                                disabled: actionBusy,
                                                onClick: ()=>onToggleBlock === null || onToggleBlock === void 0 ? void 0 : onToggleBlock(p.id, p.isBlocked),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                lineNumber: 126,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersTable.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = PlayersTable;
function ActionBtn(param) {
    let { children, label, danger = false, disabled, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        title: label,
        disabled: disabled,
        onClick: onClick,
        className: "inline-flex size-8 items-center justify-center rounded-md border transition disabled:cursor-not-allowed disabled:opacity-50 ".concat(danger ? "border-[#e74c3c]/35 text-[#ff8f8f] hover:border-[#e74c3c]/7 hover:bg-[rgba(120,30,30,0.25)]" : "border-[#2ecc71]/35 text-[#7dffa3] hover:border-[#2ecc71]/7 hover:bg-[rgba(22,90,50,0.25)]"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c1 = ActionBtn;
function CrownIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z"
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersTable.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c2 = CrownIcon;
function BlockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "8",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 19c1.1-3.2 3.2-4.8 6.5-4.8 1.2 0 2.3.2 3.2.7"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "16.5",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.2 16.5h3.6"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_c3 = BlockIcon;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PlayersTable");
__turbopack_context__.k.register(_c1, "ActionBtn");
__turbopack_context__.k.register(_c2, "CrownIcon");
__turbopack_context__.k.register(_c3, "BlockIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/players/players-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VIP_BALANCE_USD",
    ()=>VIP_BALANCE_USD,
    "mapAdminPlayerToRow",
    ()=>mapAdminPlayerToRow
]);
const VIP_BALANCE_USD = 10_000;
function mapAdminPlayerToRow(p) {
    var _p_wallet;
    var _p_wallet_realBalance;
    const balanceUsd = Number((_p_wallet_realBalance = (_p_wallet = p.wallet) === null || _p_wallet === void 0 ? void 0 : _p_wallet.realBalance) !== null && _p_wallet_realBalance !== void 0 ? _p_wallet_realBalance : 0);
    const initials = (p.username || p.nickname || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
    let status = "Active";
    if (p.isBlocked) status = "Blocked";
    else if (balanceUsd >= VIP_BALANCE_USD) status = "VIP";
    return {
        id: p.id,
        username: p.username,
        nick: p.nickname,
        registered: formatRegistered(p.createdAt),
        balanceUsd: Number.isFinite(balanceUsd) ? balanceUsd : 0,
        status,
        initials,
        isBlocked: p.isBlocked
    };
}
function formatRegistered(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/api/playersApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playersApi",
    ()=>playersApi,
    "useBlockPlayerMutation",
    ()=>useBlockPlayerMutation,
    "useGetAdminPlayersQuery",
    ()=>useGetAdminPlayersQuery,
    "useUnblockPlayerMutation",
    ()=>useUnblockPlayerMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const playersApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getAdminPlayers: build.query({
                query: (params)=>{
                    var _params_page, _params_limit;
                    return {
                        url: "/admin/players",
                        params: {
                            search: (params === null || params === void 0 ? void 0 : params.search) || undefined,
                            blocked: params === null || params === void 0 ? void 0 : params.blocked,
                            page: (_params_page = params === null || params === void 0 ? void 0 : params.page) !== null && _params_page !== void 0 ? _params_page : 1,
                            limit: (_params_limit = params === null || params === void 0 ? void 0 : params.limit) !== null && _params_limit !== void 0 ? _params_limit : 50
                        }
                    };
                },
                providesTags: [
                    "Players"
                ]
            }),
            blockPlayer: build.mutation({
                query: (param)=>{
                    let { id } = param;
                    return {
                        url: "/admin/players/".concat(id, "/block"),
                        method: "PATCH"
                    };
                },
                invalidatesTags: [
                    "Players"
                ]
            }),
            unblockPlayer: build.mutation({
                query: (param)=>{
                    let { id } = param;
                    return {
                        url: "/admin/players/".concat(id, "/unblock"),
                        method: "PATCH"
                    };
                },
                invalidatesTags: [
                    "Players"
                ]
            })
        })
});
const { useGetAdminPlayersQuery, useBlockPlayerMutation, useUnblockPlayerMutation } = playersApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(ops)/players/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/PlayersToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/PlayersTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/players-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/playersApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PlayersPage() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const blockedParam = statusFilter === "Blocked" ? "true" : statusFilter === "Active" ? "false" : undefined;
    const { data, isFetching, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAdminPlayersQuery"])({
        search: query.trim() || undefined,
        blocked: blockedParam,
        page: 1,
        limit: 100
    });
    const [blockPlayer, { isLoading: blocking }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockPlayerMutation"])();
    const [unblockPlayer, { isLoading: unblocking }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnblockPlayerMutation"])();
    const [actionError, setActionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayersPage.useMemo[players]": ()=>{
            var _data_items;
            const rows = ((_data_items = data === null || data === void 0 ? void 0 : data.items) !== null && _data_items !== void 0 ? _data_items : []).map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAdminPlayerToRow"]);
            if (statusFilter === "VIP") {
                return rows.filter({
                    "PlayersPage.useMemo[players]": (p)=>!p.isBlocked && p.balanceUsd >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIP_BALANCE_USD"]
                }["PlayersPage.useMemo[players]"]);
            }
            return rows;
        }
    }["PlayersPage.useMemo[players]"], [
        data,
        statusFilter
    ]);
    async function onToggleBlock(id, currentlyBlocked) {
        setActionError(null);
        try {
            if (currentlyBlocked) {
                await unblockPlayer({
                    id
                }).unwrap();
            } else {
                await blockPlayer({
                    id
                }).unwrap();
            }
        } catch (err) {
            setActionError(extractError(err));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.14em] text-[#e8c547]",
                        children: "PLAYERS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-px max-w-[140px] bg-gradient-to-r from-[#d4af37] via-[#d4af37]/70 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-[#9a9280]",
                        children: [
                            "Live list from API",
                            typeof (data === null || data === void 0 ? void 0 : data.total) === "number" ? " · ".concat(data.total, " total") : "",
                            isFetching ? " · refreshing…" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayersToolbar"], {
                query: query,
                onQueryChange: setQuery,
                statusFilter: statusFilter,
                onStatusFilterChange: setStatusFilter
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            actionError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]",
                children: actionError
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null,
            isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.2)] px-4 py-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#ff8f8f]",
                        children: extractError(error)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>refetch(),
                        className: "mt-3 rounded-md border border-[#d4af37]/50 px-3 py-1.5 text-xs font-semibold text-[#e8c547]",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayersTable"], {
                players: players,
                loading: isFetching && !data,
                actionBusy: blocking || unblocking,
                onToggleBlock: onToggleBlock
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(ops)/players/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(PlayersPage, "4fhigNblvUfEG7nDT43of4wDvHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAdminPlayersQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockPlayerMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnblockPlayerMutation"]
    ];
});
_c = PlayersPage;
function extractError(err) {
    if (err && typeof err === "object" && "data" in err) {
        const data = err.data;
        const message = data === null || data === void 0 ? void 0 : data.message;
        if (Array.isArray(message)) return message.join(", ");
        if (typeof message === "string" && message.trim()) return message;
    }
    if (err && typeof err === "object" && "status" in err) {
        const status = err.status;
        if (status === 401) return "Admin session expired. Please log in again.";
        if (status === "FETCH_ERROR") {
            return "Cannot reach API. Is the backend running?";
        }
    }
    return "Could not load players.";
}
var _c;
__turbopack_context__.k.register(_c, "PlayersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1b4d9c2e._.js.map