"use client"
import React, { useState } from 'react'
import { FaEnvelope,FaMapMarkerAlt,FaPhone } from 'react-icons/fa'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
const Page = () => {

  const [formdata, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
})
const [status , setStatus] = useState<FormStatus>('idle')

const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

const handleSubmit = async(e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");
  try{
    const response = await fetch('/api/contact' , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formdata)
    })

    if(!response.ok){
      throw new Error("Failed to send message");
    }

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }catch {
    setStatus("error")
  }
}
  return (
    <>
      <div className='container max-w-7xl mx-auto py-20'>
        <h1 className='text-4xl font-bold mb-20 text-center'>Contact Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'> 
          {/* contact info */}
          <div className='space-y-8'>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <p className='text-secondary md:w-2/3'>I&apos;m always open to discussing new projects, creative ideas, or new oppertunities to be part of your vision.</p>
            <div className='space-y-4'>

              <div className='flex items-center gap-4'>
                <FaEnvelope className='w-6 h-6 text-primary '/>
                <div>
                  <h3 className='font-semibold'>Email</h3>
                  <a href="mailto:diyasolanki.ce@gmail.com" className='text-secondary hover:text-primary'>diyasolanki.ce@gmail.com</a>
                </div>
              </div>

               <div className='flex items-center gap-4'>
                <FaPhone className='w-6 h-6 text-primary '/>
                <div>
                  <h3 className='font-semibold'>Phone</h3>
                  <a href="tel:+919925482346" className='text-secondary hover:text-primary'>+91 99254 82346</a>
                </div>
              </div>

               <div className='flex items-center gap-4'>
                <FaMapMarkerAlt className='w-6 h-6 text-primary '/>
                <div>
                  <h3 className='font-semibold'>Location</h3>
                  <p className='text-secondary'>Gujarat , India</p>
                </div>
              </div>

            </div>
          </div>

          {/* contact Form */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
          <form  onSubmit={handleSubmit} className='space-y-6'>
            <div className=''>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                <input type="text" required id="name" name="name" placeholder='Enter Your Name' value={formdata.name} onChange={handleChanges} className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
            </div>

             <div className=''>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                <input type="text" required id="email" name="email" placeholder='Enter Your Email' value={formdata.email}  onChange={handleChanges} className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
            </div>

             <div className=''>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                <textarea rows={4} required
                 id="message" name="message" placeholder='Enter Your Message' value={formdata.message}  onChange={handleChanges} className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'/>
            </div>

            <button type= "submit" className='w-full btn btn-primary'>{status === 'loading' ? "Sending..." : "Send Message" }</button>
            {
              status === "success" && (
                <p className='text-green-500 text-center'>Message sent successfully</p>
              )
            }
            {
              status === "error" && (
                <p className='text-red-500 text-center'>Failed to send message. Please try again.</p>


              )
            }
          </form> 

          </div>
        </div>
      </div>
    </>
  )
}

export default Page