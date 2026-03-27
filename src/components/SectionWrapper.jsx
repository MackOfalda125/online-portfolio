import React, { useEffect, useRef, useState } from 'react';

/**
 * SectionWrapper — reusable section shell
 * Provides: the <section> with an id, min-height, centred container, and scroll fade-in animation.
 *
 * Props:
 *   id        {string}  — section id used by Navbar scroll + IntersectionObserver
 *   children  {node}    — section inner content
 *   className {string}  — optional extra class on the <section>
 */
function SectionWrapper({ id, children, className = '' }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // fade in only once
          }
        });
      },
      { threshold: 0.1 } // triggers when 10% of the section is visible
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
    >
      <div 
        ref={domRef}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper;
