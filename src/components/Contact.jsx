import React from 'react'
import { useForm } from "react-hook-form";
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <div name="Contact" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16' >
        <h1 className='text-3xl fontbold mb-4'>Contact Me</h1>
        <span>Please fill out the form below to contect me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form action="https://getform.io/f/axoovmkb" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send your Messege </h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-fray-700' htmlFor="">Full Name</label>
                    <input name='name' className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"  id="name" placeholder='Enter Your fullname' {...register("name", { required: true })}/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-fray-700' htmlFor="">Email Address</label>
                    <input name='email' className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"  id="email" placeholder='Enter Your email address'  {...register("email", { required: true })}/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-fray-700' htmlFor="">Messege</label>
                    <textarea name='messege' className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"  id="messege" placeholder='Enter your Query'  {...register("messege", { required: true })}/>
                    {errors.messege && <span>This field is required</span>}
                </div>
                <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact
