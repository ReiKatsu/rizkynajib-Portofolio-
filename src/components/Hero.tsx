"use client";

import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium tracking-wider uppercase mb-4"
        >
          Hi, I am {personalInfo.name}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-semibold text-primary-text leading-tight mb-6"
        >
          {personalInfo.role} <br />
          <span className="text-secondary-text"> Product Development & UI/UX</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary-text mb-10 max-w-2xl leading-relaxed"
        >
          {personalInfo.shortIntro}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="bg-primary-text text-background px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="border border-border-color text-primary-text px-8 py-4 rounded-full font-medium hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
            Contact Me <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
