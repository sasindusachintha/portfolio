import React from 'react';

export default function Button({ children, variant = 'primary', href, onClick, external, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 font-semibold text-sm rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e1a]';

  const variants = {
    primary:
      'px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-800/40',
    secondary:
      'px-5 py-2.5 border text-slate-200 hover:text-white hover:border-indigo-500 hover:bg-indigo-950/40',
    ghost:
      'px-4 py-2 text-slate-400 hover:text-indigo-400',
    outline:
      'px-5 py-2.5 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-950/40 hover:border-indigo-400',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const style = variant === 'secondary'
    ? { borderColor: 'var(--color-border-light)' }
    : {};

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        style={style}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={style} {...props}>
      {children}
    </button>
  );
}
