'use client'

import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';

export default function UniquePlans() {

    return (
        <>
            <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 lg:space-y-0">

                <div className="relative flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 pt-28 duration-500">
                    {/* PREMIUM Badge */}
                    <div className="absolute top-5 -left-3">
                        {/* Ribbon background */}
                        <div className="z-20 rounded-tl-xl rounded-b-[3px] bg-primary text-white px-12 py-3 font-semibold text-lg relative ribbon-shape">
                            B2B Regional
                        </div>

                        {/* Black triangle fold, rotated */}
                        <div className="rotate-[135deg] absolute -bottom-[9px] left-[5px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black"></div>
                    </div>



                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Perfekt um gezielt nach potenziellen Kunden oder Kooperationen in einer Branche oder Region zu suchen.
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">$0</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ aufzeichnen</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Branchen + Codes</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Branchen ausschließen</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Ortsangaben</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span> Umkreissuche</span>
                            </li>

                            <li className="flex items-center space-x-4">

                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Unbegrenzte Downloads</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 pt-28 duration-500">
                    {/* PREMIUM Badge */}
                    <div className="absolute top-5 -left-3">
                        {/* Ribbon background */}
                        <div className="z-20 rounded-t-xl rounded-b-[3px] bg-[#d92676] text-white px-12 py-3 font-semibold text-lg relative ribbon-shape">
                            B2B Data Dive
                        </div>

                        {/* Black triangle fold, rotated */}
                        <div className="rotate-[135deg] absolute -bottom-[9px] left-[5px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black"></div>
                    </div>

                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Perfekt um um Ihre Vertriebsstrategien maßgeschneidert anzupassen und die richtigen Kontakte zu erreichen.
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">$0</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ aufzeichnen</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Serviceleistungen</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Rechtsform</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Ansprechpartner</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Mitarbeiterklasse</span>
                            </li>

                            <li className="flex items-center space-x-4">

                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Umsatzklasse</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 pt-28 duration-500">
                    {/* PREMIUM Badge */}
                    <div className="absolute top-5 -left-3">
                        {/* Ribbon background */}
                        <div className="z-20 rounded-t-xl rounded-b-[3px] bg-[#00b894] text-white px-12 py-3 font-semibold text-lg relative ribbon-shape">
                            B2B Data Dive
                        </div>

                        {/* Black triangle fold, rotated */}
                        <div className="rotate-[135deg] absolute -bottom-[9px] left-[5px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black"></div>
                    </div>

                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Perfekt für eine effektive Zielgruppenansprache und eine gezielte Vermarktung der eigenen Lösungen.
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">$0</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ aufzeichnen</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>WEB CMS System</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>WEB Keywords</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>WEB Insights</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>WEB Technologie</span>
                            </li>

                            <li className="flex items-center space-x-4">

                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Online Bewertungen</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl shadow-[12px_1px_12px_0_rgba(20,20,43,0.08)] border border-[#eff0f6] p-6 pt-34 duration-500">
                    {/* PREMIUM Badge */}
                    <div className="absolute top-5 -left-3">
                        {/* Ribbon background */}
                        <div className="z-20 rounded-t-xl rounded-b-[3px] bg-gradient-to-t from-[#d92676] to-[#00b894] text-white px-12 py-3 font-semibold text-lg relative ribbon-shape">
                           <h1>B2B Data Dive ©</h1>
                           <h1>B2B Visible Dive ©</h1>
                        </div>

                        {/* Black triangle fold, rotated */}
                        <div className="rotate-[135deg] absolute -bottom-[9px] left-[5px] w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black"></div>
                    </div>

                    <p className='text-left leading-6 text-gray-500 mb-6'>
                        Perfekt um gezielt nach potenziellen Kunden oder Kooperationen in einer Branche oder Region zu suchen.
                    </p>

                    <div className="flex items-center mb-6">
                        <span className="font-manrope mr-2 text-5xl font-semibold">$0</span>
                        <sub className="text-xl text-gray-500 inline-block -mb-2">/ aufzeichnen</sub>
                    </div>

                    <div>
                        <h6 className='font-bold text-black text-left mb-5 text-lg'>What's included</h6>
                        <ul className="mb-12 space-y-4 text-left text-lg">
                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Branchen + Codes</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Branchen ausschließen</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Ortsangaben</span>
                            </li>

                            <li className="flex items-center space-x-4">
                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span> Umkreissuche</span>
                            </li>

                            <li className="flex items-center space-x-4">

                                <FaCheckCircle className='size-5 text-[#3a31c8]' />
                                <span>Unbegrenzte Downloads</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
