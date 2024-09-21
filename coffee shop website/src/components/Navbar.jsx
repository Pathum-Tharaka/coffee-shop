import React, { useState } from 'react'
import {
    FaShoppingCart,
    FaSearch,
    FaCoffee,
    FaBars,
    FaTimes
} from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-4 py-2 z-20'>
            <a href="#" className='text-2xl flex items-center justify-center gap-2 hover:text-yellow-700'>
                <FaCoffee />
                My Coffee Shop
            </a>
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <nav 
                className={`font-semibold text-lg absolute md:static top-14 left-0 w-full md:w-auto bg-white md:flex md:items-center transition-all duration-300 ease-in ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="md:flex">
                    <li><a href="#" className="block p-2 hover:text-yellow-700">Home</a></li>
                    <li><a href="#" className="block p-2 hover:text-yellow-700">About</a></li>
                    <li><a href="#" className="block p-2 hover:text-yellow-700">Services</a></li>
                    <li><a href="#" className="block p-2 hover:text-yellow-700">Contact</a></li>
                </ul>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
                <FaSearch className="text-xl hover:text-yellow-700 cursor-pointer" />
                <FaShoppingCart className="text-xl hover:text-yellow-700 cursor-pointer" />
            </div>
        </header>
    )
}

export default Navbar