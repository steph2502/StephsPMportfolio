'use client'

import { useState } from 'react'
import Icon from '@/components/Icon'
import CaseCover from '@/components/CaseCover'
import SourceDocs from '@/components/SourceDocs'
import { caseStudyMap, type CaseStudyEntry } from '@/lib/caseStudies'

const studies = [
	{
		id: 'lagos-life',
		label: '[CASE 01]',
		title: 'Lagos Life',
		subtitle: 'Retention Architecture and Competitor Teardown',
		kicker: 'Self-initiated teardown',
		description:
			'I looked at first-session friction in a Nigerian simulation game, with emphasis on onboarding drop-off and the product loops that could support longer-term retention.',
		sidebar: {
			scope: 'Problem framing',
			context: 'User onboarding, retention, competitive context',
			angle: 'Prototype idea',
		},
		tabs: [
			{
				id: 'context',
				label: 'Context and Problem',
				body: [
					'I framed the product in a crowded casual gaming category where early user behavior often determines whether a player returns after the first session. The core issue is not just the game loop itself, but the relationship between onboarding clarity, social feedback, and perceived progress.',
					'I used the teardown to review friction points during registration, tutorial completion, and the first reward cycle, then mapped the moments where players are most likely to disengage.',
				],
			},
			{
				id: 'comparison',
				label: 'Comparison Matrix',
				body: [
					'I set up the comparison matrix as a proposal for how the app could be benchmarked against category peers. It clarifies what is working in competitive products, where onboarding breaks down, and which mechanics are likely to create repeat engagement.',
					'I framed this section as a design proposal, not a measured outcome table.',
				],
			},
			{
				id: 'severity',
				label: 'Severity Matrix',
				body: [
					'I used the severity matrix to identify which onboarding issues would most likely lead to abandonment. The ranking is treated as a product hypothesis, useful for prioritization rather than a validated result.',
					'I grouped the issues around first-session activation, unclear reward loops, weak social signals, and limited return intent after a failed tutorial pass.',
				],
			},
			{
				id: 'recommendation',
				label: 'Proposed Recommendation',
				body: [
					'I recommended testing peer-status cues, clearer progress feedback, and stronger social belonging loops during the first session. This should be evaluated as a concept for reducing churn after a player is acquired, not as a proven outcome.',
					'I framed the learnings as a product proposal to be validated with users, analytics, and iterative prototypes.',
				],
			},
		],
	},
	{
		id: 'gbo',
		label: '[CASE 02]',
		title: 'Gbo',
		subtitle: 'Ride-Hailing Product Definition',
		kicker: 'Self-initiated PRD',
		description:
			'I shaped a 19-section back-office specification around the realities of urban ride-hailing in Nigeria, with attention to cancellation behavior, driver fairness, and escalation workflows.',
		sidebar: {
			scope: 'Systems thinking',
			context: 'Ride-hailing operations, driver trust, dispatch logic',
			angle: 'Product definition',
		},
		tabs: [
			{
				id: 'problem',
				label: 'Problem and Context',
				body: [
					'I focused on the mismatch between rider expectations and the operational realities of urban mobility. High cancellation rates, dispatch complexity, and uneven driver experience create friction across the full journey.',
					'I framed the PRD as an operating system for a more reliable and fairer mobility experience, with clear guardrails around dispatch, escalation, and driver outcomes.',
				],
			},
			{
				id: 'principles',
				label: 'Product Principles',
				body: [
					'I built the specification around fairness in driver treatment, clarity in rider communication, and escalation paths that work under operational stress. The proposal is designed to reduce avoidable cancellations while protecting trust in the system.',
					'I treated these as product principles for a future build, not as measured adoption or service metrics.',
				],
			},
			{
				id: 'matrix',
				label: 'Comparison Matrix',
				body: [
					'I compared likely product options across rider experience, driver incentives, dispatch reliability, and service fairness. The matrix is a decision aid for choosing the highest-leverage scope for a first operating model.',
					'I structured the matrix as a proposal for strategic prioritization and planned to revisit it as more market behavior and system data are validated.',
				],
			},
			{
				id: 'escalation',
				label: 'Escalation and Risk',
				body: [
					'I treated operational risk as a first-class product concern. The draft includes escalation structures for severity levels, dispatch exceptions, and rider-driver conflict recovery.',
					'I kept the focus on building defensible operational rules and response patterns, not on presenting a final performance baseline.',
				],
			},
		],
	},
	{
		id: 'byro',
		label: '[CASE 03]',
		title: 'Byro',
		subtitle: 'Community-First Event Ticketing',
		kicker: 'Product management, launch',
		description:
			'I owned product scope, prioritisation and launch readiness, coordinating a four-week launch plan across four cross-functional teams.',
		sidebar: {
			scope: 'Launch readiness and prioritisation',
			context: 'Community-first event ticketing',
			angle: 'Execution and launch',
		},
		tabs: [
			{
				id: 'context',
				label: 'Context and Product',
				body: [
					'I worked on Byro, a community-first event ticketing platform whose differentiator is that organisers keep their past attendees for later events. I joined as Product Manager after the PRD and SRS were written, and we launched on 26 October 2026. Competitors considered: Tix Africa, Eventbags, Luma.',
				],
			},
			{
				id: 'backlog',
				label: 'Backlog and Prioritisation',
				body: [
					'I audited feature readiness, prioritised the launch backlog and narrowed scope to nine critical product priorities.',
					'I defined acceptance criteria for P0 features and led beta testing across organiser, attendee and check-in journeys, delivering a Go/No-Go assessment.',
				],
			},
			{
				id: 'rhythm',
				label: 'Working Rhythm',
				body: [
					'I coordinated weekly cross-functional reviews and sprint meetings across engineering, design and marketing.',
					'The team had one developer covering back-end, front-end and UI/UX, plus a larger marketing team. Weekly goals were visible for each person.',
					'A Scrumban plan was proposed to support the weekly working rhythm.',
				],
			},
		],
	},
]

const tabBase = 'rounded-lg px-3 py-2 text-left text-sm transition-colors'

function CaseStudySection({
	study,
	activeTab,
	setActiveTab,
}: {
	study: (typeof studies)[number]
	activeTab: string
	setActiveTab: (id: string) => void
}) {
	const tabs = study.tabs
	const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]
	const studyId = study.id as CaseStudyEntry['id']

	return (
		<section id={study.id} className="scroll-mt-24">
			<div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
				<aside className="lg:col-span-4">
					<div className="lg:sticky lg:top-24">
						<div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low">
							<CaseCover cover={caseStudyMap[studyId].cover} />

							<div className="p-space-md">
								<div className="mb-space-sm">
									<span className="font-label-code text-label-code text-primary">
										{study.label}
									</span>
									<h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
										{study.title}
									</h2>
									<p className="mt-2 font-body-md text-body-md text-on-surface-variant">
										{study.subtitle}
									</p>
								</div>

								<div className="space-y-2 border-t border-white/10 pt-space-sm text-sm">
									<div className="flex items-start justify-between gap-3">
										<span className="font-label-code text-label-code text-on-surface-variant uppercase">
											Type
										</span>
										<span className="font-body-sm text-body-sm text-on-surface text-right">
											{study.kicker}
										</span>
									</div>
									<div className="flex items-start justify-between gap-3">
										<span className="font-label-code text-label-code text-on-surface-variant uppercase">
											Scope
										</span>
										<span className="font-body-sm text-body-sm text-on-surface text-right">
											{study.sidebar.scope}
										</span>
									</div>
									{study.id === 'byro' && (
										<>
											<div className="flex items-start justify-between gap-3">
												<span className="font-label-code text-label-code text-on-surface-variant uppercase">
													Context
												</span>
												<span className="font-body-sm text-body-sm text-on-surface text-right">
													{study.sidebar.context}
												</span>
											</div>
											<div className="flex items-start justify-between gap-3">
												<span className="font-label-code text-label-code text-on-surface-variant uppercase">
													Angle
												</span>
												<span className="font-body-sm text-body-sm text-on-surface text-right">
													{study.sidebar.angle}
												</span>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</aside>

				<div className="lg:col-span-8">
					<div className="rounded-2xl border border-white/10 bg-surface-container-low p-space-lg">
						{study.description && (
							<div className="mb-space-lg">
								<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
									{study.description}
								</p>
							</div>
						)}

						<div className="mb-space-lg flex flex-wrap gap-2">
							{tabs.map((tab) => (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveTab(tab.id)}
									className={`${tabBase} ${
										activeTab === tab.id
											? 'bg-surface-container-high text-on-surface font-medium'
											: 'bg-surface-container text-on-surface-variant hover:text-on-surface'
									}`}
								>
									{tab.label}
								</button>
							))}
						</div>

						<div className="space-y-space-md rounded-xl bg-surface-container-lowest p-space-md">
							<div className="flex items-center gap-2 text-secondary">
								<Icon name="chevron_right" className="text-[18px]" />
								<span className="font-label-code text-label-code uppercase">
									{current.label}
								</span>
							</div>
							<div className="space-y-space-sm">
								{current.body.map((paragraph, index) => (
									<div
										key={`${study.id}-${index}`}
										className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
									>
										{paragraph}
									</div>
								))}
							</div>
						</div>

						<SourceDocs
							docs={caseStudyMap[studyId].docs}
							siteUrl={caseStudyMap[studyId].siteUrl}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default function Page() {
	const [activeTabs, setActiveTabs] = useState<Record<string, string>>({
		'lagos-life': 'context',
		gbo: 'problem',
		byro: 'context',
	})

	const setActiveTab = (studyId: string, value: string) => {
		setActiveTabs((current) => ({ ...current, [studyId]: value }))
	}

	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
			<div className="mb-space-xl max-w-3xl">
				<span className="font-label-code text-label-code text-primary uppercase">
					[CASE_STUDIES]
				</span>
				<h1 className="mt-3 font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
					Selected product work, teardown proposals, and launch execution
				</h1>
			</div>

			<div className="space-y-space-2xl">
				{studies.map((study) => (
					<CaseStudySection
						key={study.id}
						study={study}
						activeTab={activeTabs[study.id] ?? study.tabs[0].id}
						setActiveTab={(value) => setActiveTab(study.id, value)}
					/>
				))}
			</div>
		</div>
	)
}
