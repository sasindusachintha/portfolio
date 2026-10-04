import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { useReveal } from '../hooks/useReveal';
import { projects, filterOptions } from '../data/projects';
import { GithubIcon } from './icons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useReveal();

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" aria-label="Projects" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="Real projects solving real problems — each built to learn, ship, and demonstrate practical engineering."
        />

        {/* ── Filter bar ── */}
        <div
          role="group"
          aria-label="Filter projects by category"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option;
            return (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                aria-pressed={isActive}
                style={{
                  padding: '9px 20px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isActive ? '#fff' : 'var(--color-text-secondary)',
                  border: isActive
                    ? '1px solid var(--color-primary)'
                    : '1px solid var(--color-border)',
                  boxShadow: isActive ? '0 2px 14px rgba(99,102,241,0.3)' : 'none',
                }}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* ── Project grid ── */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              padding: '80px 0',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
            }}
          >
            No projects in this category yet.
          </p>
        )}

        {/* ── GitHub CTA ── */}
        <div
          style={{
            marginTop: '64px',
            padding: '40px 48px',
            borderRadius: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '8px',
              }}
            >
              Built in Public
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
                maxWidth: '400px',
              }}
            >
              All my projects and development work are open on GitHub.
              Explore the source code, open issues, or just browse.
            </p>
          </div>

          <a
            href="https://github.com/sasindusachintha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile (opens in new tab)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff',
              background: 'var(--color-primary)',
              boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#818cf8';
              e.currentTarget.style.boxShadow = '0 4px 28px rgba(99,102,241,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)';
            }}
          >
            <GithubIcon size={16} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
