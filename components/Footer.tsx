import Link from 'next/link'
import Icon from './Icon'
import { site } from '@/lib/site'

const cols = [
  { label: 'Selected Works', href: '/case-studies' },
  { label: 'Track Record & Metrics', href: '/experience' },
  { label: 'Strategy & PRDs', href: '/case-studies#gbo' },
  { label: 'Architecture & Stack', href: '/toolkit' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        <div className="md:col-span-6 space-y-space-sm">
          <span className="font-headline-sm text-headline-sm text-on-surface">{site.name}</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Product Manager working at the intersection of technical systems, user research, and business impact.
          </p>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-label-code">
            <Icon name="location_on" className="text-[16px] text-secondary" />
            <span>Lagos, Nigeria • Available for global remote</span>
          </div>
        </div>
        <div className="md:col-span-3 space-y-space-sm">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Navigation</span>
          <ul className="space-y-2">
            {cols.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 space-y-space-sm">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Direct Inquiries</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Open to full-time 2026 roles and product advisory work.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-surface transition-colors">
            <Icon name="send" className="text-[16px]" />
            <span>Start a conversation</span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-space-lg">
        <span className="font-label-code text-label-code text-on-surface-variant">
          © 2026 {site.name}
        </span>
      </div>
    </footer>
  )
}
