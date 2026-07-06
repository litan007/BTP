import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Button from './Button';
import Reveal from './Reveal';

export default function RealisationsPreview() {
  const preview = projects.slice(0, 3);

  return (
    <section className="realisations">
      <div className="container">
        <Reveal className="realisations__header">
          <div>
            <span className="label">PORTFOLIO</span>
            <h2 className="section-title">RÉALISATIONS</h2>
            <p className="realisations__subtitle">Découvrez nos dernières réalisations</p>
          </div>
          <Button to="/produits" variant="outline" showArrow>
            TOUT VOIR
          </Button>
        </Reveal>

        <div className="projects-grid projects-grid--static">
          {preview.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} variant="up">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
