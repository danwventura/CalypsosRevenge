'use client'
import React, {Component} from "react";

export default function Booking () {
        return(
            <section id="booking" className="relative bg-gradient-to-r from-calypsoBlue to-calypsoSky h-800">
                <div className="flex flex-col w-full mb-20 mt-10">
                        <h1 className="sm:txt-5xl text-5xl font-large title-font mb-4 text-white text-center">
                            Book Us
                        </h1>
                    </div>
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            style={{filter: "opacity(0.7)"}}
                            src="https://www.google.com/maps/embed/v1/place?q=SussexCounty,+DE,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    LOCATIONS
                                </h2>
                                <p className="text-indigo-400 mt-1">
                                    Delaware
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <div className="mb-10">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xl">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-400 leading-relaxed text-xl" href="https://mail.google.com/mail/?view=cm&to=calypsosrevenge123@gmail.com&su=Booking" target="_blank">
                                    calypsosrevenge123@gmail.com
                                </a>
                            </div>
                            <div className="mb-10 mt-20 whitespace-nowrap">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xl">
                                    Facebook
                                </h2>
                                <a href="https://www.facebook.com/search/top?q=calypso%E2%80%99s%20revenge" className="text-indigo-400 leading-relaxed text-xl">
                                    Calypso&#39;s Revenge
                                </a>
                            </div>
                            <div className="mb-10 mt-20">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xl">
                                    Youtube
                                </h2>
                                <a href="https://www.youtube.com/@calypsosrevenge" className="text-indigo-400 leading-relaxed text-xl">
                                    https://www.youtube.com/@calypsosrevenge
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <form name="contact" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Book me 
                        </h2>
                        <p className="leading-relaxed mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                            suscipit officia aspernatur veritatis. Asperiores, aliquid?
                        </p>
                        <div className="relative mb-4">
            	            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                Name
                            </label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
            	            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
            	            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <input type="text" id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Send
                        </button>
                    </form> */}
                </div>
            </section>
        )
}


