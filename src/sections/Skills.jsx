import React from 'react';
import './Skills.css';

/* ── Placeholder data (replace with real skills later) ── */
const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',        icon: 'devicon-html5-plain'          },
      { name: 'CSS3',         icon: 'devicon-css3-plain'           },
      { name: 'JavaScript',   icon: 'devicon-javascript-plain'     },
      { name: 'React',        icon: 'devicon-react-original'       },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain'    },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',   icon: 'devicon-nodejs-plain'      },
      { name: 'Express',   icon: 'devicon-express-original'  },
      { name: 'Python',    icon: 'devicon-python-plain'      },
      { name: 'REST APIs', icon: null                        },
      { name: 'MySQL',     icon: 'devicon-mysql-plain'       },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git',    icon: 'devicon-git-plain'         },
      { name: 'GitHub', icon: 'devicon-github-original'   },
      { name: 'VS Code',icon: 'devicon-vscode-plain'      },
      { name: 'Figma',  icon: 'devicon-figma-plain'       },
      { name: 'Vite',   icon: 'devicon-vitejs-plain'      },
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
          Technologies and tools I work with on a regular basis.
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
