// Visible placeholder for a claim that still needs a real, verifiable number.
export default function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-1.5 py-0.5 rounded border border-dashed border-tertiary/60 text-tertiary font-label-code text-label-code">
      TODO: {children}
    </span>
  )
}
