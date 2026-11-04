import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import styles from './PinCard.module.css'

// Wraps a card with the "card goes backwards" hover effect (v0.2.0 3D pin), CSS only.
// Fine pointers only; disabled with prefers-reduced-motion. The decorative layer is aria-hidden,
// so the card's own heading stays the only accessible name. `id` lives on the outermost element
// so /projects#slug anchors keep working.
export function PinCard({ id, title, className, children }: {
  id?: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <div id={id} className={cn(styles.root, className)}>
      <div className={styles.tilt}>{children}</div>
      <div className={styles.decor} aria-hidden='true'>
        <span className={styles.pill}>{title}</span>
        <div className={styles.pin}>
          <div className={styles.floor}>
            <div className={styles.plane}>
              <span className={styles.ring} />
              <span className={styles.ring} />
              <span className={styles.ring} />
            </div>
          </div>
          <span className={styles.beamGlow} />
          <span className={styles.beam} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  )
}
