import React from 'react';
import { Code2, Trophy, Users, Cpu } from 'lucide-react';
import { GithubIcon } from './icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const journey = [
  {
    id: 1,
    icon: <Code2 size={20} />,
    iconColor: '#6366f1',
    title: 'Academic Software Engineering Projects',
    period: '2023 – Present',
    description:
      'Completed multiple academic software engineering projects spanning web development, mobile applications, database design, and system architecture. Projects include full-stack platforms, REST APIs, and UI-heavy applications.',
    tags: ['React', 'Node.js', 'MySQL', 'Android', 'PHP'],
  },
  {
    id: 2,
    icon: <Cpu size={20} />,
    iconColor: '#22d3ee',
    title: 'AI & Computer Vision Development',
    period: '2024 – Present',
    description:
      'Independently developed AI-integrated applications including BizShield AI — an LLM-powered business platform using the Groq API — and a Python/OpenCV virtual mouse driven by real-time computer vision and gesture recognition.',
    tags: ['Python', 'OpenCV', 'Groq API', 'LLM', 'MongoDB'],
  },
  {
    id: 3,
    icon: <Users size={20} />,
    iconColor: '#34d399',
    title: 'Team Project Leadership',
    period: '2024',
    description:
      'Led and contributed to team-based software engineering projects, including EduMind — a full-stack education management platform with a React web dashboard, Node.js/Express REST API, MySQL database, and an Android companion application.',
    tags: ['Team Lead', 'Full Stack', 'REST API', 'Android'],
  },
  {
    id: 4,
    icon: <Trophy size={20} />,
    iconColor: '#f59e0b',
    title: 'EXITO Project Exhibition',
    period: '2024',
    description:
      'Participated in EXITO, an academic project exhibition, showcasing software engineering work and technical skills. Presented project architecture and demonstrated working software to peers and evaluators.',
    tags: ['Exhibition', 'Technical Presentation', 'Project Demo'],
  },
  {
    id: 5,
    icon: <GithubIcon size={20} />,
    iconColor: '#a78bfa',
    title: 'Open Source & GitHub Activity',
    period: '2023 – Present',
    description:
      'Actively maintaining multiple public repositories — ElectroQuote, EduMind, and BizShield AI — with consistent commit history and version-controlled development. Earned GitHub achievement badges for contribution milestones.',
    tags: ['GitHub', 'Open Source', 'Version Control'],
    badges: [
      { label: 'Pull Shark', emoji: '🦈' },
      { label: 'YOLO', emoji: '🎯' },
      { label: 'Quickdraw', emoji: '⚡' },
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      aria-label="Development journey"
      style={{
        padding: '6rem 0',
        background: 'var(--color-surface)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeading
          eyebrow="Journey"
          title="Development Journey"
          subtitle="Academic projects, real-world builds, and continuous learning — no fabricated employment."
        />

        <div ref={ref} className="reveal" style={{ position: 'relative' }}>
          {/* Vertical timeline line — desktop */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '24px',
              top: '24px',
              bottom: '24px',
              width: '2px',
              background:
                'linear-gradient(to bottom, var(--color-primary) 0%, rgba(99,102,241,0.08) 100%)',
              display: 'none',
            }}
            className="timeline-line"
          />

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {journey.map((item) => (
              <JourneyItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Inline style to show timeline line on md+ */}
      <style>{`
        @media (min-width: 768px) {
          .timeline-line { display: block !important; }
          .journey-card { margin-left: 80px; }
          .journey-dot { display: flex !important; }
        }
      `}</style>
    </section>
  );
}

function JourneyItem({ item }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Desktop dot */}
      <div
        className="journey-dot"
        aria-hidden="true"
        style={{
          display: 'none',
          position: 'absolute',
          left: 0,
          top: '28px',
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: `${item.iconColor}13`,
          border: `1.5px solid ${item.iconColor}40`,
          color: item.iconColor,
          boxShadow: `0 0 20px ${item.iconColor}18`,
        }}
      >
        {item.icon}
      </div>

      {/* Card */}
      <div
        className="journey-card"
        style={{
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '32px',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${item.iconColor}45`;
          e.currentTarget.style.boxShadow = `0 6px 28px ${item.iconColor}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* ── Header row ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Mobile-only icon */}
            <span
              className="journey-dot-mobile"
              aria-hidden="true"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: `${item.iconColor}13`,
                color: item.iconColor,
              }}
            >
              {item.icon}
            </span>
            <h3
              style={{
                fontSize: '15.5px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {item.title}
            </h3>
          </div>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              padding: '5px 14px',
              borderRadius: '999px',
              flexShrink: 0,
              background: 'var(--color-surface-3)',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              letterSpacing: '0.02em',
            }}
          >
            {item.period}
          </span>
        </div>

        {/* ── Description ── */}
        <p
          style={{
            fontSize: '13.5px',
            lineHeight: 1.85,
            color: 'var(--color-text-secondary)',
            margin: '0 0 20px 0',
          }}
        >
          {item.description}
        </p>

        {/* ── Tags ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '5px 12px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 500,
                background: `${item.iconColor}10`,
                color: item.iconColor,
                border: `1px solid ${item.iconColor}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── GitHub Achievement Badges ── */}
        {item.badges && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <p
              style={{
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
                marginBottom: '14px',
              }}
            >
              GitHub Achievement Badges
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {item.badges.map((badge) => (
                <span
                  key={badge.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 16px',
                    borderRadius: '999px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    background: 'rgba(167,139,250,0.1)',
                    color: '#a78bfa',
                    border: '1px solid rgba(167,139,250,0.25)',
                  }}
                >
                  <span style={{ fontSize: '15px' }}>{badge.emoji}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
