import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'
import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Testimonials from '@/components/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <main className='flex flex-col justify-center items-center '>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default page
