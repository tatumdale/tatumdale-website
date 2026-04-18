'use client'

interface ContactProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function Contact({ design }: ContactProps) {
  if (design === 'bold') {
    return (
      <section id="contact" className="py-24 bg-[#F02878]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Product?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your product goals. Book a free discovery call or reach out via email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#F02878] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Discovery Call
            </a>
            <a href="mailto:tatum@tatumdale.com" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
          
          <p className="text-white/60 mt-12 text-sm">
            Or email directly: <a href="mailto:tatum@tatumdale.com" className="underline hover:text-white">tatum@tatumdale.com</a>
          </p>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#01285C] mb-6">Let's Work Together</h2>
          <p className="text-xl text-[#01285C]/60 mb-12">
            Ready to take your product to the next level? Let's discuss how I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#01285C] text-white rounded-full font-semibold text-lg hover:bg-[#01285C]/90 transition-colors">
              Book a Discovery Call
            </a>
            <a href="mailto:tatum@tatumdale.com" className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#01285C]/20 text-[#01285C] rounded-full font-semibold text-lg hover:border-[#01285C]/40 transition-colors">
              Send an Email
            </a>
          </div>
          
          <p className="text-[#01285C]/60 mt-12 text-sm">
            tatum@tatumdale.com
          </p>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#01285C] to-[#011a3a] relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F02878]/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Great</h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Ready to transform your product? Let's discuss how I can help you achieve your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#F02878]/30 transition-all">
            Book a Discovery Call
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="mailto:tatum@tatumdale.com" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/5 transition-colors">
            Send an Email
          </a>
        </div>
        
        <p className="text-white/60 mt-12 text-sm">
          Or reach out directly: <a href="mailto:tatum@tatumdale.com" className="text-[#F02878] hover:underline">tatum@tatumdale.com</a>
        </p>
      </div>
    </section>
  )
}
