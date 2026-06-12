import { personalInfo } from '@/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary-text text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm text-secondary-text">
          <a href={personalInfo.contact.linkedin} className="hover:text-accent transition-colors">LinkedIn</a>
          <a href={personalInfo.contact.github} className="hover:text-accent transition-colors">GitHub</a>
          <a href={personalInfo.contact.instagram} className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
