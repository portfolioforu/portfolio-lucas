import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-ink-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Portfolio réalisé par{' '}
          <a
            href="https://portfolio-for-u.fr"
            className="font-medium text-coral-deep hover:underline"
          >
            Portfolio For U
          </a>
        </span>
      </div>
    </footer>
  )
}
