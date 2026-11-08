import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import heroPhoto from '../../assets/images/ali-emad/portrait.jpg'
import { MagneticButton } from '../ui/MagneticButton'
import styles from './Hero.module.css'

const easeOut = [0.22, 0.61, 0.36, 1] as const

function useStagger(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: easeOut, delay },
  }
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const spotX = useSpring(px, { stiffness: 60, damping: 20 })
  const spotY = useSpring(py, { stiffness: 60, damping: 20 })
  const spotXPercent = useTransform(spotX, (v) => `${v}%`)
  const spotYPercent = useTransform(spotY, (v) => `${v}%`)

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - rect.left) / rect.width) * 100)
    py.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <header id="top" className={styles.hero} onMouseMove={handleMouseMove}>
      <motion.div
        className={styles.spotlight}
        style={{ '--spot-x': spotXPercent, '--spot-y': spotYPercent } as never}
      />
      <div className={styles.noise} />

      <div className={`wrap ${styles.grid}`}>
        <div className={styles.text}>
          <motion.div {...useStagger(0.1)} className={styles.kicker}>
            <span className="eyebrow">Mobile app portfolio</span>
          </motion.div>

          <motion.h1 {...useStagger(0.24)} className={styles.name}>
            ALI
            <br />
            <span className={styles.lineTwo}>EMAD</span>
          </motion.h1>

          <motion.p {...useStagger(0.38)} className={styles.title}>
            Flutter Mobile Developer
          </motion.p>

          <motion.p {...useStagger(0.5)} className={styles.bio}>
            I turn ideas and designs into responsive, reliable mobile apps — with thoughtful
            interfaces and clean Flutter code.
          </motion.p>

          <motion.div {...useStagger(0.62)} className={styles.cta}>
            <MagneticButton>
              <a href="#projects" className="btn btn--solid">
                Explore my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:ali.emad.dev@gmail.com"
                className="btn btn--ghost"
              >
                Let's talk
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className={styles.art}
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: easeOut, delay: 0.3 }}
        >
          <motion.div
            className={styles.glowPulse}
            animate={prefersReduced ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.div
            className={styles.ring}
            animate={prefersReduced ? undefined : { rotate: -360 }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b1}`}
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b2}`}
            animate={prefersReduced ? undefined : { rotate: -360 }}
            transition={{ duration: 46, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b3}`}
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={styles.photoWrap}
            animate={prefersReduced ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            <img src={heroPhoto} alt="Ali Emad, Flutter Mobile Developer" className={styles.photo} />
          </motion.div>
          <motion.span
            className={`${styles.sparkle} ${styles.sparkle1}`}
            animate={prefersReduced ? undefined : { opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
          />
          <motion.span
            className={`${styles.sparkle} ${styles.sparkle2}`}
            animate={prefersReduced ? undefined : { opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity, delay: 1.6 }}
          />
          <motion.span
            className={styles.floatTag}
            animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          >
            // building with Flutter
          </motion.span>
        </motion.div>
      </div>
    </header>
  )
}
