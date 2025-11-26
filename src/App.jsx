import React from 'react'
import Navbar from './components/Navbar'
import Heros from './components/Heros'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <Navbar />
        <Heros />
        <ProductViewer />
    </main>
  )
}

export default App