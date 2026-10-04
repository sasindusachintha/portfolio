import React, { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status) setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sasindusachintha@example.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="contact" aria-label="Contact" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          subtitle="I'm open to internship opportunities, software engineering projects, collaboration, and interesting technical challenges."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* ── Left: info ── */}
          <div ref={leftRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.9,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              Whether you have a specific role, a project idea, or just want to say hi —
              feel free to reach out. I respond to genuine messages promptly.
            </p>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ContactCard
                icon={<Mail size={17} />}
                label="Email"
                value="Available via form →"
                color="#6366f1"
              />
              <ContactCard
                icon={<MapPin size={17} />}
                label="Location"
                value="Sri Lanka"
                color="#34d399"
              />
              <ContactCard
                icon={<GithubIcon size={17} />}
                label="GitHub"
                value="github.com/sasindusachintha"
                href="https://github.com/sasindusachintha"
                color="#a78bfa"
              />
              <ContactCard
                icon={<LinkedinIcon size={17} />}
                label="LinkedIn"
                value="Sasindu Sachintha"
                href="https://www.linkedin.com/in/sasindu-sachintha-0a418a37a/"
                color="#60a5fa"
              />
            </div>

            {/* Social icon strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 20px',
                borderRadius: '14px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-muted)',
                  margin: 0,
                }}
              >
                Connect with me
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  {
                    href: 'https://github.com/sasindusachintha',
                    icon: <GithubIcon size={18} />,
                    hoverColor: '#a78bfa',
                    label: 'GitHub',
                  },
                  {
                    href: 'https://www.linkedin.com/in/sasindu-sachintha-0a418a37a/',
                    icon: <LinkedinIcon size={18} />,
                    hoverColor: '#60a5fa',
                    label: 'LinkedIn',
                  },
                ].map(({ href, icon, hoverColor, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--color-surface-2)',
                      color: 'var(--color-text-secondary)',
                      border: '1px solid var(--color-border)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = hoverColor;
                      e.currentTarget.style.borderColor = hoverColor + '50';
                      e.currentTarget.style.background = hoverColor + '12';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'var(--color-surface-2)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div ref={rightRef} className="reveal delay-200">
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px',
                padding: '36px',
              }}
            >
              {/* Notice */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  marginBottom: '28px',
                  background: 'rgba(99,102,241,0.07)',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}
              >
                <AlertCircle
                  size={15}
                  style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '1px' }}
                />
                <p
                  style={{
                    fontSize: '12.5px',
                    lineHeight: 1.7,
                    color: 'var(--color-text-muted)',
                    margin: 0,
                  }}
                >
                  Submitting this form opens your default email client with the details
                  pre-filled. No data is stored or sent automatically.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <FormField
                    id="contact-name"
                    label="Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <FormField
                    id="contact-email"
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.09em',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '8px',
                      }}
                    >
                      Message{' '}
                      <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        fontSize: '13.5px',
                        lineHeight: 1.65,
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.55)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                      }}
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p style={{ marginTop: '16px', fontSize: '13px', fontWeight: 500, color: '#f87171' }}>
                    ⚠ Please fill in all fields before sending.
                  </p>
                )}
                {status === 'success' && (
                  <p style={{ marginTop: '16px', fontSize: '13px', fontWeight: 500, color: '#34d399' }}>
                    ✓ Your email client should have opened with the message pre-filled.
                  </p>
                )}

                <button
                  type="submit"
                  style={{
                    marginTop: '24px',
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '9px',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#fff',
                    background: 'var(--color-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
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
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function FormField({ id, label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.09em',
          color: 'var(--color-text-secondary)',
          marginBottom: '8px',
        }}
      >
        {label}{' '}
        {required && (
          <span aria-hidden="true" style={{ color: '#f87171' }}>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '13px 16px',
          borderRadius: '12px',
          fontSize: '13.5px',
          transition: 'border-color 0.2s',
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-primary)',
          outline: 'none',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgba(99,102,241,0.55)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href, color }) {
  const inner = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 20px',
        borderRadius: '14px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      <span
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: `${color}14`,
          color,
        }}
      >
        {icon}
      </span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <p
          style={{
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.09em',
            color: 'var(--color-text-muted)',
            margin: '0 0 3px 0',
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: '13.5px',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </p>
      </div>
      {href && (
        <ArrowRight
          size={14}
          style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}: ${value}`}
        style={{ display: 'block', textDecoration: 'none' }}
        onMouseEnter={(e) => {
          const card = e.currentTarget.firstChild;
          card.style.borderColor = `${color}45`;
          card.style.boxShadow = `0 4px 18px ${color}12`;
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget.firstChild;
          card.style.borderColor = 'var(--color-border)';
          card.style.boxShadow = 'none';
        }}
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
