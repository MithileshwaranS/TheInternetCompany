import React from 'react';

const ModernLifeSection = () => {
  return (
    <section className="w-full relative overflow-hidden isolate bg-[#f2f2f0]">
      {/* Tailwind-only responsive background recreation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f0] via-[#f3f3f1] to-[#efeeef]" />
        <div className="absolute -top-14 -left-14 sm:-top-20 sm:-left-20 md:-top-24 md:-left-24 w-[140px] h-[140px] sm:w-[210px] sm:h-[210px] md:w-[280px] md:h-[280px] rounded-full bg-[rgba(154,214,240,0.14)] blur-[34px] sm:blur-[44px] md:blur-[54px]" />
        <div className="absolute -top-12 -right-10 sm:-top-16 sm:-right-14 md:-top-20 md:-right-18 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[310px] md:h-[310px] rounded-full bg-[rgba(219,208,240,0.22)] blur-[38px] sm:blur-[50px] md:blur-[60px]" />
        <div className="absolute -bottom-8 -left-10 sm:-bottom-12 sm:-left-14 md:-bottom-16 md:-left-18 w-[160px] h-[190px] sm:w-[250px] sm:h-[300px] md:w-[340px] md:h-[400px] rounded-full bg-[rgba(137,198,235,0.40)] blur-[40px] sm:blur-[54px] md:blur-[66px]" />
        <div className="absolute -bottom-14 left-[56%] -translate-x-1/2 sm:-bottom-18 md:-bottom-22 w-[108%] h-[150px] sm:h-[220px] md:h-[280px] bg-[rgba(112,160,122,0.30)] blur-[44px] sm:blur-[60px] md:blur-[76px]" />
        <div className="absolute -bottom-12 right-0 sm:-bottom-16 md:-bottom-20 w-[190px] h-[120px] sm:w-[300px] sm:h-[190px] md:w-[410px] md:h-[250px] rounded-full bg-[rgba(46,130,68,0.36)] blur-[42px] sm:blur-[56px] md:blur-[72px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[56px] py-[58px] sm:py-[87px] md:py-[116px]">
        <div className="w-full max-w-[1328px] mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col gap-5 sm:gap-6 md:gap-[26px] items-center">
              {/* Heading */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full">
                <h2 className="text-[32px] sm:text-[41px] md:text-[50px] font-epilogue leading-[34px] sm:leading-[43px] md:leading-[52px] text-center text-black">
                  Built for
                </h2>

                <h2 className="text-[48px] sm:text-[64px] md:text-[80px] font-epilogue leading-[50px] sm:leading-[66px] md:leading-[82px] text-center text-black">
                  Modern Life
                </h2>
              </div>

              {/* Circular Image */}
              <div className="bg-[#ffffff0a] rounded-full shadow-[0px_2px_20px_rgba(0,0,0,0.1)] w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px] overflow-hidden flex-shrink-0">
                <img
                  src="/images/img_image_11.png"
                  alt="Modern healthcare"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] items-center w-full">
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-satoshi font-medium leading-[28px] sm:leading-[33px] md:leading-[38px] text-center text-[#000000]">
                  Focused on Root, Not Symptoms
                </h3>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-epilogue font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#000000]">
                  Joyzen was built on a simple realization: life has changed, but healthcare has not
                  kept up. Care still begins too late, Joyzen enables earlier understanding,
                  proactive care, and continuous guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[140px] sm:h-[180px] md:h-[220px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(253,252,250,0) 0%, rgba(253,252,250,0.5) 40%, rgba(253,252,250,0.85) 70%, rgba(253,252,250,1) 100%)' }}
      />
    </section>
  );
};

export default ModernLifeSection;
