"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  FileText,
  UserCheck,
  CheckCircle
} from 'lucide-react';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import ServiceCard from '@/components/ui/ServiceCard';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />
          <Image
            src="/images/hero-bg.png"
            alt="Airwon India Travel"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            >
              Passport | Visa | <br className="hidden md:block" />
              <span className="text-accent">Air Ticket</span> Made Easy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Your professional partner for seamless travel documentation and global mobility. We handle the complexity, you enjoy the journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/services"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-accent/40 flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/917975538933"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={22} /> WhatsApp
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-slate-600">Explore our comprehensive range of travel and documentation services tailored to your needs.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why ChooseAirwin India?</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We combine years of industry expertise with a customer-first approach to provide travel services that are reliable, fast, and transparent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Fast Processing", desc: "Quick turnaround times for all applications." },
                  { icon: ShieldCheck, title: "Trusted Service", desc: "Thousands of satisfied customers worldwide." },
                  { icon: Clock, title: "24/7 Support", desc: "Real-time updates on your application status." },
                  { icon: CheckCircle2, title: "Affordable Pricing", desc: "Competitive rates with no hidden costs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video lg:aspect-square rounded-3xl bg-primary/5 overflow-hidden relative">
                <Image
                  src="/images/holiday-bg.png"
                  alt="Premium Travel Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Success Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Simple Process</h2>
            <p className="text-slate-600">Get your travel documents ready in three easy steps.</p>
          </motion.div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", icon: FileText, title: "Submit Documents", desc: "Share your required documents with our experts for review." },
                { step: "02", icon: UserCheck, title: "Verification", desc: "We handle the rigorous verification and application process." },
                { step: "03", icon: CheckCircle, title: "Approval", desc: "Receive your processed documents and get ready to fly!" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-accent mb-6 group-hover:border-accent transition-colors duration-500 relative">
                    <item.icon size={32} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-slate-500 max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Trusted by travelers for our dedicated service and expert guidance.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between h-full"
              >
                <p className="text-slate-600 italic mb-6 leading-relaxed">&quot;{item.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-xs text-slate-500 font-semibold uppercase">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-video lg:aspect-[4/3]">
                <Image
                  src="/images/office.png"
                  alt="Airwon India Office"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Visit Our Professional Office</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Experience world-class travel consultancy at our state-of-the-art facility. Our dedicated team is ready to assist you in person with all your travel documentation and planning needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary font-semibold">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  Professional Environment
                </div>
                <div className="flex items-center gap-4 text-primary font-semibold">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  Expert Consultants
                </div>
                <div className="flex items-center gap-4 text-primary font-semibold">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  Personalized Service
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/20"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                <circle cx="10" cy="10" r="50" />
                <circle cx="90" cy="90" r="50" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get your visa processed today</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Don&apos;t let paperwork stop your dreams. Contact our experts and start your application journey with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-accent hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Contact Us
                </Link>
                <Link
                  href="https://wa.me/917975538933"
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={22} /> WhatsApp Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
