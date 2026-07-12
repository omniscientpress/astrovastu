"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Muhurtham", labelTe: "ముహూర్తం", href: "/services/muhurtham" },
    { label: "Career Guidance", labelTe: "ఉద్యోగం", href: "/services/career" },
    { label: "Marriage Matching", labelTe: "వివాహ పొంతన", href: "/services/marriage" },
    { label: "Childbirth", labelTe: "సంతానం", href: "/services/childbirth" },
    { label: "Finance", labelTe: "ధనం", href: "/services/finance" },
    { label: "Health", labelTe: "ఆరోగ్యం", href: "/services/health" },
  ],
  company: [
    { label: "About Us", labelTe: "మా గురించి", href: "/about" },
    { label: "Testimonials", labelTe: "అభిప్రాయాలు", href: "/testimonials" },
    { label: "Blog", labelTe: "బ్లాగ్", href: "/blog" },
    { label: "Contact", labelTe: "సంప్రదింపు", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", labelTe: "గోప్యతా విధానం", href: "/privacy" },
    { label: "Terms of Service", labelTe: "సేవా నిబంధనలు", href: "/terms" },
    { label: "Refund Policy", labelTe: "రీఫండ్ విధానం", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KP Jyotish</h3>
                <p className="text-xs text-gray-400">Authentic KP Astrology</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert consultations in Krishnamurti Paddhati (KP) System astrology. 
              Accurate predictions, auspicious timings, and effective remedies.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-saffron-500 flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-400">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-400">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white">+91 98765 43210</p>
                  <p className="text-xs text-gray-500">Mon-Sat, 9AM - 9PM IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-saffron-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">consult@kpjyotish.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">Available Online Worldwide<br />Based in India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 KP Jyotish. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
