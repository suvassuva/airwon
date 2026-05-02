"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from '@/components/ui/ServiceCard';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="pb-24 min-h-screen">
      <div className="relative pt-40 pb-24 mb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="World Destinations" 
            fill
            className="object-cover opacity-40 scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              From visa processing to passport assistance and holiday planning, we offer a comprehensive suite of travel services designed to save you time and eliminate stress.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Custom Service CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[2rem] bg-slate-100 border border-slate-200 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Don't see what you're looking for?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our experts can assist with various other travel-related documentation and services. Contact us to discuss your specific requirements.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
}
