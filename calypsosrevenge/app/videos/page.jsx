'use client'
import React, {Component} from "react";
import Video from 'next-video';
import stillIntoYou from '@/videos/Still Into You Aug 2023 Clip_Trim.mp4';
import kashmir from '@/videos/Kashmir Aug 2023 Clip.mp4';
import mansWorld from '@/videos/Calypsos Revenge - Its A Mans World.mp4';
import watermelonSugarHigh from '@/videos/WatermelonSugarHigh.mp4';

export default function Videos () {
        return(
            <section id="videos" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        {/*Fix this*/}
                        {/* <CodeIcon className="mx-auto inline-block w-10 mb-4"/> */}
                        <h1 className="sm:txt-4xl text-3xl font-medium title-font mb-4 text-white">
                            Videos
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-based">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                            fuga dolore.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <Video src={stillIntoYou} />
                        <Video src={kashmir} />
                        <Video src={mansWorld} />
                        <Video src={watermelonSugarHigh} />
                        {/* {project.map(()=> ( */}
                            {/* <a href="" key="" className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src=""
                                     />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            subtitle
                                        </h2>
                                        <h1 className="title-font text-large font-medium text-white mb-3">
                                            title
                                        </h1>
                                        <p>This is the video description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                                        fuga dolore.</p>
                                    </div>
                                </div>
                            </a> */}
                        {/* ))} */}
                    </div>
                </div>
            </section>
        )
}


