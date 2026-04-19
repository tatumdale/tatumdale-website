'use client'

import { motion } from 'framer-motion'

interface CaseStudiesProps {
  design: 'bold' | 'clean' | 'dark'
}

const caseStudies = [
  {
    id: 'TELXL',
    challenge: 'A telecoms company needed a digital communications platform — fast. Building it in-house would have taken 2 years and cost £2m.',
    built: 'Identified and facilitated the purchase of proven code from an indirect competitor in a different market. The platform was merged into the existing product within 6 months. Then I built the product management team from scratch — including hiring and coaching a technical author, and managing the product designer.',
    outcome: '£200k cost instead of £2m. 6 months instead of 2 years. £1.5m saved. A product team that could run the platform after I left.',
    stats: [
      { value: '£1.5m', label: 'Saved' },
      { value: '6mo', label: 'Instead of 2yr' },
      { value: '£200k', label: 'vs £2m build' },
    ],
  },
  {
    id: 'GROWING-UK',
    title: 'A Growing UK Business',
    challenge: 'A growing UK business had no product management function — everything was run by the CTO, with no plan beyond the next month. They needed a credible product strategy to support their growth ambitions.',
    built: 'Product strategy and a 3-year product plan from scratch. A product operating model and SOPs. A financial model for the board. Board presentations on the industry landscape and technology change programme. Coaching for the PM team. I left them with: A Product Graph and Plan tool, an agentic documentation structure, a comprehensive prototype of the future product vision, and PMOS Workspace — all of which they continue to use.',
    outcome: 'A product function that could run without me.',
    stats: [
      { value: '3yr', label: 'Plan built' },
      { value: 'Full', label: 'PM function' },
      { value: 'Tools', label: 'Still in use' },
    ],
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

function CaseStudyCard({ cs, design }: { cs: typeof caseStudies[0]; design: 'bold' | 'clean' | 'dark' }) {
  const title = 'title' in cs ? cs.title : cs.id

  if (design === 'bold') {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
      >
        {/* Header */}
        <div className="bg-[#01285C] px-10 py-8">
          <div className="text-xs font-semibold text-[#F02878] uppercase tracking-wider mb-3">Case Study</div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          {cs.stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center">
              <div className="text-2xl font-bold text-[#F02878] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-10 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#F02878]/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#F02878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#01285C]">The Challenge</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pl-11">{cs.challenge}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#01285C]/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#01285C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#01285C]">What I Built</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pl-11">{cs.built}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#F02878] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[#01285C]">The Outcome</h4>
            </div>
            <p className="text-[#01285C] font-medium text-sm leading-relaxed pl-11">{cs.outcome}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  if (design === 'clean') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
      >
        <div className="bg-gray-50 px-10 py-8 border-b border-gray-100">
          <div className="text-xs font-semibold text-[#F02878] uppercase tracking-wider mb-3">Case Study</div>
          <h3 className="text-3xl font-semibold text-[#01285C]">{title}</h3>
        </div>

        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          {cs.stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center">
              <div className="text-2xl font-bold text-[#01285C] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="p-10 space-y-8">
          <div>
            <h4 className="font-semibold text-[#01285C] mb-3">The Challenge</h4>
            <p className="text-[#01285C]/60 text-sm leading-relaxed">{cs.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#01285C] mb-3">What I Built</h4>
            <p className="text-[#01285C]/60 text-sm leading-relaxed">{cs.built}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#F02878] mb-3">The Outcome</h4>
            <p className="text-[#01285C] font-medium text-sm leading-relaxed">{cs.outcome}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  // Dark design
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#F02878]/30 transition-all"
    >
      <div className="bg-gradient-to-r from-[#F02878]/20 to-[#F02878]/5 px-10 py-8 border-b border-white/10">
        <div className="text-xs font-semibold text-[#F02878] uppercase tracking-wider mb-3">Case Study</div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
        {cs.stats.map((stat) => (
          <div key={stat.label} className="py-6 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent mb-1">{stat.value}</div>
            <div className="text-xs text-white/40 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="p-10 space-y-8">
        <div>
          <h4 className="font-semibold text-white mb-3">The Challenge</h4>
          <p className="text-white/50 text-sm leading-relaxed">{cs.challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">What I Built</h4>
          <p className="text-white/50 text-sm leading-relaxed">{cs.built}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#F02878] mb-3">The Outcome</h4>
          <p className="text-white/70 font-medium text-sm leading-relaxed">{cs.outcome}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudies({ design }: CaseStudiesProps) {
  const bgClass = design === 'clean' ? 'bg-gray-50' : design === 'dark' ? 'bg-[#011a3a]' : 'bg-white'

  return (
    <section id="casestudies" className={`py-24 ${bgClass} overflow-hidden`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div variants={item} className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-[#F02878]/10 rounded-full mb-6">
            <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Case Studies</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${design === 'clean' ? 'text-[#01285C]' : design === 'dark' ? 'text-white' : 'text-[#01285C]'}`}>
            What "I Build It" Actually Looks Like
          </h2>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} design={design} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
