import React from 'react'
import python from "../../public/python.webp"
import cpp from "../../public/c++.jpg"
import django from "../../public/django.png"
// import sql from "../../public/mysql.jpd"
import react from "../../public/react.png"
import node from "../../public/node.webp"
const Portfolio = () => {

    const cardItems = [
        {
            id:1,
            logo:python,
            name:"Python"
        },
        {
            id:2,
            logo:cpp,
            name:"CPP"
        },
        {
            id:3,
            logo:django,
            name:"Django"
        },
        // {
        //     id:4,
        //     logo:sql,
        //     name:"MYSQL"
        // },
        {
            id:5,
            logo:react,
            name:"React"
        },
        {
            id:6,
            logo:node,
            name:"NodeJs"
        }
    ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='Underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' key={id}>
                        <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' />
                        <div>
                            <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='px-6 py-4 space-x-3 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
