import React from 'react';
import { GraduationCap, MapPin, Code2, Layers, Brain, Database, Smartphone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const interests = [
  { icon: <Layers size={16} />, label: 'Full-Stack Engineering' },
  { icon: <Brain size={16} />, label: 'AI / Machine Learning' },
  { icon: <Code2 size={16} />, label: 'Backend Systems' },
  { icon: <Database size={16} />, label: 'Database Design' },
  { icon: <Smartphone size={16} />, label: 'Mobile Development' },
  { icon: <Code2 size={16} />, label: 'Data Structures & Algorithms' },
];

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building Software with Purpose"
          subtitle="An undergraduate who prefers shipping real projects over collecting certifications."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — text */}
          <div ref={leftRef} className="reveal lg:col-span-3 space-y-5">
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              I'm an undergraduate Software Engineering student from Sri Lanka with hands-on
              experience building web, mobile, AI, backend, and business applications. I
              enjoy working across the full software development lifecycle — from designing
              interfaces and REST APIs to working with databases, authentication systems,
              AI integrations, and deployment.
            </p>

            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              What drives me is turning real-world problems into useful software. Whether
              that's an offline mobile app for electricians, an AI business analysis platform,
              or a full education management system — I focus on practical outcomes, not just
              exercises.
            </p>

            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              I'm actively looking for{' '}
              <span style={{ color: 'var(--color-primary-light)', fontWeight: 500 }}>
                software engineering internships
              </span>{' '}
              where I can contribute meaningfully, grow quickly, and work alongside
              experienced engineers on challenging problems.
            </p>

            {/* Interests */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary-light)' }}>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — profile card */}
          <div ref={rightRef} className="reveal delay-200 lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}
            >
              {/* Card header gradient */}
              <div
                className="h-24 w-full relative"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(34,211,238,0.15) 100%)' }}
              >
                <div
                  className="absolute bottom-0 left-6 translate-y-1/2 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'var(--color-surface-3)', border: '2px solid var(--color-border)', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
                >
                  👨‍💻
                </div>
              </div>

              <div className="pt-10 pb-6 px-6">
                <h3 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  Sasindu Sachintha
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  Software Engineering Student
                </p>

                <div className="space-y-4">
                  <ProfileRow
                    icon={<GraduationCap size={15} />}
                    label="Education"
                    value="Higher Diploma in Computing and Software Engineering"
                  />
                  <ProfileRow
                    icon={<Code2 size={15} />}
                    label="Focus"
                    value="Software Engineering / Full Stack Development"
                  />
                  <ProfileRow
                    icon={<MapPin size={15} />}
                    label="Based in"
                    value="Sri Lanka"
                  />
                </div>

                {/* Social links */}
                <div className="mt-6 pt-4 flex gap-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <a
                    href="https://github.com/sasindusachintha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                    style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sasindu-sachintha-0a418a37a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                    style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 flex-shrink-0"
        style={{ color: 'var(--color-primary-light)' }}
      >
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
          {label}
        </p>
        <p className="text-sm leading-snug" style={{ color: 'var(--color-text-secondary)' }}>
          {value}
        </p>
      </div>
    </div>
  );
}
