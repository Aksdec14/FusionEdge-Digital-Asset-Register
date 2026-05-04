"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const ASSET_STATS = [
    { label: "Assets Tracked", target: 1248 },
    { label: "Sites Covered", target: 18 },
    { label: "Audit Ready", target: 100, suffix: "%" },
];

const WHY_ITEMS = [
    "Avoid fines and compliance gaps.",
    "Reduce emergency repair costs.",
    "Improve team coordination.",
];

const TICKER_ITEMS = [
    "HVAC-07 serviced ✓",
    "Generator-B inspected ✓",
    "Site 14 audit ready ✓",
    "Pump-03 warranty logged ✓",
];

const CAMPAIGNS = [
    { name: "Summer Sale", spend: "$4,000", spendRaw: 4000, imp: "43", roi: "2.3", up: false },
    { name: "Google Ads", spend: "$2,000", spendRaw: 2000, imp: "18", roi: "2.5", up: true },
    { name: "Email Blast", spend: "$800", spendRaw: 800, imp: "1,100", roi: "10.3", up: true },
    { name: "Social Launch", spend: "$600", spendRaw: 600, imp: "12", roi: "8.6", up: true },
];

const BAR_DATA = [
    { month: "Jan", a: 28, b: 18 },
    { month: "Feb", a: 34, b: 22 },
    { month: "Mar", a: 26, b: 30 },
    { month: "Apr", a: 38, b: 24 },
    { month: "May", a: 32, b: 28 },
    { month: "Jun", a: 42, b: 20 },
    { month: "Jul", a: 36, b: 32 },
];

const TABS = ["Dashboard", "Reports", "Campaigns", "Settings"];

const KPI_DATA = [
    { label: "Total Revenue", value: "$48,210", trend: "+12.4%", up: true, spark: [20, 24, 18, 30, 26, 38, 34], detail: "vs $42,890 last period" },
    { label: "Active Users", value: "12,845", trend: "+6.8%", up: true, spark: [10, 14, 12, 16, 14, 18, 16], detail: "1,283 new this week" },
    { label: "Conversions", value: "3,109", trend: "−1.2%", up: false, spark: [18, 16, 20, 14, 18, 12, 16], detail: "Target: 3,500" },
    { label: "Avg. Order", value: "$155.02", trend: "+0.9%", up: true, spark: [14, 16, 14, 18, 16, 18, 17], detail: "Up $1.40 from last mo." },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */
function sparkPoints(data: number[], w: number, h: number) {
    const min = Math.min(...data), max = Math.max(...data), range = max - min || 1;
    return data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(" ");
}

/* ─────────────────────────────────────────────────────────────
   HOOK – animated counter
───────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1400, delay = 600) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => {
            const start = performance.now();
            const tick = (now: number) => {
                const p = Math.min((now - start) / duration, 1);
                setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, delay);
        return () => clearTimeout(t);
    }, [target, duration, delay]);
    return value;
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – animated stat card
───────────────────────────────────────────────────────────── */
function StatCard({ label, target, suffix = "", delay }: {
    label: string; target: number; suffix?: string; delay: number;
}) {
    const count = useCountUp(target, 1400, delay);
    const display = suffix === "%" ? `${count}%` : count >= 1000 ? count.toLocaleString() : String(count);
    return (
        <div className="cursor-default rounded-xl bg-white/85 p-3 shadow-lg shadow-gray-400/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/95 hover:shadow-xl sm:rounded-2xl sm:p-4">
            <p className="text-xl font-bold tabular-nums text-gray-950 sm:text-2xl">{display}</p>
            <p className="mt-0.5 text-[11px] leading-4 text-gray-500 sm:text-xs sm:leading-5">{label}</p>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – live ticker
───────────────────────────────────────────────────────────── */
function LiveTicker() {
    const [idx, setIdx] = useState(0);
    const [fading, setFading] = useState(false);
    useEffect(() => {
        const id = setInterval(() => {
            setFading(true);
            setTimeout(() => { setIdx(i => (i + 1) % TICKER_ITEMS.length); setFading(false); }, 300);
        }, 2800);
        return () => clearInterval(id);
    }, []);
    return (
        <span
            className="whitespace-nowrap text-xs font-semibold text-gray-700 transition-all duration-300"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(-5px)" : "translateY(0)" }}
        >
            {TICKER_ITEMS[idx]}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – Reports tab content
───────────────────────────────────────────────────────────── */
function ReportsView() {
    const points = [22, 31, 27, 40, 35, 50, 44, 58, 52, 65, 60, 72];
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [hovered, setHovered] = useState<number | null>(null);
    const w = 155, h = 52;
    const min = Math.min(...points), max = Math.max(...points), range = max - min;
    const px = (i: number) => (i / (points.length - 1)) * w;
    const py = (v: number) => h - ((v - min) / range) * (h - 6) - 3;
    const polyPoints = points.map((v, i) => `${px(i)},${py(v)}`).join(" ");
    return (
        <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3">
            <p className="shrink-0 font-bold text-gray-800" style={{ fontSize: 10 }}>Annual Revenue Report</p>
            <div className="grid shrink-0 grid-cols-3 gap-1.5">
                {[
                    { label: "YTD Revenue", value: "$312k", trend: "+18%" },
                    { label: "Avg Monthly", value: "$26k", trend: "+5%" },
                    { label: "Peak Month", value: "Dec", trend: "$72k" },
                ].map(k => (
                    <div key={k.label} className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                        <p className="text-gray-400" style={{ fontSize: 8 }}>{k.label}</p>
                        <p className="font-bold text-gray-900 mt-0.5" style={{ fontSize: 11 }}>{k.value}</p>
                        <p className="font-semibold text-[#1DBDA0]" style={{ fontSize: 8 }}>{k.trend}</p>
                    </div>
                ))}
            </div>
            <div className="flex-1 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                <p className="font-semibold text-gray-700 mb-1" style={{ fontSize: 9 }}>Monthly Revenue — 2024</p>
                <div className="relative" style={{ height: 60 }}>
                    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none"
                        onMouseLeave={() => setHovered(null)}>
                        <defs>
                            <linearGradient id="rg1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#5B1A8B" stopOpacity=".25" />
                                <stop offset="100%" stopColor="#5B1A8B" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <polygon points={`0,${h} ${polyPoints} ${w},${h}`} fill="url(#rg1)" />
                        <polyline points={polyPoints} fill="none" stroke="#5B1A8B" strokeWidth="1.3"
                            strokeLinejoin="round" strokeLinecap="round" />
                        {points.map((v, i) => (
                            <g key={i}>
                                <rect
                                    x={px(i) - 6} y={0} width={12} height={h}
                                    fill="transparent"
                                    onMouseEnter={() => setHovered(i)}
                                />
                                <circle cx={px(i)} cy={py(v)} r={hovered === i ? 2.5 : 1.5}
                                    fill={hovered === i ? "#5B1A8B" : "white"}
                                    stroke="#5B1A8B" strokeWidth="1.2"
                                    style={{ transition: "r 0.15s" }} />
                                {hovered === i && (
                                    <g>
                                        <rect x={Math.min(px(i) - 14, w - 28)} y={py(v) - 14} width={28} height={11} rx="2" fill="#5B1A8B" />
                                        <text x={Math.min(px(i), w - 14)} y={py(v) - 6} fontSize="5" fill="white" textAnchor="middle">${v}k</text>
                                    </g>
                                )}
                            </g>
                        ))}
                    </svg>
                </div>
                <div className="flex justify-between mt-1">
                    {labels.filter((_, i) => i % 2 === 0).map(l => (
                        <span key={l} className="text-gray-300" style={{ fontSize: 6 }}>{l}</span>
                    ))}
                </div>
            </div>
            <div className="shrink-0 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                <p className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: 9 }}>Revenue by Channel</p>
                {[["Organic Search", 48, "#5B1A8B"], ["Paid Ads", 31, "#1DBDA0"], ["Social", 21, "#c4b5d4"]].map(([l, p, c]) => (
                    <div key={l as string} className="flex items-center gap-1.5 mb-1">
                        <span className="text-gray-500 w-20" style={{ fontSize: 7 }}>{l as string}</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: `${p}%`, background: c as string }} />
                        </div>
                        <span className="text-gray-400 w-5 text-right" style={{ fontSize: 7 }}>{p}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – Campaigns tab content
───────────────────────────────────────────────────────────── */
function CampaignsView() {
    const [sortField, setSortField] = useState<"roi" | "spend">("roi");
    const [sortAsc, setSortAsc] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);

    const sorted = [...CAMPAIGNS].sort((a, b) => {
        const av = sortField === "roi" ? parseFloat(a.roi) : a.spendRaw;
        const bv = sortField === "roi" ? parseFloat(b.roi) : b.spendRaw;
        return sortAsc ? av - bv : bv - av;
    });

    const toggle = (field: "roi" | "spend") => {
        if (sortField === field) setSortAsc(a => !a);
        else { setSortField(field); setSortAsc(false); }
    };

    return (
        <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3">
            <div className="flex items-center justify-between shrink-0">
                <p className="font-bold text-gray-800" style={{ fontSize: 10 }}>Campaign Manager</p>
                <span className="rounded-full px-2 py-0.5 font-semibold text-white" style={{ fontSize: 7, background: "#5B1A8B" }}>+ New</span>
            </div>
            <div className="shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50/60">
                            {[
                                { label: "Campaign", field: null },
                                { label: "Spend ↕", field: "spend" },
                                { label: "Impr.", field: null },
                                { label: "ROI ↕", field: "roi" },
                                { label: "Status", field: null },
                            ].map(h => (
                                <th key={h.label}
                                    className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${h.field ? "cursor-pointer text-[#5B1A8B]" : "text-gray-400"}`}
                                    style={{ fontSize: 7 }}
                                    onClick={() => h.field && toggle(h.field as "roi" | "spend")}
                                >
                                    {h.label}
                                    {h.field && sortField === h.field && (
                                        <span className="ml-0.5">{sortAsc ? "▲" : "▼"}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((c, i) => (
                            <tr key={c.name}
                                className={`border-t border-gray-50 cursor-pointer transition-colors duration-150 ${selected === i ? "bg-purple-50" : "hover:bg-gray-50/70"}`}
                                onClick={() => setSelected(selected === i ? null : i)}
                            >
                                <td className="px-2 py-1.5 font-medium text-gray-700" style={{ fontSize: 8 }}>{c.name}</td>
                                <td className="px-2 py-1.5 text-gray-500" style={{ fontSize: 8 }}>{c.spend}</td>
                                <td className="px-2 py-1.5 text-gray-500" style={{ fontSize: 8 }}>{c.imp}</td>
                                <td className="px-2 py-1.5 font-semibold" style={{ fontSize: 8, color: parseFloat(c.roi) > 5 ? "#1DBDA0" : "#9ca3af" }}>{c.roi}%</td>
                                <td className="px-2 py-1.5" style={{ fontSize: 7 }}>
                                    <span className="rounded-full px-1.5 py-0.5 font-semibold"
                                        style={{ background: c.up ? "rgba(29,189,160,.15)" : "rgba(248,113,113,.15)", color: c.up ? "#0F6E56" : "#ef4444" }}>
                                        {c.up ? "Active" : "Review"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selected !== null && (
                <div className="shrink-0 rounded-lg border border-purple-100 bg-purple-50 p-2 transition-all duration-200">
                    <p className="font-bold text-[#5B1A8B] mb-1" style={{ fontSize: 8 }}>{sorted[selected].name} — Details</p>
                    <div className="grid grid-cols-3 gap-1">
                        {[
                            ["Clicks", "1,204"],
                            ["CTR", "2.8%"],
                            ["CPC", `$${(sorted[selected].spendRaw / 1204).toFixed(2)}`],
                        ].map(([k, v]) => (
                            <div key={k} className="rounded bg-white p-1 text-center">
                                <p className="text-gray-400" style={{ fontSize: 6 }}>{k}</p>
                                <p className="font-bold text-gray-800" style={{ fontSize: 9 }}>{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="flex-1 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                <p className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: 9 }}>Spend Distribution</p>
                <svg viewBox="0 0 120 30" className="w-full" style={{ height: 30 }} preserveAspectRatio="none">
                    {(() => {
                        const total = CAMPAIGNS.reduce((s, c) => s + c.spendRaw, 0);
                        const colors = ["#5B1A8B", "#1DBDA0", "#c4b5d4", "#9ca3af"];
                        let x = 0;
                        return CAMPAIGNS.map((c, i) => {
                            const w = (c.spendRaw / total) * 120;
                            const rect = <rect key={i} x={x} y={5} width={w - 1} height={20} rx="2" fill={colors[i]} opacity={0.85} />;
                            x += w;
                            return rect;
                        });
                    })()}
                </svg>
                <div className="flex gap-2 mt-1">
                    {CAMPAIGNS.map((c, i) => (
                        <span key={c.name} className="flex items-center gap-1" style={{ fontSize: 6 }}>
                            <span className="inline-block h-1.5 w-1.5 rounded-sm"
                                style={{ background: ["#5B1A8B", "#1DBDA0", "#c4b5d4", "#9ca3af"][i] }} />
                            <span className="text-gray-400">{c.name.split(" ")[0]}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – Settings tab content
───────────────────────────────────────────────────────────── */
function SettingsView() {
    const [toggles, setToggles] = useState([true, false, true, true]);
    const toggle = (i: number) => setToggles(t => t.map((v, j) => j === i ? !v : v));
    return (
        <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3">
            <p className="shrink-0 font-bold text-gray-800" style={{ fontSize: 10 }}>Workspace Settings</p>
            <div className="shrink-0 rounded-lg border border-gray-100 bg-white p-2 shadow-sm space-y-2">
                {[
                    "Email Notifications",
                    "Auto-refresh Data",
                    "Show Sparklines",
                    "Weekly Reports",
                ].map((label, i) => (
                    <div key={label} className="flex items-center justify-between">
                        <span className="text-gray-600" style={{ fontSize: 8 }}>{label}</span>
                        <button
                            onClick={() => toggle(i)}
                            className="relative flex-shrink-0 transition-all duration-200"
                            style={{
                                width: 22, height: 12, borderRadius: 6,
                                background: toggles[i] ? "#5B1A8B" : "#e5e7eb",
                            }}
                        >
                            <span className="absolute top-1 transition-all duration-200"
                                style={{
                                    width: 10, height: 10, borderRadius: "50%",
                                    background: "white",
                                    left: toggles[i] ? 11 : 1,
                                    top: 1,
                                }} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="shrink-0 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                <p className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: 9 }}>Team Members</p>
                {[["SJ", "Sarah Johnson", "Admin", "#5B1A8B"],
                ["MK", "Mike Kim", "Editor", "#1DBDA0"],
                ["AL", "Amy Lee", "Viewer", "#9ca3af"]].map(([initials, name, role, color]) => (
                    <div key={name} className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                            style={{ fontSize: 5, background: color as string }}>{initials}</div>
                        <span className="flex-1 text-gray-700" style={{ fontSize: 7 }}>{name}</span>
                        <span className="rounded-full px-1.5 py-0.5 text-gray-500 bg-gray-100" style={{ fontSize: 6 }}>{role}</span>
                    </div>
                ))}
            </div>
            <div className="flex-1 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                <p className="font-semibold text-gray-700 mb-1.5" style={{ fontSize: 9 }}>Data Sources</p>
                {[["Salesforce CRM", true], ["Google Analytics", true], ["Stripe Payments", false]].map(([name, connected]) => (
                    <div key={name as string} className="flex items-center justify-between mb-1">
                        <span className="text-gray-600" style={{ fontSize: 7 }}>{name as string}</span>
                        <span className="rounded-full px-1.5 py-0.5 font-semibold" style={{
                            fontSize: 6,
                            background: connected ? "rgba(29,189,160,.15)" : "rgba(156,163,175,.15)",
                            color: connected ? "#0F6E56" : "#9ca3af"
                        }}>{connected ? "Connected" : "Connect"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENT – interactive dashboard mock
───────────────────────────────────────────────────────────── */
function DashboardMock() {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const [hoveredKpi, setHoveredKpi] = useState<number | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 150);
        return () => clearTimeout(t);
    }, []);

    const sortedCampaigns = [...CAMPAIGNS].sort((a, b) => {
        const av = parseFloat(a.roi), bv = parseFloat(b.roi);
        return sortDir === "desc" ? bv - av : av - bv;
    });

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-xl" style={{ fontSize: 10 }}>

            {/* navbar */}
            <div className="flex shrink-0 items-center gap-2 border-b border-gray-100 px-3 py-2">
                <div className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#5B1A8B] to-[#1DBDA0]">
                    <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none">
                        <rect x="1" y="1" width="3.5" height="3.5" rx="0.8" fill="white" />
                        <rect x="5.5" y="1" width="3.5" height="3.5" rx="0.8" fill="white" opacity=".7" />
                        <rect x="1" y="5.5" width="3.5" height="3.5" rx="0.8" fill="white" opacity=".7" />
                        <rect x="5.5" y="5.5" width="3.5" height="3.5" rx="0.8" fill="white" opacity=".4" />
                    </svg>
                </div>
                <span className="font-bold text-gray-800" style={{ fontSize: 10 }}>Fusionedge</span>
                <div className="ml-2 flex gap-1">
                    {TABS.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(i)}
                            className={`rounded px-2 py-0.5 font-medium transition-all duration-150 cursor-pointer ${i === activeTab
                                    ? "bg-purple-50 text-[#5B1A8B]"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                }`}
                            style={{ fontSize: 9, border: "none", background: i === activeTab ? undefined : "transparent" }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <div className="flex h-4 w-14 items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-1.5 text-gray-400" style={{ fontSize: 9 }}>
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 shrink-0 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="5" cy="5" r="3.5" /><path d="M8 8l2 2" strokeLinecap="round" />
                        </svg>
                        Search
                    </div>
                    <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#5B1A8B] to-[#1DBDA0] font-bold text-white" style={{ fontSize: 8 }}>
                        SJ
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="flex min-h-0 flex-1 overflow-hidden">

                {/* sidebar */}
                <div className="flex shrink-0 flex-col items-center gap-3 border-r border-gray-100 bg-gray-50/60 px-2 py-3">
                    {[
                        { d: "M4 6h16M4 12h16M4 18h16", tab: 0 },
                        { d: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z", tab: 1 },
                        { d: "M12 8v4l3 3M12 3a9 9 0 100 18A9 9 0 0012 3z", tab: 2 },
                        { d: "M4 17v-3a8 8 0 0116 0v3", tab: 3 },
                        { d: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33", tab: 3 },
                    ].map(({ d, tab }, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-md p-1 transition-all duration-150 cursor-pointer border-0 bg-transparent ${activeTab === tab ? "bg-white shadow-sm" : "hover:bg-white/60"
                                }`}
                        >
                            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none"
                                stroke={activeTab === tab ? "#5B1A8B" : "#d1d5db"}
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d={d} />
                            </svg>
                        </button>
                    ))}
                </div>

                {/* tab content */}
                {activeTab === 0 && (
                    <div className="flex min-w-0 flex-1 flex-col gap-2 overflow-hidden p-3">
                        <p className="shrink-0 font-bold text-gray-800" style={{ fontSize: 10 }}>Performance Overview — Fusionedge</p>

                        {/* KPI row */}
                        <div className="grid shrink-0 grid-cols-4 gap-1.5">
                            {KPI_DATA.map((kpi, idx) => (
                                <div
                                    key={kpi.label}
                                    className="rounded-lg border bg-white p-2 shadow-sm cursor-pointer transition-all duration-200"
                                    style={{
                                        borderColor: hoveredKpi === idx ? "#5B1A8B" : "#f3f4f6",
                                        transform: hoveredKpi === idx ? "translateY(-1px)" : "none",
                                        boxShadow: hoveredKpi === idx ? "0 4px 12px rgba(91,26,139,0.12)" : undefined,
                                    }}
                                    onMouseEnter={() => setHoveredKpi(idx)}
                                    onMouseLeave={() => setHoveredKpi(null)}
                                >
                                    <div className="flex items-start justify-between gap-1">
                                        <div>
                                            <p className="text-gray-400" style={{ fontSize: 8 }}>{kpi.label}</p>
                                            <p className="mt-0.5 font-bold text-gray-900" style={{ fontSize: 11 }}>{kpi.value}</p>
                                            <p className="font-semibold" style={{ fontSize: 8, color: kpi.up ? "#1DBDA0" : "#f87171" }}>
                                                {kpi.trend}
                                            </p>
                                            {hoveredKpi === idx && (
                                                <p className="mt-0.5 text-gray-400" style={{ fontSize: 7 }}>{kpi.detail}</p>
                                            )}
                                        </div>
                                        <svg viewBox="0 0 40 20" className="h-5 w-10 shrink-0" preserveAspectRatio="none">
                                            <polyline
                                                points={sparkPoints(kpi.spark, 40, 20)}
                                                fill="none"
                                                stroke={kpi.up ? "#1DBDA0" : "#f87171"}
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* charts */}
                        <div className="flex shrink-0 gap-2" style={{ height: 90 }}>

                            {/* Revenue trend — interactive bars */}
                            <div className="flex flex-[1.4] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                                <div className="mb-1 flex shrink-0 items-center justify-between">
                                    <p className="font-semibold text-gray-700" style={{ fontSize: 9 }}>Revenue Trend</p>
                                    <span className="rounded px-1.5 py-0.5 font-semibold" style={{ fontSize: 8, background: "rgba(45,212,191,.15)", color: "#0F6E56" }}>
                                        {hoveredBar !== null ? `${BAR_DATA[hoveredBar].month}: $${BAR_DATA[hoveredBar].a + BAR_DATA[hoveredBar].b}k` : "Jun: $38k"}
                                    </span>
                                </div>
                                <svg viewBox="0 0 155 52" className="w-full flex-1" preserveAspectRatio="none"
                                    onMouseLeave={() => setHoveredBar(null)}>
                                    {["$40k", "$30k", "$20k", "$10k"].map((l, i) => (
                                        <text key={l} x="1" y={6 + i * 11} fontSize="4" fill="#d1d5db">{l}</text>
                                    ))}
                                    {BAR_DATA.map((d, i) => {
                                        const x = 14 + i * 20;
                                        const isHovered = hoveredBar === i;
                                        const aH = mounted ? d.a : 0;
                                        const bH = mounted ? d.b : 0;
                                        return (
                                            <g key={d.month}
                                                onMouseEnter={() => setHoveredBar(i)}
                                                style={{ cursor: "pointer" }}>
                                                <rect
                                                    x={x} y={52 - aH} width="6" height={aH} rx="1"
                                                    fill="#5B1A8B"
                                                    opacity={isHovered ? 1 : 0.75}
                                                    style={{ transition: "height 0.6s cubic-bezier(.4,0,.2,1), y 0.6s cubic-bezier(.4,0,.2,1), opacity 0.15s" }}
                                                />
                                                <rect
                                                    x={x + 7} y={52 - bH} width="6" height={bH} rx="1"
                                                    fill="#1DBDA0"
                                                    opacity={isHovered ? 1 : 0.65}
                                                    style={{ transition: "height 0.6s cubic-bezier(.4,0,.2,1), y 0.6s cubic-bezier(.4,0,.2,1), opacity 0.15s" }}
                                                />
                                                <text x={x + 4} y="57" fontSize="4" fill={isHovered ? "#5B1A8B" : "#c4c4c4"} textAnchor="middle"
                                                    style={{ transition: "fill 0.15s" }}>
                                                    {d.month}
                                                </text>
                                                {/* hover hit zone */}
                                                <rect x={x - 2} y={0} width={17} height={52} fill="transparent" />
                                                {isHovered && (
                                                    <>
                                                        <rect x={x - 1} y={0} width={16} height={52} fill="#5B1A8B" opacity="0.04" rx="1" />
                                                        <rect x={x - 1} y={52 - aH - 14} width={16} height={12} fill="#5B1A8B" rx="2" />
                                                        <text x={x + 7} y={52 - aH - 6} fontSize="4.5" fill="white" textAnchor="middle">${d.a + d.b}k</text>
                                                    </>
                                                )}
                                            </g>
                                        );
                                    })}
                                    <polyline
                                        points={BAR_DATA.map((d, i) => `${18 + i * 20},${52 - (d.a / 42) * 46}`).join(" ")}
                                        fill="none" stroke="#5B1A8B" strokeWidth="1.2"
                                        strokeLinejoin="round" strokeLinecap="round"
                                        opacity="0.5"
                                    />
                                    <circle cx={18 + 5 * 20} cy={52 - (42 / 42) * 46} r="2.5" fill="#5B1A8B" />
                                </svg>
                                <div className="mt-1 flex shrink-0 gap-2">
                                    {[["#5B1A8B", "Organic"], ["#1DBDA0", "Paid Ads"], ["#9ca3af", "Social"]].map(([c, l]) => (
                                        <span key={l} className="flex items-center gap-1 text-gray-400" style={{ fontSize: 7 }}>
                                            <span className="inline-block h-1.5 w-2 rounded-sm" style={{ background: c }} />
                                            {l}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* right column */}
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
                                    <p className="mb-1 shrink-0 font-semibold text-gray-700" style={{ fontSize: 9 }}>Traffic Sources</p>
                                    <div className="flex min-h-0 flex-1 items-center gap-2">
                                        <svg viewBox="0 0 70 32" className="flex-1" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="tg1" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#5B1A8B" stopOpacity=".3" />
                                                    <stop offset="100%" stopColor="#5B1A8B" stopOpacity="0" />
                                                </linearGradient>
                                                <linearGradient id="tg2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#1DBDA0" stopOpacity=".2" />
                                                    <stop offset="100%" stopColor="#1DBDA0" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <polygon points="0,32 0,20 12,10 24,18 36,6 48,12 60,4 70,8 70,32" fill="url(#tg1)" />
                                            <polyline points="0,20 12,10 24,18 36,6 48,12 60,4 70,8" fill="none" stroke="#5B1A8B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <polygon points="0,32 0,26 12,18 24,24 36,16 48,20 60,14 70,18 70,32" fill="url(#tg2)" />
                                            <polyline points="0,26 12,18 24,24 36,16 48,20 60,14 70,18" fill="none" stroke="#1DBDA0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
                                        </svg>
                                        <div className="flex shrink-0 flex-col gap-1">
                                            {[["Mobile", 52, "#5B1A8B"], ["Desktop", 35, "#1DBDA0"], ["Tablet", 13, "#c4b5d4"]].map(([l, p, c]) => (
                                                <div key={l as string} className="flex items-center gap-1">
                                                    <div className="h-1 w-10 overflow-hidden rounded-full bg-gray-100">
                                                        <div className="h-full rounded-full transition-all duration-700"
                                                            style={{ width: mounted ? `${p}%` : "0%", background: c as string }} />
                                                    </div>
                                                    <span className="w-5 text-right text-gray-400" style={{ fontSize: 7 }}>{p}%</span>
                                                    <span className="text-gray-400" style={{ fontSize: 7 }}>{l}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-[#1DBDA0] to-[#5B1A8B] p-2 shadow-sm">
                                    <p className="mb-0.5 shrink-0 font-semibold text-white/90" style={{ fontSize: 9 }}>Geographic Distribution</p>
                                    <svg viewBox="0 0 110 34" className="w-full" preserveAspectRatio="xMidYMid meet">
                                        <ellipse cx="24" cy="16" rx="13" ry="8" fill="white" opacity=".2" />
                                        <ellipse cx="28" cy="26" rx="7" ry="5" fill="white" opacity=".15" />
                                        <ellipse cx="52" cy="14" rx="9" ry="6" fill="white" opacity=".2" />
                                        <ellipse cx="65" cy="22" rx="5" ry="7" fill="white" opacity=".15" />
                                        <ellipse cx="82" cy="15" rx="11" ry="7" fill="white" opacity=".2" />
                                        <ellipse cx="90" cy="26" rx="6" ry="4" fill="white" opacity=".15" />
                                        <ellipse cx="100" cy="18" rx="5" ry="4" fill="white" opacity=".15" />
                                        {[[26, 14], [52, 12], [82, 14], [64, 20], [44, 18], [96, 18]].map(([cx, cy], i) => (
                                            <circle key={i} cx={cx} cy={cy} r="2" fill="white" opacity=".9" />
                                        ))}
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Campaigns table — sortable */}
                        <div className="shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-100 px-2.5 py-1.5">
                                <p className="font-semibold text-gray-700" style={{ fontSize: 9 }}>Top Performing Campaigns</p>
                                <button
                                    onClick={() => setSortDir(d => d === "desc" ? "asc" : "desc")}
                                    className="text-gray-400 cursor-pointer border-0 bg-transparent hover:text-[#5B1A8B] transition-colors"
                                    style={{ fontSize: 8 }}
                                >
                                    {sortDir === "desc" ? "ROI ▼" : "ROI ▲"}
                                </button>
                            </div>
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50/60">
                                        {["Campaign Name", "Spend", "Impressions", "ROI"].map(h => (
                                            <th key={h} className="px-2 py-1 text-left font-semibold uppercase tracking-wide text-gray-400" style={{ fontSize: 7 }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedCampaigns.map((c, i) => (
                                        <tr key={c.name} className="border-t border-gray-50 hover:bg-purple-50/40 cursor-pointer transition-colors duration-100">
                                            <td className="px-2 py-1 font-medium text-gray-700" style={{ fontSize: 8 }}>{c.name}</td>
                                            <td className="px-2 py-1" style={{ fontSize: 8 }}>
                                                <div className="flex items-center gap-1">
                                                    <div className="h-1 w-8 overflow-hidden rounded-full bg-gray-100">
                                                        <div className="h-full rounded-full transition-all duration-500"
                                                            style={{
                                                                width: mounted ? `${(c.spendRaw / 4000) * 100}%` : "0%",
                                                                background: i % 2 === 0 ? "#5B1A8B" : "#1DBDA0"
                                                            }} />
                                                    </div>
                                                    <span className="text-gray-500">{c.spend}</span>
                                                </div>
                                            </td>
                                            <td className="px-2 py-1 text-gray-500" style={{ fontSize: 8 }}>{c.imp}</td>
                                            <td className="px-2 py-1 font-semibold text-[#1DBDA0]" style={{ fontSize: 8 }}>{c.roi}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 1 && <ReportsView />}
                {activeTab === 2 && <CampaignsView />}
                {activeTab === 3 && <SettingsView />}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function AssetRegisterHeroSection() {
    return (
        <>
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.6); }
        }
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .fade-up   { animation: fadeUp 0.55s ease both; }
        .float-y   { animation: floatY 4s ease-in-out infinite; }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        .grad-anim {
          background: linear-gradient(270deg, #1DBDA0, #5B1A8B, #1DBDA0);
          background-size: 300% 300%;
          animation: gradShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

            <section
                id="home"
                className="bg-[#F7F7F4] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
                aria-labelledby="asset-register-heading"
            >
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-gray-200/70 sm:rounded-[2rem] lg:grid lg:grid-cols-[0.9fr_1.1fr]">

                    {/* ── LEFT PANEL ── */}
                    <div className="flex flex-col justify-between gap-8 p-5 sm:p-8 lg:gap-0 lg:p-12 xl:p-16">

                        <div className="fade-up flex items-center justify-between gap-4" style={{ animationDelay: "0.05s" }}>
                            <span className="max-w-[180px] text-xs font-semibold uppercase leading-5 tracking-wide text-gray-500">
                                FusionEdge Digital Asset Register
                            </span>
                            <span className="hidden items-center gap-2 rounded-full bg-gray-100 px-5 py-2 text-xs font-semibold text-gray-400 sm:inline-flex">
                                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#1DBDA0]" aria-hidden="true" />
                                Live Asset View
                            </span>
                        </div>

                        <div className="max-w-xl lg:my-10">
                            <span
                                className="fade-up inline-flex items-center gap-1.5 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#5B1A8B]"
                                style={{ animationDelay: "0.12s" }}
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1DBDA0]" aria-hidden="true" />
                                Asset Register Software
                            </span>

                            <h1
                                id="asset-register-heading"
                                className="fade-up mt-5 font-bold leading-tight tracking-tight text-gray-950"
                                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", animationDelay: "0.2s" }}
                            >
                                Know Every <span className="grad-anim">Asset.</span> Always.
                            </h1>

                            <div
                                className="fade-up mt-5 space-y-3 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8"
                                style={{ animationDelay: "0.28s" }}
                            >
                                <p>Your facility runs on hundreds of assets. Do you know where each one is, what condition it is in, and when it was last serviced?</p>
                                <p>FusionEdge Digital Asset Register gives you a single, living record of every asset across every site.</p>
                                <p className="font-semibold text-gray-900">Always updated. Always accessible. Always audit ready.</p>
                            </div>

                            <div className="fade-up mt-7 flex flex-wrap gap-3" style={{ animationDelay: "0.36s" }}>
                                <a
                                    href="#contact"
                                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-[#5B1A8B] to-[#1DBDA0] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
                                >
                                    Get a Free Demo
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5B1A8B] hover:text-[#5B1A8B] active:scale-[0.97]"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div
                            className="fade-up rounded-2xl border border-[#ede8f5] bg-[#faf9fc] p-4 transition-all duration-300 hover:border-[#d5c8f0] hover:shadow-sm"
                            style={{ animationDelay: "0.44s" }}
                        >
                            <p className="text-sm font-bold text-gray-900">Unified Asset Register</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Track location, status, ownership, service history, and audit readiness from one source of truth.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT PANEL ── */}
                    <div
                        className="relative flex flex-col justify-end gap-4 overflow-hidden bg-[#D5D5D0] p-5 sm:gap-5 sm:p-7 lg:p-10"
                        style={{ minHeight: "520px" }}
                    >
                        {/* Dashboard mock — hidden on small screens, floats on large */}
                        <div
                            className="float-y absolute inset-x-5 top-5 sm:inset-x-7 sm:top-7 hidden lg:block"
                            style={{ bottom: "calc(38% + 0.5rem)" }}
                        >
                            <DashboardMock />
                            <div
                                className="absolute inset-x-0 bottom-0 h-12"
                                style={{ background: "linear-gradient(to bottom, transparent, #D5D5D0)" }}
                            />
                        </div>

                        {/* Live ticker chip */}
                        <div className="absolute right-5 top-5 z-10 sm:right-7 sm:top-7">
                            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm">
                                <span className="pulse-dot inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1DBDA0]" aria-hidden="true" />
                                <LiveTicker />
                            </div>
                        </div>

                        {/* Stat cards */}
                        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4">
                            {ASSET_STATS.map((s, i) => (
                                <StatCard key={s.label} label={s.label} target={s.target} suffix={s.suffix} delay={500 + i * 120} />
                            ))}
                        </div>

                        {/* Why + CTA */}
                        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/60 to-[#4B2A7A]/40 p-4 backdrop-blur transition-all duration-300 hover:from-[#2DD4BF]/70 hover:to-[#4B2A7A]/50 sm:rounded-3xl sm:p-6">
                            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
                                <div>
                                    <p className="text-sm font-bold text-gray-950 sm:text-base">Why Asset Registers Matter</p>
                                    <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                                        {WHY_ITEMS.map((item, i) => (
                                            <li key={item} className="fade-up flex items-start gap-2 text-xs text-gray-700 sm:text-sm"
                                                style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                                                <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gray-950" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur transition-all duration-300 hover:bg-white/85 sm:p-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B1A8B] to-[#1DBDA0]">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold leading-snug text-gray-950">Ready to see your assets clearly?</p>
                                        <p className="mt-1 text-xs leading-5 text-gray-700">
                                            Book a live walkthrough and discover how FusionEdge can transform asset management for your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}