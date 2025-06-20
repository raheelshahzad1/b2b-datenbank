'use client';

import React from 'react';
import { FaPlay } from 'react-icons/fa';
import * as Dialog from '@radix-ui/react-dialog';

export default function VideoReviews() {
    return (
        <div className='bg-gray-50 py-20'>
            <div className="max-w-7xl mx-auto px-5 2xl:px-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#3a31c8] to-[#262085] bg-clip-text text-transparent mb-4">
                    Kundengeschichten vor der Kamera
                </h2>

                <p className="text-gray-600 text-sm sm:text-lg text-center sm:leading-7 mb-12 max-w-3xl mx-auto">
                    Sehen Sie die Ergebnisse in ihren eigenen Worten. Unsere Kunden berichten von ihren Erfahrungen und wie wir ihnen geholfen haben, dauerhaften Erfolg zu erzielen.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <div className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg group transition transform hover:scale-[1.02]">
                                <div className="relative">
                                    <img
                                        src="https://i.ytimg.com/vi/yZPUpTkdIkY/sddefault.jpg"
                                        alt="Success story: Leadbakery"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-[3px] flex items-center justify-center">
                                        <button className="cursor-pointer size-16 bg-white text-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                                            <FaPlay className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5 bg-white">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                                        Erfolgsgeschichte: Leadbakery
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        David Barfuß berichtet, wie er mit B2B-Datenbank.de seine Zielgruppen treffsicher erreicht und seine Prozesse optimiert hat. Offen, direkt und mit klaren Empfehlungen für Unternehmen, die wachsen wollen.
                                    </p>
                                </div>
                            </div>
                        </Dialog.Trigger>

                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn z-[100]" />
                            <Dialog.Content
                                className="fixed top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl shadow-xl focus:outline-none z-[100]"
                            >
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/yZPUpTkdIkY?autoplay=1"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-xl"
                                    ></iframe>
                                    <Dialog.Close asChild>
                                        <button className="cursor-pointer hover:bg-secondary hover:text-black duration-300 absolute -top-3 -right-3 bg-primary text-white p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                                            </svg>
                                        </button>
                                    </Dialog.Close>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <div className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg group transition transform hover:scale-[1.02]">
                                <div className="relative">
                                    <img
                                        src="https://i.ytimg.com/vi/4pGAPRZaNXM/sddefault.jpg"
                                        alt="Success story: Leadbakery"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-[3px] flex items-center justify-center">
                                        <button className="cursor-pointer size-16 bg-white text-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                                            <FaPlay className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5 bg-white">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                                        Agenturerfolg: Deo Gervas
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        „Wir mussten Aufträge ablehnen“ – wie gezielte B2B-Daten seinem Team geholfen haben, neue Kunden effizient zu gewinnen und den Vertrieb zu skalieren.
                                    </p>
                                </div>
                            </div>
                        </Dialog.Trigger>

                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn" />
                            <Dialog.Content
                                className="fixed top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl shadow-xl focus:outline-none"
                            >
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/4pGAPRZaNXM"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-xl"
                                    ></iframe>
                                    <Dialog.Close asChild>
                                        <button className="cursor-pointer hover:bg-secondary hover:text-black duration-300 absolute -top-3 -right-3 bg-primary text-white p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                                            </svg>
                                        </button>
                                    </Dialog.Close>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <div className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg group transition transform hover:scale-[1.02]">
                                <div className="relative">
                                    <img
                                        src="https://i.ytimg.com/vi/GdXPcPLEfSA/sddefault.jpg"
                                        alt="Success story: Leadbakery"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-[3px] flex items-center justify-center">
                                        <button className="cursor-pointer size-16 bg-white text-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                                            <FaPlay className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5 bg-white">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                                        Anbietervergleich durch: The Rainmakers GmbH
                                    </h4>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Dennis O’Hagan hat alle Anbieter verglichen – und setzt heute auf B2B-Datenbank.de. Weil Qualität, Datenmenge und Ergebnis überzeugt haben.
                                    </p>
                                </div>
                            </div>
                        </Dialog.Trigger>

                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn" />
                            <Dialog.Content
                                className="fixed top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-black rounded-xl shadow-xl focus:outline-none"
                            >
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/GdXPcPLEfSA"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-xl"
                                    ></iframe>
                                    <Dialog.Close asChild>
                                        <button className="cursor-pointer hover:bg-secondary hover:text-black duration-300 absolute -top-3 -right-3 bg-primary text-white p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                                            </svg>
                                        </button>
                                    </Dialog.Close>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </div>
        </div>
    );
}