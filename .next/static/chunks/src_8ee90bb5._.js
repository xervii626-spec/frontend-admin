(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/payments/PaymentsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentsTable",
    ()=>PaymentsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function formatMmk(n) {
    return n.toLocaleString("en-US");
}
function formatUsd(n) {
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function PaymentsTable(param) {
    let { payments, onRefresh } = param;
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const allIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PaymentsTable.useMemo[allIds]": ()=>payments.map({
                "PaymentsTable.useMemo[allIds]": (p)=>p.id
            }["PaymentsTable.useMemo[allIds]"])
    }["PaymentsTable.useMemo[allIds]"], [
        payments
    ]);
    const allSelected = payments.length > 0 && selected.length === payments.length;
    function toggleAll() {
        setSelected(allSelected ? [] : allIds);
    }
    function toggleOne(id) {
        setSelected((prev)=>prev.includes(id) ? prev.filter((x)=>x !== id) : [
                ...prev,
                id
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#0c0c0c]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[1080px] border-collapse text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1204]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "w-12 px-3 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allSelected,
                                            onChange: toggleAll,
                                            "aria-label": "Select all payments",
                                            className: "size-3.5 accent-[#1a1204]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "PLAYER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "TYPE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "AMOUNT MMK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "AMOUNT USD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "METHOD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "REFERENCE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "REQUESTED AT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-3 text-center text-[0.65rem] font-extrabold tracking-[0.14em]",
                                        children: "ACTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: payments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 9,
                                    className: "px-4 py-10 text-center text-sm text-[#8a8070]",
                                    children: "No pending payment requests."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this) : payments.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-t border-[#2a2418] transition hover:bg-white/[0.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selected.includes(p.id),
                                                onChange: ()=>toggleOne(p.id),
                                                "aria-label": "Select ".concat(p.player),
                                                className: "size-3.5 accent-[#d4af37]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-[#f5efe0]",
                                                    children: p.player
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.58rem] font-semibold ".concat(p.tier === "VIP" ? "border-[#d4af37]/50 bg-[rgba(120,90,20,0.35)] text-[#e8c547]" : "border-[#2ecc71]/30 bg-[rgba(22,90,50,0.25)] text-[#9ad9b0]"),
                                                    children: [
                                                        p.tier === "VIP" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrownIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 43
                                                        }, this) : null,
                                                        p.tier
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 text-[0.78rem] font-bold tracking-wide ".concat(p.type === "DEPOSIT" ? "text-[#7dffa3]" : "text-[#ff8f8f]"),
                                                children: [
                                                    p.type === "DEPOSIT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UpIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 47
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 60
                                                    }, this),
                                                    p.type
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold tabular-nums text-[#f5efe0]",
                                                    children: formatMmk(p.amountMmk)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[0.62rem] text-[#8a8070]",
                                                    children: "MMK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold tabular-nums text-[#f5efe0]",
                                                    children: formatUsd(p.amountUsd)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[0.62rem] text-[#8a8070]",
                                                    children: "USD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodBadge, {
                                                        method: p.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-[#e8e0d0]",
                                                        children: p.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5 font-mono text-[0.78rem] text-[#c5bba3]",
                                            children: p.reference
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "whitespace-nowrap px-3 py-3.5 text-[0.78rem] text-[#a89a78]",
                                            children: p.requestedAt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "sd-gold-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[0.65rem] font-extrabold tracking-[0.12em] text-[#1a1204]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 25
                                                            }, this),
                                                            "APPROVE"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "inline-flex items-center gap-1.5 rounded-md border border-[#e74c3c]/45 bg-[rgba(90,20,20,0.55)] px-3 py-1.5 text-[0.65rem] font-extrabold tracking-[0.12em] text-[#ffb0b0] transition hover:border-[#e74c3c]/80 hover:bg-[rgba(120,30,30,0.65)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 25
                                                            }, this),
                                                            "REJECT"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 border-t border-[#2a2418] px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-start gap-2 text-[0.72rem] leading-relaxed text-[#8a8070]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            "Review each request carefully. Approvals are final and processed immediately."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.72rem] font-semibold tracking-[0.1em] text-[#e8c547]",
                                children: [
                                    payments.length,
                                    " PENDING REQUESTS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onRefresh,
                                className: "inline-flex items-center gap-1.5 rounded-md border border-[#d4af37]/45 bg-[#121212] px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.12em] text-[#e8c547] transition hover:border-[#d4af37]/75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    "REFRESH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(PaymentsTable, "U3l87256QGjyRjeS6BUkEBebV+s=");
_c = PaymentsTable;
function MethodBadge(param) {
    let { method } = param;
    if (method === "KBZPay") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00a651] text-[0.5rem] font-black text-white",
            children: "KBZ"
        }, void 0, false, {
            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
            lineNumber: 206,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[0.65rem] font-black text-[#1e88e5]",
        children: "W"
    }, void 0, false, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_c1 = MethodBadge;
function CrownIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "9",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z"
        }, void 0, false, {
            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_c2 = CrownIcon;
function UpIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19V5"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m6 11 6-6 6 6"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c3 = UpIcon;
function DownIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5v14"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m18 13-6 6-6-6"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_c4 = DownIcon;
function CheckIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m5 12 5 5L20 7"
        }, void 0, false, {
            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_c5 = CheckIcon;
function XIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 6l12 12M18 6 6 18"
        }, void 0, false, {
            fileName: "[project]/src/components/payments/PaymentsTable.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_c6 = XIcon;
function RefreshIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 1 1-2.6-6.3"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 4v6h-6"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_c7 = RefreshIcon;
function ChipIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#d4af37",
        strokeWidth: "1.6",
        className: "mt-0.5 shrink-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8.5"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2"
            }, void 0, false, {
                fileName: "[project]/src/components/payments/PaymentsTable.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/payments/PaymentsTable.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c8 = ChipIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "PaymentsTable");
__turbopack_context__.k.register(_c1, "MethodBadge");
__turbopack_context__.k.register(_c2, "CrownIcon");
__turbopack_context__.k.register(_c3, "UpIcon");
__turbopack_context__.k.register(_c4, "DownIcon");
__turbopack_context__.k.register(_c5, "CheckIcon");
__turbopack_context__.k.register(_c6, "XIcon");
__turbopack_context__.k.register(_c7, "RefreshIcon");
__turbopack_context__.k.register(_c8, "ChipIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/payments/payments-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_PAYMENTS",
    ()=>MOCK_PAYMENTS,
    "MOCK_RATE",
    ()=>MOCK_RATE
]);
const MOCK_RATE = 4500;
const MOCK_PAYMENTS = [
    {
        id: 1,
        player: "mgmg_88",
        tier: "VIP",
        type: "DEPOSIT",
        amountMmk: 2_250_000,
        amountUsd: 500,
        method: "KBZPay",
        reference: "KZB12345678901",
        requestedAt: "24 May 2025 · 16:18:02"
    },
    {
        id: 2,
        player: "aung_win",
        tier: "VIP",
        type: "WITHDRAW",
        amountMmk: 900_000,
        amountUsd: 200,
        method: "Wave Money",
        reference: "WAV9988776655",
        requestedAt: "24 May 2025 · 16:12:44"
    },
    {
        id: 3,
        player: "su_su99",
        tier: "REGULAR",
        type: "DEPOSIT",
        amountMmk: 450_000,
        amountUsd: 100,
        method: "KBZPay",
        reference: "KZB55566677788",
        requestedAt: "24 May 2025 · 15:58:11"
    },
    {
        id: 4,
        player: "nandar_m",
        tier: "REGULAR",
        type: "DEPOSIT",
        amountMmk: 1_125_000,
        amountUsd: 250,
        method: "Wave Money",
        reference: "WAV1122334455",
        requestedAt: "24 May 2025 · 15:41:27"
    },
    {
        id: 5,
        player: "zaw_min",
        tier: "VIP",
        type: "WITHDRAW",
        amountMmk: 4_500_000,
        amountUsd: 1_000,
        method: "KBZPay",
        reference: "KZB9090888777",
        requestedAt: "24 May 2025 · 15:22:09"
    },
    {
        id: 6,
        player: "thiri_l",
        tier: "REGULAR",
        type: "DEPOSIT",
        amountMmk: 225_000,
        amountUsd: 50,
        method: "Wave Money",
        reference: "WAV3344556677",
        requestedAt: "24 May 2025 · 14:59:33"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(ops)/payments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$payments$2f$PaymentsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/payments/PaymentsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$payments$2f$payments$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/payments/payments-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaymentsPage() {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PaymentsPage.useState": ()=>new Date()
    }["PaymentsPage.useState"]);
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentsPage.useEffect": ()=>{
            const id = window.setInterval({
                "PaymentsPage.useEffect.id": ()=>setNow(new Date())
            }["PaymentsPage.useEffect.id"], 1000);
            return ({
                "PaymentsPage.useEffect": ()=>window.clearInterval(id)
            })["PaymentsPage.useEffect"];
        }
    }["PaymentsPage.useEffect"], []);
    const dateLabel = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Yangon"
    }).toUpperCase();
    const timeLabel = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Yangon"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-cinzel)] text-[1.75rem] font-semibold tracking-[0.12em] text-[#e8c547]",
                                children: "CASHIER DESK"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 mb-2 flex max-w-[220px] items-center gap-2 text-[#d4af37]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px flex-1 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.45rem]",
                                        children: "◆"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px flex-1 bg-gradient-to-l from-[#d4af37] to-[#d4af37]/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.72rem] font-semibold tracking-[0.2em] text-[#8a8070]",
                                children: "PENDING PAYMENTS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-2 sm:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[0.85rem] font-medium tabular-nums text-[#e8e0d0]",
                                children: [
                                    timeLabel,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8a8070]",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    dateLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center rounded-full border border-[#d4af37]/50 bg-[rgba(120,90,20,0.25)] px-3 py-1.5 text-[0.72rem] font-semibold tracking-wide text-[#e8c547]",
                                children: [
                                    "1 USD = ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$payments$2f$payments$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_RATE"].toLocaleString("en-US"),
                                    " MMK"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(ops)/payments/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$payments$2f$PaymentsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentsTable"], {
                payments: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$payments$2f$payments$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PAYMENTS"],
                onRefresh: ()=>setTick((t)=>t + 1)
            }, tick, false, {
                fileName: "[project]/src/app/(ops)/payments/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(ops)/payments/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(PaymentsPage, "XnL578kpohYfEWaGm8Ni8IQXvfg=");
_c = PaymentsPage;
var _c;
__turbopack_context__.k.register(_c, "PaymentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8ee90bb5._.js.map