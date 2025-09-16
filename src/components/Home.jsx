import React from 'react'
import pic from "../../public/naveenprofile.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>
       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcom In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello ,I'm a </h1>
            {/* <span className='text-red-700 font-bold'>Developer</span> */}
            <ReactTyped
            className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>I am a skilled web developer with experience in designing and building responsive, user-friendly websites. I specialize in front-end and/or back-end development (mention your expertise), with proficiency in technologies like HTML, CSS, JavaScript, and frameworks/libraries such as React. I enjoy creating seamless web experiences and solving complex coding challenges.
        </p>
        <br />
        {/* social media icon */}
       <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2 '>
            <h1 className='font-bold text-center'>Available on</h1>
           <ul className='flex space-x-5'>
              <li>
               <a href="https://www.facebook.com/" target='_blank'>
                <FaFacebookSquare className='text-2xl cursor-pointer' /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/naveen-barodiya-60a19a2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <FaLinkedin className='text-2xl cursor-pointer'/></a>
              </li>
              <li>
              <a href="https://www.youtube.com/" target='_blank'>
            <IoLogoYoutube className='text-2xl cursor-pointer'/></a>
              </li>
              <li>
                <a href="https://telegram.org/" target='_blank'>
            <FaTelegram className='text-2xl cursor-pointer'/></a>
              </li>
           </ul>
        </div>
        <div className='space-y-2'>
        <h1 className='font-bold'>Currently Working On</h1>
           <div className='flex space-x-5'>
           <FaPython className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <SiDjango className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <IoLogoReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <TbBrandMysql className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           </div>
        </div>
       </div>
       </div>    
       <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[350px] md:h-[350px]' alt="" />
       </div>    
       </div>
    </div> 
    <hr />
    </>
  )
}

export default Home
