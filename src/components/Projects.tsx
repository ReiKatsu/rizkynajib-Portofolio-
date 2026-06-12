"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="Featured Projects" subtitle="A selection of my recent work in web development and design." />
      
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block"
          >
            <div className="aspect-[4/3] rounded-2xl bg-border-color mb-6 overflow-hidden relative group">
              <Image 
                src={project.thumbnail} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-heading font-medium text-primary-text group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a href={project.githubLink} className="p-2 border border-border-color rounded-full hover:bg-border-color transition-colors" aria-label="GitHub">
                  <FaGithub size={18} className="text-primary-text" />
                </a>
                <a href={project.demoLink} className="p-2 border border-border-color rounded-full hover:bg-accent hover:border-accent hover:text-white transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-background" aria-label="Live Demo">
                  <ArrowUpRight size={18} className="text-primary-text group-hover:text-background" />
                </a>
              </div>
            </div>
            
            <p className="text-secondary-text mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-border-color rounded-full text-xs text-secondary-text">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
