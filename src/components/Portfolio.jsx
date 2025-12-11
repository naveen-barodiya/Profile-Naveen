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
            name: "Admin Panel Dashboard",
            desc: "A fully responsive admin dashboard UI with charts.",
            live: "http://adminpannel-dashboard.vercel.app",
            image: "admin.png"
        }
    ];

    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='Underline font-semibold'>Featured Projects</span>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                    {cardItems.map(({ id, name, desc, live, image }) => (
                        <div
                            className='md:w-[300px] md:h-[330px] border-[2px] rounded-lg shadow-lg p-3 
                            cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between'
                            key={id}
                        >

                            {/* ⭐ IMAGE SECTION ADDED ⭐ */}
                            <div className="flex justify-center">
                                <img
                                    src={image}
                                    alt={name}
                                    className='w-[120px] h-[120px] rounded-full border-[2px] p-1 object-cover'
                                />
                            </div>

                            <div>
                                <div className='px-2 font-bold text-xl mt-3 mb-1 text-center'>{name}</div>
                                <p className='px-2 text-gray-700 text-center'>{desc}</p>
                            </div>

                            <div className='px-6 py-4 space-x-3 flex justify-center'>
                                <a href={live} target="_blank">
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>
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
