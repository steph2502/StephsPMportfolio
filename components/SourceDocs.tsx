'use client'

import Link from 'next/link'
import Icon from '@/components/Icon'
import { type CaseStudyDoc } from '@/lib/caseStudies'

const docIcons: Record<CaseStudyDoc['type'], string> = {
  'Google Doc': 'description',
  'Google Slides': 'slideshow',
  'Google Sheet': 'table_chart',
  Miro: 'dashboard',
  PDF: 'picture_as_pdf',
}

export default function SourceDocs({ docs, siteUrl }: { docs: CaseStudyDoc[]; siteUrl?: string }) {
  const validDocs = docs.filter((doc) => doc.url && doc.url.trim().length > 0)

  if (!validDocs.length && !siteUrl) return null

  return (
    <div className="mt-space-lg rounded-2xl border border-white/10 bg-surface-container-low p-space-md">
      <div className="mb-space-sm flex items-center gap-2 text-secondary">
        <Icon name="folder_open" className="text-[18px]" />
        <span className="font-label-code text-label-code uppercase">Source documents</span>
      </div>
      <div className="space-y-2">
        {siteUrl && (
          <Link
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="usebyro.com (opens in a new tab)"
            className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-surface-container-lowest px-3 py-2 text-left transition-colors hover:bg-surface-container"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-container">
                <Icon name="language" className="text-[18px] text-on-surface-variant" />
              </div>
              <div className="min-w-0">
                <div className="truncate font-body-sm text-body-sm text-on-surface">usebyro.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-code text-label-code rounded bg-surface-container px-1.5 py-0.5 text-on-surface-variant">live</span>
              <Icon name="arrow_outward" className="text-[16px] text-primary" />
            </div>
          </Link>
        )}

        {validDocs.map((doc) => (
          <Link
            key={`${doc.label}-${doc.type}`}
            href={doc.url!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${doc.label} (opens in a new tab)`}
            className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-surface-container-lowest px-3 py-2 text-left transition-colors hover:bg-surface-container"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-container">
                <Icon name={docIcons[doc.type]} className="text-[18px] text-on-surface-variant" />
              </div>
              <div className="min-w-0">
                <div className="truncate font-body-sm text-body-sm text-on-surface">{doc.label}</div>
                <div className="mt-0.5 font-label-code text-label-code text-on-surface-variant">{doc.type}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-code text-label-code rounded bg-surface-container px-1.5 py-0.5 text-on-surface-variant">{doc.type}</span>
              <Icon name="arrow_outward" className="text-[16px] text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
