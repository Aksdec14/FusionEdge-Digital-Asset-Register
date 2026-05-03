"use client";

const PAIN_POINTS = [
    "Fragmented spreadsheets",
    "Outdated paper registers",
    "Scattered asset information",
];

export default function HiddenAssetCostSection() {
    return (
        <section
            id="hidden-asset-cost"
            className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="hidden-asset-cost-heading"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid overflow-hidden rounded-[2rem] bg-gray-100 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:p-10 xl:p-12">
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-semibold uppercase tracking-normal text-[#6B3FA0]">
                            Asset Visibility Risk
                        </span>

                        <h2
                            id="hidden-asset-cost-heading"
                            className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-normal text-gray-950 sm:text-4xl lg:text-5xl"
                        >
                            The Hidden Cost of Not Knowing Your Assets
                        </h2>

                        <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-gray-600">
                            <p>
                                Fragmented spreadsheets. Outdated paper registers. Asset
                                information scattered across teams and locations.
                            </p>
                            <p>
                                For most facility managers, tracking assets manually means
                                spending more time finding information than actually acting
                                on it.
                            </p>
                            <p className="font-semibold text-gray-850">
                                And we understand that the missing information becomes an
                                expensive problem when an asset fails, an audit arrives, or
                                a maintenance decision needs to be made.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#6B3FA0] active:scale-[0.98]"
                        >
                            Get a Free Demo
                        </a>
                    </div>

                    <div className="mt-10 rounded-[1.75rem] bg-white p-5 shadow-xl shadow-gray-300/60 lg:mt-0 lg:p-7">
                        <div className="grid gap-4 sm:grid-cols-3">
                            {PAIN_POINTS.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
                                >
                                    <div className="mb-6 h-2 w-14 rounded-full bg-gray-200" />
                                    <p className="text-sm font-bold leading-6 text-gray-900">
                                        {item}
                                    </p>
                                    <p className="mt-2 text-xs leading-5 text-gray-500">
                                        Delays decisions and increases operational risk.
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-5">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-normal text-red-500">
                                        Missing information cost
                                    </p>
                                    <p className="mt-2 text-2xl font-bold text-gray-950">
                                        Failure. Audit gaps. Slow decisions.
                                    </p>
                                </div>
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-red-500 shadow-sm">
                                    !
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {["Asset fails", "Audit arrives", "Decision pending"].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl bg-gray-950 px-4 py-3 text-center text-sm font-semibold text-white"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}