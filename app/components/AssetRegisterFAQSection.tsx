"use client";

import { useState } from "react";

const FAQS = [
    {
        question:
            "Can the Digital Asset Register be customised to fit our facility's needs?",
        answer:
            "Absolutely. FusionEdge is built to adapt to your operations. You can configure asset categories, custom fields, document types, and site structures to match exactly how your facility works.",
    },
    {
        question: "Can we manage assets across multiple sites from one account?",
        answer:
            "Yes. Whether you manage two sites or twenty, the Digital Asset Register gives you a consolidated portfolio view and the ability to drill down into any individual location at any time.",
    },
    {
        question: "How does QR code tagging work in the field?",
        answer:
            "Each asset gets a unique dynamic QR code. Your field team scans it using their mobile and instantly accesses the full asset profile, service history, and action options - no dedicated app required for basic information access.",
    },
    {
        question: "Is the data secure and audit ready?",
        answer:
            "Yes. FusionEdge is hosted on AWS with 256 bit AES encryption, role based access control, and a complete audit trail across all activity. Every record is timestamped and instantly retrievable.",
    },
    {
        question: "How long does it take to go live?",
        answer:
            "Most facilities are up and running within 4 to 5 weeks. Our team handles configuration, onboarding, and training so your team hits the ground running from day one.",
    },
];

export default function AssetRegisterFAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            id="faqs"
            className="bg-white/40 px-4 py-6 sm:px-6 lg:px-8"
            aria-labelledby="asset-register-faq-heading"
        >
            <div className="mx-auto max-w-7xl bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold text-[#6B3FA0]">
                            <span className="h-2 w-2 rounded-sm bg-[#6B3FA0]" />
                            Frequently asked questions
                        </span>

                        <h2
                            id="asset-register-faq-heading"
                            className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-normal text-gray-950 sm:text-5xl"
                        >
                            Got Questions? We Have{" "}
                            <span className="text-[#7C5CE6]">Answers.</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                            Find quick answers about customisation, multi-site asset
                            management, QR tagging, security, and go-live timelines for
                            FusionEdge Digital Asset Register.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <article
                                    key={faq.question}
                                    className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-200 hover:shadow-md"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                                        aria-expanded={isOpen}
                                        aria-controls={`asset-register-faq-${index}`}
                                    >
                                        <span className="text-base font-bold leading-7 text-gray-950 sm:text-lg">
                                            {faq.question}
                                        </span>
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C5CE6] text-lg font-bold text-white shadow-md shadow-purple-200">
                                            {isOpen ? "⌃" : "⌄"}
                                        </span>
                                    </button>

                                    <div
                                        id={`asset-register-faq-${index}`}
                                        className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="min-h-0">
                                            <p className="px-5 pb-5 text-sm leading-7 text-gray-500 sm:px-6 sm:pb-6 sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}