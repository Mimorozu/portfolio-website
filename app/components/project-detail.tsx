import Link from "next/link";
import { ImageReveal } from "./image-reveal";
import type { Project } from "./projects-data";
import styles from "./project-detail.module.css";

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article>
      <div className={styles.hero}>
        <ImageReveal src={project.imageUrl} alt="" fill sizes="100vw" className={styles.image} />
        <div className={styles.imageOverlay} />
        <div className={styles.heroText}>
          <span className={styles.service}>{project.service}</span>
          <h1 className={styles.name}>{project.name}</h1>
        </div>
        <svg
          className={styles.scrollHint}
          aria-hidden
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className={styles.body}>
        <Link href="/projects" className={styles.back}>
          ← All projects
        </Link>

        <div className={styles.bodyGrid}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {(project.website || project.crmDemoUrl) && (
              <div className={styles.actions}>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    Visit Website
                    <ArrowIcon />
                  </a>
                )}
                {project.crmDemoUrl && (
                  <a
                    href={project.crmDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.crmLink}
                  >
                    Visit CRM
                    <ArrowIcon />
                  </a>
                )}
              </div>
            )}
          </div>


          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <h2 className={styles.infoLabel}>Services Delivered</h2>
              <ul className={styles.infoList}>
                {project.servicesDelivered.map((item, i) => (
                  <li key={`${item}-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.infoCell}>
              <h2 className={styles.infoLabel}>Tech Stack</h2>
              <ul className={styles.infoList}>
                {project.techStack.map((item, i) => (
                  <li key={`${item}-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
