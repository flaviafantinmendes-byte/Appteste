import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#0a0e17]/95 backdrop-blur-xl border-t border-[#223354] shadow-[0_-4px_24px_rgba(0,0,0,0.8)]">
      <div className="flex justify-around items-center h-20 px-2 max-w-lg mx-auto">
        {/* Início */}
        <button
          onClick={() => onNavigate('inicio')}
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-all cursor-pointer ${
            currentTab === 'inicio' ? 'text-[#fca311] font-bold' : 'text-[#a0aec0] hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={currentTab === 'inicio' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            home
          </span>
          <span className="text-[11px] font-semibold tracking-tight">Início</span>
        </button>

        {/* Explorar */}
        <button
          onClick={() => onNavigate('explorar')}
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-all cursor-pointer ${
            currentTab === 'explorar' ? 'text-[#fca311] font-bold' : 'text-[#a0aec0] hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={currentTab === 'explorar' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            explore
          </span>
          <span className="text-[11px] font-semibold tracking-tight">Explorar</span>
        </button>

        {/* Estúdio (Hero Center Button) */}
        <button
          onClick={() => onNavigate('estudio')}
          className="flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-all cursor-pointer group"
        >
          <div
            className={`w-12 h-12 -mt-5 rounded-full flex items-center justify-center border-2 transition-transform active:scale-95 ${
              currentTab === 'estudio'
                ? 'bg-[#fca311] text-[#000000] border-[#0a0e17] shadow-[0_6px_20px_rgba(252,163,17,0.5)]'
                : 'bg-[#14213d] text-[#fca311] border-[#fca311] hover:bg-[#1a294b] shadow-[0_4px_14px_rgba(252,163,17,0.25)]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              draw
            </span>
          </div>
          <span
            className={`text-[11px] font-bold tracking-tight ${
              currentTab === 'estudio' ? 'text-[#fca311]' : 'text-[#a0aec0] group-hover:text-white'
            }`}
          >
            Estúdio
          </span>
        </button>

        {/* Perfil */}
        <button
          onClick={() => onNavigate('perfil')}
          className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] transition-all cursor-pointer ${
            currentTab === 'perfil' ? 'text-[#fca311] font-bold' : 'text-[#a0aec0] hover:text-white'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={currentTab === 'perfil' ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            person
          </span>
          <span className="text-[11px] font-semibold tracking-tight">Perfil</span>
        </button>
      </div>
    </nav>
  );
};
