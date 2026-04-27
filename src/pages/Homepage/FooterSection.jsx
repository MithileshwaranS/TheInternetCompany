import React from 'react';

const FooterSection = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img_copy_of_icy_blue_1.png')" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-[56px] py-8 sm:py-10 md:py-12 flex flex-col min-h-[240px] sm:min-h-[320px] md:min-h-[400px] justify-between">
        <div className="w-full max-w-[1340px] mx-auto flex flex-col flex-1 justify-between gap-8 sm:gap-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-10 justify-start sm:justify-end items-start sm:items-center">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-epilogue font-medium leading-[15px] text-[#000000]">
              Email: info@joyzenlife.com
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-epilogue font-medium leading-[15px] text-[#000000]">
              Instagram: @joyzen.in
            </p>
          </div>

          {/* Copyright Information */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center pt-4 sm:pt-0">
            <p className="text-[11px] sm:text-[12px] md:text-[14px] font-satoshi font-medium leading-[16px] sm:leading-[19px] text-[#000000]">
              2026 Joyzen. Built for healthcare. Designed for trust.
            </p>
            <p className="text-[11px] sm:text-[12px] md:text-[14px] font-satoshi font-medium leading-[16px] sm:leading-[19px] text-[#000000]">
              Designed and Developed by TIC Global Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
