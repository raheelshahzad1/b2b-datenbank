import { Check } from 'lucide-react';
import Link from 'next/link';

export default function FooterLinks() {
  const links = [
    { label: 'Impressum', href: '#' },
    { label: 'Allgemeine Geschäftsbedingungen', href: '#' },
    { label: 'Datenschutzerklärung', href: '#' },
    { label: 'DSGVO', href: '#' },
    { label: 'Fulfillment-Richtlinie', href: '#' },
  ];

  return (
    <ul className="space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="flex items-center text-[var(--text-secondary)] hover:text-secondary transition-colors duration-300 group"
          >
            <Check className="h-4 w-4 mr-3 text-[var(--brand-blue-1)]" />
            <span className="text-sm font-medium">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
