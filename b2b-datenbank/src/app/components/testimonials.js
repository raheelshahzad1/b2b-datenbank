'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const reviews = [
        {
            name: "Kai L.",
            source: "Quelle: ProvenExpert",
            initials: "K",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
        {
            name: "Laura S.",
            source: "Quelle: ProvenExpert",
            initials: "L",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
        {
            name: "Markus B.",
            source: "Quelle: ProvenExpert",
            initials: "M",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
        {
            name: "Kai L.",
            source: "Quelle: ProvenExpert",
            initials: "K",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
        {
            name: "Laura S.",
            source: "Quelle: ProvenExpert",
            initials: "L",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
        {
            name: "Markus B.",
            source: "Quelle: ProvenExpert",
            initials: "M",
            stars: 5,
            text: "Ich kaufe jeden Monat neue Datencredits, weil wir monatlich 1.500 neue Firmenadressen brauchen. Unsere Terminquote ist super. Leider mussten wir am 17.06. fast 2 Stunden auf einen Rückruf warten, das waren wir so nicht gewöhnt.",
        },
    ];


    return (
        <div className='max-w-7xl mx-auto py-20 px-5 2xl:px-0 relative z-0'>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-14 text-center bg-gradient-to-r from-[#3a31c8] to-[#262085] bg-clip-text text-transparent mb-4">
                Was unsere Partner sagen
            </h2>

            <p className="text-gray-500 text-sm sm:text-lg text-center sm:leading-7 mb-12 max-w-3xl mx-auto">
                Das Feedback unserer Kunden spiegelt die Qualität, das Engagement und die Ergebnisse wider, die wir kontinuierlich liefern. Lesen Sie ihre Geschichten und erfahren Sie, wie wir ihnen zum Erfolg verholfen haben.
            </p>

            <div className="flex justify-end gap-3 mb-4">
                <button ref={prevRef} className="cursor-pointer swiper-button-prev-custom size-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-full">
                    <FaArrowLeft />
                </button>
                <button ref={nextRef} className="cursor-pointer swiper-button-next-custom size-10 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white duration-300 rounded-full">
                    <FaArrowRight />
                </button>
            </div>

            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                loop={true}
                autoplay={true}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    // Assign refs before Swiper initializes
                    if (swiper.params.navigation) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                spaceBetween={30}

                className="mySwiper relative"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                    1280: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 duration-500 hover:border-indigo-600">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-12 font-bold bg-gradient-to-r from-primary to-[#262085] flex items-center justify-center rounded-full text-white">
                                    {review.initials}
                                </div>
                                <div className="grid">
                                    <h5 className="font-bold text-gray-900 duration-300 group-hover:text-indigo-600">
                                        {review.name}
                                    </h5>
                                    <span className="text-sm leading-6 text-gray-500">{review.source}</span>
                                </div>
                            </div>

                            <div className="flex items-center mb-6 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                                {[...Array(review.stars)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-lg text-gray-500 leading-8 transition-all duration-500 group-hover:text-gray-800">
                                {review.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
