import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, projects, skills, stats } from '../data/content'
import Reveal from './Reveal'

const featured = projects.slice(0, 2)

export default function HomeHighlights() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-cream-dim/60 p-6 text-center"
            >
              <div className="font-display text-3xl font-semibold text-coral">{s.value}</div>
              <div className="mt-1 text-base text-ink-soft">{s.label}</div>
            </motion.div>
          ))}
        </Reveal>

        <Reveal delay={0.06} className="mt-16 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Quelques repères
            </span>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">
              {profile.name.split(' ')[0]} en quelques mots
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-2">
          {skills.flatMap((g) => g.items).slice(0, 8).map((item) => (
            <span
              key={item}
              className="rounded-full border border-coral-dim bg-coral-dim/50 px-3 py-1.5 text-sm font-medium text-coral-deep"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Projets récents
            </span>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Deux réalisations en un coup d'œil
            </h2>
          </div>
          <Link
            to="/projets"
            className="hidden shrink-0 items-center gap-1 text-base font-medium text-ink-soft transition-colors hover:text-coral sm:inline-flex"
          >
            Tout voir
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={`/projets/${p.slug}`}
                className="group block h-full rounded-2xl border border-line bg-panel p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/10"
              >
                <span className="rounded-full bg-coral-dim px-3 py-1 text-sm font-semibold text-coral-deep">
                  {p.tag}
                </span>
                <h3 className="font-display mt-4 text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-faint transition-colors group-hover:text-coral">
                  Voir le détail
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center sm:hidden">
          <Link
            to="/projets"
            className="inline-flex items-center gap-1 text-base font-medium text-ink-soft transition-colors hover:text-coral"
          >
            Tous les projets
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
