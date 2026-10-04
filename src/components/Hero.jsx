import React from 'react';
import { ArrowRight, MapPin, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const techBadges = [
  { label: 'React', color: '#61dafb' },
  { label: 'Node.js', color: '#68a063' },
  { label: 'Python', color: '#3572A5' },
  { label: 'Java', color: '#f89820' },
  { label: 'MongoDB', color: '#4db33d' },
  { label: 'MySQL', color: '#00758f' },
];

const terminalLines = [
  { text: '$ git status', color: '#94a3b8' },
  { text: 'On branch main', color: '#64748b' },
  { text: '  modified: src/App.jsx', color: '#22d3ee' },
  { text: '  new file: api/routes/ai.js', color: '#34d399' },
  { text: '$ node server.js', color: '#94a3b8' },
  { text: '✓ Server running on :3000', color: '#34d399' },
  { text: '✓ Database connected', color: '#34d399' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 animate-fade-in"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'var(--color-primary-light)',
                animationDelay: '0.1s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#34d399', boxShadow: '0 0 6px #34d399', animation: 'pulse-glow 2s ease-in-out infinite' }}
              />
              Available for Internship Opportunities
            </div>

            {/* Main heading */}
            <h1
              className="text-5xl font-bold leading-tight mb-4 animate-fade-in"
              style={{
                color: 'var(--color-text-primary)',
                animationDelay: '0.2s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Sasindu.</span>
            </h1>

            <h2
              className="text-xl font-medium mb-6 animate-fade-in"
              style={{
                color: 'var(--color-text-secondary)',
                animationDelay: '0.3s',
                opacity: 0,
                animationFillMode: 'forwards',
                lineHeight: 1.5,
              }}
            >
              Software Engineering Student building practical software,{' '}
              <span style={{ color: 'var(--color-accent)' }}>AI-powered solutions</span>, and{' '}
              <span style={{ color: 'var(--color-primary-light)' }}>full-stack applications</span>.
            </h2>

            <p
              className="text-sm leading-relaxed mb-8 animate-fade-in"
              style={{
                color: 'var(--color-text-muted)',
                maxWidth: '480px',
                animationDelay: '0.4s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              I enjoy turning real-world problems into useful, well-engineered software - from
              mobile apps that work offline to AI platforms that help businesses make smarter decisions.
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-2 text-sm mb-8 animate-fade-in"
              style={{
                color: 'var(--color-text-muted)',
                animationDelay: '0.45s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <MapPin size={14} />
              Sri Lanka
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 animate-fade-in"
              style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 text-white"
                style={{ background: 'var(--color-primary)', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#818cf8'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.45)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; }}
              >
                View My Projects
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>

              <a
                href="https://drive.google.com/uc?export=download&id=1Mc0JNyG-V66R0NaD4Lk35MG6CCG1UilX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{
                  color: 'var(--color-primary-light)',
                  border: '1px solid rgba(99,102,241,0.4)',
                  background: 'rgba(99,102,241,0.08)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.18)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.7)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
                aria-label="Download CV (opens in new tab)"
              >
                <Download size={15} strokeWidth={2.5} />
                Download CV
              </a>

              <a
                href="https://github.com/sasindusachintha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-light)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; }}
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon size={15} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sasindu-sachintha-0a418a37a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-light)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; }}
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — visual elements */}
          <div className="hidden lg:flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            {/* Terminal card */}
            <div
              className="rounded-xl p-4 font-mono text-xs"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Terminal titlebar */}
              <div className="flex items-center gap-1.5 mb-4 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: '#f87171' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#fbbf24' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#34d399' }} />
                <span className="ml-2 text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>~/projects/sasindu</span>
              </div>

              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className="mb-1 leading-relaxed"
                  style={{ color: line.color, fontFamily: 'var(--font-mono)', animationDelay: `${0.6 + i * 0.08}s` }}
                >
                  {line.text}
                </div>
              ))}

              {/* Blinking cursor */}
              <span
                className="inline-block w-2 h-4 mt-1"
                style={{
                  background: 'var(--color-primary)',
                  animation: 'pulse-glow 1s step-end infinite',
                }}
              />
            </div>

            {/* Tech badges */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="text-xs font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>
                Tech I work with
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${badge.color}18`,
                      color: badge.color,
                      border: `1px solid ${badge.color}30`,
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Projects Built', value: '6+' },
                { label: 'Tech Stack', value: 'MERN' },
                { label: 'Focus', value: 'AI/ML' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <div className="text-lg font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
            aria-label="Scroll to about section"
          >
            <span className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>scroll</span>
            <div
              className="w-px h-10"
              style={{
                background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
