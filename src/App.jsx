import React from 'react'
import './App.css'
// import HeroSection from './components/HeroSection'
import Hero2 from './components/hero2'
import StemAdvantages from './components/StemCourses'
import { PopularCourses, CertificateVerification, WaveDivider } from './components/StemCourses'

function App() {
  return (
    <div className="app">
      {/* <HeroSection /> */}
      <Hero2 />
      <StemAdvantages />
      <PopularCourses />
      <WaveDivider />
      <CertificateVerification />
    </div>
  )
}

export default App
