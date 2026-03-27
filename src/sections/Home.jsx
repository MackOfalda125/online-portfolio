import React from 'react';
import './Home.css';

function Home() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="home">

      {/* ── Left: Text content ── */}
      <div className="home__content">
        <p className="home__greeting">Hello, I'm</p>
        <h1 className="home__name">John Doe.</h1>
        <p className="home__role">Software Developer</p>
        <p className="home__tagline">
          I build clean, functional, and user-centered digital experiences.
          Passionate about quality code and solving real-world problems.
        </p>
        <div className="home__ctas">
          <button
            id="home-cta-projects"
            className="btn btn--primary"
            onClick={() => scrollTo('projects')}
          >
            View Projects
          </button>
          <button
            id="home-cta-contact"
            className="btn btn--ghost"
            onClick={() => scrollTo('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* ── Right: Code card visual ── */}
      <div className="home__visual" aria-hidden="true">
        <div className="home__card">

          {/* Title bar */}
          <div className="home__card-bar">
            <div className="home__card-dots">
              <span className="home__card-dot dot--close" />
              <span className="home__card-dot dot--min"   />
              <span className="home__card-dot dot--max"   />
            </div>
            <span className="home__card-filename">developer.js</span>
          </div>

          {/* Code body */}
          <div className="home__card-code">
            <p>
              <span className="tok-kw">const</span>{' '}
              <span className="tok-var">developer</span>{' '}
              <span className="tok-op">=</span>{' '}
              <span className="tok-punc">{'{'}</span>
            </p>
            <p className="tok-indent">
              <span className="tok-key">name</span>
              <span className="tok-punc">:</span>{' '}
              <span className="tok-str">"John Doe"</span>
              <span className="tok-punc">,</span>
            </p>
            <p className="tok-indent">
              <span className="tok-key">role</span>
              <span className="tok-punc">:</span>{' '}
              <span className="tok-str">"Software Developer"</span>
              <span className="tok-punc">,</span>
            </p>
            <p className="tok-indent">
              <span className="tok-key">skills</span>
              <span className="tok-punc">:</span>{' '}
              <span className="tok-punc">[</span>
              <span className="tok-str">"React"</span>
              <span className="tok-punc">,</span>{' '}
              <span className="tok-str">"JS"</span>
              <span className="tok-punc">,</span>{' '}
              <span className="tok-str">"CSS"</span>
              <span className="tok-punc">]</span>
              <span className="tok-punc">,</span>
            </p>
            <p className="tok-indent">
              <span className="tok-key">available</span>
              <span className="tok-punc">:</span>{' '}
              <span className="tok-bool">true</span>
            </p>
            <p>
              <span className="tok-punc">{'}'}</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
