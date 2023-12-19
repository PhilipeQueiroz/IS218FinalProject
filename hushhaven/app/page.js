import React from 'react'
import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import OfferSection from './components/OfferSection'
import Testimonials from './components/Testimonials'
import ProductSection from './components/ProductSection'

export default function Home() {
  return (
    <RootLayout home>
      <NavigationBar />
      <HeroSection />
      <OfferSection />
      <ProductSection />
      <Testimonials />
    </RootLayout>
  )
}