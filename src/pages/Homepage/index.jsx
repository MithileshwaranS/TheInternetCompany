import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import IntegratedCareSection from './IntegratedCareSection';
import FeaturesSection from './FeaturesSection';
import ModernLifeSection from './ModernLifeSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Experience continuous care that connects hormones, fertility, and long-term health. Root-cause focused treatment with integrated online and in-clinic care. Book your clarity call today."
        />
        <meta
          property="og:title"
          content="Integrated Reproductive & Long-Term Health Care | Joyzen Health System"
        />
        <meta
          property="og:description"
          content="Experience continuous care that connects hormones, fertility, and long-term health. Root-cause focused treatment with integrated online and in-clinic care. Book your clarity call today."
        />
      </Helmet>

      <main className="w-full bg-[#ffffff]">
        <HeroSection />
        <IntegratedCareSection />
        <FeaturesSection />
        <ModernLifeSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
};

export default Homepage;
