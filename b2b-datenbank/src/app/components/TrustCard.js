import React from "react";

export default function TrustCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-[0_4px_16px_rgba(17,17,26,0.05),_0_8px_32px_rgba(17,17,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl sm:px-10">
      <span className="absolute top-10 z-0 h-16 w-16 rounded-full bg-primary transition-all duration-300 group-hover:scale-[20]"></span>
      <div className="relative z-10">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">
          <Icon className="h-8 w-8 text-white transition-all group-hover:text-gray-600" />
        </span>
        <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
          <h3 className="text-lg text-primary-dark font-semibold group-hover:text-white">
            {title}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
