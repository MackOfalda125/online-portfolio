import React from 'react';
import './About.css';

/* ── Placeholder data (replace with real info later) ── */
const education = [
  {
    title:    'Bachelor of Science in Information Technology',
    subtitle: 'Placeholder University',
    period:   '2020 – 2024',
    desc:     'Focused on software engineering, data structures, algorithms, and modern web development.',
  },
];

const experience = [
  {
    title:    'Software Development Intern',
    subtitle: 'Placeholder Company',
    period:   'Jun 2023 – Aug 2023',
    desc:     'Contributed to internal tooling using React and Node.js. Collaborated within an Agile team environment.',
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
            I'm a software developer focused on building clean, functional, and
            user-friendly digital experiences. I enjoy the full process — from
            designing intuitive interfaces to writing solid backend logic.
          </p>
          <p>
            I'm currently open to opportunities where I can contribute
            meaningfully, keep growing my skills, and work alongside
            driven, collaborative teams.
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
