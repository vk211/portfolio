"use client";

import React, { useState, useEffect } from "react";
import {
    FaAngleRight,
    FaAngleDown,
} from "react-icons/fa";
import { navItems } from "../../../utils/data";

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(navItems[0].id);
    const [isVisible, setIsVisible] = useState(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const resetHideTimeout = () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        setHideTimeout(setTimeout(() => setIsVisible(false), 2000));
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(true);
            resetHideTimeout();

            const sections = document.querySelectorAll("section");
            const scrollPos = window.scrollY || document.documentElement.scrollTop;

            sections.forEach((section) => {
                const offsetTop = section.offsetTop;
                const offsetBottom = offsetTop + section.offsetHeight;

                if (scrollPos >= offsetTop - 50 && scrollPos < offsetBottom - 50) {
                    const sectionId = section.getAttribute("id");
                    const sectionLabel = navItems.find((item) => item.id === sectionId)?.label;

                    setActiveSection(sectionId || "");

                    if (debounceTimeout) clearTimeout(debounceTimeout);
                    setDebounceTimeout(
                        setTimeout(() => {
                            document.title = `Vijay Goud Kodipyaka | ${sectionLabel}`;
                            window.history.pushState(null, "", `#${sectionId}`);
                        }, 200)
                    );
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimeout) clearTimeout(hideTimeout);
            if (debounceTimeout) clearTimeout(debounceTimeout);
        };
    }, [hideTimeout, debounceTimeout, resetHideTimeout]);

    const handleClick = () => {
        resetHideTimeout();
    };

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
        resetHideTimeout();
    };

    const SidebarContent = ({ isVertical }: { isVertical: boolean }) => (
        <ul className={`flex ${isVertical ? 'flex-col justify-center' : 'flex-row items-center'} m-0`}>
            {navItems.map((item) => (
                <li
                    key={item.id}
                    className={`${isVertical? 'my-4': 'mx-4'} transition-transform duration-300 ease-in-out ${activeSection === item.id
                        ? 'scale-150 opacity-100'
                        : 'scale-80 opacity-50 hover:opacity-200'}`}
                >
                    <a
                        href={`#${item.id}`}
                        onClick={() => handleClick()}
                        className="no-underline flex flex-col items-center justify-center text-2xl"
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div
                className={`hidden md:block fixed top-1/2 left-0 transform -translate-y-1/2 z-1000 ${isVisible ? 'w-fit p-4' : 'w-10'}
                rounded-r-2xl p-2 shadow-lg transition-all duration-100 ease-in-out bg-white`}
            >
                <div className="cursor-pointer text-2xl" onClick={toggleSidebar}>
                    {isVisible ? "" : <FaAngleRight />}
                </div>
                {isVisible && <SidebarContent isVertical={true} />}
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden block fixed top left-1/2 transform -translate-x-1/2 z-1000 ${isVisible ? 'w-fit p-4' : 'w-10'}
                rounded-b-2xl p-2 shadow-lg transition-all duration-100 ease-in-out bg-white`}
            >
                <div className="cursor-pointer text-2xl" onClick={toggleSidebar}>
                    {isVisible ? "" : <FaAngleDown />}
                </div>
                {isVisible && <SidebarContent isVertical={false} />}
            </div>
        </>
    );
};

export default Sidebar;
