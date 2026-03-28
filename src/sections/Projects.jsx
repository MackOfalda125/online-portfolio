import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'FlexFit',
    desc: 'An Android fitness app that evaluates exercise form in real time, giving users visual feedback to improve posture and reduce the risk of injury.',
    tech: ['Python', 'Dart', 'Flutter', 'Kotlin'],
    github: 'https://github.com/MackOfalda125/flexfit-app',
    link: '#',
  },
  {
    id: 2,
    title: 'DestiFind',
    desc: 'An app that recommends travel destinations based on user preferences, helping users discover personalized trips efficiently.',
    tech: ['Dart', 'Flutter', 'MySQL', 'Firebase'],
    github: 'https://github.com/MackOfalda125/destifind',
  },
];

function Projects() {
  return (
    <div className="projects">

      {/* Header */}
      <div className="projects__header">
        <p className="section-label">04 — Projects</p>
        <h2 className="projects__title">What I've built.</h2>
        <p className="projects__subtitle">
          A selection of personal and academic projects.
        </p>
      </div>

      {/* Project grid */}
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

    </div>
  );
}

export default Projects;
