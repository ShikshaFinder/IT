import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="size-6 text-primary" />
              <span className="text-xl font-bold">TechSolutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Cloud Computing</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@techsolutions.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street, San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

