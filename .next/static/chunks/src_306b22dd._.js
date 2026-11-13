(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/api/activityApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityApi",
    ()=>activityApi,
    "useGetAdminActivityQuery",
    ()=>useGetAdminActivityQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/baseApi.ts [app-client] (ecmascript)");
;
const activityApi = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseApi"].injectEndpoints({
    endpoints: (build)=>({
            getAdminActivity: build.query({
                query: (params)=>{
                    var _params_page, _params_limit;
                    return {
                        url: "/admin/transactions",
                        params: {
                            page: (_params_page = params === null || params === void 0 ? void 0 : params.page) !== null && _params_page !== void 0 ? _params_page : 1,
                            limit: (_params_limit = params === null || params === void 0 ? void 0 : params.limit) !== null && _params_limit !== void 0 ? _params_limit : 20,
                            ...(params === null || params === void 0 ? void 0 : params.direction) ? {
                                direction: params.direction
                            } : {}
                        }
                    };
                },
                providesTags: [
                    "Activity"
                ]
            })
        })
});
const { useGetAdminActivityQuery } = activityApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$activityApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/api/activityApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PAGE_SIZE = 20;
const STATUS_CLASS = {
    Settled: "bg-[rgba(22,90,50,0.55)] text-[#7dffa3] border-[#2ecc71]/35",
    Win: "bg-[rgba(22,90,50,0.35)] text-[#7dffa3] border-[#2ecc71]/50",
    "Rolled back": "bg-[rgba(90,40,40,0.45)] text-[#ffb4b4] border-[#e74c3c]/40"
};
function formatTime(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
}
function formatUsd(value) {
    const n = Number(value);
    if (Number.isNaN(n)) return value;
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function formatMmk(value) {
    const n = Number(value);
    if (Number.isNaN(n)) return value;
    return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function RecentActivity() {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const { data, isLoading, isError, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$activityApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAdminActivityQuery"])({
        page,
        limit: PAGE_SIZE
    });
    var _data_items;
    const rows = (_data_items = data === null || data === void 0 ? void 0 : data.items) !== null && _data_items !== void 0 ? _data_items : [];
    var _data_total;
    const total = (_data_total = data === null || data === void 0 ? void 0 : data.total) !== null && _data_total !== void 0 ? _data_total : 0;
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "sd-dash-card flex min-h-[70vh] w-full flex-col rounded-xl border border-[#2f291c] bg-[#101010]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 border-b border-[#2a2418] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[0.72rem] font-bold tracking-[0.18em] text-[#e8c547]",
                        children: "RECENT ACTIVITY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>refetch(),
                        className: "inline-flex items-center gap-1.5 rounded-md border border-[#3a3220] bg-[#161616] px-2.5 py-1 text-[0.65rem] text-[#c5bba3] hover:border-[#d4af37]/50",
                        children: isFetching ? "Refreshing…" : "Refresh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[720px] border-collapse text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 bg-[#101010]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-[0.58rem] tracking-[0.14em] text-[#8a8070]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2.5 font-semibold",
                                        children: "TIME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold",
                                        children: "PLAYER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold",
                                        children: "ACTIVITY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold",
                                        children: "GAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold",
                                        children: "AMOUNT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2.5 font-semibold",
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-4 py-10 text-center text-[0.8rem] text-[#8a8070]",
                                        children: "Loading activity…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                !isLoading && isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-4 py-10 text-center text-[0.8rem] text-[#ffb4b4]",
                                        children: "Could not load activity. Check admin login / API."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                !isLoading && !isError && rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-4 py-10 text-center text-[0.8rem] text-[#8a8070]",
                                        children: "No bet / win activity yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                !isLoading && !isError && rows.map((row)=>{
                                    var _STATUS_CLASS_row_statusLabel;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-t border-[#1f1a12] text-[0.78rem] text-[#e8e0d0]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-4 py-2.5 tabular-nums text-[#a89a78]",
                                                children: formatTime(row.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex size-6 items-center justify-center rounded-full bg-[#1a160c] text-[0.55rem] font-bold text-[#d4af37]",
                                                            children: row.username.slice(-2).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this),
                                                        row.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5 text-[#d4af37]",
                                                children: row.activity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5 text-[#c5bba3]",
                                                children: row.gameId != null ? String(row.gameId) : "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-3 py-2.5 font-semibold tabular-nums",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "$",
                                                            formatUsd(row.amountUsd)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1.5 text-[0.68rem] font-normal text-[#8a8070]",
                                                        children: [
                                                            "(",
                                                            formatMmk(row.amountMmk),
                                                            " MMK)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex rounded-md border px-2 py-0.5 text-[0.62rem] font-semibold tracking-wide ".concat((_STATUS_CLASS_row_statusLabel = STATUS_CLASS[row.statusLabel]) !== null && _STATUS_CLASS_row_statusLabel !== void 0 ? _STATUS_CLASS_row_statusLabel : "bg-[#1a160c] text-[#c5bba3] border-[#3a3220]"),
                                                    children: row.statusLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 border-t border-[#2a2418] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.65rem] text-[#8a8070]",
                        children: [
                            "Page ",
                            page,
                            " of ",
                            totalPages,
                            " · ",
                            total,
                            " total",
                            isFetching ? " · updating…" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: page <= 1 || isFetching,
                                onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                className: "rounded-md border border-[#3a3220] bg-[#161616] px-3 py-1.5 text-[0.7rem] text-[#c5bba3] disabled:opacity-40",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: page >= totalPages || isFetching,
                                onClick: ()=>setPage((p)=>p + 1),
                                className: "rounded-md border border-[#3a3220] bg-[#161616] px-3 py-1.5 text-[0.7rem] text-[#c5bba3] disabled:opacity-40",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/RecentActivity.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(RecentActivity, "0QFimZrm6YWqtcD9TVxNiL2pPOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$api$2f$activityApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetAdminActivityQuery"]
    ];
});
_c = RecentActivity;
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_306b22dd._.js.map