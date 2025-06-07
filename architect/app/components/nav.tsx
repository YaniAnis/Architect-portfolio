'use client';

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [language, setLanguage] = useState("fr");
    const [isAtTop, setIsAtTop] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    const languages = [
        { value: "fr", label: "Français" },
        { value: "ar", label: "Arabe" },
        { value: "en", label: "English" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 flex items-center justify-between p-4 font-bold flex-wrap no-underline transition-colors duration-300
                ${isAtTop ? "bg-transparent text-white shadow-none" : "bg-white text-black shadow-md"}
            `}
        >
            <div className="text-lg font-bold ml-2">My Navbar</div>
            <ul className="flex space-x-4 items-center ml-8">
                <li><a href="#home" className="center">Accueil</a></li>
                <li><a href="#Projet" className="hover:text-gray-700 no-underline">Nos Projet</a></li>
                <li><a href="#Propos" className="hover:text-gray-700 no-underline">À Propos</a></li>
                <li><a href="#Locaux" className="hover:text-gray-700 no-underline">Nos Localités</a></li>
                <li><a href="#contact" className="hover:text-gray-700 no-underline">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-2">
                {/* Tailwind-based Language Dropdown */}
                <div
                    ref={dropdownRef}
                    className="relative min-w-[120px]"
                >
                    <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        className="
                            flex items-center justify-between w-32 px-5 py-3 bg-green-900 text-white rounded-lg font-medium text-[15px] shadow-md
                            transition-all duration-300
                            hover:bg-green-950 hover:shadow-lg
                            active:shadow
                            focus:outline-none
                        "
                    >
                        <span>
                            {languages.find((l) => l.value === language)?.label}
                        </span>
                        <span className={`
                            ml-2 text-xs transition-transform duration-300
                            ${dropdownOpen ? "rotate-180" : ""}
                        `}>
                            &#9660;
                        </span>
                    </button>
                    <div
                        className={`
                            absolute left-0 w-full bg-white rounded-xl shadow-xl mt-2 z-10 overflow-hidden
                            transition-all duration-300
                            ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
                        `}
                        role="listbox"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.value}
                                type="button"
                                className={`
                                    w-full text-left px-5 py-3 text-[15px] transition
                                    ${language === lang.value
                                        ? "bg-green-100 font-semibold text-green-900 border-l-4 border-green-900"
                                        : "hover:bg-gray-100"}
                                    relative
                                `}
                                role="option"
                                aria-selected={language === lang.value}
                                tabIndex={0}
                                onClick={() => {
                                    setLanguage(lang.value);
                                    setDropdownOpen(false);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setLanguage(lang.value);
                                        setDropdownOpen(false);
                                    }
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
