'use client'

interface HeroProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function Hero({ design }: HeroProps) {
  if (design === 'bold') {
    return (
      <section className="min-h-screen bg-[#01285C] relative overflow-hidden flex items-center">
        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F02878]/20 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#F02878]/30 rounded-full" />
        <div className="absolute bottom-40 right-40 w-64 h-64 border border-white/10 rounded-full" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#F02878]/20 rounded-full mb-8">
              <span className="text-[#F02878] text-sm font-medium tracking-wide">AI Product Leadership</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Fractional CPO for
              <span className="block text-[#F02878]">Scale-Ups & Enterprise</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              I help ambitious businesses unlock product-market fit, drive growth, and build AI-powered products that users actually want.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="inline-flex items-center justify-center px-8 py-4 bg-[#F02878] text-white rounded-lg font-semibold text-lg hover:bg-[#d01f5f] transition-colors">
                Book a Discovery Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section className="min-h-screen bg-white flex items-center relative">
        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="mb-8">
            <img src="/assets/logos/logo-dark.png" alt="Tatumdale" className="h-16 mx-auto mb-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-[#01285C] mb-6 leading-tight">
            AI Product Leadership
            <span className="block mt-2 text-[#F02878]">that delivers results</span>
          </h1>
          <p className="text-xl text-[#01285C]/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fractional CPO services for ambitious businesses ready to scale. I help you discover, design, and deliver products users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="inline-flex items-center justify-center px-8 py-4 bg-[#01285C] text-white rounded-full font-semibold text-lg hover:bg-[#01285C]/90 transition-colors">
              Book a Discovery Call
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#01285C]/20 text-[#01285C] rounded-full font-semibold text-lg hover:border-[#01285C]/40 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #01285C 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </section>
    )
  }

  // Dark design
  return (
    <section className="min-h-screen bg-[#01285C] relative overflow-hidden flex items-center">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F02878]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F02878]/20 rounded-full blur-3xl" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="mb-8">
          <img src="/assets/logos/logo-light.png" alt="Tatumdale" className="h-20 mx-auto mb-12" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            AI Product Leader
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent">
            for Modern Businesses
          </span>
        </h1>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          I help ambitious businesses unlock product-market fit, drive growth, and build AI-powered products that users actually want.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#F02878]/30 transition-all">
            Book a Discovery Call
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/5 transition-colors">
            Explore My Approach
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
