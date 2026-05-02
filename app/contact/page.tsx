"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative pt-40 pb-24 mb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ticket.png" 
            alt="Travel Support" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Have questions about your visa or passport application? Our experts are here to help. Reach out to us via form, phone, or WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Phone</h4>
                    <p className="text-slate-600">+91 79755 38933</p>
                    <p className="text-slate-600">+91 80 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Email</h4>
                    <p className="text-slate-600">info@airwonindia.com</p>
                    <p className="text-slate-600">support@airwonindia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Office Location</h4>
                    <p className="text-slate-600">123 Travel Hub, Residency Road</p>
                    <p className="text-slate-600">Bangalore, Karnataka, India 560001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Socials */}
            <div className="space-y-6">
              <div className="bg-primary rounded-3xl p-8 text-white flex items-center justify-between shadow-xl shadow-primary/20">
                <div className="max-w-[200px]">
                  <h4 className="font-bold text-lg mb-2">Need a quick answer?</h4>
                  <p className="text-sm text-white/70">Chat with us on WhatsApp for instant support.</p>
                </div>
                <a 
                  href="https://wa.me/917975538933" 
                  target="_blank"
                  className="bg-accent hover:bg-accent/90 text-white p-4 rounded-2xl transition-all"
                >
                  <MessageCircle size={32} />
                </a>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-sm">
                <h4 className="font-bold text-primary text-lg">Follow Our Updates</h4>
                <div className="flex gap-6">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61572134004179" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-sm border border-slate-100"
                    aria-label="Follow us on Facebook"
                  >
                    <FacebookIcon size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/airwinindia06/?ref=xav_igxfb_comet_ig_bookmark_mega_menu_launch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-sm border border-slate-100"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon size={24} />
                  </a>
                  <a 
                    href="https://www.youtube.com/@AirwinIndia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-sm border border-slate-100"
                    aria-label="Follow us on YouTube"
                  >
                    <YoutubeIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Inquiry Type</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all appearance-none">
                  <option>Visa Services</option>
                  <option>Passport Assistance</option>
                  <option>Flight Booking</option>
                  <option>Holiday Packages</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[450px] bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-100 flex items-center justify-center text-slate-400 font-medium italic relative shadow-inner"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-4 shadow-xl shadow-accent/20">
              <MapPin size={32} />
            </div>
            <p className="bg-white/90 px-6 py-2 rounded-full shadow-sm text-primary">Map View of Bangalore Office</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
