'use client'
import React, {Component} from "react";
import NavBar from "../NavBar";
import {duo1} from "../Photos";

export default function Photography () {
        return(
            <div>
            <section id="photography" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        {/*Fix this*/}
                        {/* <CodeIcon className="mx-auto inline-block w-10 mb-4"/> */}
                        <h1 className="sm:txt-4xl text-3xl font-medium title-font mb-4 text-white">
                            Live Vibes
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-based">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                            fuga dolore.
                        </p>
                    </div>
                    <div className="flex flex-wrap h-full">
                            <a href="/img/duo1.PNG" className="lg:w-1/2 w-100 p-8">
                                <div className="flex relative">
                                    <img 
                                        alt="gallery" 
                                        className="absolute inset-0 w-full h-full"
                                        src="/img/duo1.PNG"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            Subtitle 1
                                        </h2>
                                        <h1 className="title-font text-large font-medium text-white mb-3">
                                            Title 1
                                        </h1>
                                        <p>Description 1</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/img/duo2.jpg" className="lg:w-1/2 w-100 p-8">
                                <div className="flex relative">
                                    <img 
                                        alt="gallery" 
                                        className="absolute inset-0 w-full h-full"
                                        src="/img/duo2.jpg"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            Subtitle 2
                                        </h2>
                                        <h1 className="title-font text-large font-medium text-white mb-3">
                                            Title 2
                                        </h1>
                                        <p>Description 2</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/img/duo3.jpg" className="lg:w-1/2 w-100 p-8">
                                <div className="flex relative">
                                    <img 
                                        alt="gallery" 
                                        className="absolute inset-0 w-full h-full"
                                        src="/img/duo3.jpg"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            Subtitle 3
                                        </h2>
                                        <h1 className="title-font text-large font-medium text-white mb-3">
                                            Title 3
                                        </h1>
                                        <p>Description 3</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/img/solo1.JPEG" className="lg:w-1/2 w-100 p-8">
                                <div className="flex relative">
                                    <img 
                                        alt="gallery" 
                                        className="absolute inset-0 w-full h-full"
                                        src="/img/solo1.JPEG"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            Subtitle 4
                                        </h2>
                                        <h1 className="title-font text-large font-medium text-white mb-3">
                                            Title 4
                                        </h1>
                                        <p>Description 4</p>
                                    </div>
                                </div>
                            </a>
                    </div>
                </div>
            </section>
            </div>
        )
}


