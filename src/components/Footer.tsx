import { Mail } from 'lucide-react'
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from './BrandIcons'
import { LINKS } from '../data/links'

export function Footer() {
  const items = [
    { label: 'Instagram', url: LINKS.instagramKsuCet, icon: <InstagramIcon /> },
    { label: 'YouTube', url: LINKS.youtube, icon: <YoutubeIcon /> },
    { label: 'Email', url: LINKS.email ? 'mailto:' + LINKS.email : '', icon: <Mail size={20} strokeWidth={1.8} /> },
    { label: 'WhatsApp', url: LINKS.whatsapp, icon: <WhatsappIcon /> },
  ]
  return (
    <footer className="border-t border-line mt-16" style={{ background: 'var(--surface)' }}>
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 py-5 safe-bottom grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6 text-center md:text-left">
        <div className="text-sm text-muted">
          <span className="font-semibold text-fg"><span className="text-accent">©</span> 2026 SAC LEARN</span>
          <span className="mx-2 text-subtle">·</span>KSU CET Student Assist Cell
        </div>
        <div className="flex items-center justify-center gap-1">
          {items.map(i => i.url ? (
            <a key={i.label} href={i.url} target="_blank" rel="noopener noreferrer" aria-label={i.label} title={i.label}
              className="w-10 h-10 grid place-items-center rounded-full text-accent hover:bg-accent-soft transition-colors">{i.icon}</a>
          ) : (
            <span key={i.label} aria-label={i.label + ' (link coming soon)'} title={i.label + ' (link coming soon)'}
              className="w-10 h-10 grid place-items-center rounded-full text-accent opacity-40">{i.icon}</span>
          ))}
        </div>
        <div className="text-sm text-muted md:text-right">Developed by <span className="font-semibold text-accent">Rajath A</span></div>
      </div>
    </footer>
  )
}
