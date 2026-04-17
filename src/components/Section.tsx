import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};