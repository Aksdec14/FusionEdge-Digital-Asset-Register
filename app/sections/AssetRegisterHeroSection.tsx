"use client";

const ASSET_STATS = [
    { label: "Assets Tracked", value: "1,248" },
    { label: "Sites Covered", value: "18" },
    { label: "Audit Ready", value: "100%" },
];

export default function AssetRegisterHeroSection() {
    return (
        <section
            id="home"
            className="bg-[#F7F7F4] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
            aria-labelledby="asset-register-heading"
        >
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-gray-200/70 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 xl:p-16">
                    <div className="flex items-center justify-between gap-4">
                        <span className="max-w-[160px] text-xs font-semibold uppercase leading-5 tracking-normal text-gray-500">
                            FusionEdge Digital Asset Register
                        </span>

                        <span className="hidden rounded-full bg-gray-100 px-8 py-3 text-xs font-semibold text-gray-400 sm:inline-flex">
                            Live Asset View
                        </span>
                    </div>

                    <div className="my-16 max-w-xl text-center sm:mx-auto lg:mx-0 lg:text-left">
                        <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                            Asset Register Software
                        </span>

                        <h1
                            id="asset-register-heading"
                            className="mt-6 text-4xl font-bold leading-tight tracking-normal text-gray-950 sm:text-5xl lg:text-6xl"
                        >
                            Know Every Asset. Always.
                        </h1>

                        <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
                            <p>
                                Your facility runs on hundreds of assets. Do you know
                                where each one is, what condition it is in, and when it
                                was last serviced?
                            </p>
                            <p>
                                FusionEdge Digital Asset Register gives you a single,
                                living record of every asset across every site.
                            </p>
                            <p className="font-semibold text-gray-900">
                                Always updated. Always accessible. Always audit ready.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
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

                    <div className="rounded-2xl bg-gray-50 p-4 shadow-sm">
                        <p className="text-sm font-bold text-gray-900">
                            Unified Asset Register
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Track location, status, ownership, service history, and
                            audit readiness from one source of truth.
                        </p>
                    </div>
                </div>

                <div className="relative min-h-[520px] bg-[#D5D5D0] p-6 sm:p-8 lg:min-h-full lg:p-10">
                    <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-auto sm:right-8 sm:top-8">
                        <span className="h-8 w-8 rounded-full bg-white/80 shadow-sm" />
                        <span className="h-8 w-8 rounded-full bg-white/80 shadow-sm" />
                        <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-gray-700 shadow-sm">
                            Asset dashboard
                        </span>
                    </div>

                    <div className="flex h-full flex-col justify-end gap-5 pt-20">
                        <div className="grid gap-4 sm:grid-cols-3">
                            {ASSET_STATS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl bg-white/85 p-4 shadow-lg shadow-gray-400/10 backdrop-blur"
                                >
                                    <p className="text-2xl font-bold text-gray-950">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-3xl bg-gradient-to-br from-[#2DD4BF]/60 to-[#4B2A7A]/40 p-6 backdrop-blur sm:rounded-4xl">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div>
                                    <p className="text-lg font-bold text-gray-950">
                                        Why Asset Registers Matter
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex size-1.5 rounded-full bg-gray-950" />
                                            <span>Avoid fines and compliance gaps.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex size-1.5 rounded-full bg-gray-950" />
                                            <span>Reduce emergency repair costs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex size-1.5 rounded-full bg-gray-950" />
                                            <span>Improve team coordination.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl bg-white/70 p-4 backdrop-blur">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-gradient-to-br from-[#6B3FA0] to-[#2DD4BF] p-2.5 text-white">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-gray-950">
                                                Ready to see your assets clearly?
                                            </p>
                                            <p className="mt-1 text-sm text-gray-700">
                                                Book a live walkthrough and discover how
                                                FusionEdge can transform asset management
                                                for your organization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}