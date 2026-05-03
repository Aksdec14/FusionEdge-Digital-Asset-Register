"use client";

const CLIENT_LOGOS = [
    "Commercial RE",
    "Integrated FM",
    "Corporate Campus",
    "Industrial Site",
    "Workplace Ops",
    "Healthcare FM",
    "Education Campus",
    "Retail Facilities",
];

export default function DigitalFacilityLogoCarousel() {
    const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section
            id="trusted-facility-teams"
            className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
            aria-labelledby="digital-facility-heading"
        >
            <style>{`
                @keyframes fusionedgeLogoScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .fusionedge-logo-track {
                    animation: fusionedgeLogoScroll 28s linear infinite;
                }

                .fusionedge-logo-carousel:hover .fusionedge-logo-track {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                        Digital Facility Operations
                    </span>

                    <h2
                        id="digital-facility-heading"
                        className="mt-5 text-3xl font-bold leading-tight tracking-normal text-gray-950 sm:text-4xl lg:text-5xl"
                    >
                        The future of India is digital. So is your facility.
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                        Every asset you digitise on FusionEdge is one less paper
                        register and one big step towards a sustainable facility
                        operation.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                        Trusted by Facility Teams Across India and Singapore
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Attach logos of current clients in a clean horizontal logo strip.
                    </p>
                </div>
            </div>

            <div className="fusionedge-logo-carousel relative mt-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

                <div className="fusionedge-logo-track flex w-max gap-4 px-4">
                    {logos.map((logo, index) => (
                        <div
                            key={`${logo}-${index}`}
                            className="flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-5 text-center shadow-sm sm:w-60"
                        >
                            <span className="text-sm font-bold uppercase tracking-normal text-gray-600">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}