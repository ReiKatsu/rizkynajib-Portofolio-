"use client";

import { motion } from 'framer-motion';
import { skills } from '@/data';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/50">
      <SectionHeading title="Skills & Expertise" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl border border-border-color bg-background hover:border-accent transition-colors"
          >
            <h3 className="text-xl font-heading font-medium text-primary-text mb-6">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center text-secondary-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
