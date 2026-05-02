"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Plane, Palmtree, ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';

const iconMap = {
  Passport: FileText,
  Visa: FileText,
  Plane: Plane,
  Palmtree: Palmtree,
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || FileText;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300 -mt-16 relative z-10 shadow-lg">
          <Icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
          {service.shortDescription}
        </p>
        
        <Link 
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
        >
          Learn More
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
