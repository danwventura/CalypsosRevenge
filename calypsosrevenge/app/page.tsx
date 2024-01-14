import Image from 'next/image'
import NavBar from './pages/NavBar'

//https://www.youtube.com/watch?v=RY6B7JSBRRg&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=2

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
    </main>
  )
}
