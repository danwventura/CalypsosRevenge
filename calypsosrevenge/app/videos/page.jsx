'use client'
import React, {Component} from "react";

export default function Videos () {
        return(
            <section id="videos" className="text-gray-400 bg-gradient-to-r from-calypsoBlue to-calypsoSky body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        {/*Fix this*/}
                        {/* <CodeIcon className="mx-auto inline-block w-10 mb-4"/> */}
                        <h1 className="sm:txt-5xl text-5xl font-large title-font mb-4 text-white">
                            Videos
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-based">
                            Calypso&#39;s Revenge, an original, eclectic cover band
                        </p>
                    </div>
                    {/* <div className="flex flex-wrap -m-4"> */}
                    <div className="grid grid-cols-2 gap-2 pb-8">
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/vzVqALWlMSA?si=VUgMY6OOx-nQHp5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                        </div>
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/RKf9M63sru4?si=7s2aZ4MqO4fTujNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pb-8">
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/usI5p6AAulM?si=Sx4sMD7hC8V9S5Mf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>                        </div>
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/2DUKQ6nyCCA?si=SCZNUIvsXZ80_j3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/ol3QyJFUXxU?si=CBw6VAHA0FHj5fj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>                        </div>
                        <div>
                            <iframe width="374" height="210" src="https://www.youtube.com/embed/ikTGZxX61Hw?si=dq83IOclnxO66i9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreens></iframe>                        </div>
                    </div>
                </div>
            </section>
        )
}


