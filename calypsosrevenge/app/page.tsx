import Image from 'next/image'
import NavBar from './NavBar'
import About from './about/page'
import Gallery from './photography/page'
import Videos from './videos/page'
import Booking from './booking/page'

//https://www.youtube.com/watch?v=RY6B7JSBRRg&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=2

export default function Home() {
  
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Gallery />
      <Videos />
      <Booking />
    </main>
  )
}
