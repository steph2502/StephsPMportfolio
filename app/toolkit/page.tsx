import Icon from '@/components/Icon'
import ToolChips from '@/components/ToolChips'
import { toolkitGroups } from '@/lib/toolkit'

const stack = toolkitGroups

const labelCaps = 'font-label-code text-label-code uppercase'

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
      <div className="mb-space-xl max-w-3xl">
        <span className={`${labelCaps} text-primary`}>[TECHNICAL_TOOLKIT]</span>
        <h1 className="mt-3 font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          The tools and skills I use to turn product ideas into working systems.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-space-lg items-stretch md:grid-cols-3">
        {stack.map((group) => (
          <div key={group.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-container-low p-space-lg">
            <div className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-xl ${group.tint}`}>
              <Icon name={group.icon} className="text-[24px]" />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold leading-none">{group.title}</h2>
            <div className="mt-space-md flex-1">
              <ToolChips labels={group.items} accent={group.accent} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-space-lg hidden md:flex md:justify-end">
        <span className="font-label-code text-label-code text-on-surface-variant">Drag the blocks</span>
      </div>
    </div>
  )
}
