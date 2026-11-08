import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Reveal } from '../ui/Reveal'
import { MagneticButton } from '../ui/MagneticButton'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <Reveal className={styles.cta}>
          <span className={styles.ctaText}>Have an app idea? Let's build it.</span>
          <MagneticButton>
            <a
              href="mailto:ali.emad.dev@gmail.com"
              className={styles.ctaLink}
            >
              <FiMail />
              Email Ali
              <FiArrowUpRight />
            </a>
          </MagneticButton>
        </Reveal>

        <div className={styles.inner}>
          <button className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MagneticButton>
              <span className={styles.topCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </MagneticButton>
          </button>

          <p>© {new Date().getFullYear()} Ali Emad — Flutter Mobile Developer</p>
          <p>
            <a href="mailto:ali.emad.dev@gmail.com">ali.emad.dev@gmail.com</a>
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/Ali-emad-25" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/ali-emad-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FiLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
