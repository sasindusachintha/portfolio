import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: 'var(--color-primary-light)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl font-bold md:text-4xl"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)', ...(centered ? { margin: '1rem auto 0' } : {}) }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
