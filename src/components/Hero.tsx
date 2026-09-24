import { motion, type Variants } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/content'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-28 md:pt-44 md:pb-36">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/20 blur-3xl md:h-[28rem] md:w-[28rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-coral-dim blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-cream-dim px-4 py-1.5 text-sm font-medium text-ink-soft"
        >
          <Sparkles className="h-3.5 w-3.5 text-coral" />
          {profile.availability}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-3 text-lg font-medium text-coral md:text-xl">
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex items-center justify-center gap-1.5 text-base text-ink-faint">
          <MapPin className="h-4 w-4" />
          {profile.location}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projets"
            className="rounded-full bg-ink px-7 py-3 text-base font-medium text-cream transition-transform hover:-translate-y-0.5 hover:bg-coral"
          >
            Voir mes projets
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-line px-7 py-3 text-base font-medium text-ink transition-colors hover:border-coral hover:text-coral"
          >
            Me contacter
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-ink-faint"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
