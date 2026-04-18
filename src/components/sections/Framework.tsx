'use client'

interface FrameworkProps {
  design: 'bold' | 'clean' | 'dark'
}

const pillars = [
  {
    number: '01',
    title: 'Discover Deeply',
    description: 'Uncover hidden insights that drive strategic advantage. Analyze market dynamics, customer challenges, and organisational capabilities to reveal the complete picture.',
    accent: 'Find the key levers that create solutions users love and deliver sustainable business success.'
  },
  {
    number: '02',
    title: 'Design Deliberately',
    description: 'Craft strategies that align product vision with business objectives. Every decision is purposeful, every feature is intentional.',
    accent: 'Create experiences that resonate with users and differentiate your product in the market.'
  },
  {
    number: '03',
    title: 'Deliver Dynamically',
    description: 'Stay agile and responsive by continuously learning and adapting to real-time feedback. This iterative approach embraces change.',
    accent: 'Position your product for future success by anticipating trends and emerging needs.'
  },
]

export default function Framework({ design }: FrameworkProps) {
  if (design === 'bold') {
    return (
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">The Framework</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#01285C] mt-4 mb-6">How I Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A proven approach to product leadership that adapts to your unique challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="absolute top-0 left-8 -translate-y-1/2 w-16 h-16 bg-[#F02878] rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{pillar.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#01285C] mt-8 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <p className="text-[#F02878] font-medium">{pillar.accent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">The Approach</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mt-4 mb-6">Discover. Design. Deliver.</h2>
            <p className="text-xl text-[#01285C]/60 max-w-2xl mx-auto">A flexible framework that scales with your product challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div key={pillar.number} className="text-center">
                <div className="w-16 h-16 bg-[#01285C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#01285C] mb-4">{pillar.title}</h3>
                <p className="text-[#01285C]/60 mb-4">{pillar.description}</p>
                <p className="text-[#F02878] font-medium text-sm">{pillar.accent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="about" className="py-24 bg-[#011a3a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F02878] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">The Framework</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Discover. Design. Deliver.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">A proven approach to product leadership that adapts to your unique challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#F02878]/50 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-[#F02878] to-[#ff5a9e] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl font-bold">{pillar.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">{pillar.title}</h3>
              <p className="text-white/60 mb-4">{pillar.description}</p>
              <p className="text-[#F02878] font-medium text-sm">{pillar.accent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
