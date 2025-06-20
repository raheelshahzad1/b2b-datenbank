'use client'

import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';

export default function MonthlyPlans() {

    return (
        <>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 lg:space-y-0">
                <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 xl:py-9 xl:px-12 duration-500">
                    <h3 className="font-manrope text-3xl font-bold mb-6 text-center">Basic</h3>
                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Entspricht einem Einzelpreis von nur 0,13€ für jede verwendete Filtergruppe
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">197€</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ Monat</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Including 1,500 credits per month</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>All filter groups included</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Enrichment of own data</span>
                            </li>
                        </ul>

                        <button className='w-full py-3 rounded-full bg-gradient-to-r from-primary to-[#262085] text-white cursor-pointer'>
                           Kaufen
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border-2 border-primary p-6 xl:py-9 xl:px-12 duration-500">
                    <h3 className="font-manrope text-3xl font-bold mb-6 text-center">Pro</h3>
                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Entspricht einem Einzelpreis von nur 0,12€ für jede verwendete Filtergruppe
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">997€</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ Monat</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Inklusive 8.500 Credits pro Monat</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Alle Filtergruppen inklusive</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Anreicherung eigener Daten</span>
                            </li>
                        </ul>

                        <button className='w-full py-3 rounded-full bg-gradient-to-r from-primary to-[#262085] text-white cursor-pointer'>
                           Kaufen
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 xl:py-9 xl:px-12 duration-500">
                    <h3 className="font-manrope text-3xl font-bold mb-6 text-center">Premium</h3>
                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Entspricht einem Einzelpreis von nur 0,10€ für jede verwendete Filtergruppe
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">1997€</span>
                       <sub className="text-xl text-gray-500 inline-block -mb-2">/ Monat</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Inklusive 20.000 Credits pro Monat</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Alle Filtergruppen inklusive</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Anreicherung eigener Daten</span>
                            </li>
                        </ul>

                        <button className='w-full py-3 rounded-full bg-gradient-to-r from-primary to-[#262085] text-white cursor-pointer'>
                           Kaufen
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
