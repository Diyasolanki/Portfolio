import React from 'react'
import { FaGithub, FaMedium } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
                <div className='container max-w-7xl mx-auto px-4 py-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='mb-4 md:mb-0'>
                            <Link href="/" className='text-xl font-bold text-primary'>Diya Solanki</Link>
                            <p className='text-sm text-secondary mt-2'>{new Date().getFullYear()} Devfolio. All rights reserved</p>
                        </div>
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

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer