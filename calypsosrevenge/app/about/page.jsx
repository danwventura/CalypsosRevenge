'use client'
import React, {Component} from "react";

export default function About () {
        return(
            <section id="about" className="bg-gradient-to-r from-calypsoBlue to-calypsoSky mt-10 h-screen">
                <div className="flex flex-col w-full mb-4">
                        <h1 className="lg:txt-5xl text-5xl font-large title-font mb-4 text-white text-center">
                            About Us
                        </h1>
                    </div>
                <div className="container py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 bg-gradient-to-r from-calypsoBlue to-lightgrey rounded-lg sm:mr-10 p-10 flex items-end  relative lg:txt-2xl text-2xl font-about">
                        <h2 className="mb-10 text-white">Calypso&#39;s Revenge is a one-of-a-kind music project that is the brainchild of Lauren and Jude.  Together, they have combined their years of professional stage experience and artistic talents to produce a music experience unlike any other. At its core, the band, is essentially an acoustic duo with the versatility to sound like a full tilt boogie rock band.</h2>
                        {/* <p>With the addition of some very limited music loops, the due sounds like nothing you have ever heard.  Playing blues, rock, Americana, and more, they cover the map from classics like Led Zeppelin and the Beetles to today’s pop sensations such as Adele and Ariana Grande.  Their mashups and unique take on cover tunes really stand out.</p>
                        <p>Lauren also brings some of her “sold and recorded” original songs to the mix which really are quite remarkable.  As a professional songwriter in Nashville, she honed in on her craft and shares a couple of them through out the night.</p>
                        <p>Calypso&#39;s Revenge delivers a passionate and powerful performance not to be found in your average “bar band” playing the same forty songs every gig.  Their uniquely diverse setlist, superlatively executed, will leave audiences wondering “how do they do it?”</p> */}
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pr-20">
                        <img alt="gallery" className="rounded h-90 w-73 object-top" src="/img/solo3.jpg"/>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 flex flex-col md:ml-auto w-full pl-20 md:py-8 mt-8 md:mt-0">
                        <img alt="gallery" className="rounded h-83 w-63 object-top max-h-900" src="/img/solo1.JPEG"/>
                    </div>
                    
                </div>
        </section>
        )
}
