"use client";

import { useState } from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ACCESS_KEY = "3f951b76-ae31-4fcf-9b95-c6c507352a96";
const SUBJECTS = ["General Inquiry", "Technical Support", "Website Feedback"];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState(SUBJECTS[0]);
    const [status, setStatus] = useState<FormStatus>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            access_key: ACCESS_KEY,
            subject: subject,
            ...Object.fromEntries(formData.entries()),
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setMessage("");
                setSubject(SUBJECTS[0]);
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section
            id="contact"
            className="bg-white/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-5xl">
                <div className="relative grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-purple-200/60 lg:grid-cols-[42%_1fr]">

                    {/* ── LEFT PANEL ── */}
                    <div className="relative overflow-hidden bg-[#5B1A8B] p-10 text-white flex flex-col">
                        {/* Teal circle decoration */}
                        <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-[#1DBDA0]" />

                        <h2
                            id="contact-heading"
                            className="text-2xl font-bold tracking-tight"
                        >
                            Contact Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/80">
                            Have some big idea or brand to develop and need help? We&apos;d
                            love to hear from you.
                        </p>

                        <div className="mt-10 flex flex-col gap-6 flex-1">
                            <a
                                href="mailto:info@fusionEdge.com"
                                className="flex items-center gap-4 text-sm text-white/90 hover:text-white transition-colors"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                                    <FaEnvelope className="h-4 w-4 text-[#1DBDA0]" />
                                </span>
                                info@fusionEdge.com
                            </a>
                            <a

                                href="tel:+919015122212"
                                className="flex items-center gap-4 text-sm text-white/90 hover:text-white transition-colors"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                                    <FaPhoneAlt className="h-4 w-4 text-[#1DBDA0]" />
                                </span>
                                +91-9015122212
                            </a>

                            <div className="flex items-center gap-4 text-sm text-white/90">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                                    <FaMapMarkerAlt className="h-4 w-4 text-[#1DBDA0]" />
                                </span>
                                Noida, India
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="relative z-10 mt-12 flex gap-3">
                            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 text-white transition-colors hover:bg-white/15"
                                >
                                    <Icon className="h-4 w-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT PANEL ── */}
                    <form onSubmit={handleSubmit} className="p-10 xl:p-12">
                        <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                            {[
                                { name: "firstName", type: "text", placeholder: "First Name" },
                                { name: "lastName", type: "text", placeholder: "Last Name" },
                                { name: "phone", type: "tel", placeholder: "Phone No." },
                                { name: "email", type: "email", placeholder: "Email" },
                            ].map(({ name, type, placeholder }) => (
                                <input
                                    key={name}
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    required
                                    className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#5B1A8B] transition-colors"
                                />
                            ))}
                        </div>

                        {/* Message + char count */}
                        <div className="mt-8">
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value.slice(0, 500))
                                }
                                rows={4}
                                required
                                placeholder="Write Message"
                                className="w-full resize-none border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#5B1A8B] transition-colors"
                            />
                            <p className="mt-1 text-right text-xs text-gray-400">
                                {message.length}/500
                            </p>
                        </div>

                        {/* Subject radios */}
                        <div className="mt-7">
                            <p className="mb-3 text-sm font-bold text-gray-900">
                                Select Subject
                            </p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {SUBJECTS.map((s) => (
                                    <label
                                        key={s}
                                        className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                    >
                                        <input
                                            type="radio"
                                            name="subject"
                                            value={s}
                                            required
                                            checked={subject === s}
                                            onChange={() => setSubject(s)}
                                            className="accent-[#5B1A8B] h-4 w-4"
                                        />
                                        {s}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B1A8B] to-[#1DBDA0] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-105 active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                            <FiSend className="h-4 w-4" />
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="mt-4 text-sm font-medium text-[#1DBDA0]">
                                Message sent successfully! We&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-sm font-medium text-red-500">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div >
        </section >
    );
}