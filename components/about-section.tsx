import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Users className="size-6" />, value: '500+', label: 'Happy Clients' },
  { icon: <Award className="size-6" />, value: '15+', label: 'Years Experience' },
  { icon: <TrendingUp className="size-6" />, value: '1000+', label: 'Projects Completed' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We are a leading IT solutions provider with over 15 years of experience
              in delivering innovative technology solutions to businesses worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our team of expert developers, engineers, and consultants work together
              to help companies transform their digital infrastructure and achieve
              their business goals.
            </p>
            <p className="text-lg text-muted-foreground">
              We pride ourselves on delivering high-quality solutions, exceptional
              customer service, and staying ahead of the latest technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card text-center"
              >
                <div className="mb-4 flex justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

