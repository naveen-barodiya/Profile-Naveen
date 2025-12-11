import React, { useState, useEffect } from 'react';
import pic from "../../public/naveenprofile.jpg";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [navBg, setNavBg] = useState(false);

    // Navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) setNavBg(true);
            else setNavBg(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experiance" },
        { id: 5, text: "Contact" }
    ];

    return (
        <>
            <div
                className={`w-full px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 
        ${navBg ? "bg-white shadow-md backdrop-blur-lg" : "bg-transparent backdrop-blur-xl"}`}
            >
                <div className="flex justify-between items-center h-16">

                    {/* LOGO */}
                    <div className="flex space-x-2 items-center">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Nav<span className="text-green-500 text-2xl">ee</span>n
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div>
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map(({ id, text }) => (
                                <li key={id} className="hover:scale-105 duration-200 cursor-pointer font-medium">
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                        className="nav-link"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div
                            onClick={() => setMenu(!menu)}
                            className="md:hidden cursor-pointer"
                        >
                            {menu ? <IoClose size={26} /> : <IoMenuSharp size={26} />}
                        </div>
                    </div>

                </div>

                {/* Mobile Menu */}
                {menu && (
                    <div className="bg-white shadow-md md:hidden">
                        <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl">
                            {navItems.map(({ id, text }) => (
                                <li key={id} className="hover:scale-105 duration-200 font-semibold">
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                        className="nav-link"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
