'use client'
import { useState } from 'react'
import Icon from './Icon'
import { site } from '@/lib/site'

const field =
  'w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary'
const label = 'block font-label-code text-label-code text-on-surface-variant uppercase mb-1'

const focuses = [
  'Full-Time PM Role (2026 Grad Track)',
  'Product Discovery & PRD Scoping Sprint',
  'Technical Advisory / System Audit',
  'General Inquiry',
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  // No backend needed: this opens the visitor's email client with the message prefilled.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Portfolio inquiry: ${f.get('focus')}`
    const body = `Name & company: ${f.get('name')}\nEmail: ${f.get('email')}\nFocus: ${f.get('focus')}\n\n`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest space-y-space-md shadow-xl">
      <div className="flex items-center justify-between pb-space-xs">
        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Direct Communication Channel</span>
      </div>
      <form className="space-y-space-sm" onSubmit={onSubmit}>
        <div>
          <label className={label} htmlFor="name-input">Your Name &amp; Company</label>
          <input className={field} id="name-input" name="name" placeholder="e.g. Lead Partner / Head of Product" required type="text" />
        </div>
        <div>
          <label className={label} htmlFor="email-input">Work Email</label>
          <input className={field} id="email-input" name="email" placeholder="name@company.com" required type="email" />
        </div>
        <div>
          <label className={label} htmlFor="scope-input">Engagement Focus</label>
          <select className={field} id="scope-input" name="focus">
            {focuses.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-space-xs px-4 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span>Dispatch Memo</span>
          <Icon name="send" className="text-[18px]" />
        </button>
        {sent && (
          <p className="font-label-code text-label-code text-secondary" role="status">
            • Your email app should open with the message ready to send.
          </p>
        )}
      </form>
      <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-label-code pt-space-xs">
        <Icon name="mail" className="text-[16px]" />
        <a href={`mailto:${site.email}`} className="hover:text-on-surface transition-colors">{site.email}</a>
        <span>•</span>
        <Icon name="open_in_new" className="text-[16px]" />
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">LinkedIn Message</a>
      </div>
    </div>
  )
}
