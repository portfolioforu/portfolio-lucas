import { motion } from 'framer-motion'
import { skills } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Compétences" title="Ce que je sais faire" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-line bg-panel/60 p-6"
            >
              <h3 className="font-display text-lg font-medium text-ink">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-coral-dim bg-coral-dim/50 px-3 py-1.5 text-sm font-medium text-coral-deep"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
