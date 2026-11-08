import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMaximize2, FiX } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { projects, type Project } from '../../data/projects'
import styles from './Projects.module.css'

const contactHref = (project: Project) =>
  `mailto:ali.emad.dev@gmail.com?subject=${encodeURIComponent(`Question about ${project.title}`)}`

function ProjectCard({
  project,
  onImageClick,
}: {
  project: Project
  onImageClick: (project: Project) => void
}) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    >
      <button
        type="button"
        className={styles.cardOpen}
        onClick={() => onImageClick(project)}
        aria-label={`View ${project.title} project image`}
      />
      <div className={styles.cardImg}>
        <img src={project.image} alt={`${project.title} mobile app screens`} loading="lazy" />
        <span className={styles.cardNo}>{project.no}</span>
        <span className={styles.cardView}>View image <FiMaximize2 /></span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitleRow}>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const imageDialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = imageDialogRef.current
    if (!dialog) return

    if (selectedProject && !dialog.open) dialog.showModal()
    if (!selectedProject && dialog.open) dialog.close()
  }, [selectedProject])

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected mobile work"
          title={
            <>
              Made for <em>real life</em>
            </>
          }
          description="A mix of learning, productivity, entertainment, and useful everyday apps — designed and built with Flutter."
        />

        <Reveal className={styles.featured}>
          <button
            type="button"
            className={styles.featuredImage}
            onClick={() => setSelectedProject(featuredProject)}
            aria-label={`View ${featuredProject.title} project image`}
          >
            <img src={featuredProject.image} alt="Islami app interface previews" />
            <span className={styles.imageLabel}>Featured app · 01</span>
            <span className={styles.featuredPreview}>View image <FiMaximize2 /></span>
          </button>
          <div className={styles.featuredInfo}>
            <span className={styles.badge}>Daily companion</span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <ul className={styles.featureList}>
              <li>114 Quran Surahs with search and last-read progress</li>
              <li>Hadith, digital Tasbeeh, reciters and radio</li>
              <li>Prayer times and daily Azkar in one place</li>
            </ul>
            <div className={styles.tagList}>
              {featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className={styles.featureLink} href={contactHref(featuredProject)}>
              Ask me about this app <FiArrowUpRight />
            </a>
          </div>
        </Reveal>

        <div className={styles.moreHead}>
          <div>
            <span className="eyebrow">More apps</span>
            <h3>Small screens, big ideas.</h3>
          </div>
          <span className={styles.count}>[ {String(projects.length).padStart(2, '0')} PROJECTS ]</span>
        </div>

        <StaggerGroup className={styles.grid}>
          {otherProjects.map((project) => (
            <StaggerItem key={project.no}>
              <ProjectCard project={project} onImageClick={setSelectedProject} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <dialog
        ref={imageDialogRef}
        className={styles.lightbox}
        aria-label={selectedProject ? `${selectedProject.title} project image` : undefined}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null)
        }}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setSelectedProject(null)}
              aria-label="Close image preview"
            >
              <FiX />
            </button>
            <img src={selectedProject.image} alt={`${selectedProject.title} app preview`} />
          </>
        )}
      </dialog>
    </section>
  )
}
