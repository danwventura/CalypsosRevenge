'use client'
import React, {Component} from "react";

export default function About () {
        return(
            <section class="bg-gradient-to-r from-calypsoBlue to-calypsoSky mt-20 h-screen">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Calypso&#39;s Revenge</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white-400">is a one-of-a-kind project that has a modern take on current and classic tunes.</p>
                        <a href="#booking" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-white hover:bg-transparent hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Book Me
                        </a> 
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="object-cover object-center rounded" alt="hero" src="/img/logo.jpg" />
                    </div>                
                </div>
            </section>
        )
}
