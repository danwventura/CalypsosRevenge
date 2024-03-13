'use client'
import React, {Component} from "react";

export default function NavBar () {
        return(
            <header className="bg-gradient-to-r from-calypsoBlue to-calypsoSky md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="title-font font-medium text-white mb-4 md:mb-0">
                        <a href="#about" className="ml-3 text-xl">
                            Lauren Ventura  
                        </a>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-white">
                            About
                        </a>
                        <a href="#photography" className="mr-5 hover:text-white">
                            Gallery
                        </a>
                        <a href="#videos" className="mr-5 hover:text-white">
                            Videos
                        </a>
                        <a href="#booking" className="mr-5 hover:text-white">
                            Book Me
                        </a>
                    </nav>
                </div>
            </header>
        )
}


