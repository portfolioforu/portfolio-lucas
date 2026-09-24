import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { contact, profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            {contact.body}
          </p>

          <div className="mx-auto mt-5 flex max-w-md items-center justify-center gap-2 rounded-full border border-line bg-cream-dim px-4 py-2 text-sm text-ink-soft">
            <MapPin className="h-4 w-4 shrink-0 text-coral" />
            {contact.availabilityNote}
          </div>

          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-base font-medium text-cream transition-colors hover:bg-coral"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </motion.a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-coral hover:text-coral"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </a>
            {contact.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-coral hover:text-coral"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="font-display text-xl font-medium text-ink">Questions fréquentes</h3>
          <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-panel/60">
            {contact.faq.map((item) => (
              <details key={item.question} className="group px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-medium text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    {item.question}
                    <span className="text-coral transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-2.5 text-base leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
