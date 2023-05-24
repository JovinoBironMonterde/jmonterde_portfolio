import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Home from './components/home/Home'
import About from './components/about/About'
import Profession from './components/skills/Profession'
import Project from './components/project/Project'
import Service from './components/services/Service'
import Contact from './components/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jovino Monterde',
  description: 'Front End Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
        <About />
        <Profession />
        <Project />
        <Service />
        <Contact />
        {/* {children} */}
        </body>
    </html>
  )
}
