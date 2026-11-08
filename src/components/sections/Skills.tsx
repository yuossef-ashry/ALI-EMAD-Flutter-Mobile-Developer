import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { TiltCard } from '../ui/TiltCard'
import { Marquee } from '../ui/Marquee'
import { skills, skillCategories } from '../../data/skills'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className={styles.glow} />
      <div className="wrap">
        <SectionHeading
          eyebrow="Flutter toolkit"
          title={
            <>
              Built for <em>mobile</em>
            </>
          }
          description="From the first screen to the data behind it, these are the tools and practices I use to make useful mobile apps."
        />

        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category)
          if (!items.length) return null

          return (
            <div key={category} className={styles.categoryBlock}>
              <span className={styles.categoryLabel}>{category}</span>
              <StaggerGroup className={styles.grid}>
                {items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <StaggerItem key={skill.name}>
                      <TiltCard glowColor={`${skill.color}33`}>
                        <div className={styles.cardTop}>
                          <span className={styles.iconBox} style={{ color: skill.color, borderColor: `${skill.color}40` }}>
                            <Icon />
                          </span>
                          <span className={styles.categoryMark}>{category}</span>
                        </div>
                        <h3 className={styles.name}>{skill.name}</h3>
                        <p className={styles.blurb}>{skill.blurb}</p>
                      </TiltCard>
                    </StaggerItem>
                  )
                })}
              </StaggerGroup>
            </div>
          )
        })}

        <div className={styles.marquees}>
          <Marquee direction="left" duration={28}>
            {skills.map((s) => (
              <span key={`m1-${s.name}`} className={styles.tickerItem}>
                <s.icon style={{ color: s.color }} /> {s.name}
              </span>
            ))}
          </Marquee>
          <Marquee direction="right" duration={32}>
            {skills.map((s) => (
              <span key={`m2-${s.name}`} className={styles.tickerItem}>
                <s.icon style={{ color: s.color }} /> {s.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
