import Books from '@/components/HomePage/Books';
import CTA from '@/components/HomePage/CTA';
import HeroBanner from '@/components/HomePage/HeroBanner';
import React from 'react';

const home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Books></Books>
      <CTA></CTA>
    </div>
  );
};

export default home;
