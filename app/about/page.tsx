"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 mb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/office.png" 
            alt="Airwon Office" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              We Simplify Global <span className="text-accent">Mobility</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Airwon India was founded with a single mission: to make international travel and documentation accessible, transparent, and stress-free for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established with a vision to redefine travel services, Airwon India has grown from a boutique agency to a trusted partner for thousands of travelers. We understood early on that the biggest barrier to international travel wasn't just the distance, but the daunting paperwork.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we pride ourselves on our deep expertise in visa processing, passport services, and travel logistics, serving as a reliable bridge between our clients and their global destinations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/consultant.png" 
                alt="Our Expert Consultant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeInUp}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To provide world-class travel documentation services through technological innovation and personalized expert guidance, ensuring every client's journey begins with confidence.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To become the most trusted global mobility partner, recognized for our commitment to transparency, speed, and excellence in travel and documentation services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Successful Visas", value: "10k+", icon: Award },
              { label: "Happy Clients", value: "15k+", icon: Users },
              { label: "Partner Countries", value: "50+", icon: Target },
              { label: "Years Experience", value: "8+", icon: Award }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-accent mb-4 flex justify-center">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wide text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
