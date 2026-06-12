import React from 'react';

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-heading font-semibold text-primary-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-text max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-accent mt-6"></div>
    </div>
  );
}
