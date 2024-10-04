'use client'
import React, {Component} from "react";

const pageStyles = {
    calendar: {
      border: 0,
      width: 800,
      height: 600,
      frameborder: 0
    }
}

export default function Hero() {
    return(
        <section id="calendar">
            <div className="flex flex-col w-full mb-20 mt-10">
                <h1 className="sm:txt-5xl text-5xl font-large title-font mb-4 text-white text-center">
                    Events Calendar
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 pb-8 mt-20">
                <div className="flex justify-center items-center">
                    <div>
                        <iframe src="https://calendar.google.com/calendar/embed?src=9ccf190dc4148a15751302fa1a3edcc0b4ba26e8e8d0cf7eb498e3a54193b1de%40group.calendar.google.com&ctz=America%2FNew_York" style={pageStyles.calendar}></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}