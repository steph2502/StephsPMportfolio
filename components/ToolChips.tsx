'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Accent = 'primary' | 'secondary' | 'tertiary'

type MatterModule = typeof import('matter-js')

const accentStyles: Record<Accent, { chip: string; hover: string; border: string; glow: string }> = {
  primary: {
    chip: 'border-indigo-300/25 bg-indigo-500/10 text-indigo-100',
    hover: 'hover:shadow-[0_0_18px_rgba(129,140,248,0.2)]',
    border: 'rgba(165, 180, 252, 0.28)',
    glow: 'rgba(99, 102, 241, 0.18)',
  },
  secondary: {
    chip: 'border-emerald-300/25 bg-emerald-500/10 text-emerald-100',
    hover: 'hover:shadow-[0_0_18px_rgba(52,211,153,0.2)]',
    border: 'rgba(110, 231, 183, 0.28)',
    glow: 'rgba(16, 185, 129, 0.18)',
  },
  tertiary: {
    chip: 'border-amber-300/25 bg-amber-500/10 text-amber-100',
    hover: 'hover:shadow-[0_0_18px_rgba(251,191,36,0.2)]',
    border: 'rgba(252, 211, 77, 0.28)',
    glow: 'rgba(245, 158, 11, 0.18)',
  },
}

export default function ToolChips({ labels, accent }: { labels: string[]; accent: Accent }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)
  const startedRef = useRef(false)
  const [hasReducedMotion, setHasReducedMotion] = useState(false)
  const [touchDevice, setTouchDevice] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [matterReady, setMatterReady] = useState(false)
  const [playHeight, setPlayHeight] = useState<number | null>(null)
  const [physicsActive, setPhysicsActive] = useState(false)

  const style = accentStyles[accent]

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = () => setHasReducedMotion(media.matches)

    updateReducedMotion()
    media.addEventListener('change', updateReducedMotion)

    const pointerMedia = window.matchMedia('(pointer: coarse)')
    const updateTouch = () => setTouchDevice(pointerMedia.matches)

    updateTouch()
    pointerMedia.addEventListener('change', updateTouch)

    return () => {
      media.removeEventListener('change', updateReducedMotion)
      pointerMedia.removeEventListener('change', updateTouch)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || hasReducedMotion || !containerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          setShouldAnimate(true)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasReducedMotion])

  useEffect(() => {
    if (!shouldAnimate || hasReducedMotion || touchDevice) {
      return
    }

    let isMounted = true

    const loadMatter = async () => {
      try {
        const Matter = await import('matter-js')
        if (isMounted) {
          setMatterReady(Boolean(Matter))
        }
      } catch {
        if (isMounted) {
          setMatterReady(false)
        }
      }
    }

    loadMatter()

    return () => {
      isMounted = false
    }
  }, [shouldAnimate, hasReducedMotion, touchDevice])

  const computePlayHeight = useCallback(() => {
    if (!containerRef.current || !listRef.current) {
      return
    }

    const items = Array.from(listRef.current.querySelectorAll('li'))
    if (!items.length) {
      return
    }

    const width = containerRef.current.clientWidth || 360
    const chipHeight = Math.max(...items.map((item) => item.getBoundingClientRect().height || 36), 36)
    const totalArea = items.reduce((sum, item) => {
      const rect = item.getBoundingClientRect()
      return sum + rect.width * rect.height
    }, 0)

    const baseHeight = width < 768 ? 260 : 300
    const requiredHeight = Math.ceil((totalArea / Math.max(width, 1)) + chipHeight * 1.8 + 36)
    setPlayHeight(Math.max(baseHeight, requiredHeight))
  }, [])

  useEffect(() => {
    if (!containerRef.current || !listRef.current || hasReducedMotion) {
      return
    }

    computePlayHeight()
  }, [computePlayHeight, hasReducedMotion, labels.length])

  useEffect(() => {
    if (!containerRef.current || !listRef.current || !matterReady || hasReducedMotion || startedRef.current) {
      return
    }

    const container = containerRef.current
    const list = listRef.current
    const items = Array.from(list.querySelectorAll('li'))

    if (!items.length) {
      return
    }

    startedRef.current = true
    setPhysicsActive(true)

    let frameId = 0
    let motionModule: MatterModule | null = null

    const initialise = async () => {
      try {
        motionModule = await import('matter-js')
      } catch {
        motionModule = null
      }

      if (!motionModule || !container || !list) {
        setPhysicsActive(false)
        return
      }

      const { Engine, Runner, World, Bodies, Body, Mouse, MouseConstraint } = motionModule
      const width = container.clientWidth || 360
      const height = playHeight ?? (width < 768 ? 260 : 300)
      const engine = Engine.create({ positionIterations: 10, velocityIterations: 8, constraintIterations: 4 })
      const runner = Runner.create()

      engine.gravity.y = 0.8

      const wallThickness = 24
      const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height + wallThickness * 2, {
        isStatic: true,
      })
      const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height + wallThickness * 2, {
        isStatic: true,
      })
      const floor = Bodies.rectangle(width / 2, height + 16, width, 28, {
        isStatic: true,
      })

      World.add(engine.world, [leftWall, rightWall, floor])

      const itemMap = items.map((item, index) => {
        const itemRect = item.getBoundingClientRect()
        const itemWidth = itemRect.width || 120
        const itemHeight = itemRect.height || 36
        const startX = Math.max(12, Math.min(width - itemWidth - 12, (Math.random() * Math.max(width - itemWidth, 1)) + 8))
        const body = Bodies.rectangle(
          startX + itemWidth / 2,
          -18 - index * 18,
          itemWidth,
          itemHeight,
          {
            restitution: 0.3,
            friction: 0.08,
            frictionAir: 0.02,
            chamfer: { radius: itemHeight / 2 },
            sleepThreshold: 30,
          },
        )

        Body.setAngle(body, (Math.random() - 0.5) * 0.35)
        World.add(engine.world, body)

        return { item, body, itemWidth, itemHeight }
      })

      if (!touchDevice) {
        const mouse = Mouse.create(container)
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse,
          constraint: { stiffness: 0.2, render: { visible: false } },
        })
        World.add(engine.world, mouseConstraint)
      }

      const updateChipPositions = () => {
        itemMap.forEach(({ item, body, itemWidth, itemHeight }) => {
          const x = body.position.x - itemWidth / 2
          const y = body.position.y - itemHeight / 2
          item.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`
          item.style.left = '0px'
          item.style.top = '0px'
        })
      }

      const tick = () => {
        Engine.update(engine, 1000 / 60)
        updateChipPositions()

        const sleeping = itemMap.every(({ body }) => {
          return body.speed < 0.04 && Math.abs(body.velocity.x) < 0.04 && Math.abs(body.velocity.y) < 0.04
        })

        if (sleeping) {
          Runner.stop(runner)
          cancelAnimationFrame(frameId)
          return
        }

        frameId = requestAnimationFrame(tick)
      }

      const startDelay = window.setTimeout(() => {
        frameId = requestAnimationFrame(tick)
      }, 40)

      return () => {
        window.clearTimeout(startDelay)
        cancelAnimationFrame(frameId)
        Runner.stop(runner)
        World.clear(engine.world, false)
        Engine.clear(engine)
      }
    }

    initialise()

    const resizeHandler = () => {
      if (!startedRef.current || !containerRef.current || !listRef.current || hasReducedMotion) {
        return
      }

      const width = containerRef.current.clientWidth || 360
      const nextHeight = width < 768 ? 260 : 300
      if (playHeight !== nextHeight) {
        setPlayHeight(nextHeight)
      }
    }

    const debouncedResize = window.setTimeout(() => {
      resizeHandler()
    }, 200)

    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(debouncedResize)
      const handleWidthChange = window.setTimeout(() => {
        computePlayHeight()
      }, 200)

      return () => window.clearTimeout(handleWidthChange)
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      window.clearTimeout(debouncedResize)
    }
  }, [computePlayHeight, hasReducedMotion, labels.length, matterReady, playHeight, touchDevice])

  const showFallback = !physicsActive && !hasReducedMotion && !matterReady

  const containerStyle = {
    height: `${playHeight ?? (touchDevice ? 260 : 300)}px`,
    touchAction: touchDevice ? 'pan-y' : 'auto',
  }

  return (
    <div ref={containerRef} className="w-full" style={containerStyle}>
      <ul
        ref={listRef}
        className={[
          'm-0 list-none p-0',
          physicsActive ? 'relative h-full w-full overflow-hidden' : 'flex w-full flex-wrap content-start gap-2',
        ].join(' ')}
      >
        {labels.map((item, index) => {
          const isPhysicsChip = physicsActive
          return (
            <li
              key={`${item}-${index}`}
              className={[
                'select-text list-none',
                isPhysicsChip ? 'absolute left-0 top-0' : 'inline-flex items-center',
                'h-9 px-4 rounded-full border font-label-code text-label-code leading-none',
                style.chip,
                style.hover,
                'transition-all duration-300 ease-out',
                !isPhysicsChip ? 'whitespace-nowrap' : '',
              ].join(' ')}
              style={
                isPhysicsChip
                  ? {
                      transform: 'translate(0px, 0px)',
                      boxShadow: `0 12px 22px ${style.glow}`,
                    }
                  : undefined
              }
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
