'use client'

import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import type { CaseStudyCover } from '@/lib/caseStudies'

export default function CaseCover({ cover }: { cover?: CaseStudyCover }) {
  if (!cover) return null

  const isLandscape = true

  const card = (
    <div className="mt-space-md overflow-hidden rounded-xl border border-white/10 bg-surface-container-low shadow-sm shadow-black/10">
      <div className="overflow-hidden bg-surface-container-lowest">
        {isLandscape ? (
          <div className="relative aspect-[16/10] w-full bg-surface-container-lowest">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex max-h-80 items-center justify-center bg-surface-container-lowest p-2">
            <Image
              src={cover.src}
              alt={cover.alt}
              width={900}
              height={1200}
              priority={false}
              sizes="(max-width: 1023px) 100vw, 25vw"
              className="max-h-80 w-auto object-contain"
            />
          </div>
        )}
      </div>
      {cover.caption && (
        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-3 py-2">
          <div className="min-w-0 flex-1">
            <div className="font-label-code text-label-code text-on-surface-variant">{cover.caption}</div>
          </div>
          {cover.href && (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-container">
              <Icon name="arrow_outward" className="text-[16px] text-primary" />
            </div>
          )}
        </div>
      )}

      {!cover.caption && cover.href && (
        <div className="flex items-center justify-end border-t border-white/10 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-surface-container">
            <Icon name="arrow_outward" className="text-[16px] text-primary" />
          </div>
        </div>
      )}
    </div>
  )

  if (!cover.href) return card

  return (
    <Link
      href={cover.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cover.caption} (opens in a new tab)`}
      className="block"
    >
      {card}
    </Link>
  )
}
