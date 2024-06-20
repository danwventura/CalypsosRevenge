'use client'
import React, {Component} from "react";

export default function Covers () {
        return(
            <section id="covers" className="text-gray-400 bg-gradient-to-r from-calypsoBlue to-calypsoSky body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        {/*Fix this*/}
                        {/* <CodeIcon className="mx-auto inline-block w-10 mb-4"/> */}
                        <h1 className="sm:txt-5xl text-5xl font-large title-font mb-4 text-white">
                            Original Covers
                        </h1>
                    </div>
                    {/* <div className="flex flex-wrap -m-4"> */}
                    <div className="grid grid-cols-2 gap-2 pb-8">
                        <div>
                            <iframe width="460" height="259" src="https://www.youtube.com/embed/v0kO1UYAL4M?si=x7llap65mlAoETgW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="460" height="259" src="https://www.youtube.com/embed/y_fb7nGU2OY?si=bkHaH6XLGKhx-7d7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pb-8 mt-20">
                        <div className="flex justify-center items-center">
                            <div>
                                <iframe width="460" height="259" src="https://www.youtube.com/embed/zLhq6loeMvI?si=lUEowmGCfSKt1Kjg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}


