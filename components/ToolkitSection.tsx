import Icon from '@/components/Icon'
import ToolChips from '@/components/ToolChips'
import { toolkitGroups } from '@/lib/toolkit'

const stack = toolkitGroups

const labelCaps = 'font-label-code text-label-code uppercase'

export default function ToolkitSection({ title = 'The tools and skills I use to turn product ideas into working systems.' }: { title?: string }) {
  return (
    <section className="w-full bg-surface-container-lowest py-space-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-space-xl max-w-3xl">
          <span className={`${labelCaps} text-primary`}>[TECHNICAL_TOOLKIT]</span>
          <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-space-md items-stretch md:grid-cols-3">
          {stack.map((group) => (
            <div key={group.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-container-low p-space-md shadow-[0_14px_28px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-space-sm">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${group.tint}`}>
                  <Icon name={group.icon} className="text-[20px]" />
                </div>
              </div>
              <h3 className="mt-space-sm font-headline-sm text-headline-sm text-on-surface font-semibold leading-none">{group.title}</h3>
              <div className="mt-space-sm flex-1">
                <ToolChips labels={group.items} accent={group.accent} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-space-lg hidden md:flex md:justify-end">
          <span className="font-label-code text-label-code text-on-surface-variant">Drag the blocks</span>
        </div>
      </div>
    </section>
  )
}
