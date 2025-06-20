import React from "react";
import { ShieldCheck, Award, Users, CalendarCheck } from "lucide-react";
import TrustCard from "../components/TrustCard";

const cardData = [
  {
    icon: ShieldCheck,
    title: "Zertifizierter Datenschutz",
    description:
      "Geprüftes Datenschutzmanagement durch die IITR GmbH. Externer Datenschutzbeauftragter: Dr. Sebastian Kraska.",
  },
  {
    icon: Award,
    title: "Top bewertet",
    description:
      "Hervorragende Bewertungen auf führenden Plattformen wie ProvenExpert und OMR.",
  },
  {
    icon: Users,
    title: "1.400+ Zufriedene Kunden",
    description:
      "Das Vertrauen von über 1.400 Unternehmen. Sehen Sie sich unsere Referenzen an.",
  },
  {
    icon: CalendarCheck,
    title: "Aktiv seit 2021",
    description:
      "Fokussiert auf die Bereitstellung aktueller und qualitativ hochwertiger B2B-Daten.",
  },
];

export default function TrustItems() {
  return (
    <div className="px-5 py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-primary-dark mb-4">
          Gebaut auf Vertrauen und Qualität
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          Unsere Verpflichtung zu Exzellenz und Sicherheit ist der Grundstein
          Ihres Erfolgs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-7 max-w-[1320px] mx-auto">
        {cardData.map((card, index) => (
          <TrustCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}