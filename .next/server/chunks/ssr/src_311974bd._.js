module.exports = [
"[project]/src/components/players/PlayersToolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayersToolbar",
    ()=>PlayersToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function PlayersToolbar({ query, onQueryChange, statusFilter, onStatusFilterChange, onCreate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: query,
                        onChange: (e)=>onQueryChange(e.target.value),
                        placeholder: "Search users, nick or ID...",
                        className: "sd-input w-full rounded-lg border border-[#3a3220] bg-[#101010] py-2.5 pl-11 pr-3 text-sm text-[#f5efe0] placeholder:text-[#8a8070]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                        active: statusFilter === "Active",
                        onClick: ()=>onStatusFilterChange(statusFilter === "Active" ? "all" : "Active"),
                        tone: "green",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 rounded-full bg-[#2ecc71]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            "ACTIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterChip, {
                        active: statusFilter === "Blocked",
                        onClick: ()=>onStatusFilterChange(statusFilter === "Blocked" ? "all" : "Blocked"),
                        tone: "red",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 rounded-full bg-[#e74c3c]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            "BLOCKED"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCreate,
                        className: "inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/45 bg-[#121212] px-3 py-2 text-[0.72rem] font-semibold tracking-[0.12em] text-[#e8c547] transition hover:border-[#d4af37]/75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            "CREATE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function FilterChip({ children, active, onClick, tone }) {
    const activeClass = tone === "green" ? "border-[#2ecc71]/55 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]" : "border-[#e74c3c]/55 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[0.68rem] font-semibold tracking-[0.12em] transition ${active ? activeClass : "border-[#3a3220] bg-[#121212] text-[#c5bba3] hover:border-[#d4af37]/40"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "6.5"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m16.5 16.5 4 4"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersToolbar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function PlusIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersToolbar.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersToolbar.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/players/PlayersTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayersTable",
    ()=>PlayersTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const STATUS_CLASS = {
    Active: "border-[#2ecc71]/40 bg-[rgba(22,90,50,0.4)] text-[#7dffa3]",
    Blocked: "border-[#e74c3c]/45 bg-[rgba(120,30,30,0.4)] text-[#ff8f8f]"
};
function formatUsd(n) {
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function PlayersTable({ players, loading, actionBusy, onToggleBlock, onAdjust, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[760px] border-collapse text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "USER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "NICK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "BALANCE USD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "STATUS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-center text-[0.68rem] font-extrabold tracking-[0.16em]",
                                    children: "ACTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 5,
                                className: "px-4 py-10 text-center text-sm text-[#8a8070]",
                                children: "Loading players…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this) : players.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 5,
                                className: "px-4 py-10 text-center text-sm text-[#8a8070]",
                                children: "No players match your filters."
                            }, void 0, false, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this) : players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-t border-[#2a2418] transition hover:bg-white/[0.02]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#1a160c] text-[0.7rem] font-bold text-[#e8c547]",
                                                    children: p.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-sm font-semibold text-[#f5efe0]",
                                                            children: p.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-[0.68rem] text-[#8a8070]",
                                                            children: [
                                                                "ID ",
                                                                p.id,
                                                                " · Registered: ",
                                                                p.registered
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5 text-sm text-[#e8e0d0]",
                                        children: p.nick
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold tabular-nums text-[#f5efe0]",
                                                    children: formatUsd(p.balanceUsd)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.3)] px-1.5 py-0.5 text-[0.58rem] font-bold tracking-wide text-[#7dffa3]",
                                                    children: "USD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ${STATUS_CLASS[p.status]}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `size-1.5 rounded-full ${p.status === "Active" ? "bg-[#2ecc71]" : "bg-[#e74c3c]"}`,
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this),
                                                p.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                                    label: "Edit player",
                                                    disabled: actionBusy,
                                                    onClick: ()=>onEdit?.(p),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                                    label: "Adjust balance",
                                                    disabled: actionBusy,
                                                    onClick: ()=>onAdjust?.(p),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdjustIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                                    label: p.isBlocked ? "Unblock player" : "Block player",
                                                    danger: !p.isBlocked,
                                                    disabled: actionBusy,
                                                    onClick: ()=>onToggleBlock?.(p.id, p.isBlocked),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                                                    label: "Delete player",
                                                    danger: true,
                                                    disabled: actionBusy,
                                                    onClick: ()=>onDelete?.(p),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/players/PlayersTable.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/players/PlayersTable.tsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/players/PlayersTable.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/players/PlayersTable.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersTable.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function ActionBtn({ children, label, danger = false, disabled, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        title: label,
        disabled: disabled,
        onClick: onClick,
        className: `inline-flex size-8 items-center justify-center rounded-md border transition disabled:cursor-not-allowed disabled:opacity-50 ${danger ? "border-[#e74c3c]/35 text-[#ff8f8f] hover:border-[#e74c3c]/7 hover:bg-[rgba(120,30,30,0.25)]" : "border-[#d4af37]/35 text-[#e8c547] hover:border-[#d4af37]/7 hover:bg-[rgba(120,90,20,0.25)]"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function AdjustIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/components/players/PlayersTable.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
function EditIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 20h9"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DeleteIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6h18"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 6V4h8v2"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6l-1 14H6L5 6"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 11v6M14 11v6"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
function BlockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "8",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 19c1.1-3.2 3.2-4.8 6.5-4.8 1.2 0 2.3.2 3.2.7"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "16.5",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.2 16.5h3.6"
            }, void 0, false, {
                fileName: "[project]/src/components/players/PlayersTable.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/players/PlayersTable.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/players/AdjustBalanceModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdjustBalanceModal",
    ()=>AdjustBalanceModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AdjustBalanceModal({ player, busy, onClose, onSubmit }) {
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("credit");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("10");
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        if (!/^\d+(\.\d{1,4})?$/.test(amount) || Number(amount) <= 0) {
            setError("Enter a valid USD amount (max 4 decimals).");
            return;
        }
        try {
            await onSubmit({
                direction,
                amount,
                note: note.trim() || undefined
            });
            onClose();
        } catch (err) {
            setError(extractError(err));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "adjust-balance-title",
            className: "w-full max-w-md rounded-xl border border-[#d4af37]/45 bg-[#0c0c0c] p-5 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "adjust-balance-title",
                                    className: "font-[family-name:var(--font-cinzel)] text-lg tracking-[0.12em] text-[#e8c547]",
                                    children: "ADJUST BALANCE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-[#9a9280]",
                                    children: [
                                        player.username,
                                        " · wallet $",
                                        player.balanceUsd.toFixed(2),
                                        " USD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "text-[#9a9280] hover:text-[#e8c547]",
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "mt-4 space-y-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                "credit",
                                "debit"
                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDirection(d),
                                    className: `flex-1 rounded-md border px-3 py-2 text-sm font-semibold capitalize ${direction === d ? d === "credit" ? "border-[#2ecc71]/55 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]" : "border-[#e74c3c]/55 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]" : "border-[#3a3220] text-[#c5bba3]"}`,
                                    children: d
                                }, d, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]",
                                    children: "AMOUNT (USD)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: amount,
                                    onChange: (e)=>setAmount(e.target.value.replace(/[^\d.]/g, "")),
                                    inputMode: "decimal",
                                    className: "w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0]",
                                    disabled: busy
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mb-1 block text-[0.7rem] font-semibold tracking-[0.12em] text-[#d4af37]",
                                    children: "NOTE (OPTIONAL)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: note,
                                    onChange: (e)=>setNote(e.target.value),
                                    placeholder: "Reason for adjustment",
                                    className: "w-full rounded-md border border-[#3a3220] bg-[#101010] px-3 py-2.5 text-sm text-[#f5efe0] placeholder:text-[#6b6560]",
                                    disabled: busy
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-md border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 rounded-md border border-[#3a3220] px-3 py-2.5 text-sm text-[#c5bba3]",
                                    disabled: busy,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: busy,
                                    className: "flex-1 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-3 py-2.5 text-sm font-extrabold tracking-[0.1em] text-[#1a1205] disabled:opacity-60",
                                    children: busy ? "SAVING…" : "CONFIRM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/players/AdjustBalanceModal.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function extractError(err) {
    if (err && typeof err === "object" && "data" in err) {
        const data = err.data;
        const message = data?.message;
        if (Array.isArray(message)) return message.join(", ");
        if (typeof message === "string" && message.trim()) return message;
    }
    return "Could not adjust balance.";
}
}),
"[project]/src/components/players/players-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapAdminPlayerToRow",
    ()=>mapAdminPlayerToRow
]);
function mapAdminPlayerToRow(p) {
    const balanceUsd = Number(p.wallet?.realBalance ?? 0);
    const initials = (p.username || p.nickname || "?").replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
    return {
        id: p.id,
        username: p.username,
        nick: p.nickname,
        country: p.country,
        registered: formatRegistered(p.createdAt),
        balanceUsd: Number.isFinite(balanceUsd) ? balanceUsd : 0,
        status: p.isBlocked ? "Blocked" : "Active",
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
}),
"[project]/src/store/api/playersApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playersApi",
    ()=>playersApi,
    "useAdjustPlayerBalanceMutation",
    ()=>useAdjustPlayerBalanceMutation,
    "useBlockPlayerMutation",
    ()=>useBlockPlayerMutation,
    "useCreatePlayerMutation",
    ()=>useCreatePlayerMutation,
    "useDeletePlayerMutation",
    ()=>useDeletePlayerMutation,
    "useGetAdminPlayersQuery",
    ()=>useGetAdminPlayersQuery,
    "useUnblockPlayerMutation",
    ()=>useUnblockPlayerMutation,
    "useUpdatePlayerMutation",
    ()=>useUpdatePlayerMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-ssr] (ecmascript)");
;
const playersApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getAdminPlayers: build.query({
                query: (params)=>({
                        url: "/admin/players",
                        params: {
                            search: params?.search || undefined,
                            blocked: params?.blocked,
                            page: params?.page ?? 1,
                            limit: params?.limit ?? 50
                        }
                    }),
                providesTags: [
                    "Players"
                ]
            }),
            createPlayer: build.mutation({
                query: (body)=>({
                        url: "/admin/players",
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Players"
                ]
            }),
            updatePlayer: build.mutation({
                query: ({ id, body })=>({
                        url: `/admin/players/${id}`,
                        method: "PATCH",
                        body
                    }),
                invalidatesTags: [
                    "Players"
                ]
            }),
            deletePlayer: build.mutation({
                query: ({ id })=>({
                        url: `/admin/players/${id}`,
                        method: "DELETE"
                    }),
                invalidatesTags: [
                    "Players"
                ]
            }),
            blockPlayer: build.mutation({
                query: ({ id })=>({
                        url: `/admin/players/${id}/block`,
                        method: "PATCH"
                    }),
                invalidatesTags: [
                    "Players"
                ]
            }),
            unblockPlayer: build.mutation({
                query: ({ id })=>({
                        url: `/admin/players/${id}/unblock`,
                        method: "PATCH"
                    }),
                invalidatesTags: [
                    "Players"
                ]
            }),
            adjustPlayerBalance: build.mutation({
                query: ({ id, ...body })=>({
                        url: `/admin/players/${id}/adjust-balance`,
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Players"
                ]
            })
        })
});
const { useGetAdminPlayersQuery, useCreatePlayerMutation, useUpdatePlayerMutation, useDeletePlayerMutation, useBlockPlayerMutation, useUnblockPlayerMutation, useAdjustPlayerBalanceMutation } = playersApi;
}),
"[project]/src/app/(ops)/players/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/PlayersToolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/PlayersTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$AdjustBalanceModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/AdjustBalanceModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/players/players-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/playersApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function PlayersPage() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [adjustTarget, setAdjustTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const blockedParam = statusFilter === "Blocked" ? "true" : statusFilter === "Active" ? "false" : undefined;
    const { data, isFetching, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetAdminPlayersQuery"])({
        search: query.trim() || undefined,
        blocked: blockedParam,
        page: 1,
        limit: 100
    });
    const [blockPlayer, { isLoading: blocking }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlockPlayerMutation"])();
    const [unblockPlayer, { isLoading: unblocking }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnblockPlayerMutation"])();
    const [adjustBalance, { isLoading: adjusting }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$playersApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdjustPlayerBalanceMutation"])();
    const [actionError, setActionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rows = (data?.items ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapAdminPlayerToRow"]);
        if (statusFilter === "VIP") {
            return rows.filter((p)=>!p.isBlocked && p.balanceUsd >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$players$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIP_BALANCE_USD"]);
        }
        return rows;
    }, [
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
    async function onAdjustSubmit(input) {
        if (!adjustTarget) return;
        setActionError(null);
        await adjustBalance({
            id: adjustTarget.id,
            direction: input.direction,
            amount: input.amount,
            note: input.note
        }).unwrap();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.14em] text-[#e8c547]",
                        children: "PLAYERS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-px max-w-[140px] bg-gradient-to-r from-[#d4af37] via-[#d4af37]/70 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-[#9a9280]",
                        children: [
                            "Live list from API",
                            typeof data?.total === "number" ? ` · ${data.total} total` : "",
                            isFetching ? " · refreshing…" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayersToolbar"], {
                query: query,
                onQueryChange: setQuery,
                statusFilter: statusFilter,
                onStatusFilterChange: setStatusFilter
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            actionError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-sm text-[#ff8f8f]",
                children: actionError
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this) : null,
            isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.2)] px-4 py-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#ff8f8f]",
                        children: extractError(error)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>refetch(),
                        className: "mt-3 rounded-md border border-[#d4af37]/50 px-3 py-1.5 text-xs font-semibold text-[#e8c547]",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(ops)/players/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$PlayersTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayersTable"], {
                players: players,
                loading: isFetching && !data,
                actionBusy: blocking || unblocking || adjusting,
                onToggleBlock: onToggleBlock,
                onAdjust: setAdjustTarget
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            adjustTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$players$2f$AdjustBalanceModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdjustBalanceModal"], {
                player: adjustTarget,
                busy: adjusting,
                onClose: ()=>setAdjustTarget(null),
                onSubmit: onAdjustSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/(ops)/players/page.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(ops)/players/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function extractError(err) {
    if (err && typeof err === "object" && "data" in err) {
        const data = err.data;
        const message = data?.message;
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
}),
];

//# sourceMappingURL=src_311974bd._.js.map