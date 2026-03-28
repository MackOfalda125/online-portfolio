import React from 'react';
import './About.css';

/* ── Placeholder data (replace with real info later) ── */
const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Holy Angel University',
    period: '2022 – 2026',
    desc: 'President’s Lister for 5 consecutive semesters (2022–2024).',
  },
];

const experience = [
  {
    title: 'AI Developer Intern',
    subtitle: 'Shore360, Inc.',
    period: 'Dec 2025 – Mar 2026',
    desc: 'Developed and tested an exception reporting system to improve accuracy and reduce false positives, while supporting CI/CD pipeline automation with Azure DevOps and deploying AI agents via Microsoft Foundry to ensure reliable end-to-end operations.',
  },
];

/* ── Reusable info card ── */
function InfoCard({ title, subtitle, period, desc }) {
  return (
    <div className="info-card">
      <div className="info-card__top">
        <span className="info-card__title">{title}</span>
        <span className="info-card__period">{period}</span>
      </div>
      <span className="info-card__sub">{subtitle}</span>
      <p className="info-card__desc">{desc}</p>
    </div>
  );
}

/* ── About section ── */
function About() {
  return (
    <div className="about">

      {/* Header */}
      <div className="about__header">
        <p className="section-label">02 — About</p>
        <h2 className="about__title">A little about me.</h2>
      </div>

      <div className="about__body">

        {/* Summary */}
        <div className="about__summary">
          <p>
            I'm a Bachelor of Science in Computer Science graduate with a strong foundation in software development and application design.
            I've worked on mobile and web-based projects that apply modern development practices and leverage cloud technologies to build scalable, user-focused solutions.
          </p>
          <p>
            Lately, I've been focusing on DevOps and cloud technologies, learning how to design efficient, scalable, and maintainable systems.
            I enjoy automating workflows, solving practical problems, and improving system reliability while contributing to projects that have real impact. I'm open to opportunities where I can grow, collaborate with driven teams, and continue refining my DevOps and cloud expertise.
          </p>

          {/* Meta */}
          <div className="about__meta">
            <div className="about__meta-item">
              <span className="about__meta-label">Status</span>
              <span className="about__meta-value about__meta-value--available">
                <span className="status-dot" aria-hidden="true" />
                Available for work
              </span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Location</span>
              <span className="about__meta-value">Philippines</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="about__cards">
          <div className="about__card-group">
            <p className="section-label">Education</p>
            {education.map((item, i) => (
              <InfoCard key={i} {...item} />
            ))}
          </div>

          <div className="about__card-group">
            <p className="section-label">Experience</p>
            {experience.map((item, i) => (
              <InfoCard key={i} {...item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
