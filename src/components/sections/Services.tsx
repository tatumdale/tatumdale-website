'use client'

interface ServicesProps {
  design: 'bold' | 'clean' | 'dark'
}

const services = [
  {
    title: 'Fractional CPO',
    description: 'Strategic product leadership on a part-time basis. Get senior expertise without the full-time commitment.',
    icon: '🎯'
  },
  {
    title: 'Product Strategy',
    description: 'Define your product vision, roadmap, and positioning. Align teams around a clear direction.',
    icon: '📊'
  },
  {
    title: 'AI Integration',
    description: 'Embed AI capabilities into your products. From chatbots to predictive analytics, make AI work for you.',
    icon: '🤖'
  },
  {
    title: 'Growth & Monetisation',
    description: 'Identify revenue opportunities, optimise pricing, and build growth engines that scale.',
    icon: '📈'
  },
  {
    title: 'Team Leadership',
    description: 'Build and lead high-performing product teams. Coaching, hiring, and organisational design.',
    icon: '👥'
  },
  {
    title: 'Product Discovery',
    description: 'Deep user research, rapid prototyping, and validation to find product-market fit faster.',
    icon: '🔍'
  },
]

export default function Services({ design }: ServicesProps) {
  if (design === 'bold') {
    return (
      <section id="services" className="py-24 bg-[#01285C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">What I Do</h2>
            </div>
            <p className="text-white/60 max-w-md hidden md:block">Flexible engagement models to match your stage and budget.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#F02878]/50 transition-all">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F02878] transition-colors">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Services</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mt-4 mb-6">How I Can Help</h2>
            <p className="text-xl text-[#01285C]/60 max-w-2xl mx-auto">Flexible engagement models to match your stage and challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#01285C] mb-3 group-hover:text-[#F02878] transition-colors">{service.title}</h3>
                <p className="text-[#01285C]/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="services" className="py-24 bg-[#01285C] relative">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">What I Do</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Flexible engagement models to match your stage and challenges.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#F02878]/50 transition-all">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F02878] transition-colors">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F02878]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
