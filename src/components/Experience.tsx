"use client";

import { motion } from 'framer-motion';
import { experience } from '@/data';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="Experience" subtitle="My journey of learning, building, and improving." />
      
      <div className="max-w-4xl border-l border-border-color ml-4 md:ml-0 pl-8 md:pl-12 py-4 space-y-16 relative">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <span className="text-sm font-medium text-accent tracking-wider uppercase mb-1 block">
                  {exp.type}
                </span>
                <h3 className="text-xl font-heading font-medium text-primary-text">
                  {exp.role}
                </h3>
                <p className="text-lg text-secondary-text">{exp.organization}</p>
              </div>
              <div className="mt-2 md:mt-0 text-sm text-secondary-text bg-border-color/50 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </div>
            </div>
            
            <p className="text-secondary-text mt-4 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
