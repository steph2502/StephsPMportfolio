'use client'

import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'
import type { ScreenshotItem } from '@/lib/caseStudies'

function isValidAlt(alt: string) {
  return alt.trim().length > 0
}

function getImageSizes() {
  return '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
}

export default function ScreenshotGallery({ items }: { items: ScreenshotItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const dialogId = useId()

  useEffect(() => {
    if (openIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null)
        return
      }

      if (event.key === 'ArrowRight') {
        setOpenIndex((current) => (current === null ? 0 : (current + 1) % items.length))
      }

      if (event.key === 'ArrowLeft') {
        setOpenIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [items.length, openIndex])

  useEffect(() => {
    if (openIndex === null && openerRef.current) {
      openerRef.current.focus()
    }
  }, [openIndex])

  if (!items.length) return null

  return (
    <div className="mt-space-lg">
      <h3 className="mb-space-md font-label-code text-label-code text-primary uppercase">Evidence</h3>
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          if (!isValidAlt(item.alt)) {
            throw new Error(`Screenshot alt text is required for ${item.caption || 'unnamed item'}.`)
          }

          const commonFigure =
            'overflow-hidden rounded-xl border border-white/10 bg-surface-container-low shadow-sm shadow-black/10'

          if (!item.src) {
            return (
              <figure key={`${item.caption}-${index}`} className={`${commonFigure}`}>
                <div className="flex h-44 items-center justify-center border-b border-white/10 bg-surface-container-lowest px-4 text-center">
                  <div className="w-full rounded-lg border border-dashed border-tertiary/60 bg-surface-container p-4">
                    <span className="font-label-code text-label-code text-tertiary uppercase">Screenshot needed</span>
                  </div>
                </div>
                <figcaption className="px-3 py-2 font-label-code text-label-code text-on-surface-variant">{item.caption}</figcaption>
              </figure>
            )
          }

          return (
            <figure key={`${item.caption}-${index}`} className={commonFigure}>
              <div className="flex items-center gap-2 border-b border-white/10 bg-surface-container-lowest px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-error/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              </div>
              <button
                ref={index === openIndex ? (el) => {
                  if (el) openerRef.current = el as unknown as HTMLElement
                } : null}
                type="button"
                aria-label={`Open ${item.caption}`}
                onClick={() => setOpenIndex(index)}
                className="block w-full cursor-pointer text-left"
              >
                <div className="relative h-52 w-full bg-surface-container">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={getImageSizes()}
                    className="object-cover"
                  />
                </div>
              </button>
              <figcaption className="px-3 py-2 font-label-code text-label-code text-on-surface-variant">{item.caption}</figcaption>
            </figure>
          )
        })}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpenIndex(null)
          }}
        >
          <div ref={dialogRef} className="relative max-h-[90vh] w-full max-w-5xl rounded-2xl border border-white/10 bg-surface-container p-3 shadow-2xl">
            <div className="mb-3 flex items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-error/80" />
                <span className="h-3 w-3 rounded-full bg-secondary/80" />
                <span className="h-3 w-3 rounded-full bg-primary/80" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setOpenIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length))}
                  className="rounded-lg bg-surface-container-high px-2 py-1 font-label-code text-label-code text-on-surface"
                >
                  Prev
                </button>
                <button
                  type="button"
                  aria-label="Close lightbox"
                  onClick={() => setOpenIndex(null)}
                  className="rounded-lg bg-surface-container-high px-2 py-1 font-label-code text-label-code text-on-surface"
                >
                  Close
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setOpenIndex((current) => (current === null ? 0 : (current + 1) % items.length))}
                  className="rounded-lg bg-surface-container-high px-2 py-1 font-label-code text-label-code text-on-surface"
                >
                  Next
                </button>
              </div>
            </div>
            {items[openIndex] && items[openIndex].src && (
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface-container-low">
                <Image
                  src={items[openIndex].src}
                  alt={items[openIndex].alt}
                  width={1200}
                  height={900}
                  className="max-h-[70vh] w-full object-contain"
                  sizes="100vw"
                />
              </div>
            )}
            <p className="mt-3 font-label-code text-label-code text-on-surface-variant">{items[openIndex].caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
