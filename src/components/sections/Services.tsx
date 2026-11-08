import { FiArrowUpRight, FiCode, FiLayers, FiTool, FiWifi } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { services } from '../../data/services'
import styles from './Services.module.css'

const icons = [FiCode, FiLayers, FiWifi, FiTool]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading
          eyebrow="Ways I can help"
          title={
            <>
              From idea to <em>app</em>
            </>
          }
          description="Practical Flutter help for a new product or an app that needs a careful next step."
        />

        <StaggerGroup className={styles.grid}>
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <StaggerItem key={service.no}>
                <article className={styles.card}>
                  <div className={styles.top}>
                    <span className={styles.icon}><Icon /></span>
                    <span className={styles.number}>{service.no}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Ask Ali about ${service.title}`}>
                    Start a conversation <FiArrowUpRight />
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
