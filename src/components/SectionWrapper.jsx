import React from 'react';

/**
 * SectionWrapper — reusable section shell
 * Provides: the <section> with an id, min-height, and a centred container.
 *
 * Props:
 *   id        {string}  — section id used by Navbar scroll + IntersectionObserver
 *   children  {node}    — section inner content
 *   className {string}  — optional extra class on the <section>
 */
function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
