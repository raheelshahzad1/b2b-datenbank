'use client'

import { useState } from 'react'
import UniquePlans from './UniquePlans'
import MonthlyPlans from './MonthlyPlans'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('unique')

  return (
    <section className="py-24 font-poppins">
      <div className="mx-auto max-w-[1320px] px-5 2xl:px-0">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#3a31c8] to-[#262085] bg-clip-text text-transparent mb-4">
            Unsere Preispläne
          </h2>

          <p className="text-gray-500 text-sm sm:text-lg text-center sm:leading-7 mb-12 max-w-3xl mx-auto">
            Unsere Preiskalkulation basiert auf den von Ihnen ausgewählten Filtergruppen. Entscheiden Sie sich beispielsweise für einen Filter aus der Gruppe "B2B Regional ©", erhalten Sie alle dazugehörigen Datenfelder zum Festpreis pro Datensatz.
          </p>

          {/* Sliding Tabs */}
          <div className="max-w-sm mx-auto bg-gray-100 rounded-full p-1.5 relative flex items-center justify-between mb-12">
            <div
              className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 bg-gradient-to-r from-primary to-[#262085] rounded-full transition-transform duration-300 ease-in-out ${
                activeTab === 'monthly' ? 'translate-x-full' : ''
              }`}
            />

            <button
              onClick={() => setActiveTab('unique')}
              className={`text-sm sm:text-md cursor-pointer z-10 w-1/2 text-center font-semibold py-2 sm:py-3 px-3 lg:px-11 rounded-full transition-colors duration-300 ${
                activeTab === 'unique'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-indigo-600'
              }`}
            >
              Einzigartig
            </button>

            <button
              onClick={() => setActiveTab('monthly')}
              className={` text-sm sm:text-md cursor-pointer z-10 w-1/2 text-center font-semibold py-2 sm:py-3 px-3 lg:px-11 rounded-full transition-colors duration-300 ${
                activeTab === 'monthly'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-indigo-600'
              }`}
            >
             Monatlich
            </button>
          </div>
        </div>

        {/* Fade Tab Content (without absolute) */}
        <div className="relative transition-all duration-500">
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              activeTab === 'unique' ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >

            <UniquePlans />
          </div>

          <div
            className={`transition-opacity duration-500 ease-in-out ${
              activeTab === 'monthly' ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >
            <MonthlyPlans />
          </div>
        </div>
      </div>
    </section>
  )
}
