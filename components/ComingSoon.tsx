import Link from 'next/link'

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
      <span className="font-label-code text-label-code text-tertiary uppercase">[STAGE_2_PENDING]</span>
      <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-2">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">This page is built in the next stage.</p>
      <Link href="/" className="inline-block mt-space-md text-primary font-body-sm text-body-sm hover:text-on-surface">
        Back to overview
      </Link>
    </section>
  )
}
