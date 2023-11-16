import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  
  return (
    <>
      <header
        id="header"
        className="shadow-md relative shadow-[#00000010] header bg-white z-10 sm:py-4 md:py-0 "
      >
        <div className="container mx-auto 2xl:w-[1440px] screen1:w-[1300px] xl:w-[1220px] lg:w-[970px] md:w-[730px] sm:w-[600px]">
          <div className="Head-main flex items-center justify-between ">
            <div className="logo">
              <img
                src="/public/assets/images/H-logo.png"
                alt=""
                className="lg:h-full md:h-10 "
              />
            </div>
            <div className="navigation  md:w-auto md:block md:static sm:absolute top-full left-0 duration-500 md:h-fit sm:h-[100vh] bg-white sm:w-1/2 sm:shadow-xl md:shadow-none ">
              <nav>
                <ul className="flex md:flex-row lg:gap-12 md:gap-5 sm:flex-col gap-5 sm:m-5 md:m-0  ">
                  <li className="md:py-8 sm:py-0">
                    <Link
                      to="/"
                      className="before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-black before:left-auto before:-bottom-1 before:right-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative group md:py-8 sm:py-0">
                    <Link
                      to="Services"
                      className="before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-black before:left-auto before:-bottom-1 before:right-0"
                    >
                      Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 absolute -right-4 top-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Link>
                    <ul className="absolute w-52 group-hover:top-[88px]  group-hover:visible duration-300 opacity-0 group-hover:opacity-100 invisible top-[70px] z-10 text-sm  left-0 bg-white shadow-md ">
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          CUSTOM LOGO DESIGN
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          BRANDING DESIGN
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          BUSINESS WEBSITE
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          E-COMMERCE STORE
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          BUSINESS CARD DESIGN
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="py-3 pl-2 block hover:border-[#46006b] duration-300 hover:pl-4 border-l-4 border-white"
                        >
                          BROCHURE DESIGN
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="md:py-8 sm:py-0">
                    <Link
                      to="About"
                      className="before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-black before:left-auto before:-bottom-1 before:right-0"
                    >
                      About
                    </Link>
                  </li>
                  <li className="md:py-8 sm:py-0">
                    <Link
                      to="Blog"
                      className="before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-black before:left-auto before:-bottom-1 before:right-0"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="md:py-8 sm:py-0">
                    <Link
                      to="Contact"
                      className="before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-black before:left-auto before:-bottom-1 before:right-0"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="cta">
              <a
                href="#"
                className=" lg:text-base md:text-sm md:w-32 md:py-3 2xl:w-48 2xl:py-4 2xl:text-xl md:mr-0 sm:mr-10 bg-[white] text-[#46006b] lg:w-40 lg:py-3 py-3 w-40 block text-center border-2 border-[#46006b] rounded-md hover:bg-[#46006b] hover:text-white font-semibold transition-all duration-700 ease-in-out before:block before:right-3 before:w-4 before:border-4 before:border-white before:h-4 before:absolute before:bg-[#ed1c24] before:-top-2 before:rounded-full relative"
              >
                Start a Project
              </a>
            </div>
          </div>
          <div className="hamburgericon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden sm:block w-8 absolute right-2 top-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};
