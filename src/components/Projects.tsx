import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projets" className="bg-cream-dim/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projets" title="Quelques réalisations" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={`/projets/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-coral-dim px-3 py-1 text-sm font-semibold text-coral-deep">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
                </div>

                <h3 className="font-display mt-5 text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {p.description}
                </p>

                <p className="mt-5 border-t border-line pt-4 text-base font-medium text-coral-deep">
                  {p.result}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-faint transition-colors group-hover:text-coral">
                  Voir le détail du projet
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
