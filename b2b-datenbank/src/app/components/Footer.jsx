import { Check, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import ContactLinks from "./ContactLinks";
import PaymentMethods from "./PaymentMethods";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-12">
          <div className="">
            <Link href="/" className="flex mb-6 max-lg:mx-auto max-w-[200px]">
              <Image
                width={200}
                height={200}
                className="w-full"
                alt="logo"
                src="https://b2b-datenbank.de/assets/img/B2B-Logo.png"
              />
            </Link>
            <p className="leading-relaxed text-lg max-lg:text-center mb-10">
              Einfache Lösungen für komplexe Anforderungen.
            </p>

            <ContactLinks />
          </div>

          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Rechtliches</h3>
            <FooterLinks />

            <div className="mt-10">
              <Image
                width={200}
                height={200}
                alt="dmca"
                className="w-full max-w-[150px] rounded"
                src="/icons/dmca-protected.png"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">
              Zahlungsmethoden
            </h3>
            <PaymentMethods />
          </div>
        </div>
        <div className="text-center mt-16 pt-8">
          <p className="text-sm max-w-3xl mx-auto">
            Die Nutzung des Angebots ist ausschließlich für Firmen, Gewerbetreibende, Vereine, Handwerksbetriebe, Behörden oder selbstständige Freiberufler im Sinne des § 14 BGB zulässig.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-[var(--text-muted)] text-center md:text-right">
              © 2025 - Copyright B2B Datenbank. Alle Rechte vorbehalten
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
