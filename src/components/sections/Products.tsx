'use client'

interface ProductsProps {
  design: 'bold' | 'clean' | 'dark'
}

const products = [
  {
    name: 'Hoursly',
    tagline: 'Time tracking SaaS for modern teams',
    description: 'Simple, intuitive time tracking for freelancers, agencies, and small teams. Track hours, manage projects, generate reports.',
    url: 'https://app.hoursly.app/',
    badge: 'Co-Founder',
    color: '#6366f1'
  },
  {
    name: 'PMOS',
    tagline: 'Project Management Operating System',
    description: 'A complete project management solution that adapts to how your team actually works. No complex setups, just results.',
    url: 'https://www.pmosworkspace.com/',
    badge: 'Product Advisor',
    color: '#10b981'
  },
]

export default function Products({ design }: ProductsProps) {
  if (design === 'bold') {
    return (
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#01285C] mt-4">Built & Backed</h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">Products I've helped build or advise on.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <a key={product.name} href={product.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold text-white bg-[#01285C] px-3 py-1 rounded-full">{product.badge}</span>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-[#F02878] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#01285C] mb-2 group-hover:text-[#F02878] transition-colors">{product.name}</h3>
                <p className="text-[#F02878] font-medium mb-4">{product.tagline}</p>
                <p className="text-gray-600">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="products" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Products</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mt-4 mb-6">Built & Backed</h2>
            <p className="text-xl text-[#01285C]/60 max-w-2xl mx-auto">Products I've helped build or currently advise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <a key={product.name} href={product.url} target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-semibold text-[#F02878] bg-[#F02878]/10 px-3 py-1 rounded-full">{product.badge}</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#F02878] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#01285C] mb-2 group-hover:text-[#F02878] transition-colors">{product.name}</h3>
                <p className="text-[#F02878] font-medium mb-4">{product.tagline}</p>
                <p className="text-[#01285C]/60">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="products" className="py-24 bg-[#01285C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#F02878] text-sm font-semibold tracking-wider uppercase">Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Built & Backed</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Products I've helped build or currently advise.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <a key={product.name} href={product.url} target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#F02878]/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F02878]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-semibold text-[#F02878] bg-[#F02878]/20 px-3 py-1 rounded-full">{product.badge}</span>
                  <svg className="w-6 h-6 text-white/40 group-hover:text-[#F02878] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F02878] transition-colors">{product.name}</h3>
                <p className="text-[#F02878] font-medium mb-4">{product.tagline}</p>
                <p className="text-white/60">{product.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
