'use client';

import React, { memo } from 'react';
import Header from '../components/header';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative overflow-hidden min-h-[calc(100vh-80px)] pt-20 md:pt-[100px]"
        style={{
          background: 'linear-gradient(to right, #EB088A, #313CFF)'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 relative z-10 py-12">
          <div className="flex flex-col gap-8 items-center text-white text-center">
            <h1 className="text-4xl font-semibold font-['Karbon','Open_Sans',sans-serif]">
              About the template
            </h1>
            <p className="text-xl max-w-[800px] font-['Open_Sans',sans-serif]">
              This template is a starting point for building a website with Next.js and Tailwind CSS, following the Vector Institute brand guidelines.
            </p>
            <div className="flex gap-8 items-center flex-wrap justify-center">
              <a href="https://vectorinstitute.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${basePath}/images/vector-logo.png`}
                  alt="Vector Institute"
                  className="w-[150px] h-10 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[60%] md:top-[40%] -right-[20%] md:-right-[5%] w-[120%] md:w-[70%] h-full md:h-[140%] bg-white rounded-tl-[30%] md:rounded-tl-[50%] rotate-[-5deg] md:rotate-[-10deg] shadow-[0_-4px_30px_rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
}

export default memo(About);
