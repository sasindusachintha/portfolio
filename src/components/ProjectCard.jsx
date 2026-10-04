import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';

export default function ProjectCard({ project }) {
  const {
    title,
    categoryLabel,
    description,
    technologies,
    features,
    github,
    demo,
    highlight,
    icon,
    accentColor,
  } = project;

  return (
    <article
      style={{
        background: 'var(--color-surface)',
        border: `1px solid ${highlight ? accentColor + '30' : 'var(--color-border)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accentColor}55`;
        e.currentTarget.style.boxShadow = `0 16px 48px ${accentColor}14`;
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = highlight ? `${accentColor}30` : 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Accent top bar */}
      <div
        style={{
          height: '3px',
          width: '100%',
          flexShrink: 0,
          background: `linear-gradient(90deg, ${accentColor}, ${accentColor}55)`,
        }}
      />

      {/* Card body */}
      <div
        style={{
          padding: '28px 28px 24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '22px',
        }}
      >
        {/* ── Header: icon + title + featured badge ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span
              aria-hidden="true"
              style={{
                fontSize: '22px',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                flexShrink: 0,
                background: `${accentColor}13`,
                border: `1px solid ${accentColor}22`,
              }}
            >
              {icon}
            </span>
            <div style={{ paddingTop: '2px' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <span
                style={{
                  display: 'block',
                  marginTop: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: accentColor,
                  opacity: 0.9,
                  letterSpacing: '0.01em',
                }}
              >
                {categoryLabel}
              </span>
            </div>
          </div>

          {highlight && (
            <span
              style={{
                flexShrink: 0,
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '999px',
                background: `${accentColor}15`,
                color: accentColor,
                border: `1px solid ${accentColor}30`,
                marginTop: '2px',
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* ── Description ── */}
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: '13.5px',
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {description}
        </p>

        {/* ── Key Features ── */}
        <div>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              marginBottom: '10px',
            }}
          >
            Key Features
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '9px',
                  fontSize: '12.5px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.55,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    marginTop: '6px',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: accentColor,
                  }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Push tech + actions to bottom */}
        <div style={{ flex: 1 }} />

        {/* ── Tech stack ── */}
        <div>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              marginBottom: '10px',
            }}
          >
            Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 500,
                  background: 'var(--color-surface-3)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                flex: 1,
                padding: '9px 14px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                background: 'var(--color-surface-2)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-surface-2)';
              }}
            >
              <GithubIcon size={13} />
              View on GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                flex: 1,
                padding: '9px 14px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                background: `${accentColor}13`,
                color: accentColor,
                border: `1px solid ${accentColor}30`,
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
