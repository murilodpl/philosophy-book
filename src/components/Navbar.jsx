import { useState } from "react";
import { NavLink } from "react-router-dom";

import logoIcon from "../favicon.svg"

export default function Navbar() {
    const [mobileMenuShow, setMobileMenuShow] = useState(false)

    function menuBtnClick() {
        setMobileMenuShow(prevBool => !prevBool)
    }

    return (
        <header className="shadow-md">
            <nav className="px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center py-6 mx-auto">
                    <div className="flex">
                        <NavLink to="/" className="" >
                            <img className="saturate-50" width="50px" height="50px" src={logoIcon} alt="Icon Philosopher Face" />
                        </NavLink>
                        <h1 className="text-md md:text-xl font-bold mr-auto text-primary self-center ml-2"><NavLink to="/" className="navItem" >Philosophy Book</NavLink></h1>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="outline-none menu-button" onClick={menuBtnClick}>
                            <svg className="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" viewBox="0 00 24 24" stroke="currentColor">
                                <path d="m4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/" className="navItem" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="philosopher" className="navItem" >Philosopher</NavLink>
                            </li>
                            <li>
                                <NavLink to="search" className="navItem" >Search</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${(!mobileMenuShow) && "hidden"} md:hidden mobile-menu`}>
                    <ul className="">
                        <li>
                            <NavLink to="/" className="navItem" onClick={menuBtnClick} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="philosopher" className="navItem" onClick={menuBtnClick} >Philosopher</NavLink>
                        </li>
                        <li>
                            <NavLink to="search" className="navItem" onClick={menuBtnClick} >Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}