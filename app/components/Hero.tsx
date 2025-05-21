import React from 'react'
import Image from 'next/image'
import { FaGithub, FaMedium } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link'
const Hero = () => {
  return (
    <>
      <section className="py-28 container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className='flex flex-col items-center mb-4'>
            {/* in public folder store all images */}
            <Image src='/Diya Photo.jpg' alt="img" width={100} height={100} className='rounded-full mb-4 w-40 h-40 object-cover ring-2 ring-primary' />
          </div>

          <h1 className='text-4xl md:text-6xl font-bold mb-6'>Hi I&apos;m <span className='text-primary'>Diya Solanki</span></h1>
          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Mern Stack Developer | Learner | Story Teller </p>
          <div className='flex justify-center space-x-4 mb-8'>
            <a
              href="https://github.com/Diyasolanki"
              target="_blank"
              rel="noopener noreferrer"
              className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/diya-solanki-744122280"
              target="_blank"
              rel="noopener noreferrer"
              className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@solankidiya28"
              target="_blank"
              rel="noopener noreferrer"
              className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '
            >
              <FaMedium />
            </a>
          </div>
          <div className='flex flex-col md:flex-row justify-center gap-4'>
            <Link href="/projects" className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors">View Projects</Link>
            <Link href="/contact" className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">Contact Me</Link>

          </div>
        </div>
      </section> </>
  )
}

export default Hero
