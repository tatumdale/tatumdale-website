'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import WhoYouAre from '@/components/sections/WhoYouAre'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import PMOSWorkspace from '@/components/sections/PMOSWorkspace'
import CaseStudies from '@/components/sections/CaseStudies'
import DayRateCalculator from '@/components/sections/DayRateCalculator'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

function DesignSwitcher() {
  const searchParams = useSearchParams()
  const design = searchParams.get('v') || 'bold'
  
  return (
    <div className="fixed top-4 right-4 z-[100] flex gap-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-100">
      <span className="px-3 py-2 text-xs text-gray-400 self-center font-medium">Design:</span>
      {[
        { id: 'bold', label: 'Bold' },
        { id: 'clean', label: 'Clean' },
        { id: 'dark', label: 'Dark' },
      ].map(d => (
        <a 
          key={d.id}
          href={`/?v=${d.id}`} 
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            design === d.id 
              ? 'bg-[#01285C] text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {d.label}
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
      <WhoYouAre design={design} />
      <Problem design={design} />
      <Services design={design} />
      <PMOSWorkspace design={design} />
      <CaseStudies design={design} />
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
