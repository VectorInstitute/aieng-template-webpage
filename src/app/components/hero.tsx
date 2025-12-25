'use client';

import React, { memo } from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] pt-20 md:pt-[100px]"
         style={{
           background: 'linear-gradient(to right, #EB088A, #313CFF)'
         }}>
      <div className="max-w-[1200px] mx-auto h-full relative z-10 px-4">
        <div className="flex flex-col gap-6 items-center md:items-start justify-center h-full max-w-full md:max-w-[60%] lg:max-w-[50%] text-center md:text-left py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold font-['Karbon','Open_Sans',sans-serif]">
            Where AI possibilities come to life
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white font-['Open_Sans',sans-serif]">
            Remarkable in progress.
          </p>
        </div>
      </div>
      <div
        className="absolute top-[60%] md:top-[40%] -right-[20%] md:-right-[5%] w-[120%] md:w-[70%] h-full md:h-[140%] bg-white rounded-tl-[30%] md:rounded-tl-[50%] rotate-[-5deg] md:rotate-[-10deg] shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
      />
    </div>
  )
}

export default memo(Hero);
