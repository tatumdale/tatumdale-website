'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function Hero({ design }: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  // Bold Design
  if (design === 'bold') {
    return (
      <section className="min-h-screen bg-[#01285C] relative overflow-hidden flex items-center">
        {/* Geometric decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F02878]/15 to-transparent" />
        <div className="absolute top-16 right-16 w-96 h-96 border border-[#F02878]/20 rounded-full" />
        <div className="absolute top-40 right-40 w-72 h-72 border border-white/5 rounded-full" />
        <div className="absolute bottom-32 right-24 w-48 h-48 border border-[#F02878]/10 rounded-full" />
        <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-[#F02878] to-transparent" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto px-6 py-32"
        >
          <motion.div variants={item} className="max-w-4xl">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 bg-[#F02878]/20 rounded-full mb-10 border border-[#F02878]/30">
              <span className="w-2 h-2 rounded-full bg-[#F02878] animate-pulse" />
              <span className="text-[#F02878] text-sm font-semibold tracking-wide">Fractional CPO</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
              I Build Product{' '}
              <span className="relative inline-block">
                <span className="text-[#F02878]">Organisations</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F02878] to-[#F02878]/0" />
              </span>
              ,<br />Not Just Roadmaps.
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-white/70 mb-6 max-w-2xl leading-relaxed">
              Fractional CPO for PE-Backed and Scaling B2B Companies — the senior product leader who ships, not just advises.
            </motion.p>

            <motion.p variants={item} className="text-lg text-white/50 mb-12 max-w-xl leading-relaxed">
              I come in, build the product function, set up the team, and leave you with working tools — not slide decks.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://www.pmosworkspace.com/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F02878] text-white rounded-xl font-semibold text-lg hover:bg-[#d01f5f] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F02878]/30"
              >
                Start Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.pmosworkspace.com/"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                See PMOS Workspace
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              {[
                '15+ years product leadership across B2B SaaS',
                'Saved clients over £2m through smarter build decisions',
                'Built product tools used by 200+ professionals',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <svg className="w-4 h-4 text-[#F02878] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/70 text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </section>
    )
  }

  // Clean Design
  if (design === 'clean') {
    return (
      <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #01285C 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
        >
          <motion.div variants={item} className="mb-12">
            <img
              src="/assets/logos/logo-dark.png"
              alt="Tatumdale"
              className="h-16 mx-auto"
            />
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#01285C] leading-tight mb-8">
            I Build Product Organisations,
            <br />
            <span className="text-[#F02878]">Not Just Roadmaps.</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-[#01285C]/60 mb-5 max-w-2xl mx-auto leading-relaxed">
            Fractional CPO for PE-Backed and Scaling B2B Companies — the senior product leader who ships, not just advises.
          </motion.p>

          <motion.p variants={item} className="text-lg text-[#01285C]/40 mb-14 max-w-xl mx-auto leading-relaxed">
            I come in, build the product function, set up the team, and leave you with working tools — not slide decks.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://www.pmosworkspace.com/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#01285C] text-white rounded-full font-semibold text-lg hover:bg-[#01285C]/90 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://www.pmosworkspace.com/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#01285C]/20 text-[#01285C] rounded-full font-semibold text-lg hover:border-[#01285C]/40 hover:bg-[#01285C]/5 transition-all"
            >
              See PMOS Workspace
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
            {[
              '15+ years product leadership across B2B SaaS',
              'Saved clients over £2m through smarter build decisions',
              'Built product tools used by 200+ professionals',
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full">
                <svg className="w-4 h-4 text-[#F02878] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#01285C]/60 text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Dark Design
  return (
    <section className="min-h-screen bg-[#01285C] relative overflow-hidden flex items-center">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#F02878]/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#F02878]/15 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
      >
        <motion.div variants={item} className="mb-12">
          <img
            src="/assets/logos/logo-light.png"
            alt="Tatumdale"
            className="h-20 mx-auto"
          />
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
          I Build Product{' '}
          <span className="bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent">Organisations</span>
          ,<br />Not Just Roadmaps.
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-white/60 mb-5 max-w-2xl mx-auto leading-relaxed">
          Fractional CPO for PE-Backed and Scaling B2B Companies — the senior product leader who ships, not just advises.
        </motion.p>

        <motion.p variants={item} className="text-lg text-white/40 mb-14 max-w-xl mx-auto leading-relaxed">
          I come in, build the product function, set up the team, and leave you with working tools — not slide decks.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.pmosworkspace.com/"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#F02878]/30 transition-all hover:-translate-y-0.5"
          >
            Start Free
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://www.pmosworkspace.com/"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 transition-all hover:-translate-y-0.5"
          >
            See PMOS Workspace
          </a>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          {[
            '15+ years product leadership across B2B SaaS',
            'Saved clients over £2m through smarter build decisions',
            'Built product tools used by 200+ professionals',
          ].map((text) => (
            <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <svg className="w-4 h-4 text-[#F02878] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/70 text-sm font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
