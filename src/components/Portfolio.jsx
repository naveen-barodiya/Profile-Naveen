import React from 'react';

const Portfolio = () => {

    const cardItems = [
        {
            id: 1,
            name: "Custom Tech Website",
            desc: "A modern tech website built with React & Tailwind.",
            live: "https://custom-tech.vercel.app",
            image: "customtech.jpg"
        },
        {
            id: 2,
            name: "Delhi Food Corner",
            desc: "A restaurant website showcasing menu & UI design.",
            live: "https://delhi-food-corner.vercel.app",
            image: "delhifood.png"
        },
        {
            id: 3,
            name: "Paste App",
            desc: "A quick paste-sharing application like Pastebin.",
            live: "http://paste-app-liart-pi.vercel.app",
            image: "unnamed.png"
        },
        {
            id: 4,
            name: "Ecommerce Store",
            desc: "A fully responsive Ecoomerce site to purches Products.",
            live: "http://shop-ease-xi-ten.vercel.app",
            image: "ecom.avif"
        }
    ];

    return (
        <div name="Portfolio" className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                <span className="Underline font-semibold">Featured Projects</span>

                {/* GRID IMPROVED RESPONSIVENESS */}
                <div className="grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 
                     gap-6
                    my-8 ">

                    {cardItems.map(({ id, name, desc, live, image }) => (
                        <div
                            key={id}
                            className="border-[2px] rounded-lg shadow-lg p-4
                            hover:scale-[1.03] duration-300 cursor-pointer
                            flex flex-col items-center text-center bg-white"
                        >

                            {/* Responsive Image */}
                            <img
                                src={image}
                                alt={name}
                                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[2px] p-1 object-cover"
                            />

                            <h2 className="text-lg sm:text-xl font-bold mt-4">{name}</h2>

                            <p className="text-gray-700 text-sm sm:text-base mt-2 px-2">
                                {desc}
                            </p>

                            {/* Button Section */}
                            <div className="mt-4">
                                <a href={live} target="_blank">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
                                        Live Demo
                                    </button>
                                </a>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
