'use client'

import { motion } from 'framer-motion'

interface WhoYouAreProps {
  design: 'bold' | 'clean' | 'dark'
}

const credibilityItems = [
  {
    title: 'TelXL',
    text: 'Identified, sourced, and oversaw the purchase of a digital communications platform for £200k instead of building it in-house (£2m, 2 years). Saved £1.5m and 1.5 years. Built the product management team.',
  },
  {
    title: 'A growing UK business',
    text: 'Built product strategy, operating model, and financial plan from scratch for a business with no product function. Left them with working tools including a Product Graph and PMOS Workspace.',
  },
  {
    title: 'Stonerise',
    text: 'Advised the founder of a B2B SaaS to build their product in 3 months with AI coding tools — vs. the £600k–£1.5m and 12–18 months agencies were quoting.',
  },
  {
    title: 'Cirrus Response',
    text: 'Built a 25-FTE product & technology function. Built a payments system with an offshore team for £5k that would have cost £70k onshore.',
  },
]

const products = [
  {
    name: 'Hoursly',
    text: 'Built and run. A B2B SaaS for tracking offshore work, budgeting, and resource decisions.',
    url: 'https://app.hoursly.app/',
  },
  {
    name: 'Kliq',
    text: 'Co-founded. A coaching and creator platform. Scaled to the US market, hundreds of active creators.',
    url: 'https://kliq.io',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function WhoYouAre({ design }: WhoYouAreProps) {
  // Bold Design
  if (design === 'bold') {
    return (
      <section id="about" className="py-24 bg-white overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={item} className="max-w-3xl mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/10 rounded-full mb-6">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Who I Am</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#01285C] leading-tight mb-8">
              I work with PE-backed and scaling B2B companies — usually £5m to £50m revenue — who need senior product leadership without the full-time executive cost.
            </h2>
          </motion.div>

          <motion.div variants={item} className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I've built product functions from scratch, sourced and overseen software implementations that cut time-to-market by up to 1.5 years, designed AI-integrated product strategies, and created the operating tools that let product teams run without constant leadership input.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-[#01285C] font-semibold leading-relaxed">
                I don't just advise. I build.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                And everything I build stays with you.
              </p>
            </div>
          </motion.div>

          {/* Credibility Block */}
          <motion.div variants={item}>
            <h3 className="text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Where I've Made the Difference</h3>
          </motion.div>

          <motion.div variants={item} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {credibilityItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#F02878]/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#F02878]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#F02878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#01285C] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Products I've Built */}
          <motion.div variants={item} className="border-t border-gray-100 pt-16">
            <h3 className="text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Products I've Built (Skin in the game)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-6 bg-[#01285C] rounded-2xl hover:bg-[#01285C]/90 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#F02878] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white text-lg">{product.name}</h4>
                      <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{product.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Clean Design
  if (design === 'clean') {
    return (
      <section id="about" className="py-24 bg-gray-50 overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/10 rounded-full mb-6">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Who I Am</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#01285C] leading-tight mb-8">
              I work with PE-backed and scaling B2B companies — usually £5m to £50m revenue — who need senior product leadership without the full-time executive cost.
            </h2>
          </motion.div>

          <motion.div variants={item} className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <p className="text-lg text-[#01285C]/70 leading-relaxed">
              I've built product functions from scratch, sourced and overseen software implementations that cut time-to-market by up to 1.5 years, designed AI-integrated product strategies, and created the operating tools that let product teams run without constant leadership input.
            </p>
            <p className="text-xl text-[#01285C] font-semibold">
              I don't just advise. I build.
            </p>
            <p className="text-lg text-[#01285C]/60">
              And everything I build stays with you.
            </p>
          </motion.div>

          {/* Credibility Block */}
          <motion.div variants={item}>
            <h3 className="text-center text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Where I've Made the Difference</h3>
          </motion.div>

          <motion.div variants={item} className="grid md:grid-cols-2 gap-6 mb-16">
            {credibilityItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#01285C] text-lg mb-3">{item.title}</h4>
                <p className="text-[#01285C]/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Products I've Built */}
          <motion.div variants={item} className="text-center">
            <h3 className="text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Products I've Built (Skin in the game)</h3>
          </motion.div>

          <motion.div variants={item} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#F02878]/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#F02878]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F02878] transition-colors">
                  <svg className="w-6 h-6 text-[#F02878] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-[#01285C] text-lg">{product.name}</h4>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-[#01285C]/50 text-sm">{product.text}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Dark Design
  return (
    <section id="about" className="py-24 bg-[#011a3a] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F02878]/50 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div variants={item} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F02878]/15 border border-[#F02878]/20 rounded-full mb-6">
            <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Who I Am</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            I work with PE-backed and scaling B2B companies — usually £5m to £50m revenue — who need senior product leadership without the full-time executive cost.
          </h2>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              I've built product functions from scratch, sourced and overseen software implementations that cut time-to-market by up to 1.5 years, designed AI-integrated product strategies, and created the operating tools that let product teams run without constant leadership input.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white font-semibold leading-relaxed">
              I don't just advise. I build.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              And everything I build stays with you.
            </p>
          </div>
        </motion.div>

        {/* Credibility Block */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Where I've Made the Difference</h3>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {credibilityItems.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#F02878]/30 transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#F02878]/20 to-[#ff5a9e]/20 rounded-xl flex items-center justify-center mb-4 border border-[#F02878]/20">
                <svg className="w-5 h-5 text-[#F02878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Products I've Built */}
        <motion.div variants={item} className="border-t border-white/10 pt-16">
          <h3 className="text-sm font-semibold text-[#F02878] tracking-wider uppercase mb-8">Products I've Built (Skin in the game)</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#F02878]/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F02878] to-[#ff5a9e] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-lg">{product.name}</h4>
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{product.text}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
