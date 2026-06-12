"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import { SectionHeading } from './SectionHeading';
import { Mail, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const socials = [
    { icon: <Mail size={24} />, label: 'Email', href: `mailto:${personalInfo.contact.email}` },
    { icon: <FaLinkedin size={24} />, label: 'LinkedIn', href: personalInfo.contact.linkedin },
    { icon: <FaGithub size={24} />, label: 'GitHub', href: personalInfo.contact.github },
    { icon: <FaInstagram size={24} />, label: 'Instagram', href: personalInfo.contact.instagram },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/50">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading title="Let's Connect" subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
          
          <motion.a 
            href={`mailto:${personalInfo.contact.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-2xl font-heading text-primary-text hover:text-accent transition-colors group mb-12"
          >
            {personalInfo.contact.email}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-14 h-14 rounded-full border border-border-color flex items-center justify-center text-secondary-text hover:bg-accent hover:border-accent hover:text-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background border border-border-color p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const subject = `Contact from ${name || 'Website Visitor'}`;
              const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
              window.location.href = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-text mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border-color py-3 text-primary-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-text mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border-color py-3 text-primary-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-text mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-border-color py-3 text-primary-text focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-text text-background py-4 rounded-xl font-medium hover:bg-accent transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
