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

export default function DigitalFacilityStoriesSection() {
    return (
        <section
            id="digital-facility"
            className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="digital-facility-heading"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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

                    <div className="relative min-h-[460px]">
                        <div className="absolute left-0 top-20 hidden h-72 w-[52%] rounded-lg bg-gray-200 lg:block" />
                        <div className="ml-auto min-h-[300px] rounded-lg bg-gray-200 p-6 sm:p-8 lg:w-[62%]">
                            <div className="h-full rounded-lg border border-white/50 bg-white/20" />
                        </div>

                        <div className="mt-5 rounded-lg bg-white p-6 shadow-2xl shadow-gray-200/90 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[70%]">
                            <p className="text-sm font-semibold uppercase tracking-normal text-gray-400">
                                Real Facilities. Real Results.
                            </p>
                            <p className="mt-3 text-sm leading-7 text-gray-600">
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