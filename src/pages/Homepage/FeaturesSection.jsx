import React from 'react';

const features = [
  {
    title: 'Beyond Visits',
    desc: 'Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.',
  },
  {
    title: 'Focused on Root, Not Symptoms',
    desc: 'Hormones, lifestyle, fertility, long-term health — everything connected, everything managed.',
  },
  {
    title: 'Integrated Care',
    desc: 'Doctors, lifestyle, and emotional support, working together as one system.',
  },
  {
    title: 'Designed for Better Outcomes',
    desc: 'Not more visits, not more confusion. Clear direction. Continuous support. Real results.',
  },
];

const FeaturesSection = () => {
  const glassTile =
    'relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] bg-white/[0.08] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.20),inset_0_0_16px_rgba(20,28,42,0.10)] transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.26),inset_0_0_20px_rgba(20,28,42,0.12)] before:content-[\'\'] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%)] before:opacity-35 after:content-[\'\'] after:absolute after:inset-[1px] after:rounded-[inherit] after:pointer-events-none after:shadow-[inset_0_0_10px_rgba(28,36,58,0.08)]';

  return (
    <section className="w-full relative overflow-hidden isolate bg-[#f2f2f2]">

      {/* Background blobs — spread across full section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#efeff0] via-[#f3f3f1] to-[#f2f0ed]" />

        {/* Top-left blue */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] rounded-full bg-[rgba(157,210,239,0.55)] blur-[80px] sm:blur-[100px] md:blur-[130px]" />
        {/* Top-right purple */}
        <div className="absolute -top-16 -right-16 w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-full bg-[rgba(214,190,233,0.5)] blur-[70px] sm:blur-[90px] md:blur-[110px]" />
        {/* Centre orange band */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[47%] -translate-x-1/2 w-[140%] h-[180px] sm:h-[220px] md:h-[280px] bg-[rgba(241,146,92,0.45)] blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        {/* Bottom-left blue */}
        <div className="absolute -bottom-16 -left-16 w-[360px] h-[260px] sm:w-[560px] sm:h-[380px] md:w-[780px] md:h-[520px] rounded-full bg-[rgba(157,210,239,0.5)] blur-[80px] sm:blur-[100px] md:blur-[130px]" />
        {/* Bottom-right purple */}
        <div className="absolute -bottom-16 -right-20 w-[240px] h-[180px] sm:w-[360px] sm:h-[260px] md:w-[520px] md:h-[360px] rounded-full bg-[rgba(214,190,233,0.55)] blur-[60px] sm:blur-[80px] md:blur-[100px]" />
        {/* Bottom-right yellow accent */}
        <div className="absolute -bottom-8 -right-8 w-[100px] h-[80px] sm:w-[160px] sm:h-[110px] md:w-[240px] md:h-[160px] rounded-full bg-[rgba(245,229,123,0.7)] blur-[32px] sm:blur-[44px] md:blur-[58px]" />
      </div>

      {/* Top fade — blends seamlessly from IntegratedCareSection */}
      <div
        className="absolute top-0 left-0 w-full h-[160px] sm:h-[200px] md:h-[260px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(242,242,242,1) 0%, rgba(242,242,242,0.8) 30%, rgba(242,242,242,0.3) 65%, rgba(242,242,242,0) 100%)' }}
      />

      {/* Wave Transition Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[75px] md:h-[100px] -mb-[25px] sm:-mb-[37px] md:-mb-[50px] z-20">
        <img src="/images/img_frame_2147260714.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ── MOBILE LAYOUT (below sm) ── */}
      <div className="sm:hidden relative z-10 w-full px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/images/img_copy_of_carbon_black.svg" alt="Joyzen" className="w-[120px] h-auto" />
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-3 mb-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex gap-4 items-start px-4 py-4 rounded-[14px] cursor-default transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.22)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)',
                transition: 'background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.42)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Number badge */}
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-[600] text-[#000000] mt-[2px]"
                style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.6)' }}
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-satoshi font-[600] leading-[22px] text-[#000000]">
                  {f.title}
                </h3>
                <p className="text-[13px] font-satoshi font-normal leading-[18px] text-[#000000]/80">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Images stacked */}
        <div className="flex flex-col gap-3">
          <div className={`${glassTile}`}>
            <img src="/images/img_nurse_showing_m.png" alt="Healthcare professional" className="w-full h-[180px] object-cover" />
          </div>
          <div className={`${glassTile}`}>
            <img src="/images/img_young_woman_doctor_s_office.png" alt="Doctor consultation" className="w-full h-[180px] object-cover" />
          </div>
        </div>
      </div>

      {/* ── TABLET + DESKTOP LAYOUT (sm and above) ── */}
      <div className="hidden sm:block relative z-10 w-full px-8 lg:px-[56px] py-[52px] md:py-[104px]">
        <div className="w-full max-w-[1328px] mx-auto">

          {/* Tablet logo */}
          <div className="flex justify-center mb-6 lg:hidden">
            <img src="/images/img_copy_of_carbon_black.svg" alt="Joyzen" className="w-[155px] h-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[20px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-5 md:gap-[20px]">
              <div className={`${glassTile} p-7 md:p-[30px] flex flex-col gap-[2px] min-h-[280px] md:min-h-[350px] justify-end`}>
                <h3 className="text-[22px] md:text-[28px] font-satoshi font-medium leading-[30px] md:leading-[38px] text-left text-[#000000]">
                  Beyond Visits
                </h3>
                <p className="text-[15px] md:text-[18px] font-satoshi font-normal leading-[19px] md:leading-[20px] text-left text-[#000000]">
                  Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.
                </p>
              </div>
              <div className={`${glassTile} p-7 md:p-[30px] flex flex-col gap-[12px] md:gap-[14px] min-h-[280px] md:min-h-[350px] justify-end`}>
                <h3 className="text-[22px] md:text-[28px] font-satoshi font-medium leading-[27px] md:leading-[30px] text-left text-[#000000]">
                  Focused on Root, Not Symptoms
                </h3>
                <p className="text-[15px] md:text-[18px] font-satoshi font-normal leading-[19px] md:leading-[20px] text-left text-[#000000]">
                  Hormones, lifestyle, fertility, long-term health, everything connected, everything managed.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:gap-[50px]">
              <div className={`${glassTile} p-7 md:p-[30px] flex flex-col gap-[2px] min-h-[280px] md:min-h-[330px] justify-end`}>
                <h3 className="text-[22px] md:text-[28px] font-satoshi font-medium leading-[30px] md:leading-[38px] text-left text-[#000000]">
                  Integrated Care
                </h3>
                <p className="text-[15px] md:text-[18px] font-satoshi font-normal leading-[19px] md:leading-[20px] text-left text-[#000000]">
                  Doctors, lifestyle, and emotional support, working together as one system.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-[36px]">
                <div className="hidden lg:flex justify-center">
                  <img src="/images/img_copy_of_carbon_black.svg" alt="Joyzen" className="w-[175px] md:w-[200px] h-auto" />
                </div>
                <div className={`${glassTile}`}>
                  <img src="/images/img_nurse_showing_m.png" alt="Healthcare professional" className="w-full h-[220px] md:h-[280px] object-cover" />
                </div>
              </div>
            </div>

            {/* Column 3 — spans 2 cols on tablet */}
            <div className="flex flex-col gap-5 md:gap-[20px] col-span-2 lg:col-span-1">
              <div className={`${glassTile}`}>
                <img src="/images/img_young_woman_doctor_s_office.png" alt="Doctor consultation" className="w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover" />
              </div>
              <div className={`${glassTile} p-7 md:p-[30px] flex flex-col gap-[12px] md:gap-[14px] min-h-[180px] md:min-h-[350px] justify-end`}>
                <h3 className="text-[22px] md:text-[28px] font-satoshi font-medium leading-[27px] md:leading-[30px] text-left text-[#000000]">
                  Designed for Better Outcomes
                </h3>
                <p className="text-[15px] md:text-[18px] font-satoshi font-normal leading-[19px] md:leading-[20px] text-left text-[#000000]">
                  Not more visits, Not more confusion. Clear direction. Continuous support. Real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[140px] sm:h-[180px] md:h-[220px] pointer-events-none z-30"
        style={{ background: 'linear-gradient(to bottom, rgba(242,242,240,0) 0%, rgba(242,242,240,0.5) 40%, rgba(242,242,240,0.85) 70%, rgba(242,242,240,1) 100%)' }}
      />
    </section>
  );
};

export default FeaturesSection;
