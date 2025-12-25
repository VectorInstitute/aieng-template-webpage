'use client';

import React, { memo, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NavLinks: React.FC = memo(() => (
  <NextLink href="/about" className="text-white font-semibold font-['Open_Sans',sans-serif] hover:opacity-80 transition-opacity">
    About
  </NextLink>
));

NavLinks.displayName = 'NavLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div
            className="w-[120px] md:w-[150px] h-10 relative cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={`${basePath}/images/vector-logo.png`}
              alt="Vector Institute"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
