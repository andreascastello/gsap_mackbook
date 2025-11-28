import React from 'react'
import Navbar from './components/Navbar'
import Heros from './components/Heros'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <Navbar />
        <Heros />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App