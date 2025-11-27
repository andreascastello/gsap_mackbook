import React from 'react'
import Navbar from './components/Navbar'
import Heros from './components/Heros'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Performance from './components/Performance'
import Feature from './components/Feature'
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
        <Feature />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App