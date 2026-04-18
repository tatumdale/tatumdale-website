'use client'

interface ExperienceProps {
  design: 'bold' | 'clean' | 'dark'
}

const companies = [
  { name: 'TelXL', role: 'CPO' },
  { name: 'Cirrus Response', role: 'CPO' },
  { name: 'Harper James', role: 'Fractional PO' },
  { name: 'Hoursly', role: 'Founder' },
  { name: 'After Cloud', role: 'Co-Founder & CTO' },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Products Shipped' },
  { value: '3', label: 'Successful Exits' },
  { value: '£10M+', label: 'Revenue Generated' },
]

export default function Experience({ design }: ExperienceProps) {
  if (design === 'bold') {
    return (
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#01285C] mt-4">Companies I've Worked With</h2>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#F02878] mb-2">{stat.value}</div>
                <div className="text-[#01285C]/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Company logos placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companies.map((company) => (
              <div key={company.name} className="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors">
                <span className="text-xl font-bold text-[#01285C]/60">{company.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-[#01285C]/60 mt-8">Company logos coming soon. View full background on LinkedIn.</p>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Track Record</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mt-4 mb-6">Proven Experience</h2>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-[#01285C] mb-2">{stat.value}</div>
                <div className="text-[#01285C]/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Company logos */}
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company) => (
              <div key={company.name} className="bg-white rounded-xl px-8 py-4 flex items-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-lg font-semibold text-[#01285C]/70">{company.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="https://linkedin.com/in/tatumbisley" className="text-[#F02878] font-medium hover:underline">View LinkedIn Profile →</a>
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="experience" className="py-24 bg-[#011a3a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Proven Track Record</h2>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Company logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {companies.map((company) => (
            <div key={company.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-24 hover:border-[#F02878]/50 transition-colors">
              <span className="text-lg font-semibold text-white/70">{company.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="https://linkedin.com/in/tatumbisley" className="text-[#F02878] font-medium hover:underline">View LinkedIn Profile →</a>
        </div>
      </div>
    </section>
  )
}
