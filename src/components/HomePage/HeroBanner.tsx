import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/pngwing 1 (1).png';

const HeroBanner = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#f5f7f5] via-[#f1f5f0] to-[#e8f5e5] px-6 py-12 sm:px-10 md:px-16 lg:px-24 lg:py-16">
          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#23be0a]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#23be0a]/5 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
            {/* Content */}
            <div className="max-w-xl text-center md:text-left">
              <span className="mb-4 inline-block rounded-full bg-[#23be0a]/10 px-4 py-2 text-sm font-semibold text-[#23be0a]">
                Discover Your Next Read
              </span>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#131313] sm:text-5xl lg:text-[52px]">
                Books to freshen up your{' '}
                <span className="text-[#23be0a]">bookshelf.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                Explore handpicked books, discover new stories, and find
                something worth adding to your collection.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <button className="h-12 cursor-pointer rounded-lg bg-[#23be0a] px-7 text-sm font-bold text-white shadow-lg shadow-[#23be0a]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1da808] hover:shadow-xl">
                  View The List
                </button>

                <button className="h-12 rounded-lg border cursor-pointer border-gray-200 bg-white/70 px-7 text-sm font-semibold text-[#131313] backdrop-blur-sm transition-all duration-300 hover:border-[#23be0a] hover:text-[#23be0a]">
                  Explore Books
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex shrink-0 items-end justify-center">
              <div className="absolute bottom-0 h-52 w-52 rounded-full bg-[#23be0a]/10 blur-2xl" />

              <Image
                src={heroImage}
                alt="Featured books"
                width={318}
                height={394}
                priority
                className="relative z-10 w-55 object-contain drop-shadow-2xl sm:w-65 lg:w-72.35"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
