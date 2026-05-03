"use client";

const BLOG_LINKS = [
    {
        title: "Asset Management",
        description:
            "Everything you need to know about managing facility assets at scale.",
        href: "#asset-management",
    },
    {
        title: "Facility and Inventory",
        description:
            "How smart inventory management keeps your facility running without gaps.",
        href: "#facility-and-inventory",
    },
    {
        title: "ESG and Engagement",
        description:
            "How modern facilities are tracking sustainability and stakeholder satisfaction.",
        href: "#esg-and-engagement",
    },
];

export default function AssetControlMegaBanner() {
    return (
        <section
            id="asset-control"
            className="w-full overflow-hidden bg-white py-14 text-gray-950 sm:py-20 lg:py-24"
            aria-labelledby="asset-control-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                            Your Data. Your Control.
                        </span>

                        <h2
                            id="asset-control-heading"
                            className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-5xl"
                        >
                            We build the platform. You own everything inside it.
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                        We never view, share, or retain your data: and the day you
                        leave, it is deleted completely. No copies. No exceptions.
                    </p>
                </div>

                <div className="mt-10 rounded-[2rem] bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] p-[1px] shadow-2xl shadow-purple-100 sm:mt-12">
                    <div className="rounded-[2rem] bg-white p-6 sm:p-8 lg:p-10">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <h3 className="text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
                                    Ready to Take Control of Your Assets?
                                </h3>

                                <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
                                    Stop managing assets on spreadsheets. Book a free
                                    demo today and see how FusionEdge transforms the
                                    way your facility tracks, manages, and optimises
                                    every asset.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-100 transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                                >
                                    Get a Free Demo
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:border-[#6B3FA0] hover:text-[#6B3FA0] active:scale-[0.98]"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B3FA0]">
                        Read Our Blogs
                    </span>

                    <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
                            Insights for Facility Managers
                        </h3>

                        <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                            Practical ideas for facility teams improving asset
                            visibility, inventory control, and sustainable operations.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-3">
                        {BLOG_LINKS.map((blog) => (
                            <a
                                key={blog.title}
                                href={blog.href}
                                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-100 sm:p-7"
                            >
                                <span className="text-xl font-bold text-gray-950 transition-colors group-hover:text-[#6B3FA0]">
                                    {blog.title} →
                                </span>

                                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                                    {blog.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
