import { ExternalLink, Globe, Mail, Users } from 'lucide-react'
import { InstagramIcon, YoutubeIcon, WhatsappIcon } from '../components/BrandIcons'
import { LINKS, TEAM, waHref } from '../data/links'

const WHAT_WE_DO = [
  ['Interactive notes', 'Syllabus-based study notes for every topic, with key takeaways up front.'],
  ['Step-by-step animations', 'Watch algorithms such as recursion, sorting and the Tower of Hanoi run one step at a time.'],
  ['Flashcards and quizzes', 'Practise recall and predict-the-output questions, with a streak to keep it fun.'],
  ['Past question papers', 'Real KTU papers analysed by module, plus practice questions in the same pattern.'],
  ['Python playground', 'Write and run Python in the browser, with nothing to install.'],
]

function Card({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line p-5 sm:p-6 lg:p-8" style={{ background: 'var(--surface)' }}>
      <h2 className="text-xl font-medium mb-4 flex items-center gap-2 text-accent">{icon}{title}</h2>
      {children}
    </section>
  )
}

function LinkRow({ icon, name, sub, url }: { icon: React.ReactNode; name: string; sub: string; url: string }) {
  const inner = (
    <>
      <span className="w-10 h-10 shrink-0 grid place-items-center rounded-xl bg-accent-soft text-accent">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-sm">{name}</span>
        <span className="block text-xs text-subtle truncate">{url ? sub : 'Link coming soon'}</span>
      </span>
      {url && <ExternalLink size={15} className="text-subtle group-hover:text-accent transition-colors" />}
    </>
  )
  const cls = 'group min-w-0 flex items-center gap-3 rounded-xl border border-line p-3 bg-elevated'
  return url
    ? <a href={url} target="_blank" rel="noopener noreferrer" className={cls + ' hover:border-accent transition-colors'}>{inner}</a>
    : <div className={cls + ' opacity-70'}>{inner}</div>
}

function Person({ name, phone, role }: { name: string; phone: string; role?: string }) {
  return (
    <div className="group min-w-0 rounded-xl border border-line p-4 bg-elevated hover:border-accent transition-colors">
      <div className="font-medium">{name}</div>
      {role && <div className="text-xs text-subtle mb-3">{role}</div>}
      <a href={waHref(phone)} target="_blank" rel="noopener noreferrer" aria-label={`Message ${name} on WhatsApp`} className="wa-btn mt-1">
        <WhatsappIcon width={16} height={16} />+91 {phone}
      </a>
    </div>
  )
}

export function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 lg:px-6 py-10 lg:py-14">
      <div className="label">About us</div>
      <h1 className="text-3xl lg:text-4xl font-medium tracking-tight mt-1 mb-8">About SAC LEARN</h1>

      <div className="grid grid-cols-1 gap-6">
        <Card title="Our mission">
          <p className="text-muted leading-relaxed mb-6">
            KSU CET SAC Learn was created by students, for students. We make it effortless to find study materials, past question papers, and the academic support you need to succeed through interactive and fun methods.
          </p>
          <h3 className="font-medium mb-3">What we do on this website</h3>
          <ul className="grid grid-cols-1 gap-3">
            {WHAT_WE_DO.map(([t, d]) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                <span><span className="font-medium">{t}:</span> <span className="text-muted">{d}</span></span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Connect with us">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <LinkRow icon={<InstagramIcon />} name="KSU CET Unit" sub="instagram.com/ksu.cet" url={LINKS.instagramKsuCet} />
            <LinkRow icon={<InstagramIcon />} name="SAC CET" sub="instagram.com/studentassistcell_cet" url={LINKS.instagramSacCet} />
            <LinkRow icon={<Globe size={20} strokeWidth={1.8} />} name="SAC website" sub="sac.ksucet.in" url={LINKS.sacWebsite} />
            <LinkRow icon={<YoutubeIcon />} name="YouTube" sub={LINKS.youtube.replace(/^https?:\/\//, '')} url={LINKS.youtube} />
            <LinkRow icon={<WhatsappIcon />} name="WhatsApp" sub="Chat with us" url={LINKS.whatsapp} />
            <LinkRow icon={<Mail size={20} strokeWidth={1.8} />} name="Email" sub={LINKS.email} url={LINKS.email ? 'mailto:' + LINKS.email : ''} />
          </div>
        </Card>

        <Card title="Contact our team" icon={<Users size={20} />}>
          <div className="grid grid-cols-1 gap-5">
            <div>
              <div className="label mb-2">Website manager</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><Person {...TEAM.manager} role="Website Manager" /></div>
            </div>
            <div>
              <div className="label mb-2">Web team</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{TEAM.web.map(m => <Person key={m.name} {...m} role="Web Team" />)}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
