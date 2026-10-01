import React from 'react';
import { APP_ASSETS } from '../data/mockData';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  titleOverride?: string;
  subtitleOverride?: string;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  titleOverride,
  subtitleOverride,
  onBack,
  showBack = false
}) => {
  const getSubtitle = () => {
    if (subtitleOverride) return subtitleOverride;
    if (currentTab === 'inicio') return 'Aprenda a desenhar';
    if (currentTab === 'explorar') return 'Catálogo de técnicas';
    if (currentTab === 'estudio') return 'Prática Passo a Passo';
    if (currentTab === 'perfil') return 'Perfil Criativo';
    if (currentTab === 'configuracoes') return 'Ajustes e Conta';
    return 'Aprenda a desenhar';
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0e17]/95 backdrop-blur-xl border-b border-[#223354] pt-safe shadow-lg">
      <div className="h-16 px-4 max-w-xl mx-auto flex items-center justify-between gap-3">
        {/* Left slot: Back button or Logo + Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          {showBack && onBack ? (
            <button
              onClick={onBack}
              aria-label="Voltar"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#e5e5e5] hover:bg-[#14213d] active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          ) : null}

          <div
            onClick={() => onNavigate('inicio')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <img
              src={APP_ASSETS.logo}
              alt="Rabiskr Logo"
              className="h-9 w-9 rounded-xl object-contain shadow-sm border border-[#223354] shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col truncate">
              <span className="text-[19px] font-extrabold text-white tracking-tight leading-none truncate font-display">
                {titleOverride || 'Rabiskr'}
              </span>
              <span className="text-[10px] text-[#fca311] uppercase tracking-wider font-semibold mt-0.5 truncate">
                {getSubtitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Right slot: Streak flame + Profile Avatar */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* 7 Days Streak Pill */}
          <div
            onClick={() => onNavigate('perfil')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fca311]/15 text-[#fca311] border border-[#fca311]/30 shadow-xs cursor-pointer hover:bg-[#fca311]/25 transition-colors"
            title="Sua ofensiva é de 7 dias consecutivos!"
          >
            <span
              className="material-symbols-outlined text-[17px] text-[#fca311]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <span className="text-[12px] font-extrabold tracking-tight text-[#fca311]">
              7 dias
            </span>
          </div>

          {/* Profile Avatar Thumbnail */}
          <button
            onClick={() => onNavigate('perfil')}
            className="relative p-0.5 rounded-full border border-[#2a3c63] transition-transform active:scale-95 hover:border-[#fca311]/60 cursor-pointer"
            title="Ver Perfil de Mariana Silva"
          >
            <img
              src={APP_ASSETS.avatar}
              alt="Mariana Silva"
              className="w-9 h-9 rounded-full object-cover shadow-sm ring-1 ring-black/40"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#fca311] border-2 border-[#0a0e17] flex items-center justify-center"
              title="Artista Ativa"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
