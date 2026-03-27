import React, { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     href: 'home'     },
  { label: 'About',    href: 'about'    },
  { label: 'Skills',   href: 'skills'   },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact',  href: 'contact'  },
];

function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [progress,      setProgress]      = useState(0);

  /* ── Scrolled shadow + progress bar ── */
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active-section tracking via IntersectionObserver ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.getElementById(href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: `-${64}px 0px -55% 0px`, threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* ── Close mobile menu on outside click ── */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (!e.target.closest('.navbar')) setMenuOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={[
        'navbar',
        scrolled ? 'navbar--scrolled'  : '',
        menuOpen ? 'navbar--menu-open' : '',
      ].join(' ')}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Scroll progress bar */}
      <div
        className="navbar__progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <div className="navbar__inner">

        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Go to top"
        >
          Portfolio<span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              role="listitem"
              className={`navbar__link ${activeSection === href ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="navbar__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            id="nav-hamburger"
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={`#${href}`}
            className={`navbar__mobile-link ${activeSection === href ? 'navbar__mobile-link--active' : ''}`}
            onClick={(e) => handleNavClick(e, href)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
