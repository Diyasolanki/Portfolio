//beacuse nextjs  all component by default a server component
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {useTheme} from '../context/ThemeContext'


const Navbar = () => {
   const {theme , toggleTheme} = useTheme()
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState<boolean>(false);
    //give current path name
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        { href: "/", label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/education', label: 'Education' },
        { href: '/contact', label: 'Contact' },
    ];
    return (
        <>
            <nav className="fixed w-full bg-white/80 text-black dark:bg-dark dark:text-white backdrop-blur-sm z-50 border-b border-gray-700">
                <div className="container max-w-7xl mx-auto px-4">
                    {/* desktop menu */}
                    <div className="flex items-center justify-between h-16">
                        <Link href='/' className="text-xl font-bold text-primary">Diya Solanki</Link>

                        {/* desktop items */}
                        {/* hidden in small devices */}
                        <div className="hidden md:flex items-center space-x-8">
                            {
                                menuItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors font-medium ${isActive ? 'text-primary' : ''}`}
                                            onClick={() => setisMobileMenuOpen(false)}>{item.label}</Link>
                                    )
                                })
                            }

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-colors">
                                {
                                    theme === "dark" ? (
                                        <SunIcon className="h-6 w-6 text-yellow-500" />
                                    ) : (
                                        <MoonIcon className="h-6 w-6 text-gray-800" />
                                    )
                                }
                            </button>
                        </div>

                        {/* mobile menu */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2  rounded-lg hover:bg-gray-100  dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* mobile menu */}
                    {
                        isMobileMenuOpen && (
                            <div className='md:hidden'>
                                <div className='py-4 space-y-4'>
                                    {
                                        menuItems.map((item, index) => (
                                            <div key={index} onClick={toggleMobileMenu}>
                                                <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                                            </div>
                                        ))
                                    }
                                    <div>
                                        <button onClick={toggleTheme} className=" flex item-center py-2 hover: text-primary transition-colors">
                                            {
                                                theme === "dark" ? (
                                                    <SunIcon className="h-6 w-6 text-yellow-500" />
                                                ) : (
                                                    <MoonIcon className="h-6 w-6 text-gray-500" />
                                                )
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar

