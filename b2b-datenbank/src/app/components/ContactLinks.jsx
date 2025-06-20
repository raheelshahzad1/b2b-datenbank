import { Phone, Mail, Globe } from 'lucide-react';

export default function ContactLinks() {
  const contactItems = [
    {
      href: 'tel:+4941092690225',
      label: '04109-269-0225',
      icon: Phone,
    },
    {
      href: 'mailto:info@b2b-datenbank.de',
      label: 'info@b2b-datenbank.de',
      icon: Mail,
    },
    {
      href: 'https://b2b-datenbank.de',
      label: 'www.b2b-datenbank.de',
      icon: Globe,
      external: true,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5 text-sm">
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="flex items-center space-x-2 hover:text-[var(--text-primary)] transition-colors"
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
