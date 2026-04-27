import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About', active: true },
    { label: 'Programs', active: false },
    { label: "Who It's For", active: false },
    { label: 'Products', active: false },
  ];

  return (
    <header className="w-full bg-transparent relative z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[56px]">
        {/* Top bar */}
        <div className="flex flex-row justify-between items-center py-5 sm:py-7 md:py-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/img_header_logo.svg"
              alt="Joyzen Health System Logo"
              className="w-[110px] sm:w-[130px] md:w-[152px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center gap-[20px] xl:gap-[24px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                role="menuitem"
                className={`
                  text-[15px] lg:text-[16px] font-[500] leading-[22px] text-center text-[#ffffff]
                  font-['Satoshi',sans-serif] transition-all duration-200 hover:opacity-80
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded-[20px]
                  min-w-[80px] h-[40px] inline-flex items-center justify-center px-[14px]
                  ${item.active ? 'glass-card glass-card--active' : 'glass-card'}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <div className="glass-card shadow-lg w-[180px] h-[50px] rounded-[999px] flex items-center justify-center px-[12px]">
              <Button
                text="Book Clarity Call"
                text_font_size="16"
                text_font_family="Satoshi"
                text_font_weight="500"
                text_line_height="22px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="transparent"
                border_border_radius="20px"
                effect_box_shadow="none"
                layout_gap="12px"
                padding="0"
                layout_width="100%"
                position="relative"
                variant="default"
                size="md"
                onClick={() => {}}
                leftImage={null}
                rightImage={{
                  src: '/images/img_interfaceshareuserhumanpersonsharesignaltransmituserstreamlinecore.svg',
                  width: 18,
                  height: 18,
                }}
                className="w-full h-full whitespace-nowrap flex items-center justify-center gap-3"
              />
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden p-2 text-white focus:outline-none rounded-[10px] transition-all duration-200 hover:opacity-80"
            style={{
              background: menuOpen ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = menuOpen ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)'; }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className="lg:hidden absolute left-0 right-0 top-full z-50 mx-4 sm:mx-6 mb-4 rounded-[20px] overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.35)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            <nav className="flex flex-col p-4 gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className={`
                    w-full h-[40px] flex items-center px-[14px]
                    text-[15px] font-[500] leading-[22px] text-[#ffffff]
                    font-['Satoshi',sans-serif] transition-all duration-200 hover:opacity-80
                    focus:outline-none
                    ${item.active ? 'glass-card glass-card--active' : 'glass-card'}
                  `}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="mt-2 pt-3 border-t border-white/25">
                <button
                  className="w-full h-[46px] rounded-[999px] flex items-center justify-center gap-2
                    text-[15px] font-[500] text-white font-['Satoshi',sans-serif]
                    transition-all duration-200
                    hover:bg-white/25"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  }}
                  onClick={() => {}}
                >
                  Book Clarity Call
                  <img src="/images/img_interfaceshareuserhumanpersonsharesignaltransmituserstreamlinecore.svg" width={16} height={16} alt="" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
