import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

/* ── Placeholder data (replace with real projects later) ── */
const projects = [
  {
    id: 1,
    title: 'Project One',
    desc: 'A placeholder project. Short summary of what it does and the problem it solves for the end user.',
    tech: ['React', 'Node.js', 'CSS'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    desc: 'Backend-focused project demonstrating RESTful API design, database management, and user authentication.',
    tech: ['Python', 'Express', 'MySQL'],
    github: '#',
    demo: null,
  },
  {
    id: 3,
    title: 'Project Three',
    desc: 'Frontend-focused project showcasing responsive design, modern CSS techniques, and smooth UI interactions.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    desc: 'Full-stack application with user authentication, protected routes, and persistent data storage.',
    tech: ['React', 'Node.js', 'SQL'],
    github: '#',
    demo: null,
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
