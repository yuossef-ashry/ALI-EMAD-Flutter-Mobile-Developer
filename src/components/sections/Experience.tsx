import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { experience } from '../../data/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHeading
          eyebrow="Training &amp; experience"
          title={
            <>
              Learning by <em>building</em>
            </>
          }
          description="Hands-on mobile development through focused training and real project work."
        />

        <StaggerGroup className={styles.grid}>
          {experience.map((item, index) => (
            <StaggerItem key={item.organization}>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.number}>0{index + 1}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.organization}>{item.organization}</p>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.highlights}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className={styles.note} delay={0.2}>
          <span className={styles.noteMark}>↗</span>
          <p>
            I bring the same curiosity to every project: understand the problem, make the interface
            clear, then build it to work reliably.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
