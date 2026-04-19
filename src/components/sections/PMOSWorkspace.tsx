'use client'

import { motion } from 'framer-motion'

interface PMOSWorkspaceProps {
  design: 'bold' | 'clean' | 'dark'
}

const features = [
  {
    title: 'Initiative Prioritisation Rubric',
    description: 'Structured framework for ranking opportunities — not gut feel, not politics. What to build and why, backed by evidence. Used in every engagement.',
  },
  {
    title: 'Product Gram',
    description: 'Dependency mapping for your product initiatives. Spot the blockers before they become problems. See the sequencing that gets you to launch faster.',
  },
  {
    title: 'Product Plan',
    description: 'Roadmap AND costings in a single tool — not a spreadsheet nobody updates. The running plan your board can interact with.',
  },
  {
    title: 'Org Skills Benchmark',
    description: 'Coming soon: overlay individual PM assessments against org-level benchmarks.',
    badge: 'Coming Soon',
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

export default function PMOSWorkspace({ design }: PMOSWorkspaceProps) {
  // Bold Design
  if (design === 'bold') {
    return (
      <section className="py-24 bg-gray-50 overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/10 rounded-full mb-6">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Free Tool</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#01285C] mb-6">
              Try the Product Management Operating System — Free
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The same tool I use in every engagement. Built for product leaders who want to run, not just plan.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: PM Skills Assessment */}
            <motion.div variants={item} className="bg-[#01285C] rounded-3xl p-10 text-center">
              <div className="w-16 h-16 bg-[#F02878] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">PM Skills Assessment</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                15 minutes, no commitment. Where is your product team strongest — and where are the gaps?
              </p>
              <a
                href="https://www.pmosworkspace.com/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F02878] text-white rounded-xl font-semibold text-lg hover:bg-[#d01f5f] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F02878]/30"
              >
                Take the Free Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Right: Feature highlights */}
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#01285C] mb-6">PMOS Workspace includes:</h3>
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-[#F02878]/20 transition-all"
                >
                  <div className="w-8 h-8 bg-[#F02878]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#F02878]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[#01285C]">{feature.title}</h4>
                      {feature.badge && (
                        <span className="text-xs px-2 py-0.5 bg-[#F02878]/10 text-[#F02878] rounded-full font-medium">{feature.badge}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="pt-4">
                <a
                  href="https://www.pmosworkspace.com/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#01285C] text-white rounded-xl font-semibold text-lg hover:bg-[#01285C]/90 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  Everything in PMOS Workspace is free to start. The tools I build are mine — but they're yours to use after an engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    )
  }

  // Clean Design
  if (design === 'clean') {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/10 rounded-full mb-6">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Free Tool</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#01285C] mb-6">
              Try the Product Management Operating System — Free
            </h2>
            <p className="text-xl text-[#01285C]/50 max-w-2xl mx-auto">
              The same tool I use in every engagement. Built for product leaders who want to run, not just plan.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: PM Skills Assessment */}
            <motion.div variants={item} className="bg-gray-50 rounded-3xl p-10 text-center">
              <div className="w-16 h-16 bg-[#01285C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#01285C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#01285C] mb-4">PM Skills Assessment</h3>
              <p className="text-[#01285C]/50 text-sm leading-relaxed mb-8">
                15 minutes, no commitment. Where is your product team strongest — and where are the gaps?
              </p>
              <a
                href="https://www.pmosworkspace.com/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#01285C] text-white rounded-full font-semibold text-lg hover:bg-[#01285C]/90 transition-all"
              >
                Take the Free Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Right: Features */}
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#01285C] mb-6">PMOS Workspace includes:</h3>
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#F02878]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#F02878]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-[#01285C]">{feature.title}</h4>
                      {feature.badge && (
                        <span className="text-xs px-2 py-0.5 bg-[#F02878]/10 text-[#F02878] rounded-full font-medium">{feature.badge}</span>
                      )}
                    </div>
                    <p className="text-sm text-[#01285C]/50 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="https://www.pmosworkspace.com/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F02878] text-white rounded-full font-semibold text-lg hover:bg-[#d01f5f] transition-all"
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-xs text-[#01285C]/40 mt-3">
                  Everything in PMOS Workspace is free to start. The tools I build are mine — but they're yours to use after an engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    )
  }

  // Dark Design
  return (
    <section className="py-24 bg-[#011a3a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F02878]/50 to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F02878]/10 rounded-full blur-[80px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div variants={item} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F02878]/15 border border-[#F02878]/20 rounded-full mb-6">
            <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">Free Tool</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Try the Product Management Operating System — Free
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            The same tool I use in every engagement. Built for product leaders who want to run, not just plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: PM Skills Assessment */}
          <motion.div variants={item} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F02878] to-[#ff5a9e] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">PM Skills Assessment</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              15 minutes, no commitment. Where is your product team strongest — and where are the gaps?
            </p>
            <a
              href="https://www.pmosworkspace.com/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#F02878]/30 transition-all"
            >
              Take the Free Assessment
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Features */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6">PMOS Workspace includes:</h3>
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#F02878]/30 transition-all"
              >
                <div className="w-8 h-8 bg-[#F02878]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#F02878]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    {feature.badge && (
                      <span className="text-xs px-2 py-0.5 bg-[#F02878]/20 text-[#F02878] rounded-full font-medium border border-[#F02878]/20">{feature.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="pt-4">
              <a
                href="https://www.pmosworkspace.com/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#01285C] rounded-xl font-semibold text-lg hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-xs text-white/30 mt-3">
                Everything in PMOS Workspace is free to start. The tools I build are mine — but they're yours to use after an engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
