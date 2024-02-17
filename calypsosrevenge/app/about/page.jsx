'use client'
import React, {Component} from "react";

export default function About () {
        return(
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 itemsçenter text-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 items-center justify-center">
                            <img className="object-cover object-center rounded" alt="hero" src="/img/logo.jpg" />
                        </div>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, Im Lauren
                            <br className="hidden lg:inline-block" /> I love making music!
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </p>
                        <div className="flex justify-center">
                            <a href="#booking" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work with Me
                            </a>
                            <a href="#photography" className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Gallery
                            </a>
                            <a href="#photography" className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Videos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
}
