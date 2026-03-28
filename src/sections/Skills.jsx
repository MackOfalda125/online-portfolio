import React from 'react';
import './Skills.css';

/* ── Tech Stack Data ── */
const categories = [
  {
    id: 'development-languages',
    label: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Dart', icon: 'devicon-dart-plain' },
    ],
  },
  {
    id: 'frontend-mobile',
    label: 'Frontend & Mobile Frameworks',
    skills: [
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Flutter', icon: 'devicon-flutter-plain' },
    ],
  },
  {
    id: 'backend-databases',
    label: 'Backend & Databases',
    skills: [
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Azure DevOps', icon: 'devicon-azure-plain' },
      { name: 'Bicep', icon: null },
      { name: 'YAML', icon: null },
      { name: 'Shell/Bash', icon: null },
    ],
  },
  {
    id: 'version-control',
    label: 'Version Control & Collaboration',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Azure Repos', icon: 'devicon-azure-plain' },
    ],
  },
];

function Skills() {
  return (
    <div className="skills">

      {/* Header */}
      <div className="skills__header">
        <p className="section-label">03 — Skills</p>
        <h2 className="skills__title">My tech stack.</h2>
        <p className="skills__subtitle">
          Technologies and tools I've worked with.
        </p>
      </div>

      {/* Category grid */}
      <div className="skills__grid">
        {categories.map((cat) => (
          <div key={cat.id} className="skills__category">
            <p className="skills__cat-label">{cat.label}</p>
            <div className="skills__chips">
              {cat.skills.map((skill) => (
                <span key={skill.name} className="skill-chip">
                  {skill.icon ? (
                    <i
                      className={`${skill.icon} skill-chip__icon`}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="skill-chip__dot" aria-hidden="true" />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;
