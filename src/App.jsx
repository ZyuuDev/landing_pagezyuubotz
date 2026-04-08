import React, { useState } from 'react';
import Preview from './components/Preview';
import Customizer from './components/Customizer';
import { Settings, X } from 'lucide-react';

const DEFAULT_STATE = {
  // Layout
  paddingTop: 64,
  maxWidth: 450,
  buttonGap: 16,
  
  // Avatar
  avatarSize: 110,
  avatarRadius: 24, // 24px per Kayzai
  
  // Typography
  fontFamily: 'Sora',
  nameSize: 24,
  bioSize: 14,
  
  // Button Style
  buttonRadius: 32, // 2rem
  buttonHeight: 70,
  
  // Colors
  accentColor: '#3b82f6', 
};

function App() {
  const [config, setConfig] = useState(DEFAULT_STATE);
  const [showCustomizer, setShowCustomizer] = useState(false);

  const resetConfig = () => setConfig(DEFAULT_STATE);
  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen relative font-sans antialiased text-white" style={{ fontFamily: `'${config.fontFamily}', sans-serif` }}>
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
      >
        <source src="https://files.catbox.moe/mzii9z.mp4" type="video/mp4" />
      </video>

      {/* Scrollable Container */}
      <div className="w-full flex justify-center relative min-h-screen z-0 pb-24">
        <Preview config={config} />
      </div>

      {/* FAB for Customizer */}
      <button 
        onClick={() => setShowCustomizer(!showCustomizer)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white shadow-xl hover:bg-black/60 transition-all hover:scale-105 active:scale-95"
      >
        {showCustomizer ? <X size={24} /> : <Settings size={24} />}
      </button>

      {/* Customizer Overlay Panel */}
      {showCustomizer && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden" 
            onClick={() => setShowCustomizer(false)}
          />
      )}
      <div 
        className={`fixed inset-y-0 right-0 w-[400px] max-w-[90vw] bg-[#020617]/90 backdrop-blur-2xl border-l border-white/10 p-6 overflow-y-auto z-40 shadow-2xl transition-transform duration-300 transform ${showCustomizer ? 'translate-x-0' : 'translate-x-[102%]'}`}
      >
        <div className="mt-8 mb-6 pb-2 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Live Customizer</h2>
            <p className="text-sm text-white/50">Sesuaikan tampilan landing page</p>
        </div>
        <Customizer config={config} updateConfig={updateConfig} resetConfig={resetConfig} />
      </div>

    </div>
  );
}

export default App;
