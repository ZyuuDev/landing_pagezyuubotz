import React from 'react';
import { Settings, RefreshCw, Layout, UserCircle, Type, Square, Palette } from 'lucide-react';

export default function Customizer({ config, updateConfig, resetConfig }) {
  // Helper component for sliders
  const Slider = ({ label, value, min, max, onChange, unit = 'px' }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-white/90">{label}</label>
        <span className="text-xs text-white/50">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
          <Settings size={20} className="text-blue-400" />
          Kustomisasi
        </h2>
        <button 
          onClick={resetConfig}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors flex items-center gap-1 text-xs text-white/70"
          title="Reset ke Default"
        >
          <RefreshCw size={14} /> Reset
        </button>
      </div>

      {/* Tata Letak */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3 flex items-center gap-2">
          <Layout size={16} /> Tata Letak
        </h3>
        <div className="glass p-4 rounded-xl border border-white/5">
          <Slider label="Padding Atas" value={config.paddingTop} min={0} max={150} onChange={(v) => updateConfig('paddingTop', v)} />
          <Slider label="Max Width Konten" value={config.maxWidth} min={300} max={800} onChange={(v) => updateConfig('maxWidth', v)} />
          <Slider label="Gap Antar Button" value={config.buttonGap} min={0} max={40} onChange={(v) => updateConfig('buttonGap', v)} />
        </div>
      </section>

      {/* Avatar */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3 flex items-center gap-2">
          <UserCircle size={16} /> Profil / Avatar
        </h3>
        <div className="glass p-4 rounded-xl border border-white/5">
          <Slider label="Ukuran Avatar" value={config.avatarSize} min={50} max={200} onChange={(v) => updateConfig('avatarSize', v)} />
          <Slider label="Border Radius" value={config.avatarRadius} min={0} max={50} unit="%" onChange={(v) => updateConfig('avatarRadius', v)} />
        </div>
      </section>

      {/* Tipografi */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3 flex items-center gap-2">
          <Type size={16} /> Tipografi
        </h3>
        <div className="glass p-4 rounded-xl border border-white/5 space-y-4">
          <div>
            <label className="text-sm font-medium text-white/90 block mb-1">Font Family</label>
            <select 
              value={config.fontFamily}
              onChange={(e) => updateConfig('fontFamily', e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Inter">Inter</option>
              <option value="Poppins">Poppins</option>
              <option value="Sora">Sora</option>
            </select>
          </div>
          <Slider label="Ukuran Nama" value={config.nameSize} min={16} max={48} onChange={(v) => updateConfig('nameSize', v)} />
          <Slider label="Ukuran Bio" value={config.bioSize} min={10} max={24} onChange={(v) => updateConfig('bioSize', v)} />
        </div>
      </section>

      {/* Button Style */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3 flex items-center gap-2">
          <Square size={16} /> Gaya Tombol (Link)
        </h3>
        <div className="glass p-4 rounded-xl border border-white/5">
          <Slider label="Border Radius" value={config.buttonRadius} min={0} max={40} onChange={(v) => updateConfig('buttonRadius', v)} />
          <Slider label="Min Height" value={config.buttonHeight} min={40} max={100} onChange={(v) => updateConfig('buttonHeight', v)} />
        </div>
      </section>

      {/* Warna */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3 flex items-center gap-2">
          <Palette size={16} /> Warna Aksen
        </h3>
        <div className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4">
          <input 
            type="color" 
            value={config.accentColor}
            onChange={(e) => updateConfig('accentColor', e.target.value)}
            className="w-12 h-12 rounded cursor-pointer bg-transparent border-0 p-0"
          />
          <div className="flex-1 text-sm text-white/70">
            Pilih warna utama untuk background button link.
            <div className="mt-1 font-mono text-xs">{config.accentColor}</div>
          </div>
        </div>
      </section>

    </div>
  );
}
