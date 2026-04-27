import React from 'react';
import Header from '../../components/common/Header';

const HeroSection = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/img_image_25.png')",
      }}
    >
      {/* Section fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[140px] sm:h-[180px] md:h-[220px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(242,242,242,0) 0%, rgba(242,242,242,0.5) 40%, rgba(242,242,242,0.85) 70%, rgba(242,242,242,1) 100%)' }}
      />

      {/* Header and Hero Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 pb-[120px] sm:pb-[140px] md:pb-[164px]">
        <div className="w-full max-w-[1340px] mx-auto flex flex-col gap-[267px] sm:gap-[400px] md:gap-[534px]">
          {/* Header */}
          <Header />

          {/* Hero Content */}
          <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px]">
            <h1 className="text-[30px] sm:text-[45px] md:text-[60px] font-epilogue font-normal leading-[32px] sm:leading-[47px] md:leading-[62px] text-left text-[#ffffff]">
              A New Health System
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-epilogue font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] text-left text-[#ffffff] w-full md:w-[78%]">
              Joyzen is not a clinic.
              <br />
              It is a new way of delivering reproductive healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
