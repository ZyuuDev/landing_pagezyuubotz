import React from 'react';
import { ChevronRight, BadgeCheck } from 'lucide-react';

const LINKS = [
  {
    id: 'grup',
    title: 'Group WhatsApp 2',
    description: 'Klik untuk menggunakan dengan free!',
    iconUrl: 'https://i.ibb.co.com/DXd8RV7/download-4.jpg', // Example placeholder URL
    url: 'https://chat.whatsapp.com/BTAFUuAv8IrIaYWsoD5Xuo?mode=gi_t'
  },
  {
    id: 'group',
    title: 'Group WhatsApp 1',
    description: 'Klik untuk menggunakan dengan free!',
    iconUrl: 'https://i.ibb.co.com/spGDV6yS/image.jpg',
    url: 'https://chat.whatsapp.com/KgH1zizpZ1nDMAP77wndnt'
  },
  {
    id: 'channel',
    title: 'Channel WhatsApp',
    description: 'Promo & Pengumuman Update Penting',
    iconUrl: 'https://i.ibb.co.com/KchxYvHW/cartethyia.jpg',
    url: 'https://whatsapp.com/channel/0029Va9P8Na0G0XrAsdx020M'
  },
  {
    id: 'nomor',
    title: 'Nomor Owner',
    description: 'Untuk pertanyaan dan pembelian.',
    iconUrl: 'https://i.ibb.co.com/DfbxmXsy/Cartethyia-icon-Wuthering-Waves.jpg',
    url: 'https://wa.me/6281249368080'
  }
];

export default function Preview({ config }) {
  const containerStyle = {
    paddingTop: `${config.paddingTop}px`,
    maxWidth: `${config.maxWidth}px`,
    width: '100%',
    paddingLeft: '19px',
    paddingRight: '19px',
  };

  const avatarContainerStyle = {
    width: `${config.avatarSize}px`,
    height: `${config.avatarSize}px`,
    borderRadius: `${config.avatarRadius}px`,
  };

  const buttonStyle = {
    borderRadius: `${config.buttonRadius}px`,
    minHeight: `${config.buttonHeight}px`,
  };

  return (
    <div style={containerStyle} className="mx-auto flex flex-col items-center">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 w-full">
        <div 
          style={avatarContainerStyle} 
          className="relative p-[3px] mb-4 group overflow-visible"
        >
          {/* Glowing Animated Border from index.css */}
          <div 
            className="absolute inset-0 animate-gradient-border opacity-80 blur-md transition-opacity group-hover:opacity-100"
            style={{ borderRadius: `${config.avatarRadius + 2}px` }}
          />
          <div 
            className="absolute inset-0 animate-gradient-border"
            style={{ borderRadius: `${config.avatarRadius + 2}px` }}
          />
          {/* Avatar Image */}
          <img 
            src="https://files.catbox.moe/aa20gd.jpg" 
            alt="Bot Avatar" 
            className="relative w-full h-full object-cover z-10"
            style={{ borderRadius: `${config.avatarRadius}px` }}
          />
        </div>
        
        {/* Name and Verified Badge */}
        <h1 
          className="font-bold flex justify-center items-center gap-1.5 tracking-tight text-white mb-1 text-shadow-sm"
          style={{ fontSize: `${config.nameSize}px` }}
        >
          ZyuuBotz WhatsApp
          <BadgeCheck className="text-blue-500 fill-white" size={24} />
        </h1>
        
        {/* Tagline */}
        <p className="text-center font-medium text-white mb-2 text-shadow-sm">
          ⚡ Bot WhatsApp Cerdas & Fast Respon
        </p>

        {/* Details / Bio */}
        <div 
          className="flex flex-wrap justify-center items-center text-white/70 gap-x-2 text-shadow-sm"
          style={{ fontSize: `${config.bioSize}px` }}
        >
          <span>Auto-reply</span>
          <span>&bull;</span>
          <span>Order System</span>
          <span>&bull;</span>
          <span>24/7 Siaga</span>
        </div>
      </div>

      {/* Link List - VC-Cards */}
      <div 
        className="w-full flex flex-col"
        style={{ gap: `${config.buttonGap}px` }}
      >
        {LINKS.map(link => (
          <a
            key={link.id}
            href={link.url}
            style={buttonStyle}
            className="glass relative w-full flex items-center p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group"
          >
            {/* Left Thumbnail */}
            <div className="w-[50px] h-[50px] mr-4 shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-sm relative">
                <img 
                    src={link.iconUrl} 
                    alt={link.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            
            {/* Center Text */}
            <div className="flex flex-col flex-1 text-left overflow-hidden">
              <span className="font-bold text-white tracking-wide text-sm uppercase truncate text-shadow-sm">
                {link.title}
              </span>
              {link.description && (
                <span className="text-white/60 text-xs mt-0.5 truncate text-shadow-sm">
                  {link.description}
                </span>
              )}
            </div>

            {/* Right Action Button */}
            <div className="ml-3 shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white/80 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <ChevronRight size={18} strokeWidth={2.5} />
            </div>
          </a>
        ))}
      </div>
      
      {/* Footer Branding */}
      <div className="mt-12 opacity-50 flex items-center text-xs pb-8 text-shadow-sm">
        <span>Powered by</span>
        <span className="ml-1 font-bold tracking-widest text-[#3b82f6]">ZyuuDev</span>
      </div>
    </div>
  );
}
