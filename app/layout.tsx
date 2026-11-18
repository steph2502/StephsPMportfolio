import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Stephanie Onwuagbaizu | Product Manager',
  description:
    'Product Manager and Product Engineer with 2 years of software engineering experience. Case studies, experience and technical toolkit.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Product Manager',
    email: site.email,
    url: 'https://www.linkedin.com/in/stephanieonwuagbaizu',
    sameAs: [site.linkedin],
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="w-full pt-16 bg-surface min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
