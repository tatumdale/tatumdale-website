'use client'

import { motion } from 'framer-motion'

interface ServicesProps {
  design: 'bold' | 'clean' | 'dark'
}

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 20h20M4 16l2-12 4 5 2-6 2 6 4-5 2 12H4z" />
  </svg>
)

const CompassIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
)

const CircuitIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M7 7h10v10H7V7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10h4v4h-4v-4z" />
  </svg>
)

const TeamIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const RefreshIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
)

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const icons = [CrownIcon, CompassIcon, CircuitIcon, TeamIcon, GrowthIcon, RefreshIcon, CodeIcon]

const services = [
  {
    title: 'Fractional CPO',
    description:
      "The CPO seat without the full-time cost. I'm in the room with your CEO and board, running product delivery and accountable for outcomes — not just advising from the sidelines.",
    whatIBuild:
      "What I build: a product function that doesn't depend on me. Operating model, team structures, governance, and a running plan your board can interact with.",
  },
  {
    title: 'Product Strategy & Roadmapping',
    description:
      "Investor-grade strategy with financial modelling behind every decision. Not a feature list — a plan that shows what you're investing and what you'll get back.",
    whatIBuild:
      'What I build: a product strategy with EBITDA-linked roadmap. The financial model your leadership team actually uses to make build/buy decisions.',
  },
  {
    title: 'AI Integration & Product Transformation',
    description:
      'A clear AI strategy embedded in your product roadmap — AI that creates genuine commercial differentiation, not AI theatre that investors see through.',
    whatIBuild:
      'What I build: an AI product strategy and the tools to execute it. Assessment frameworks, vendor evaluations, implementation roadmaps.',
  },
  {
    title: 'Team Building & Capability Development',
    description:
      "A product function that runs without me. Coaching, SOPs, product-led culture. The best measure of success is a team that doesn't need me anymore.",
    whatIBuild:
      'What I build: job specs, interview processes, team operating models, coaching plans. PM skills assessments to identify gaps. The internal capability that outlasts the engagement.',
  },
  {
    title: 'GTM & Market Expansion',
    description:
      'Routes to market that actually work — pricing strategy, channel partnerships, sales enablement. Getting to revenue faster.',
    whatIBuild:
      'What I build: pricing models, partner strategies, sales enablement tools. Not just recommendations — the actual deliverables your team uses.',
  },
  {
    title: 'Change Management & Organisational Design',
    description:
      'The narrative, vision, and operating models that make transformation happen internally — not slides that look good in the board pack.',
    whatIBuild:
      'What I build: stakeholder alignment frameworks, internal communication models, transformation roadmaps with clear ownership.',
  },
  {
    title: 'Proprietary Tools — Tatumdale IP',
    description:
      'Everything I build stays with you. PMOS Workspace is my product management operating system — the tools I use in every engagement are yours after it ends. Not just advice. Working software.',
    whatIBuild:
      'What I build: PMOS Workspace and custom tools tailored to your business.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Services({ design }: ServicesProps) {
  if (design === 'bold') {
    return (
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            className="text-[#F02878] text-sm font-semibold tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What I Build For You
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#01285C] mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Seven Areas of Product Leadership
          </motion.h2>

          <motion.p
            className="text-lg text-[#01285C]/60 mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Not all at once — we start where the pressure is highest and build from there.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group bg-[#01285C] rounded-2xl p-8 hover:bg-[#012a62] transition-colors relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#F02878]/20 rounded-xl flex-shrink-0">
                      <span className="text-xs font-bold text-[#F02878]">0{i + 1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[#F02878]" />
                      <h3 className="text-xl font-bold text-white group-hover:text-[#F02878] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-4 pl-16">
                    {service.description}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed pl-16 border-t border-white/10 pt-4">
                    {service.whatIBuild}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  if (design === 'clean') {
    return (
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              className="text-[#F02878] text-sm font-semibold tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What I Build For You
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-[#01285C] mt-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Seven Areas of Product Leadership
            </motion.h2>

            <motion.p
              className="text-[#01285C]/60 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Not all at once — we start where the pressure is highest and build from there.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#F02878]/10 rounded-xl">
                      <Icon className="w-5 h-5 text-[#F02878]" />
                    </div>
                    <span className="text-xs font-semibold text-[#F02878]">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#01285C] mb-3 group-hover:text-[#F02878] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#01285C]/60 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-[#01285C]/40 text-xs leading-relaxed border-t border-gray-100 pt-4">
                    {service.whatIBuild}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Dark design
  return (
    <section id="services" className="py-24 bg-[#01285C] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.span
          className="text-[#F02878] text-sm font-semibold tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What I Build For You
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Seven Areas of Product Leadership
        </motion.h2>

        <motion.p
          className="text-lg text-white/60 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Not all at once — we start where the pressure is highest and build from there.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#F02878]/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F02878]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#F02878]/15 rounded-xl flex-shrink-0">
                      <span className="text-xs font-bold text-[#F02878]">0{i + 1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[#F02878]" />
                      <h3 className="text-xl font-bold text-white group-hover:text-[#F02878] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-4 pl-16">
                    {service.description}
                  </p>
                  <p className="text-white/35 text-sm leading-relaxed pl-16 border-t border-white/10 pt-4">
                    {service.whatIBuild}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
