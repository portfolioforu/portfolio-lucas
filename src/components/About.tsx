import { motion } from 'framer-motion'
import { about, stats } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="À propos" title="Un peu plus sur moi" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-line bg-cream-dim/60 p-5"
                >
                  <div className="font-display text-3xl font-semibold text-coral">{s.value}</div>
                  <div className="mt-1 text-base text-ink-soft">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
