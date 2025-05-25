import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Strengths from '../components/Strengths';
import Contact from '../components/Contact';

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Strengths />
            <Contact />
        </div>
    );
}

export default Home;
