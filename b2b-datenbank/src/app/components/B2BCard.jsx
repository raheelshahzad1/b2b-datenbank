"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function B2BCard({
  title,
  price,
  badgeClassName,
  description,
  features = [],
}) {
  return (
    <div className="relative flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 pt-28 duration-500">
      {/* PREMIUM Badge */}
      <div className="absolute top-5 -left-3">
        <div
          className={`z-20 rounded-t-xl rounded-b-[3px] text-white ps-8 pe-12 py-3 font-semibold text-lg relative ribbon-shape ${badgeClassName}`}
        >
          {title}
        </div>
        <div className="rotate-[135deg] absolute -bottom-[9px] left-[5px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black"></div>
      </div>

      {/* Price */}
      <div className="flex items-center mb-6 h-16">
        <span className="font-manrope mr-2 text-4xl font-semibold">
          €{price}
        </span>
        <sub className="text-xl text-gray-500 inline-block -mb-2">
          / aufzeichnen
        </sub>
      </div>

      {/* Description */}
      {features.length > 0 ? (
        <p className="text-left leading-6 text-gray-500 mb-6">{description}</p>
      ) : (
        <div class="text-small text-sm">
          <div class="text-gray-500 text-start mt-2  mb-2">
            Die Macht der Kombination: Stellen Sie sich vor, Sie könnten alle
            Filteroptionen miteinander kombinieren.
          </div>

          <div class="text-gray-500 text-start mt-2 mb-2">
            Indem Sie beispielsweise nach genutzten WEB CMS Systemen wie z.B.
            Wordpress, genutzten Webseiten-Technologien wie z.B. HubSpot, der
            Rechtsform, Ansprechpartner aus der 1. Führungsebene und einem
            aktuellen Bedarf an Mitarbeitern filtern.
          </div>

          <div class="text-gray-500 text-start mt-2 mb-2">
            Ein umfassenderes Bild der potenziellen Kunden zu erhalten ist kaum
            möglich.
          </div>

          <div class="text-gray-500 text-start mt-2 mb-2">
            Diese leistungsstarke Kombination ermöglicht es Ihnen, hochrelevante
            Zielgruppen zu identifizieren und maßgeschneiderte Marketing- und
            Vertriebsstrategien zu entwickeln.
          </div>
        </div>
      )}
      {/* Feature List */}
      {features.length > 0 && (
        <div>
          <h6 className="font-bold text-black text-left mb-5 text-lg">
            What's included
          </h6>
          <ul className="mb-12 space-y-4 text-left text-lg">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-4">
                <FaCheckCircle className="size-5 text-[#3a31c8]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
