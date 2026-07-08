import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { ArrowRight } from './icons/Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={`/produits/${project.id}`} className="project-card">
      <div className="project-card__img-wrap">
        <img src={project.image} alt={project.alt} className="project-card__img" loading="lazy" />
        <div className="project-card__overlay" aria-hidden="true" />
        <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-card__footer">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__type">{project.type}</p>
          {(project.surface || project.location) && (
            <p className="project-card__meta">
              {[project.surface, project.location].filter(Boolean).join(' · ')}
            </p>
          )}
          {project.price && <p className="project-card__price">{project.price}</p>}
        </div>
        <span className="project-card__arrow">
          <ArrowRight size={20} />
        </span>
      </div>
    </Link>
  );
}
