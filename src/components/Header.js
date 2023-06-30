import React, { useState } from 'react';
import homeIcon from '../assets/home.svg';
import customerIcon from '../assets/customers.svg';
import settingsIcon from '../assets/settings.svg';
import documentationIcon from '../assets/documentation.svg';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap lg:justify-start items-center max-w-screen-xl">
                    <a href="#" className="flex items-center lg:mr-20">
                        <img
                            src="https://usedelta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc6204d47-89d8-484e-944c-16e5e329e445%2Fdelta_Icon_black_transparent.png?table=block&id=d512153e-f990-44e9-a08e-a75f4077216a&spaceId=6c025521-b8b6-4601-98ad-f2a94cafaa05&width=250&userId=&cache=v2"
                            className="mr-3 h-6 sm:h-9"
                            alt="Delta Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">

            </span>
                    </a>
                    <div className="flex items-center lg:order-2">


                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 ${mobileMenuOpen ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${mobileMenuOpen ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            mobileMenuOpen ? '' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-3 pr-4 pl-3 text-white bg-blue-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white lg:hover:border-b-4 lg:hover:border-blue-700 lg:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    <img
                                        src={homeIcon}
                                        alt="Home Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Home
                                </a>
                            </li>


                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-3 pr-4 pl-3 text-white bg-blue-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white lg:hover:border-b-4 lg:hover:border-blue-700 lg:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    <img
                                        src={customerIcon}
                                        alt="Customers Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Customers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-3 pr-4 pl-3 text-white bg-blue-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white lg:hover:border-b-4 lg:hover:border-blue-700 lg:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    <img
                                        src={settingsIcon}
                                        alt="Settings Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center py-3 pr-4 pl-3 text-white bg-blue-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white lg:hover:border-b-4 lg:hover:border-blue-700 lg:hover:text-blue-700"
                                    aria-current="page"
                                >
                                    <img
                                        src={documentationIcon}
                                        alt="Documentation Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
