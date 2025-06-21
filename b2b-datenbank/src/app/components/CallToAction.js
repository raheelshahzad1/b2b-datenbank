'use client';

import React from 'react';

export default function CallToAction() {

    return (
        <div className="py-20 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#3a31c8] to-[#262085] bg-clip-text text-transparent mb-6 leading-16">
                    Beginnen Sie Ihre Innovationsreise
                </h2>

                <p className="text-sm sm:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Begeben Sie sich mit unseren bahnbrechenden Tools in die Zukunft. Registrieren Sie sich jetzt für exklusive Vorschauen und Insider-Updates.
                </p>

                <button className="py-3 px-10 rounded-full bg-secondary text-black font-bold cursor-pointer">
                    Legen Sie los
                </button>
            </div>
        </div>
    )
}
