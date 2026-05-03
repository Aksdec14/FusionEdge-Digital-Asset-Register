"use client";

import { useState, useEffect, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface DropdownItem {
    label: string;
    href: string;
    icon?: string;
}

interface NavItem {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
}

// ── Data ───────────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "#home" },
    {
        label: "Asset Register",
        dropdown: [
            { label: "Hidden Cost", href: "#hidden-asset-cost", icon: "⚠️" },
            { label: "Features", href: "#asset-features", icon: "📋" },
            { label: "Trusted Teams", href: "#trusted-facility-teams", icon: "🤝" },
        ],
    },
    {
        label: "Explore",
        dropdown: [
            { label: "More Asset Management", href: "#more-asset-management", icon: "📦" },
            { label: "Blogs", href: "#asset-control", icon: "📝" },
        ],
    },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact Us", href: "#contact" },
];

// ── Logo SVG ───────────────────────────────────────────────────────────────────
function FusionEdgeLogo() {
    return (
        <a href="#home" className="flex items-center flex-shrink-0">
            <img
                src="/FusionEdge_logo.png"
                alt="FusionEdge"
                className="h-16 w-auto object-contain"
            />
        </a>
    );
}

// ── Dropdown Menu ──────────────────────────────────────────────────────────────
function DropdownMenu({
    items,
    isOpen,
}: {
    items: DropdownItem[];
    isOpen: boolean;
}) {
    return (
        <div
            className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50
        bg-white rounded-2xl shadow-xl shadow-gray-200/80 border border-gray-100
        min-w-[230px] overflow-hidden
        transition-all duration-200 origin-top
        ${isOpen ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"}
      `}
        >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]" />

            <ul className="py-2">
                {items.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#6B3FA0] transition-colors duration-150 group/item"
                        >
                            {item.icon && (
                                <span className="text-base w-5 text-center">{item.icon}</span>
                            )}
                            <span className="font-medium leading-snug">{item.label}</span>
                            <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-[#6B3FA0] text-xs">→</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── NavLink ────────────────────────────────────────────────────────────────────
function NavLink({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    if (item.dropdown) {
        return (
            <div
                ref={ref}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    onClick={() => setOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium px-1 py-1 rounded-lg transition-colors duration-150
            ${open ? "text-[#6B3FA0]" : "text-gray-600 hover:text-[#6B3FA0]"}`}
                    aria-haspopup="true"
                    aria-expanded={open}
                >
                    {item.label}
                    <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <DropdownMenu items={item.dropdown} isOpen={open} />
            </div>
        );
    }

    return (
        <a
            href={item.href}
            className="text-sm font-medium text-gray-600 hover:text-[#6B3FA0] px-1 py-1 transition-colors duration-150"
        >
            {item.label}
        </a>
    );
}

// ── Mobile Menu ────────────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <div
            className={`
        fixed inset-0 z-40 lg:hidden
        transition-all duration-300
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
        >
            <div
                className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            />

            <div
                className={`
          absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl
          flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <FusionEdgeLogo />

                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-3 px-3">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label}>
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-[#6B3FA0] transition-colors"
                                    >
                                        {item.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${openSection === item.label ? "rotate-180 text-[#6B3FA0]" : ""}`}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-200 ${openSection === item.label ? "max-h-96" : "max-h-0"}`}>
                                        <ul className="pl-3 pb-1">
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.href}>
                                                    <a
                                                        href={sub.href}
                                                        onClick={onClose}
                                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#6B3FA0] hover:bg-purple-50 transition-colors"
                                                    >
                                                        <span>{sub.icon}</span>
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href={item.href}
                                    onClick={onClose}
                                    className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-[#6B3FA0] transition-colors"
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <a
                        href="#contact"
                        onClick={onClose}
                        className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-purple-200"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`
          fixed top-1 inset-x-0 z-30
          transition-all duration-300
          ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm shadow-gray-200/60 border-b border-gray-100"
                        : "bg-white border-b border-gray-100/60"
                    }
        `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <FusionEdgeLogo />

                        <nav className="hidden lg:flex items-center gap-1">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label} className="px-2">
                                    <NavLink item={item} />
                                </div>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center">
                            <a
                                href="#contact"
                                className="
                  inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl
                  text-sm font-semibold text-white
                  bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]
                  hover:shadow-lg hover:shadow-purple-200 hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all duration-200
                "
                            >
                                Get Started
                                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>

                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Open menu"
                        >
                            <span className="block w-5 h-0.5 bg-gray-700 rounded-full" />
                            <span className="block w-5 h-0.5 bg-gray-700 rounded-full" />
                            <span className="block w-3.5 h-0.5 bg-gray-700 rounded-full ml-[-3px]" />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

            <div className="h-16" />
        </>
    );
}