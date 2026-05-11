import Image from 'next/image';

export default function PrivacyPolicy() {
    const sections = [
        {
            number: "01",
            title: "Introduction",
            content:
                'Welcome to FusionEdge ("Company", "we", "our", or "us"). This Privacy Policy describes how we collect, use, disclose, and protect your information when you access or use our website (fusionedge.io), mobile applications available on Android and iOS platforms, and our enterprise SaaS platforms and related services (collectively referred to as the "Services"). By using our Services, you agree to the practices outlined in this Privacy Policy.',
        },
        {
            number: "02",
            title: "Scope of This Policy",
            content:
                "This Privacy Policy applies to all users of FusionEdge Services, including website visitors, registered users of our SaaS platforms, mobile application users, and business clients along with their authorized personnel. This policy does not apply to third-party platforms or services that are not owned or controlled by FusionEdge.",
        },
        {
            number: "03",
            title: "Information We Collect",
            content:
                "We collect information necessary to operate, improve, and secure our Services. This includes personal information such as your name, email address, phone number, organization details, and billing information when you register or engage with our Services. We also collect account-related data such as login credentials (stored securely in encrypted form), user roles, preferences, and system configurations.\n\nIn addition, we automatically collect device and technical information including your device type, operating system, browser type, IP address, and unique device identifiers. We also gather usage and analytics data such as pages visited, session activity, feature interactions, logs, diagnostics, and crash reports to better understand system performance and user behavior.\n\nWhere enabled, we may collect location data, which may include approximate location derived from IP addresses or precise location if explicitly permitted by the user. Our Services are not intended for children under the age of 13, and we do not knowingly collect personal data from minors.",
        },
        {
            number: "04",
            title: "How We Use Your Information",
            content:
                "The information we collect is used to provide, maintain, and enhance our Services. This includes managing user accounts, enabling platform functionalities such as dashboards, workflows, and reporting tools, and ensuring seamless operation of enterprise modules.\n\nWe also use the data to improve our products by analyzing usage patterns, identifying performance issues, and developing new features. Communication is another key purpose, allowing us to send system notifications, updates, and respond to support queries.\n\nAdditionally, we process information to maintain security and compliance by detecting unauthorized activities, preventing misuse, and ensuring adherence to applicable laws and regulations. Where applicable, data may also be used to personalize the user experience, including customized dashboards and configurable platform settings.\n\nWe do not sell personal data to any third party.",
        },
        {
            number: "05",
            title: "Third-Party Services & Integrations",
            content:
                "FusionEdge integrates with select third-party service providers to support analytics, communication, system monitoring, and infrastructure management. These may include analytics platforms, crash reporting tools, notification services, and cloud hosting providers. While these partners may process certain data to provide their services, they operate under their own privacy policies, and we ensure that such integrations follow appropriate data protection standards.",
        },
        {
            number: "06",
            title: "Data Sharing & Disclosure",
            content:
                "We may share information with trusted service providers who assist us in operating our platform, including hosting providers, analytics services, and communication tools. We may also disclose information where required by law, regulation, or legal process, or when necessary to protect the rights, safety, and integrity of FusionEdge, its users, or third parties.\n\nIn the event of a business transaction such as a merger, acquisition, or restructuring, user information may be transferred as part of the business assets. Additionally, we may share data with your explicit consent for specific integrations or features. We do not share personal data for advertising or marketing purposes without your consent.",
        },
        {
            number: "07",
            title: "Data Retention",
            content:
                "We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including providing services, complying with legal obligations, resolving disputes, and enforcing agreements. Once data is no longer required, it is securely deleted or anonymized in accordance with our internal policies.",
        },
        {
            number: "08",
            title: "Data Security",
            content:
                "FusionEdge implements robust technical and organizational measures to protect your data. This includes encryption of data in transit using secure protocols, encryption at rest where applicable, role-based access controls, secure authentication mechanisms, and continuous monitoring of systems. We also conduct regular vulnerability assessments and security reviews to ensure ongoing protection against threats.",
        },
        {
            number: "09",
            title: "Security Standards & Compliance Readiness",
            content:
                "FusionEdge is committed to maintaining a high standard of information security aligned with globally recognized frameworks. Our practices are designed in accordance with the principles of ISO/IEC 27001 and are structured to support SOC 2 readiness. This includes the implementation of internal policies related to access control, data classification, incident management, and risk assessment.\n\nWe follow a least-privilege access model, maintain audit logs for system activities, and incorporate secure development lifecycle practices into our engineering processes. Regular internal reviews and security assessments are conducted to continuously strengthen our security posture and meet the expectations of enterprise clients.",
        },
        {
            number: "10",
            title: "Your Rights & Controls",
            content:
                "You have control over your personal data and may request access to the information we hold about you, seek corrections to inaccurate data, or request deletion of your data where applicable. You may also opt out of non-essential communications and withdraw consent for certain data processing activities.\n\nRequests can be made through available platform settings or by contacting us directly at privacy@fusionedge.io, and we will respond within a reasonable timeframe.",
        },
        {
            number: "11",
            title: "Cookies & Tracking Technologies",
            content:
                "We use cookies and similar technologies to enhance user experience, analyze usage patterns, and store user preferences. These technologies help us improve functionality and performance. You may choose to manage or disable cookies through your browser settings, though this may impact certain features of the Services.",
        },
        {
            number: "12",
            title: "App Store Compliance",
            content:
                "FusionEdge ensures compliance with platform-specific requirements for mobile applications. For Google Play Store, we maintain transparency in data collection and ensure secure handling of user data. For Apple App Store, we respect user privacy choices and request permissions where required by the operating system.",
        },
        {
            number: "13",
            title: "International Data Transfers",
            content:
                "Your information may be processed or stored on servers located in different jurisdictions. In such cases, we take appropriate measures to ensure that your data remains protected and handled in accordance with applicable standards.",
        },
        {
            number: "14",
            title: "Changes to This Privacy Policy",
            content:
                "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Updated versions will be posted on our website, and continued use of the Services after such updates constitutes acceptance of the revised policy.",
        },
        {
            number: "15",
            title: "Contact Us",
            content:
                "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at Email: privacy@fusionedge.io.",
        },
    ];

    return (
        <main className="bg-white text-[#111111] font-serif min-h-screen mt-10">
            {/* ── HEADER ── */}
            <header className="border-b border-[#111111] py-8 md:py-10">
                <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
                    <div className="flex flex-col gap-4 md:gap-5">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.025em] text-[#111111]">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </header>

            {/* ── BODY ── */}
            <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-16 md:pb-20">

                {/* TOC — inline on mobile, sticky sidebar on md+ */}
                <div className="md:grid md:grid-cols-[200px_1fr] md:gap-x-10 lg:grid-cols-[260px_1fr] lg:gap-x-16 md:items-start">

                    {/* Sidebar / TOC */}
                    <aside
                        aria-label="Table of contents"
                        className="
                            border-b border-[#e8e8e8] py-8
                            md:border-b-0 md:border-r md:border-[#e8e8e8]
                            md:sticky md:top-10
                            md:py-12 md:pr-7
                            lg:pr-10
                        "
                    >
                        <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#bbbbbb] mb-4 md:mb-5">
                            Contents
                        </p>
                        <ul className="list-none grid grid-cols-2 gap-x-4 sm:grid-cols-2 md:flex md:flex-col md:gap-x-0">
                            {sections.map((section) => (
                                <li key={section.number} className="flex items-baseline gap-2">
                                    <span className="font-sans text-[10px] text-[#cccccc] shrink-0 w-5">
                                        {section.number}
                                    </span>
                                    <a
                                        href={`#section-${section.number}`}
                                        className="font-sans text-[12px] text-[#666666] no-underline leading-[1.5] py-[3px] block transition-colors duration-150 hover:text-[#111111]"
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main sections */}
                    <div className="pt-8 md:pt-12">
                        {sections.map((section) => (
                            <section
                                key={section.number}
                                id={`section-${section.number}`}
                                className="border-b border-[#ebebeb] last:border-b-0 py-8 md:py-[52px]"
                            >
                                {/* Number + title row */}
                                <div className="flex items-baseline gap-4 mb-3 md:mb-4">
                                    <span
                                        aria-hidden="true"
                                        className="font-sans text-[11px] text-[#cccccc] tracking-[0.05em] shrink-0"
                                    >
                                        {section.number}
                                    </span>
                                    <h2 className="text-lg md:text-xl lg:text-[22px] font-normal tracking-[-0.01em] text-[#111111] leading-snug">
                                        {section.title}
                                    </h2>
                                </div>

                                {/* Body text — indented to align with title */}
                                <div className="pl-9 md:pl-10">
                                    <div className="text-[15px] leading-[1.8] text-[#3a3a3a] [&>p+p]:mt-4">
                                        {section.content.split("\n\n").map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                </div>
            </div>

            {/* ── FOOTER ── */}
            <footer className="border-t border-[#111111]">
                <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                    <Image
                        src="/fe_logo.png"
                        alt="FusionEdge"
                        width={150}
                        height={40}
                        className="h-6 w-auto sm:h-4 md:h-6 lg:h-8 xl:h-10 object-contain"
                    />
                    <span className="font-sans text-xs text-[#777777]">
                        Questions?{" "}
                        <a
                            href="mailto:privacy@fusionedge.io"
                            className="text-[#111111] no-underline border-b border-[#cccccc] pb-px transition-colors duration-150 hover:border-[#111111]"
                        >
                            privacy@fusionedge.io
                        </a>
                    </span>
                </div>
            </footer>
        </main>
    );
}