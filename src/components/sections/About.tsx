import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { education } from '../../data/experience'
import styles from './About.module.css'

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeading
          eyebrow="A little about me"
          title={
            <>
              Built around <em>people</em>
            </>
          }
        />

        <div className={styles.grid}>
          <Reveal className={styles.bio} delay={0.1}>
            <p>
              I’m Ali Emad, a Flutter Mobile Developer with a background in Information Technology
              and Software Development. I enjoy turning ideas and designs into responsive,
              reliable, user-friendly mobile apps.
            </p>
            <p>
              I care about what happens behind the interface too: clean architecture, useful
              integrations, and code that stays easy to understand as an app grows. My recent work
              spans productivity, learning, entertainment, and everyday tools.
            </p>
            <div className={styles.facts}>
              <span>Flutter + Dart</span>
              <span>Android &amp; cross-platform</span>
              <span>Arabic + English apps</span>
            </div>
          </Reveal>

          <Reveal className={styles.education} delay={0.25}>
            <span className={styles.educationEyebrow}>Education</span>
            <span className={styles.monogram}>BATU</span>
            <h3>{education.degree}</h3>
            <p className={styles.institution}>{education.institution}</p>
            <p className={styles.faculty}>{education.faculty}</p>
            <span className={styles.specialization}>{education.specialization}</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
