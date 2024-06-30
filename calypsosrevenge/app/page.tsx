// import Image from 'next/image'
import NavBar from './NavBar'
import Hero from './hero/page'
import Introducing from './introducing/page'
import Covers from './covers/page'
import About from './about/page'
import Gallery from './photography/page'
import Videos from './videos/page'
import Booking from './booking/page'


//https://www.youtube.com/watch?v=RY6B7JSBRRg&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=2

// forumRegular {
//   font-family: "Forum", serif;
//   font-weight: 400;
//   font-style: normal;
// }

export default function Home() {
  
  return (
    <main className="text-gray-400 bg-gradient-to-r from-calypsoBlue to-calypsoSky body-font">
      <NavBar />
      <Hero />
      <About />
      <Introducing />
      <Covers />
      <Gallery />
      {/* <Videos /> */}
      <Booking />
    </main>
  )
}
