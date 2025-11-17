import React from 'react';
import { Cloud, Shield, Code, Database, Smartphone, Network } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="size-8" />,
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure solutions to modernize your business operations and reduce costs.',
  },
  {
    icon: <Shield className="size-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your data and systems from evolving threats.',
  },
  {
    icon: <Code className="size-8" />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with modern technologies.',
  },
  {
    icon: <Database className="size-8" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and BI solutions.',
  },
  {
    icon: <Smartphone className="size-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
  },
  {
    icon: <Network className="size-8" />,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help you make informed technology decisions.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </div>

        {/* Pricing Highlight Banner */}
        <div className="mb-12 p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl text-muted-foreground ">Starting from Just</span>
              <span className="text-xl  text-primary">4999</span>
            </div>
            <div className="h-px md:h-8 md:w-px bg-border"></div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Website Building Package</p>
              <p className="text-sm text-muted-foreground">Includes hosting & free professional email</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

