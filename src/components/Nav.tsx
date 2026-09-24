import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-ink">
          Lucas<span className="text-coral">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-coral ${
                    isActive ? 'text-coral' : 'text-ink-soft'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-ink px-5 py-2 text-base font-medium text-cream transition-colors hover:bg-coral md:inline-block"
        >
          Me contacter
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t border-line bg-cream px-6 pb-4 md:hidden"
        >
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-base font-medium ${isActive ? 'text-coral' : 'text-ink-soft'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}
