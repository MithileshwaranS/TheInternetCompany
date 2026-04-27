import React from 'react';

const IntegratedCareSection = () => {
  return (
    <section className="w-full relative overflow-hidden isolate bg-[#f2f2f2]">
      {/* Tailwind-only responsive blurred blob background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8e6] via-[#f2f2f2f2] to-[#f0f0eceb]" />
        <div className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 md:-bottom-24 md:-left-24 w-[210px] h-[140px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-full bg-[rgba(255,170,120,0.42)] blur-[55px] sm:blur-[65px] md:blur-[78px]" />
        <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 md:-bottom-24 md:-right-24 w-[210px] h-[140px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-full bg-[rgba(255,235,140,0.40)] blur-[55px] sm:blur-[65px] md:blur-[78px]" />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 sm:-bottom-16 md:-bottom-20 w-[260px] h-[150px] sm:w-[380px] sm:h-[220px] md:w-[540px] md:h-[300px] rounded-full bg-[rgba(255,255,255,0.50)] blur-[50px] sm:blur-[60px] md:blur-[72px]" />
      </div>

      {/* Wave Transition Bottom */}

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-[56px] py-[129px] sm:py-[193px] md:py-[258px]">
        <div className="w-full max-w-[1120px] mx-auto">
          <p className="text-[24px] sm:text-[32px] md:text-[40px] font-satoshi font-medium leading-[28px] sm:leading-[38px] md:leading-[52px] text-center tracking-[-0.01em]">
            <span className="text-[#ef8f60]">Joyzen</span>
            <span className="text-[#000000]">
              {' '}
              replaces fragmented care with a continuous system where hormones, fertility, and
              long-term health are managed together. Online or in clinic, it is the same person
              guiding your care. Tracking your progress.{' '}
            </span>
            <span className="text-[#a6a6a6]">
              Adjusting your treatment. Moving you forward. Joyzen connects you to the right doctor
              and keeps your care continuous across every step. Always accessible speak to your
              doctor anytime not just during appointment.
            </span>
          </p>
        </div>
      </div>

      {/* Section fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[220px] md:h-[280px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(242,242,242,0) 0%, rgba(242,242,242,0.35) 30%, rgba(242,242,242,0.75) 60%, rgba(242,242,242,1) 100%)' }}
      />
    </section>
  );
};

export default IntegratedCareSection;
