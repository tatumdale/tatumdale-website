'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Framework from '@/components/sections/Framework'
import Services from '@/components/sections/Services'
import Experience from '@/components/sections/Experience'
import Products from '@/components/sections/Products'
import DayRateCalculator from '@/components/sections/DayRateCalculator'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

function DesignSwitcher() {
  const searchParams = useSearchParams()
  const design = searchParams.get('v') || 'bold'
  
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
      <span className="px-3 py-2 text-xs text-gray-400 self-center">Design:</span>
      {['bold', 'clean', 'dark'].map(d => (
        <a 
          key={d}
          href={`/?v=${d}`} 
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            design === d 
              ? 'bg-[#01285C] text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {d.charAt(0).toUpperCase() + d.slice(1)}
        </a>
      ))}
    </div>
  )
}

function HomeContent() {
  const searchParams = useSearchParams()
  const design = (searchParams.get('v') || 'bold') as 'bold' | 'clean' | 'dark'
  
  return (
    <>
      <DesignSwitcher />
      <Navigation design={design} />
      <Hero design={design} />
      <Framework design={design} />
      <Services design={design} />
      <Experience design={design} />
      <Products design={design} />
      <DayRateCalculator design={design} />
      <Contact design={design} />
      <Footer design={design} />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <HomeContent />
    </Suspense>
  )
}
