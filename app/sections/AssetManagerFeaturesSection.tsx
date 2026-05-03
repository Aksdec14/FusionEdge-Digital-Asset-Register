"use client";

const FEATURES = [
    {
        title: "Complete Asset Profiles",
        description:
            "Every detail about every asset: make, model, serial number, location, and status in one place.",
        imageNote: "Screenshot of an asset profile page on FusionEdge dashboard",
        size: "large",
    },
    {
        title: "QR Code Asset Tagging",
        description:
            "Scan any asset to instantly pull up its full history, raise a ticket, or log a reading.",
        imageNote: "Field technician scanning a QR code on an asset",
        size: "tall",
    },
    {
        title: "Smart Asset Categorisation",
        description:
            "Organise assets by type, building, floor, and zone. Find what you need in seconds, not minutes.",
        imageNote: "Asset categorisation tree or filter view on platform",
        size: "small",
    },
    {
        title: "Document Management",
        description:
            "Invoices, manuals, warranties, inspection certificates: all attached directly to the asset profile.",
        imageNote: "Document attachment view on an asset profile",
        size: "small",
    },
    {
        title: "Multi Site Portfolio Management",
        description:
            "One consolidated view across all your sites. Drill down to any location anytime.",
        imageNote: "Multi site dashboard or portfolio overview screen",
        size: "small",
    },
];

export default function AssetManagerFeaturesSection() {
    return (
        <section
            id="asset-features"
            className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="asset-features-heading"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                        Asset Register Features
                    </span>

                    <h2
                        id="asset-features-heading"
                        className="mt-5 text-3xl font-bold leading-tight tracking-normal text-gray-950 sm:text-4xl lg:text-5xl"
                    >
                        Built for Facility Managers Who Cannot Afford to Miss a Thing.
                    </h2>
                </div>

                <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[280px_260px]">
                    {FEATURES.map((feature) => (
                        <article
                            key={feature.title}
                            className={`group flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/80 sm:p-6 ${feature.size === "large"
                                    ? "lg:col-span-2"
                                    : feature.size === "tall"
                                        ? "lg:col-span-1"
                                        : ""
                                }`}
                        >
                            <div>
                                <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-600">
                                    {feature.imageNote}
                                </span>

                                <h3
                                    className={`mt-5 font-bold leading-tight tracking-normal text-gray-950 ${feature.size === "large"
                                            ? "text-3xl sm:text-4xl"
                                            : "text-2xl"
                                        }`}
                                >
                                    {feature.title}
                                </h3>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="mt-8 rounded-2xl bg-white/70 p-4">
                                <div className="grid gap-3 sm:grid-cols-3">
                                    <div className="h-2 rounded-full bg-gray-300" />
                                    <div className="h-2 rounded-full bg-gray-300" />
                                    <div className="h-2 rounded-full bg-gray-300" />
                                </div>
                                <div className="mt-4 h-20 rounded-xl bg-white shadow-sm" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}