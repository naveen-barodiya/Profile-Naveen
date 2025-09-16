import React from 'react'
import html from "../../public/html.webp"
import css from "../../public/css.png"
import js from "../../public/javascript.png"
import python from "../../public/python.webp"
import react from "../../public/react.png"
import cpp from "../../public/c++.jpg"
import tailwindCss from "../../public/tailwind.png"
import git from "../../public/git.webp"
const Experiance=() => {

    const cardItems = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:js,
            name:"JavaScript"
        },
        {
            id:4,
            logo:python,
            name:"Python"
        },
        {
            id:5,
            logo:react,
            name:"React"
        },
        {
            id:6,
            logo:cpp,
            name:"CPP"
        },
        {
            id:7,
            logo:tailwindCss,
            name:"TailwindCss"
        },
        {
            id:7,
            logo:git,
            name:"GitHub"
        }
    ]

  return (
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
        <p className=''>I've more than 6 month experiance in below technologies </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='flex flex-col items-center justify-center rounded-full md:[200px] md:h[200px] p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                        <img src={logo} alt="" className='w-[150px] rounded-full ' />
                        <div>
                            <div className=''>{name}</div>
                            
                        </div>
                        
                    </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Experiance;
