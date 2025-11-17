import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Migrated 500+ servers to AWS, reducing infrastructure costs by 40%',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Cloud Computing',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Built a scalable e-commerce platform handling 1M+ transactions monthly',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    category: 'Software Development',
  },
  {
    title: 'Cybersecurity Framework',
    description: 'Implemented comprehensive security framework for financial institution',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    category: 'Cybersecurity',
  },
  {
    title: 'Mobile Banking App',
    description: 'Developed native mobile app with 500K+ active users',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    category: 'Mobile Development',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard processing 10TB of data daily',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    category: 'Data Analytics',
  },
  {
    title: 'IT Infrastructure Overhaul',
    description: 'Complete IT infrastructure modernization for global corporation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    category: 'IT Consulting',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our successful projects and client transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

