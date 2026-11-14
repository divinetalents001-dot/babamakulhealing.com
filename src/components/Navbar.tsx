import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONTACT } from '../data/healingData';

interface NavbarProps {
  onSelectConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onSelectConsultation }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#323E34]/12">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#1E261F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#243326]"
        >
          {SITE_CONTACT.brandName}
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525E53]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#1E261F] border-b border-transparent hover:border-[#243326]/40 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#243326]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`${SITE_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
              'Hello Baba Makul Healing, I would like to request a confidential healing consultation.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Allow direct WhatsApp launch AND smooth focus on contact if user prefers
              if (e.metaKey || e.ctrlKey) return;
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243326]"
          >
            WhatsApp Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#1E261F] hover:bg-[#F2ECE1] transition-colors focus-visible:outline-2 focus-visible:outline-[#243326]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#323E34]/12 bg-[#FAF7F2] px-6 py-4"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3 text-base font-medium text-[#1E261F] border-b border-[#323E34]/8 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`${SITE_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hello Baba Makul Healing, I would like to request a confidential healing consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full py-3 px-4 text-center text-sm font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C]"
              >
                WhatsApp Us
              </a>
              <button
                type="button"
                onClick={() => {
                  handleLinkClick();
                  onSelectConsultation();
                }}
                className="w-full py-3 px-4 text-center text-sm font-medium border border-[#323E34]/25 text-[#1E261F] rounded-md hover:bg-[#F2ECE1]"
              >
                Request Consultation Form
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
