"use client";

const CLIENT_LOGOS = [
    "Commercial RE",
    "Integrated FM",
    "Corporate Campus",
    "Industrial Site",
    "Workplace Ops",
];

const STORIES = [
    {
        quote:
            "Before FusionEdge, our asset data was split across three spreadsheets and two teams. Now everything is in one place and our audit preparation time has dropped significantly.",
        author: "Facility Manager",
        role: "Commercial Real Estate, India",
    },
    {
        quote:
            "QR code tagging changed how our field team works. They scan, they act. No calls, no delays.",
        author: "Operations Head",
        role: "Integrated FM Company, Singapore",
    },
];

const MORE_LINKS = [
    {
        title: "Asset AMC Tracker",
        description: "Never miss a contract renewal or service obligation again.",
        href: "#asset-amc-tracker",
    },
    {
        title: "Asset Register Breakdown",
        description:
            "Full visibility into every asset failure event, from fault to fix.",
        href: "#asset-register-breakdown",
    },
    {
        title: "Asset Health Monitoring",
        description: "Predictive insights into asset condition before failure occurs.",
        href: "#asset-health-monitoring",
    },
];

/* ─── Tiny reusable dashboard primitives ─── */

type StatusColor = "green" | "yellow" | "red" | "purple" | "teal";

function StatusDot({ color }: { color: StatusColor }) {
    const map: Record<StatusColor, string> = {
        green: "bg-emerald-400",
        yellow: "bg-amber-400",
        red: "bg-red-400",
        purple: "bg-[#6B3FA0]",
        teal: "bg-[#2DD4BF]",
    };
    return <span className={`inline-block h-2 w-2 rounded-full ${map[color]}`} />;
}

function MiniBar({ pct, color = "purple" }: { pct: number; color?: "purple" | "teal" }) {
    const bg = color === "teal" ? "bg-[#2DD4BF]" : "bg-[#6B3FA0]";
    return (
        <div className="h-1.5 w-full rounded-full bg-gray-100">
            <div className={`h-1.5 rounded-full ${bg}`} style={{ width: `${pct}%` }} />
        </div>
    );
}

/* ─── Dashboard 1 — Asset Overview (foreground, right) ─── */
function AssetOverviewDashboard() {
    const assets: { name: string; total: number; healthy: number; color: StatusColor }[] = [
        { name: "HVAC Units", total: 48, healthy: 41, color: "green" },
        { name: "Elevators", total: 12, healthy: 12, color: "green" },
        { name: "Fire Panels", total: 9, healthy: 7, color: "yellow" },
        { name: "Generators", total: 6, healthy: 4, color: "red" },
    ];

    return (
        <div className="h-full w-full overflow-hidden rounded-lg bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B3FA0]">
                        FusionEdge
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-gray-800">Asset Overview</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                    Live
                </span>
            </div>

            {/* KPI row */}
            <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                    { label: "Total Assets", value: "347", sub: "+12 this month" },
                    { label: "Active AMCs", value: "89", sub: "3 expiring soon" },
                    { label: "Open Tickets", value: "14", sub: "2 critical" },
                ].map((k) => (
                    <div key={k.label} className="rounded-md bg-gray-50 p-2">
                        <p className="text-[9px] font-medium text-gray-400">{k.label}</p>
                        <p className="mt-0.5 text-lg font-bold leading-none text-gray-900">
                            {k.value}
                        </p>
                        <p className="mt-0.5 text-[9px] text-gray-400">{k.sub}</p>
                    </div>
                ))}
            </div>

            {/* Asset health rows */}
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                Asset Health by Category
            </p>
            <div className="space-y-2.5">
                {assets.map((a) => (
                    <div key={a.name}>
                        <div className="mb-1 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <StatusDot color={a.color} />
                                <span className="text-[11px] font-medium text-gray-700">
                                    {a.name}
                                </span>
                            </div>
                            <span className="text-[10px] text-gray-400">
                                {a.healthy}/{a.total}
                            </span>
                        </div>
                        <MiniBar
                            pct={Math.round((a.healthy / a.total) * 100)}
                            color={a.color === "red" ? "purple" : "teal"}
                        />
                    </div>
                ))}
            </div>

            {/* Bottom gradient accent */}
            <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]" />
        </div>
    );
}

/* ─── Dashboard 2 — AMC & Tickets (background, left) ─── */
function AmcTicketDashboard() {
    const tickets: { id: string; asset: string; priority: keyof typeof priorityStyle; status: keyof typeof statusStyle }[] = [
        { id: "TK-201", asset: "Generator B2", priority: "Critical", status: "Open" },
        { id: "TK-198", asset: "Fire Panel 3F", priority: "High", status: "In Progress" },
        { id: "TK-195", asset: "Chiller Unit", priority: "Medium", status: "Resolved" },
    ];

    const priorityStyle = {
        Critical: "bg-red-50 text-red-600",
        High: "bg-amber-50 text-amber-600",
        Medium: "bg-blue-50 text-blue-600",
    };
    const statusStyle = {
        Open: "text-red-500",
        "In Progress": "text-amber-500",
        Resolved: "text-emerald-500",
    };

    return (
        <div className="h-full w-full overflow-hidden rounded-lg bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-bold text-gray-800">AMC &amp; Tickets</p>
                <div className="flex items-center gap-1 rounded-full bg-purple-50 px-2 py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6B3FA0]" />
                    <span className="text-[10px] font-semibold text-[#6B3FA0]">Q2 2025</span>
                </div>
            </div>

            {/* AMC ring chart placeholder */}
            <div className="mb-3 flex items-center gap-3">
                {/* Fake donut */}
                <svg viewBox="0 0 36 36" className="h-14 w-14 shrink-0 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#f3f4f6" strokeWidth="5" />
                    <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#6B3FA0" strokeWidth="5"
                        strokeDasharray="62 88"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#2DD4BF" strokeWidth="5"
                        strokeDasharray="20 88"
                        strokeDashoffset="-62"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#6B3FA0]" />
                        <span className="text-[10px] text-gray-500">Active AMCs <strong className="text-gray-800">71%</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                        <span className="text-[10px] text-gray-500">Expiring <strong className="text-gray-800">23%</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-gray-200" />
                        <span className="text-[10px] text-gray-500">Lapsed <strong className="text-gray-800">6%</strong></span>
                    </div>
                </div>
            </div>

            {/* Ticket table */}
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                Recent Tickets
            </p>
            <div className="space-y-1.5">
                {tickets.map((t) => (
                    <div
                        key={t.id}
                        className="flex items-center justify-between rounded-md border border-gray-100 px-2.5 py-1.5"
                    >
                        <div>
                            <p className="text-[10px] font-semibold text-gray-700">{t.asset}</p>
                            <p className="text-[9px] text-gray-400">{t.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span
                                className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${priorityStyle[t.priority]}`}
                            >
                                {t.priority}
                            </span>
                            <span className={`text-[10px] font-medium ${statusStyle[t.status]}`}>
                                {t.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Main exported section ─── */
export default function DigitalFacilityStoriesSection() {
    return (
        <section
            id="digital-facility"
            className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="digital-facility-heading"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    {/* ── Left: copy ── */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-normal text-[#6B3FA0]">
                            Sustainable Facility Operations
                        </span>

                        <h2
                            id="digital-facility-heading"
                            className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-normal text-gray-950 sm:text-4xl lg:text-5xl"
                        >
                            The future of India is digital. So is your facility.
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                            Every asset you digitise on FusionEdge is one less paper
                            register and one big step towards a sustainable facility
                            operation.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-100 transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                            >
                                Get a Free Demo
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:border-[#6B3FA0] hover:text-[#6B3FA0] active:scale-[0.98]"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* ── Right: layered dashboard cards ── */}
                    <div className="relative min-h-[480px]">
                        {/* Background card — AMC & Tickets */}
                        <div className="absolute left-0 top-16 hidden h-72 w-[52%] overflow-hidden rounded-xl shadow-lg lg:block">
                            <AmcTicketDashboard />
                        </div>

                        {/* Foreground card — Asset Overview */}
                        <div className="ml-auto min-h-[300px] overflow-hidden rounded-xl shadow-xl lg:w-[62%]">
                            <AssetOverviewDashboard />
                        </div>

                        {/* Floating white proof card */}
                        <div className="mt-5 rounded-xl bg-white p-5 shadow-2xl shadow-gray-200/90 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[70%]">
                            <p className="text-sm font-semibold uppercase tracking-normal text-gray-400">
                                Real Facilities. Real Results.
                            </p>
                            <p className="mt-2 text-sm leading-7 text-gray-600">
                                Attach customer or facility photos for each story to show
                                proof from active facility teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}