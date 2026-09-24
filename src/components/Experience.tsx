import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certifications, experience, experienceIntro } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="parcours" className="bg-cream-dim/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Parcours" title="Formations & expériences" />

        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{experienceIntro}</p>
        </Reveal>

        <div className="relative mt-14 space-y-10 border-l border-line pl-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-coral bg-cream" />
              <span className="text-sm font-semibold uppercase tracking-wide text-coral">
                {e.period}
              </span>
              <h3 className="font-display mt-1.5 text-xl font-medium text-ink">{e.title}</h3>
              <p className="mt-0.5 text-base font-medium text-ink-faint">{e.org}</p>
              <p className="mt-2.5 text-base leading-relaxed text-ink-soft">
                {e.description}
              </p>
              {e.skillsGained && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {e.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-coral-dim bg-coral-dim/40 px-3 py-1 text-sm font-medium text-coral-deep"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.06} className="mt-16">
          <h3 className="font-display text-xl font-medium text-ink">Certifications</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-line bg-panel p-5"
              >
                <Award className="h-5 w-5 text-coral" />
                <p className="mt-3 text-base font-medium leading-snug text-ink">{c.name}</p>
                <p className="mt-1.5 text-sm text-ink-faint">
                  {c.org} · {c.year}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-line bg-panel p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-medium text-ink">
              Envie d'en savoir plus sur ce parcours ?
            </h3>
            <p className="mt-1.5 text-base text-ink-soft">
              Discutons de comment ces expériences peuvent servir ton projet.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-cream transition-colors hover:bg-coral"
          >
            Me contacter
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
