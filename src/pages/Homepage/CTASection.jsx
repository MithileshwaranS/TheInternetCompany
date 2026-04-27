import React from 'react';
import Button from '../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full relative">
      {/* Background layer — sits behind content, overflow hidden applied here only */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Base warm off-white */}
        <div className="absolute inset-0" style={{ background: '#fdfcfa' }} />

        {/* Light blue blob — bottom-left */}
        <div
          className="absolute -left-24 bottom-0 w-[55%] h-[75%]"
          style={{
            background:
              'radial-gradient(ellipse at 15% 85%, rgba(186,224,244,0.9) 0%, rgba(200,232,248,0.55) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Light lavender/pink blob — bottom-right */}
        <div
          className="absolute -right-16 bottom-0 w-[50%] h-[65%]"
          style={{
            background:
              'radial-gradient(ellipse at 85% 90%, rgba(224,205,238,0.9) 0%, rgba(212,190,230,0.55) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Centre-top bright fade */}
        <div
          className="absolute inset-x-0 top-0 h-2/3"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(255,253,250,1) 0%, transparent 65%)',
          }}
        />
      </div>
      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-[56px] py-[48px] sm:py-[72px] md:py-[100px] relative z-10">
        <div className="w-full max-w-[1328px] mx-auto">
          <div className="bg-[#ffffff0a] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] p-6 sm:p-10 md:p-[50px] lg:p-[90px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center">
              {/* Left Content */}
              <div className="flex-1 flex flex-col gap-5 sm:gap-6 md:gap-[24px]">
                <h2 className="text-[28px] sm:text-[38px] md:text-[50px] font-epilogue font-normal leading-[32px] sm:leading-[42px] md:leading-[52px] text-left text-[#000000]">
                  Book a clarity call
                </h2>
                <p className="text-[15px] sm:text-[17px] md:text-[20px] font-epilogue font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-left text-[#000000] w-full lg:w-[90%]">
                  If you would like to understand your reproductive health better or learn how
                  Joyzen can support your journey, you can schedule a conversation with our care
                  team.
                </p>
                <div>
                  <Button
                    text="Book Clarity Call"
                    text_font_size="13"
                    text_font_family="Satoshi"
                    text_font_weight="500"
                    text_line_height="18px"
                    text_text_align="left"
                    text_color="#000000"
                    fill_background_color="#ffffff0a"
                    border_border_radius="24px"
                    effect_box_shadow="0px 2px 20px #00000019"
                    layout_gap="8px"
                    padding="14px 32px 14px 22px"
                    layout_width="auto"
                    position="relative"
                    variant="default"
                    size="medium"
                    className=""
                    onClick={() => {}}
                    leftImage={null}
                    rightImage={{
                      src: '/images/img_interfaceshareuserhumanpersonsharesignaltransmituserstreamlinecore_black_900.svg',
                      width: 14,
                      height: 14,
                    }}
                  />
                </div>
              </div>

              {/* Right Content - Decorative Vectors (hidden on mobile) */}
              <div className="hidden lg:flex w-[32%] flex-col gap-[12px] items-start pl-8 xl:pl-[66px]">
                <div className="flex flex-col gap-[12px] items-center w-[74%]">
                  <img src="/images/img_vector.svg" alt="" className="w-[44px] h-[44px]" />
                  <img src="/images/img_vector_purple_100.svg" alt="" className="w-full h-auto" />
                  <img src="/images/img_vector_purple_100_36x132.svg" alt="" className="w-full h-auto" />
                </div>
                <div className="ml-[42px]">
                  <img src="/images/img_vector.svg" alt="" className="w-[44px] h-[44px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
