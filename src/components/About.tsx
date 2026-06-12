"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="About Me" />
      
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 aspect-square bg-border-color rounded-2xl overflow-hidden relative"
        >
          <Image
            src={personalInfo.photo}
            alt={`${personalInfo.name} Profile Photo`}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-7"
        >
          <div className="prose prose-lg text-secondary-text mb-8">
            <p className="mb-4 text-justify">
              {personalInfo.bio}
            </p>
            <p className="text-justify">{personalInfo.careerGoals}</p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-medium text-primary-text mb-4">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.interests.map((interest) => (
                <span key={interest} className="px-4 py-2 border border-border-color rounded-full text-sm text-secondary-text">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
