export type ToolkitAccent = 'primary' | 'secondary' | 'tertiary'

export const toolkitGroups: Array<{
  title: string
  items: string[]
  icon: string
  tint: string
  accent: ToolkitAccent
}> = [
  {
    title: 'Product strategy and discovery',
    items: ['Product thinking', 'Product strategy', 'Product discovery', 'Retention and PMF analysis', 'KPI definition', 'Miro', 'Notion'],
    icon: 'dashboard',
    tint: 'bg-primary-container/20 text-primary',
    accent: 'primary',
  },
  {
    title: 'Prioritisation and delivery',
    items: ['Roadmapping', 'Feature prioritisation', 'PRDs and acceptance criteria', 'Agile', 'Scrumban', 'Cross-functional leadership', 'Linear'],
    icon: 'fact_check',
    tint: 'bg-secondary-container/20 text-secondary',
    accent: 'secondary',
  },
  {
    title: 'Customer and GTM',
    items: ['User journey mapping', 'Go-to-market planning', 'Product-market fit analysis', 'Figma', 'Lovable', 'Claude', 'Prototype validation'],
    icon: 'campaign',
    tint: 'bg-tertiary-container/30 text-tertiary',
    accent: 'tertiary',
  },
]
