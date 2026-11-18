'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Icon from './Icon'
import { nav, site } from '@/lib/site'

const iconBtn =
  'w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-surface/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-surface/85 backdrop-blur-xl'
      }`}
    >
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md min-w-0">
          <Link href="/" className="group shrink-0">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">
              {site.name}
            </span>
          </Link>
          <div className="hidden 2xl:flex shrink-0 whitespace-nowrap items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary status-pulse" />
            <span className="font-label-code text-label-code text-secondary uppercase">
              Open to PM roles / Class of 2026
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-xs bg-surface-container-lowest/60 p-1 rounded-xl">
          {nav.map((item) => {
            const active = !item.href.includes('#') && pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg font-body-sm text-body-sm whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-surface-container-high text-on-surface font-medium'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex items-center gap-space-xs">
            <a aria-label="LinkedIn" className={iconBtn} href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="share" className="text-[20px]" />
            </a>
            {site.github && (
              <a aria-label="GitHub" className={iconBtn} href={site.github} target="_blank" rel="noopener noreferrer">
                <Icon name="code" className="text-[20px]" />
              </a>
            )}
            <a aria-label="Email Stephanie" className={iconBtn} href={`mailto:${site.email}`}>
              <Icon name="mail" className="text-[20px]" />
            </a>
          </div>
          <a
            href={site.resume}
            download
            className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium hover:bg-primary hover:text-on-primary transition-colors"
          >
            <Icon name="download" className="text-[16px]" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  )
}
