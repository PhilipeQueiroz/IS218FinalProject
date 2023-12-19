import React from 'react'
import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'
import ProductSection from './components/ProductSection'
import FooterSection from './components/FooterSection'
import AboutSection from './components/AboutSection'
import NewsLetter from './components/Newsletter'

export default function Home() {
  return (
    <RootLayout home>
      <NavigationBar />
      <HeroSection />
      <NewsLetter />
      <ProductSection />
      <AboutSection />
      <Testimonials />
      <FooterSection />
    </RootLayout>
  )
}