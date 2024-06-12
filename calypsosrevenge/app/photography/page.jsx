'use client'
import React, {Component, useState} from "react";
import NavBar from "../NavBar";
import {photos} from "../Photos";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";

//Carousel
//15:54 https://www.youtube.com/watch?v=tXlZCW26bto

export default function Photography () {
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const prevPhoto = () => {
            const isFirstPhoto = currentIndex === 0;
            const newIndex = isFirstPhoto ? photos.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }
        const nextPhoto = () => {
            const isLastPhoto = currentIndex === photos.length - 1;
            const newIndex = isLastPhoto ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }
        return(
            <div>
            <section id="photography" className="text-gray-400 bg-gradient-to-r from-calypsoBlue to-calypsoSky body-font h-1000 mb-20">
                <div className="container px-5 py-5 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-4">
                        <h1 className="lg:txt-5xl text-5xl font-large title-font mb-4 text-white">
                            Gallery
                        </h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-based">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                            fuga dolore.
                        </p> */}
                    </div>
                    <div className="max-w-[750px] h-[1000px] w-full m-auto py-16 px-4 relative group">
                        <div style={{backgroundImage: `url(${photos[currentIndex].location})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
                        {/*Left Arrow*/}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactLeft onClick={prevPhoto}/>
                        </div>
                        {/*Right Arrow*/}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactRight onClick={nextPhoto}/>
                        </div>
                        <div className="flex top-4 justify-center py-2 object-bottom">
                            {photos.map((photo, photoIndex) => {
                                <div className="text-2xl cursor-pointer">
                                    <RxDotFilled />
                                </div>
                            })}
                        </div>
                    </div>

                    {/* <div className="flex flex-wrap h-full">
                            <a href="/img/duo1.PNG" className="lg:w-1/2 w-100 p-8">
                                <div className="flex relative">
                                    <img 
                                        alt="gallery" 
                                        className="inset-0 object-scale-down"
                                        src="/img/duo1.PNG"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 bg-gradient-to-r from-calypsoBlue to-calypsoSky bg-gray-900 opacity-0 hover:opacity-100">
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
                                        className="inset-0 object-scale-down"
                                        src="/img/duo2.jpg"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 bg-gradient-to-r from-calypsoBlue to-calypsoSky bg-gray-900 opacity-0 hover:opacity-100">
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
                                        className="inset-0 object-scale-down"
                                        src="/img/duo3.jpg"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 bg-gradient-to-r from-calypsoBlue to-calypsoSky bg-gray-900 opacity-0 hover:opacity-100">
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
                                        className="inset-0 object-scale-down"
                                        src="/img/solo1.JPEG"
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 bg-gradient-to-r from-calypsoBlue to-calypsoSky bg-gray-900 opacity-0 hover:opacity-100">
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
                    </div> */}
                </div>
            </section>
            </div>
        )
}


