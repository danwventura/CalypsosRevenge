'use client'
import React, {Component} from "react";

export default function Introducing () {
        return(
            <section id="introducing" className="bg-gradient-to-r from-calypsoBlue to-calypsoSky mt-10 h-screen">
                <div className="flex flex-col w-full mb-4">
                    <h1 className="lg:txt-5xl text-5xl font-large title-font mb-4 text-white text-center">
                        Introducing Calypso's Revenge
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-4 pb-8 mt-20">
                    <div className="flex justify-center items-center">
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vzVqALWlMSA?si=dGV4N6ZCdurNGub0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
        </section>
        )
}
