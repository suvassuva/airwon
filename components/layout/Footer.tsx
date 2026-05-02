import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import BrandLogo from '@/components/ui/BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <BrandLogo variant="light" />
            <p className="text-slate-400 max-w-xs">
              Your trusted partner for hassle-free travel services, visa processing, and air ticketing across India and beyond.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572134004179"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/airwinindia06/?ref=xav_igxfb_comet_ig_bookmark_mega_menu_launch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@AirwinIndia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Follow us on YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4 text-white/70">
              <li><Link href="/services/passport-services" className="hover:text-white transition-colors">Passport Assistance</Link></li>
              <li><Link href="/services/visa-services" className="hover:text-white transition-colors">Visa Processing</Link></li>
              <li><Link href="/services/air-ticket-booking" className="hover:text-white transition-colors">Air Tickets</Link></li>
              <li><Link href="/services/holiday-packages" className="hover:text-white transition-colors">Holiday Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>#338, 2nd Cross, Hennur Cross, Chelekere Main Road, Kalyannagar, Bangalore - 560043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+91 79755 38933</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span>airwinindia06@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Airwin India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
