import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { contact, profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name || 'un visiteur'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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

        <Reveal delay={0.08} className="mt-16">
          <h3 className="font-display text-xl font-medium text-ink">Un message direct</h3>
          <p className="mt-2 text-base text-ink-soft">
            Ce formulaire ouvre ton client mail avec le message pré-rempli — rien n'est envoyé automatiquement.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-coral"
                  placeholder="Ton nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-coral"
                  placeholder="ton@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-line bg-panel px-4 py-2.5 text-base text-ink outline-none transition-colors focus:border-coral"
                placeholder="Parle-moi de ton projet..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-base font-medium text-cream transition-colors hover:bg-coral"
            >
              <Send className="h-4 w-4" />
              Envoyer le message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.14} className="mt-16">
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
