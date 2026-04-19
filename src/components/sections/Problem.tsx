'use client'

import { motion } from 'framer-motion'

interface ProblemProps {
  design: 'bold' | 'clean' | 'dark'
}

const stats = [
  {
    stat: '6+ mo / £200k+',
    label: 'Average CPO hire takes 6+ months and costs £200k+ in total',
  },
  {
    stat: '73%',
    label: 'of digital transformations fail — usually because of leadership, not technology (McKinsey)',
  },
  {
    stat: 'Weeks not months',
    label: 'The fractional option: senior leadership, weeks not months, working tools included',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Problem({ design }: ProblemProps) {
  // Bold Design
  if (design === 'bold') {
    return (
      <section className="py-24 bg-[#01285C] relative overflow-hidden">
        {/* Decorative geometric */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-[#F02878]/10 rounded-full -translate-y-1/2 translate-x-1/2" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          <motion.div variants={item} className="max-w-4xl mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/20 border border-[#F02878]/30 rounded-full mb-8">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8">
              Most Scaling Companies Have a Product Problem.{' '}
              <span className="text-[#F02878]">Few Have a Product Leader Who Builds.</span>
            </h2>
          </motion.div>

          <motion.div variants={item} className="space-y-8 mb-20 max-w-3xl">
            <p className="text-xl text-white/60 leading-relaxed">
              PE-backed and scaling B2B companies are under pressure to build product capability fast. The problem isn't ideas — it's the senior leadership to turn ideas into outcomes.
            </p>
            <p className="text-xl text-white/60 leading-relaxed">
              A full-time CPO is expensive, slow to hire, and often the wrong fit at your stage. An interim CPO is better. But most interims show up with frameworks and leave with slide decks.
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed">
              What you actually need is someone who builds the product function — the team, the operating model, the tools — and leaves you with something that runs after they're gone.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden group hover:border-[#F02878]/30 transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F02878] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-4xl font-bold text-[#F02878] mb-4">{stat.stat}</div>
                <div className="text-white/60 text-sm leading-relaxed">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Clean Design
  if (design === 'clean') {
    return (
      <section className="py-24 bg-[#01285C] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 max-w-5xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#F02878]/20 border border-[#F02878]/30 rounded-full mb-8">
              <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.1] mb-8">
              Most Scaling Companies Have a Product Problem.{' '}
              <span className="text-[#F02878]">Few Have a Product Leader Who Builds.</span>
            </h2>
          </motion.div>

          <motion.div variants={item} className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
            <p className="text-lg text-white/60 leading-relaxed">
              PE-backed and scaling B2B companies are under pressure to build product capability fast. The problem isn't ideas — it's the senior leadership to turn ideas into outcomes.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              A full-time CPO is expensive, slow to hire, and often the wrong fit at your stage. An interim CPO is better. But most interims show up with frameworks and leave with slide decks.
            </p>
            <p className="text-lg text-white font-semibold leading-relaxed">
              What you actually need is someone who builds the product function — the team, the operating model, the tools — and leaves you with something that runs after they're gone.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#F02878] mb-4">{stat.stat}</div>
                <div className="text-white/50 text-sm leading-relaxed">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Dark Design
  return (
    <section className="py-24 bg-[#011a3a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F02878]/60 to-transparent" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#F02878]/10 rounded-full blur-[80px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.div variants={item} className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F02878]/15 border border-[#F02878]/20 rounded-full mb-8">
            <span className="text-[#F02878] text-xs font-semibold tracking-wider uppercase">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8">
            Most Scaling Companies Have a{' '}
            <span className="bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent">Product Problem.</span>
            <br />
            Few Have a Product Leader Who Builds.
          </h2>
        </motion.div>

        <motion.div variants={item} className="space-y-8 mb-20 max-w-3xl">
          <p className="text-xl text-white/60 leading-relaxed">
            PE-backed and scaling B2B companies are under pressure to build product capability fast. The problem isn't ideas — it's the senior leadership to turn ideas into outcomes.
          </p>
          <p className="text-xl text-white/60 leading-relaxed">
            A full-time CPO is expensive, slow to hire, and often the wrong fit at your stage. An interim CPO is better. But most interims show up with frameworks and leave with slide decks.
          </p>
          <p className="text-xl text-white font-semibold leading-relaxed">
            What you actually need is someone who builds the product function — the team, the operating model, the tools — and leaves you with something that runs after they're gone.
          </p>
        </motion.div>

        {/* Stats with glassmorphism */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden group hover:border-[#F02878]/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F02878]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F02878] to-[#ff5a9e] bg-clip-text text-transparent mb-4">{stat.stat}</div>
                <div className="text-white/50 text-sm leading-relaxed">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
