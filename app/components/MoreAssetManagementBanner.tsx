"use client";

const ASSET_LINKS = [
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

export default function MoreAssetManagementBanner() {
    return (
        <section
            id="more-asset-management"
            className="w-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] py-14 sm:py-16 lg:py-20"
            aria-labelledby="more-asset-management-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-white">
                            Explore More
                        </span>

                        <h2
                            id="more-asset-management-heading"
                            className="mt-5 text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl"
                        >
                            There Is More to Asset Management
                        </h2>
                    </div>

                    <p className="max-w-xl text-base leading-8 text-white/85">
                        Go deeper into contract tracking, breakdown visibility, and
                        health monitoring with connected FusionEdge asset workflows.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {ASSET_LINKS.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="group rounded-2xl bg-white p-6 shadow-xl shadow-purple-950/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
                        >
                            <span className="text-xl font-bold text-gray-950 transition-colors group-hover:text-[#6B3FA0]">
                                {link.title} →
                            </span>
                            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                                {link.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}