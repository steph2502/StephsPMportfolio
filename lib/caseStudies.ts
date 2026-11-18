export type DocType = 'Google Doc' | 'Google Slides' | 'Google Sheet' | 'Miro' | 'PDF'

export type CaseStudyDoc = {
  label: string
  url?: string
  type: DocType
}

export type CaseStudyCover = {
  src: string
  alt: string
  caption: string
  href?: string
}

export type CaseStudyEntry = {
  id: 'lagos-life' | 'gbo' | 'byro'
  siteUrl?: string
  cover?: CaseStudyCover
  docs: CaseStudyDoc[]
}

export const caseStudies: CaseStudyEntry[] = [
  {
    id: 'lagos-life',
    cover: {
      src: '/case-studies/lagos-life/lagos%20life.jpg',
      alt: 'Lagos Life landing page announcing a new web address with a large branded domain card and a gold crown icon',
      caption: '',
    },
    docs: [
      {
        label: 'Lagos Life analysis document',
        url: 'https://docs.google.com/document/d/12VipWQx4CSor0Y247Vyqse-4eK5qCM-fXJZ5GGVQ_xA/edit?usp=sharing',
        type: 'Google Doc',
      },
    ],
  },
  {
    id: 'gbo',
    cover: {
      src: '/case-studies/Gbo/Gbo.jpg',
      alt: 'Gbo ride-hailing dispatch and rider experience screen',
      caption: '',
    },
    docs: [
      {
        label: 'Gbo PRD',
        url: 'https://docs.google.com/document/d/1BM3kXFVDu7EDOTx4M-fh6JDMBdJwz8XpvTw1_hKXlmw/edit?usp=sharing',
        type: 'Google Doc',
      },
    ],
  },
  {
    id: 'byro',
    siteUrl: 'https://usebyro.com',
    cover: {
      src: '/case-studies/Byro/byro.jpg',
      alt: 'Byro event ticketing landing page with attendee stamps and event cards',
      caption: '',
      href: 'https://www.usebyro.com/',
    },
    docs: [],
  },
]

export const caseStudyMap = Object.fromEntries(
  caseStudies.map((study) => [study.id, study]),
) as Record<CaseStudyEntry['id'], CaseStudyEntry>

export function getCaseStudyById(id: CaseStudyEntry['id']) {
  return caseStudyMap[id]
}

export function validateCaseStudyUrls() {
  const allowed = ['https://docs.google.com/', 'https://drive.google.com/', 'https://miro.com/', 'https://www.canva.com/']

  for (const study of caseStudies) {
    for (const doc of study.docs) {
      const url = doc.url
      if (!url) continue
      const isAllowed = allowed.some((prefix) => url.startsWith(prefix))
      if (!isAllowed && !url.startsWith('https://www.usebyro.com/')) {
        throw new Error(`Invalid case study doc URL for ${study.id}: ${doc.label} -> ${url}`)
      }
    }
  }
}

export type ScreenshotItem = {
  src?: string
  alt: string
  caption: string
}
