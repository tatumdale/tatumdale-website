'use client'

interface DayRateCalculatorProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function DayRateCalculator({ design }: DayRateCalculatorProps) {
  const iframeUrl = 'https://tatumdale-day-rate-calculator-zxru.vercel.app/'

  if (design === 'bold') {
    return (
      <section id="calculator" className="py-24 bg-[#01285C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Day Rate Calculator</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Find Your Rate</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Use this calculator to estimate your ideal day rate based on your goals and experience.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src={iframeUrl}
              className="w-full h-[600px] md:h-[700px]"
              title="Day Rate Calculator"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="calculator" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Resources</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mt-4 mb-6">Day Rate Calculator</h2>
            <p className="text-xl text-[#01285C]/60 max-w-xl mx-auto">
              Estimate your ideal day rate based on your goals and experience level.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src={iframeUrl}
              className="w-full h-[550px] md:h-[650px]"
              title="Day Rate Calculator"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="calculator" className="py-24 bg-[#011a3a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F02878] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Resources</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Find Your Rate</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Calculate your ideal day rate based on your goals and experience.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe 
            src={iframeUrl}
            className="w-full h-[600px] md:h-[700px]"
            title="Day Rate Calculator"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
