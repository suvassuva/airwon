"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Service Header */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-accent font-medium">{service.title}</span>
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Service Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <Clock className="text-accent" />
                    <div>
                      <p className="font-bold text-primary">Fast Processing</p>
                      <p className="text-sm text-slate-500">Industry leading speed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="text-accent" />
                    <div>
                      <p className="font-bold text-primary">Secure Handling</p>
                      <p className="text-sm text-slate-500">Your documents are safe</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Process Steps</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-accent/20">
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Required Documents & CTA Card */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-32"
              >
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="text-accent" />
                  Required Documents
                </h3>
                <ul className="space-y-4 mb-8">
                  {service.documents.map((doc, index) => (
                    <li key={index} className="flex gap-3 items-start text-slate-600">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact" 
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                  >
                    Apply Now <ArrowRight size={20} />
                  </Link>
                  <Link 
                    href="https://wa.me/917975538933" 
                    className="w-full bg-white text-primary border-2 border-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                  >
                    <MessageCircle size={20} /> WhatsApp Expert
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
