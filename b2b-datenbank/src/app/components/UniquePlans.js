'use client';

import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import B2BCard from './B2BCard';

const steps = [
  { label: '1 to 99', price: 0.75 },
  { label: '100 to 999', price: 0.65 },
  { label: '1,000 to 4,999', price: 0.55 },
  { label: '5,000 to 9,999', price: 0.50 },
  { label: '10,000 to 19,999', price: 0.45 },
  { label: '20,000 to 29,999', price: 0.40 },
  { label: '30,000 to 39,999', price: 0.35 },
  { label: '40,000 to 49,999', price: 0.30 },
  { label: '50,000 to 99,999', price: 0.25 },
  { label: '100,000+', price: 0.20 },
];

const plans = [
  {
    title: 'B2B Regional',
    badgeClassName: 'bg-primary',
    priceOffset: 0,
    description: 'Perfekt um gezielt nach potenziellen Kunden oder Kooperationen in einer Branche oder Region zu suchen.',
    features: [
      'Branchen + Codes',
      'Branchen ausschließen',
      'Ortsangaben',
      'Umkreissuche',
      'Unbegrenzte Downloads',
    ],
  },
  {
    title: 'B2B Data Dive',
    badgeClassName: 'bg-[#d92676]',
    priceOffset: 0.10,
    description: 'Perfekt um Ihre Vertriebsstrategien maßgeschneidert anzupassen und die richtigen Kontakte zu erreichen.',
    features: [
      'Serviceleistungen',
      'Rechtsform',
      'Ansprechpartner',
      'Mitarbeiterklasse',
      'Umsatzklasse',
    ],
  },
  {
    title: 'B2B Visible Dive',
    badgeClassName: 'bg-[#00b894]',
    priceOffset: 0.11,
    description: 'Perfekt für eine effektive Zielgruppenansprache und eine gezielte Vermarktung der eigenen Lösungen.',
    features: [
      'WEB CMS System',
      'WEB Keywords',
      'WEB Insights',
      'WEB Technologie',
      'Online Bewertungen',
    ],
  },
  {
    title: 'B2B Ultimate',
    badgeClassName: 'bg-gradient-to-t from-[#d92676] to-[#00b894]',
    priceOffset: 0.21,
    description: 'Perfekt um gezielt nach potenziellen Kunden oder Kooperationen in einer Branche oder Region zu suchen.',
  },
];

export default function UniquePlans() {
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4">
      {/* Slider */}
      <div className="w-full max-w-xl space-y-4 flex flex-col items-center mx-auto mb-12">
        <div className="text-lg font-semibold text-primary">
          {steps[stepIndex].label} records
        </div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          min={0}
          max={steps.length - 1}
          step={1}
          value={[stepIndex]}
          onValueChange={([val]) => setStepIndex(val)}
        >
          <Slider.Track className="bg-gray-300 relative grow rounded-full h-3">
            <Slider.Range className="absolute bg-primary rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-7 h-7 bg-white border border-secondary rounded-full shadow hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Step"
          />
        </Slider.Root>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <B2BCard
            key={idx}
            title={plan.title}
            price={(steps[stepIndex].price + plan.priceOffset).toFixed(2)}
            badgeClassName={plan.badgeClassName}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}
