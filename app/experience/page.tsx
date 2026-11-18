import Icon from '@/components/Icon'

const timeline = [
  {
    period: '2025 - 2026',
    role: 'Product Manager',
    org: 'Byro',
    summary:
      'Owned product scope, prioritisation and launch readiness, coordinating a four-week launch plan across four cross-functional teams.',
    proof: ['Feature readiness audit', 'P0 prioritisation', 'Weekly reviews'],
    tag: 'Scope + launch',
  },
  {
    period: '2024 - 2025',
    role: 'Software Engineer',
    org: 'Pacepard',
    summary:
      'Built and shipped production modules in TypeScript with maintainable architecture, strict contracts, and a focus on reliability across the full stack.',
    proof: '4 modules shipped to production.',
    tag: 'Full-stack delivery',
  },
  {
    period: '2023 - 2024',
    role: 'Community Manager',
    org: 'Google Developer Groups',
    summary:
      'Ran community programs, technical events, and speaker sessions for builders and students. The work combined planning, facilitation, and hands-on product support for a growing developer network.',
    proof: '5+ technical events and 100+ builders reached.',
    tag: 'Community leadership',
  },
  {
    period: '2023',
    role: 'RF Engineer Intern',
    org: 'Huawei Technologies',
    summary:
      'Managed drive test engineers, tracked site issues and tickets, and coordinated task assignment and site analysis across live telecom operations.',
    proof: ['Drive test coordination', 'Ticket triage', 'Site analysis'],
    tag: 'Systems observation',
  },
]

const labelCaps = 'font-label-code text-label-code uppercase'

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
      <div className="mb-space-xl max-w-3xl">
        <span className={`${labelCaps} text-primary`}>[EXPERIENCE_&_IMPACT]</span>
        <h1 className="mt-3 font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Product work, engineering delivery, and community leadership.
        </h1>
      </div>

      <div className="space-y-space-lg">
        {timeline.map((item) => (
          <article key={`${item.org}-${item.period}`} className="rounded-2xl border border-white/10 bg-surface-container-low p-space-lg">
            <div className="flex flex-col gap-space-md lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-4/12">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-label-code text-label-code text-on-surface-variant">{item.period}</span>
                  <span className="inline-block rounded-full bg-secondary/10 px-2 py-0.5 font-label-code text-label-code text-secondary">
                    {item.tag}
                  </span>
                </div>
                <h2 className="mt-3 font-headline-md text-headline-md text-on-surface font-semibold">{item.org}</h2>
                <p className="mt-1 font-label-code text-label-code text-primary uppercase">{item.role}</p>
              </div>

              <div className="lg:w-6/12">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.summary}</p>
              </div>

              {item.proof && (
                <div className="lg:w-2/12 lg:text-right">
                  {Array.isArray(item.proof) ? (
                    <div className="inline-flex rounded-xl bg-secondary/10 px-3 py-2 text-left">
                      <ul className="space-y-1 text-left">
                        {item.proof.map((point) => (
                          <li key={point} className="flex items-start gap-2 font-label-code text-label-code text-secondary">
                            <span className="mt-0.5 text-[10px]">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <span className="inline-flex rounded-lg bg-secondary/10 px-3 py-1 font-label-code text-label-code text-secondary">
                      {item.proof}
                    </span>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>


    </div>
  )
}
