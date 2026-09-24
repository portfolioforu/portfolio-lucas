import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projets" replace />
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint transition-colors hover:text-coral"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          <span className="mt-6 inline-block rounded-full bg-coral-dim px-3 py-1 text-sm font-semibold text-coral-deep">
            {project.tag}
          </span>

          <h1 className="font-display mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-base text-ink-faint">
            <span>{project.client}</span>
            <span>{project.role}</span>
            <span>{project.duration}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-line bg-cream-dim/60 p-5">
              <div className="font-display text-3xl font-semibold text-coral">{r.value}</div>
              <div className="mt-1 text-base text-ink-soft">{r.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-ink">Contexte</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{project.context}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <h2 className="font-display text-2xl font-medium text-ink">Objectifs</h2>
          <ul className="mt-4 space-y-3">
            {project.objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 text-lg leading-relaxed text-ink-soft">
                <Check className="mt-1 h-4 w-4 shrink-0 text-coral" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14} className="mt-12">
          <h2 className="font-display text-2xl font-medium text-ink">Ce que j'ai fait</h2>
          <ul className="mt-4 space-y-3">
            {project.actions.map((a) => (
              <li key={a} className="flex items-start gap-3 text-lg leading-relaxed text-ink-soft">
                <Check className="mt-1 h-4 w-4 shrink-0 text-coral" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16} className="mt-12">
          <h2 className="font-display text-2xl font-medium text-ink">Outils utilisés</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-coral-dim bg-coral-dim/50 px-3 py-1.5 text-sm font-medium text-coral-deep"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-12">
          <h2 className="font-display text-2xl font-medium text-ink">Ce que j'en retiens</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{project.learned}</p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-base font-medium text-ink-soft transition-colors hover:text-coral"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-ink px-7 py-3 text-base font-medium text-cream transition-transform hover:-translate-y-0.5 hover:bg-coral"
          >
            Discuter d'un projet similaire
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
