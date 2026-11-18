import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import CaseStudyGrid from '@/components/CaseStudyGrid'
import ContactForm from '@/components/ContactForm'
import ToolkitSection from '@/components/ToolkitSection'
import { site } from '@/lib/site'

const metrics = [
	{
		label: 'Systems Architecture',
		icon: 'terminal',
		iconColor: 'text-primary',
		value: '4 Modules',
		text: 'Engineered and deployed to production in TypeScript with strict schema validation.',
		badge: 'Full-Stack SWE',
		badgeStyle: 'text-secondary bg-secondary/10',
		note: 'TypeScript',
	},
	{
		label: 'Launch Execution',
		icon: 'rocket_launch',
		iconColor: 'text-secondary',
		value: '4-Week Launch Plan',
		text: 'Aligned scope, weekly priorities, and go-to-market decisions to move Byro toward launch.',
		badge: 'Scope + GTM',
		badgeStyle: 'text-secondary bg-secondary/10',
		note: 'execution',
	},
	{
		label: 'Ecosystem & Scale',
		icon: 'groups',
		iconColor: 'text-tertiary',
		value: '100+ Builders',
		text: 'Mobilized across 5+ technical events through Google Developer Groups.',
		badge: 'Google GDG',
		badgeStyle: 'text-tertiary bg-tertiary-container/30',
		note: '5+ events',
	},
	{
		label: 'Computer Science',
		icon: 'school',
		iconColor: 'text-primary',
		value: '4.80',
		valueSuffix: '/ 5.00',
		text: 'First Class Honours in Computer Science, grounded in algorithms and system architecture.',
		badge: 'Class of 2026',
		badgeStyle: 'text-primary-fixed-dim bg-primary-container/40',
		note: 'Covenant University',
	},
]

const experience = [
	{
		org: 'Byro',
		role: 'Product Manager',
		dot: 'bg-secondary',
		roleStyle: 'bg-primary-container/40 text-primary-fixed-dim',
		meta: 'Lagos, Nigeria • Product Execution',
		body: 'I owned product scope, prioritisation and launch readiness, coordinating a four-week launch plan across four cross-functional teams.',
		stat: 'Scope + launch',
		statStyle: 'bg-secondary/10 text-secondary',
	},
	{
		org: 'Pacepard',
		role: 'Software Engineer',
		dot: 'bg-primary',
		roleStyle: 'bg-surface-container-high text-on-surface-variant',
		meta: 'Full-Stack TypeScript',
		body: 'Built and shipped production modules in TypeScript with maintainable architecture, strict contracts, and a focus on reliability across the full stack.',
		stat: '4 modules shipped to production.',
		statStyle: 'bg-primary-container/30 text-primary',
	},
	{
		org: 'Google Developer Groups',
		role: 'Community Manager',
		dot: 'bg-tertiary',
		roleStyle: 'bg-surface-container-high text-on-surface-variant',
		meta: 'Covenant University • Community Leadership',
		body: 'Ran community programs, technical events, and speaker sessions for builders and students. The work combined planning, facilitation, and hands-on product support for a growing developer network.',
		stat: '5+ technical events and 100+ builders reached.',
		statStyle: 'bg-tertiary-container/30 text-tertiary',
	},
	{
		org: 'Huawei Technologies',
		role: 'RF Engineer Intern',
		dot: 'bg-outline',
		roleStyle: 'bg-surface-container-high text-on-surface-variant',
		meta: 'Lagos Island • Hardware Telemetry',
		body: 'Managed drive test engineers, tracked site issues and tickets, and coordinated task assignment and site analysis across live telecom operations.',
		stat: 'Telecom operations',
		statStyle: 'bg-surface-container text-on-surface-variant',
	},
]

const labelCaps = 'font-label-code text-label-code uppercase'

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			{/* Hero */}
			<div className="relative w-full overflow-hidden">
				<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-primary-container/10 blur-[120px] pointer-events-none rounded-full" />
				<div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 blur-[90px] pointer-events-none rounded-full" />
				<section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 relative">
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
						<div className="space-y-space-sm max-w-3xl">
							<div className="inline-flex items-center gap-space-xs px-3 py-1 bg-surface-container-low rounded-full">
								<span className={`${labelCaps} text-secondary tracking-wide`}>
									Technical Product Dossier
								</span>
								<span className="text-outline-variant">•</span>
								<span className="font-label-code text-label-code text-on-surface-variant">
									SWE → PM
								</span>
							</div>
							<h1 className="hero-headline font-display text-display-mobile md:text-display text-on-surface tracking-tight leading-[1.08]">
								Building at the intersection of{' '}
								<span className="hero-underline text-primary italic font-normal">
									technical architecture
								</span>{' '}
								and product strategy.
							</h1>
						</div>
						<div className="lg:w-80 flex-shrink-0 flex flex-col gap-space-sm items-center lg:items-stretch">
							<div className="w-full max-w-[20rem] mx-auto lg:max-w-none md:max-w-xs">
								<div className="hero-portrait overflow-hidden rounded-xl border border-white/10 bg-surface-container-low p-1.5 shadow-lg shadow-black/10">
									<Image
										src="/stephanie.jpg"
										alt="Portrait of Stephanie Onwuagbaizu"
										width={640}
										height={800}
										className="aspect-[4/5] w-full rounded-xl object-cover"
										priority
									/>
								</div>
							</div>
							<p className="font-label-code text-label-code text-on-surface-variant text-center lg:text-left">
								Product Manager and Product Engineer
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-md">
						<div className="lg:col-span-8">
							<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
								Product Manager with 2 years of software engineering experience.
								Passionate about customer discovery, rigorous prioritization, and turning
								ambitious product visions into high-velocity execution.
							</p>
						</div>
						<div className="hero-actions lg:col-span-4 flex flex-wrap items-center justify-start lg:justify-end gap-space-sm">
							<a
								href="#case-studies"
								className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary hover:text-on-primary transition-all duration-200"
							>
								<span>Explore Case Studies</span>
								<Icon name="south" className="text-[18px]" />
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-body-md text-body-md transition-colors"
							>
								<span>Get in Touch</span>
								<Icon name="calendar_today" className="text-[16px]" />
							</a>
						</div>
					</div>
				</section>
			</div>

			{/* Metrics */}
			<section className="w-full bg-surface-container-lowest">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
					<div className="mb-space-md">
						<span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
							Impact &amp; Engineering Provenance
						</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
						{metrics.map((m) => (
							<div
								key={m.label}
								className="p-space-lg rounded-xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container hover:shadow-lg"
							>
								<div className="flex items-center justify-between mb-space-xs">
									<span className="font-label-code text-label-code uppercase text-on-surface-variant">
										{m.label}
									</span>
									<Icon
										name={m.icon}
										className={`text-[18px] ${m.iconColor}`}
									/>
								</div>
								<div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-1">
									{m.value}
									{m.valueSuffix && (
										<span className="font-body-sm text-body-sm text-on-surface-variant">
											{' '}
											{m.valueSuffix}
										</span>
									)}
								</div>
								<p className="font-body-sm text-body-sm text-on-surface-variant">
									{m.text}
								</p>
								<div className="mt-space-md pt-space-xs flex items-center gap-2 flex-wrap">
									<span
										className={`inline-block px-2 py-0.5 rounded font-label-code text-label-code ${m.badgeStyle}`}
									>
										{m.badge}
									</span>
									<span className="font-label-code text-label-code text-on-surface-variant">
										{m.note}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<CaseStudyGrid />

			<ToolkitSection />

			{/* Experience */}
			<section className="w-full bg-surface-container-lowest py-space-2xl">
				<div className="max-w-7xl mx-auto px-6 lg:px-12">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
						<div className="space-y-space-xs">
							<span className={`${labelCaps} text-primary`}>
								[EXPERIENCE_&_IMPACT]
							</span>
							<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
								Product work, engineering delivery, and community leadership.
							</h2>
						</div>
						<Link
							href="/experience"
							className="font-label-code text-label-code text-secondary hover:text-on-surface inline-flex items-center gap-1 transition-colors"
						>
							<span>SEE FULL EXPERIENCE</span>
							<Icon name="arrow_forward" className="text-[14px]" />
						</Link>
					</div>
					<div className="space-y-space-md">
						{experience.map((e) => (
							<div
								key={e.org}
								className="p-space-lg rounded-xl bg-surface-container-low transition-all hover:bg-surface-container flex flex-col lg:flex-row lg:items-center justify-between gap-space-md"
							>
								<div className="lg:w-4/12 space-y-1">
									<div className="flex items-center gap-2 flex-wrap">
										<span className={`w-2 h-2 rounded-full ${e.dot}`} />
										<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
											{e.org}
										</span>
										<span
											className={`px-2 py-0.5 rounded font-label-code text-label-code ${e.roleStyle}`}
										>
											{e.role}
										</span>
									</div>
									<span className="font-label-code text-label-code text-on-surface-variant block">
										{e.meta}
									</span>
								</div>
								<div className="lg:w-6/12 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
									{e.body}
								</div>
								<div className="lg:w-2/12 flex lg:justify-end">
									<span
										className={`font-label-code text-label-code px-3 py-1 rounded ${e.statStyle}`}
									>
										{e.stat}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl"
				id="contact"
			>
				<div className="rounded-2xl bg-surface-container-low p-space-lg lg:p-space-2xl relative overflow-hidden">
					<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10">
						<div className="lg:col-span-6 space-y-space-md">
							<div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
								<span className="w-2 h-2 rounded-full bg-secondary" />
								<span className="font-label-code text-label-code text-secondary">
									OPEN FOR 2026 ROLES
								</span>
							</div>
							<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
								Let&rsquo;s build products that raise the bar on technical and
								operational standards.
							</h2>
							<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
								I am exploring full-time Product Management roles starting 2026,
								plus select discovery and scoping work.
							</p>
							<div className="space-y-3 pt-2">
								{[
									'Global remote or hybrid availability',
									'Fluent in B2B SaaS, FinTech, and emerging-market platforms',
									'Technical PRDs, telemetry instrumentation, and GTM launch ready',
								].map((t) => (
									<div
										key={t}
										className="flex items-center gap-space-sm text-on-surface"
									>
										<Icon
											name="check_circle"
											className="text-secondary text-[20px]"
										/>
										<span className="font-body-sm text-body-sm">{t}</span>
									</div>
								))}
							</div>
						</div>
						<div className="lg:col-span-6 flex flex-col justify-center">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
