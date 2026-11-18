'use client'
import { useState } from 'react'
import Link from 'next/link'
import Icon from './Icon'
import { caseStudyMap } from '@/lib/caseStudies'

const LAUNCH_CONFIRMED = false

type Filter = 'all' | 'spec' | 'teardown'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'spec', label: 'PRDs & Specs' },
  { id: 'teardown', label: 'Teardowns' },
]

const cardBase =
  'interactive-card rounded-xl border border-transparent bg-surface-container-low p-space-lg hover:border-white/10 hover:bg-surface-container hover:shadow-2xl group'
const chip = 'px-2.5 py-1 rounded bg-surface-container font-label-code text-label-code text-on-surface-variant'
const link =
  'inline-flex items-center gap-1 font-headline-sm text-body-sm text-primary hover:text-on-surface group-hover:translate-x-1 transition-all'

export default function CaseStudyGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const show = (kind: Exclude<Filter, 'all'> | 'launch') => filter === 'all' || filter === kind

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
        <div className="space-y-space-xs">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-label-code text-primary uppercase">[CASE_STUDIES_DIR]</span>
            <span className="h-px w-8 bg-surface-container-highest" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            Selected Works &amp; Product Breakdown
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Deep-dives into hypothesis formulation, trade-offs, operational playbooks, and outcomes.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg self-start md:self-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-colors ${
                filter === f.id
                  ? 'bg-surface-container-high text-on-surface font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-xl">
        {show('teardown') && (
          <article className={`lg:col-span-8 flex flex-col justify-between ${cardBase}`}>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-semibold">[CASE 01]</span>
                  <span className="font-label-code text-label-code text-on-surface-variant uppercase">Retention Architecture • Teardown</span>
                </div>
                <span className="font-label-code text-label-code text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  COMPLETED RESEARCH
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
                <div className="md:col-span-7 space-y-space-sm">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                    Lagos Life: Retention &amp; Competitor Teardown
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    A teardown of first-session friction in a Nigerian simulation game. Mapped where players drop off during onboarding and proposed peer-status mechanics to turn early churn into communal retention.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Miro Journey Mapping', 'First-Session Activation', 'Social Belonging Loops'].map((t) => (
                      <span key={t} className={chip}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="p-space-md rounded-xl bg-surface-container-lowest space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-code text-label-code text-on-surface-variant">D1 Retention Hypothesis</span>
                      <span className="font-label-code text-label-code text-secondary font-bold">ILLUSTRATIVE</span>
                    </div>
                    <svg className="w-full h-14 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 240 50" aria-hidden="true">
                      <path d="M0,45 C40,42 60,30 100,25 C140,20 180,10 240,5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                      <path d="M0,45 C40,42 60,30 100,25 C140,20 180,10 240,5 L240,50 L0,50 Z" fill="currentColor" fillOpacity="0.08" />
                      <circle cx="240" cy="5" fill="currentColor" r="4" />
                    </svg>
                    <div className="flex items-center justify-between text-on-surface-variant pt-1">
                      <span className="font-label-code text-label-code">Status Quo Churn</span>
                      <span className="font-label-code text-label-code text-on-surface">Target Retention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between mt-auto">
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <Icon name="psychology" className="text-[18px]" />
                <span className="font-body-sm text-body-sm">Behavioral Economics &amp; Onboarding Wireframes</span>
              </div>
              <Link href="/case-studies#lagos-life" className={link}>
                <span>Read Teardown</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </article>
        )}

        {show('spec') && (
          <article className={`lg:col-span-4 flex flex-col justify-between ${cardBase}`}>
            <div>
              <div className="flex items-center justify-between pb-space-md mb-space-md">
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-primary-container/40 text-primary-fixed-dim font-semibold">[CASE 02]</span>
                <span className="font-label-code text-label-code text-secondary">PRD SPEC</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-xs">
                Gbo: Ride-Hailing Product Definition
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                A 19-section back-office specification built around Nigeria&rsquo;s high-cancellation urban ride-hailing reality.
              </p>
              <div className="space-y-2 mb-space-lg">
                {[
                  ['Driver Fairness Alg.', 'Equitable Tiering', 'text-secondary'],
                  ['Escalation Matrix', 'Sev-1 to Sev-4 SLAs', 'text-tertiary'],
                  ['Dispatch Protocol', 'Zero-Penalty Reject', 'text-primary'],
                ].map(([k, v, c]) => (
                  <div key={k} className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                    <span className="font-label-code text-label-code text-on-surface-variant">{k}</span>
                    <span className={`font-label-code text-label-code font-medium ${c}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between mt-auto">
              <span className="font-label-code text-label-code text-on-surface-variant">19 Sections • Back-Office</span>
              <Link href="/case-studies#gbo" className={link}>
                <span>View PRD</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </article>
        )}

        {show('launch') && (
          <article className={`lg:col-span-12 ${cardBase}`}>
            <div className="flex flex-col lg:flex-row gap-space-xl items-center">
              <div className="w-full lg:w-7/12 space-y-space-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-semibold">[CASE 03 • SHIPPED]</span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Product Manager • Launched 26 Oct 2026
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Byro: Community-First Event Ticketing
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface font-semibold leading-relaxed">
                  I owned product scope, prioritisation and launch readiness, coordinating a four-week launch plan across four cross-functional teams.
                </p>
                <div className="space-y-2 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <p>I audited feature readiness, prioritised the launch backlog and narrowed scope to nine critical product priorities.</p>
                  <p>I defined acceptance criteria for P0 features and led beta testing across organiser, attendee and check-in journeys, delivering a Go/No-Go assessment.</p>
                  <p>I coordinated weekly cross-functional reviews and sprint meetings across engineering, design and marketing.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    ['ROLE', 'Product Manager', 'text-on-surface'],
                    ['LAUNCHED', '26 Oct 2026', 'text-secondary'],
                    ['P0 PRIORITIES', '9', 'text-tertiary'],
                  ].map(([k, v, c]) => (
                    <div key={k} className="p-3 rounded-lg bg-surface-container-lowest">
                      <span className="font-label-code text-label-code text-on-surface-variant block mb-1">{k}</span>
                      <span className={`font-headline-sm text-headline-sm font-bold ${c}`}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-space-md">
                  <Link href="/case-studies#byro" className="inline-flex items-center gap-space-xs px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-medium hover:bg-primary hover:text-on-primary transition-colors">
                    <span>Read Case Study</span>
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </Link>
                  {caseStudyMap.byro.siteUrl && (
                    <a href={caseStudyMap.byro.siteUrl} target="_blank" rel="noopener noreferrer" className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors">
                      usebyro.com
                    </a>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-5/12">
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-surface-container-lowest flex flex-col p-4 justify-between">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    <span className="font-label-code text-label-code text-on-surface-variant">SCOPE OF WORK</span>
                  </div>
                  <div className="space-y-2.5 my-auto">
                    {[
                      ['fact_check', 'Feature readiness audit'],
                      ['rule', 'P0 acceptance criteria and beta testing'],
                      ['groups', 'Weekly cross-functional reviews'],
                    ].map(([icon, label]) => (
                      <div key={label} className="flex items-center gap-3 p-2 rounded bg-surface-container">
                        <Icon name={icon as string} className="text-secondary text-[20px]" />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end pt-2">
                    <span className="font-label-code text-label-code text-on-surface-variant">Byro</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}
