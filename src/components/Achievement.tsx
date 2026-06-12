"use client";

import { motion } from 'framer-motion';
import { achievements } from '@/data';
import { SectionHeading } from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/50">
      <SectionHeading title="Achievements" subtitle="Continuous learning and professional development." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-border-color bg-background hover:shadow-sm hover:border-accent transition-all group flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-border-color rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Award size={24} className="text-secondary-text group-hover:text-background transition-colors" />
            </div>
            
            <h3 className="font-heading font-medium text-lg text-primary-text mb-2 flex-grow">
              {achievement.name}
            </h3>
            
            <div className="flex justify-between items-end mt-4">
              <div>
                <p className="text-sm text-secondary-text">{achievement.issuer}</p>
                <p className="text-xs text-secondary-text/70">{achievement.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
