import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ContactUs from './ContactUs'
import Chatbot from './Chatbot'

export default function page() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <ContactUs />
            </main>
            <Chatbot />
        </>
    )
}
