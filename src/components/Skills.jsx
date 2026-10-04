import React from 'react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#f59e0b',
    skills: ['Java', 'C++', 'JavaScript', 'Python', 'PHP', 'R', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#61dafb',
    skills: ['React', 'Vite', 'Tailwind CSS', 'React Native', 'Responsive UI', 'HTML/CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#68a063',
    skills: ['Node.js', 'Express.js', 'ASP.NET', 'REST APIs', 'JWT', 'Authentication', 'bcrypt'],
  },
  {
    id: 'databases',
    label: 'Databases',
    color: '#00758f',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase', 'SQLite'],
  },
  {
    id: 'ai',
    label: 'AI / Computer Vision',
    color: '#a78bfa',
    skills: ['Machine Learning', 'OpenCV', 'AI API Integration', 'LLM Applications', 'Groq API'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    color: '#94a3b8',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Android Studio', 'SSMS', 'Google Colab', 'Expo'],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      className="section"
      aria-label="Skills"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          subtitle="A working set of tools and technologies I use to build software."
        />

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group }) {
  return (
    <div
      className="rounded-xl p-5 transition-all duration-200"
      style={{
        background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${group.color}40`;
        e.currentTarget.style.boxShadow = `0 4px 20px ${group.color}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: group.color, boxShadow: `0 0 8px ${group.color}60` }}
        />
        <h3 className="text-sm font-semibold" style={{ color: group.color }}>
          {group.label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-150"
            style={{
              background: `${group.color}10`,
              color: 'var(--color-text-secondary)',
              border: `1px solid ${group.color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
