import React, { useState } from 'react';
import { Artwork, Achievement, TabType } from '../types';
import { APP_ASSETS } from '../data/mockData';

interface PerfilScreenProps {
  artworks: Artwork[];
  achievements: Achievement[];
  onOpenUploadModal: () => void;
  onNavigate: (tab: TabType) => void;
  onToggleLike: (artId: string) => void;
}

export const PerfilScreen: React.FC<PerfilScreenProps> = ({
  artworks,
  achievements,
  onOpenUploadModal,
  onNavigate,
  onToggleLike
}) => {
  const [activeTab, setActiveTab] = useState<'galeria' | 'conquistas'>('galeria');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const unlockedCount = achievements.filter((a) => a.status === 'unlocked').length;

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0a0e18] text-[#e5e5e5] pb-28">
      {/* Profile Header Banner & Avatar Info */}
      <section className="relative px-4 pt-4 pb-6 flex flex-col items-center text-center max-w-xl mx-auto w-full">
        {/* Ambient Backdrop Aura */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#fca311]/20 via-[#14213d]/60 to-transparent -z-10 rounded-b-3xl" />

        {/* Quick Settings Gear button in top-right */}
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={() => onNavigate('configuracoes')}
            className="w-9 h-9 rounded-full bg-[#131c30] border border-[#253556] flex items-center justify-center text-[#e5e5e5] hover:text-[#fca311] hover:border-[#fca311]/50 transition-all cursor-pointer shadow-sm"
            title="Abrir Configurações"
          >
            <span className="material-symbols-outlined text-[19px]">settings</span>
          </button>
        </div>

        {/* Avatar with Progression Ring */}
        <div className="relative mb-2">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#14213d] via-[#fca311] to-amber-200 shadow-2xl flex items-center justify-center">
            <img
              src={APP_ASSETS.avatar}
              alt="Mariana Silva"
              className="w-full h-full rounded-full object-cover shadow-inner"
            />
          </div>
          <div className="absolute -bottom-1 -right-0.5 bg-[#fca311] text-black p-1 rounded-full shadow-md flex items-center justify-center border-2 border-[#0a0e18]">
            <span
              className="material-symbols-outlined text-[17px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              palette
            </span>
          </div>
        </div>

        {/* Name & Social Tag */}
        <h1 className="text-[22px] font-extrabold text-white tracking-tight flex items-center gap-1.5 font-display">
          Mariana Silva
          <span
            className="material-symbols-outlined text-[#fca311] text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
        </h1>
        <span className="text-[12px] text-[#e5e5e5]/70 font-medium">@marirabiscos</span>

        {/* Level Pill */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fca311] text-black shadow-lg font-bold border border-[#fca311]">
          <span
            className="material-symbols-outlined text-[16px] text-black"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            military_tech
          </span>
          <span className="text-[12px] font-extrabold tracking-tight font-display">
            Nível 5: Exploradora de Traços
          </span>
        </div>

        {/* Key Metrics Grid */}
        <div className="w-full grid grid-cols-4 gap-2 mt-5">
          <div className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#131c30] rounded-xl border border-[#253556] shadow-md">
            <div className="flex items-center gap-1 text-[#fca311]">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
              <span className="text-[18px] font-extrabold text-white leading-none font-display">
                7
              </span>
            </div>
            <span className="text-[11px] text-[#e5e5e5]/70 mt-1 font-medium">Dias Fogo</span>
          </div>

          <div className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#131c30] rounded-xl border border-[#253556] shadow-md">
            <div className="flex items-center gap-1 text-[#fca311]">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
              </span>
              <span className="text-[18px] font-extrabold text-white leading-none font-display">
                24
              </span>
            </div>
            <span className="text-[11px] text-[#e5e5e5]/70 mt-1 font-medium">Aulas Feitas</span>
          </div>

          <div className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#131c30] rounded-xl border border-[#253556] shadow-md">
            <div className="flex items-center gap-1 text-[#fca311]">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                draw
              </span>
              <span className="text-[18px] font-extrabold text-white leading-none font-display">
                {artworks.length}
              </span>
            </div>
            <span className="text-[11px] text-[#e5e5e5]/70 mt-1 font-medium">Obras</span>
          </div>

          <div className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#131c30] rounded-xl border border-[#253556] shadow-md">
            <div className="flex items-center gap-1 text-[#fca311]">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span className="text-[18px] font-extrabold text-white leading-none font-display">
                1.8k
              </span>
            </div>
            <span className="text-[11px] text-[#e5e5e5]/70 mt-1 font-medium">XP Total</span>
          </div>
        </div>
      </section>

      {/* Weekly Habit & Streak Calendar */}
      <section className="px-4 mb-5 max-w-xl mx-auto w-full">
        <div className="w-full bg-[#131c30] rounded-2xl p-4 border border-[#253556] shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#fca311]/20 border border-[#fca311]/30 flex items-center justify-center text-[#fca311]">
                <span className="material-symbols-outlined text-[17px]">calendar_today</span>
              </div>
              <div>
                <h2 className="text-[15px] text-white font-bold leading-tight font-display">
                  Meta Semanal
                </h2>
                <p className="text-[11px] text-[#e5e5e5]/70">Você bateu a meta de 7 dias!</p>
              </div>
            </div>
            <span className="text-[11px] text-black font-extrabold bg-[#fca311] px-2 py-0.5 rounded-full">
              100%
            </span>
          </div>

          {/* 7 Days Bubble Row */}
          <div className="grid grid-cols-7 gap-1.5 pt-1">
            {['S', 'T', 'Q', 'Q', 'S', 'S'].map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <span className="text-[11px] text-[#e5e5e5]/60 font-medium">{day}</span>
                <div className="w-8 h-8 rounded-full bg-[#fca311] text-black flex items-center justify-center shadow-sm font-bold">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
              </div>
            ))}
            {/* Sunday current burning streak */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-[#fca311] font-bold">D</span>
              <div className="w-8 h-8 rounded-full bg-[#fca311] text-black flex items-center justify-center shadow-lg animate-pulse">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_fire_department
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Primary Action Callout: Post Drawing */}
      <section className="px-4 mb-5 max-w-xl mx-auto w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#14213d] via-[#1a2b50] to-[#0a0e18] rounded-2xl p-4 text-white shadow-xl border border-[#253556]">
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-full bg-[#fca311]/20 border border-[#fca311]/40 flex items-center justify-center text-[#fca311] shadow-inner">
                <span className="material-symbols-outlined text-[24px]">photo_camera</span>
              </div>
              <span className="text-[10px] bg-[#fca311] text-black px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                Novo Registro
              </span>
            </div>

            <div>
              <h2 className="text-[18px] font-extrabold leading-tight text-white font-display">
                Tirar Foto do seu Desenho & Publicar
              </h2>
              <p className="text-[12px] text-[#e5e5e5]/80 mt-1">
                Mostre o resultado da sua última aula de hoje para a comunidade e receba feedback
                carinhoso!
              </p>
            </div>

            <button
              onClick={onOpenUploadModal}
              className="mt-1 w-full h-[50px] rounded-full bg-[#fca311] text-black font-extrabold text-[14px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(252,163,17,0.35)] hover:bg-amber-400 transition-transform active:scale-[0.98] cursor-pointer font-display"
            >
              <span className="material-symbols-outlined text-[20px] text-black font-bold">
                add_a_photo
              </span>
              <span>Abrir Câmera de Desenhos</span>
            </button>
          </div>

          {/* Decorative ambient lights */}
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#fca311]/15 blur-2xl pointer-events-none" />
        </div>
      </section>

      {/* Tabs Navigation: Galeria vs Conquistas */}
      <section className="px-4 mb-4 max-w-xl mx-auto w-full">
        <div className="w-full bg-[#131c30] rounded-full p-1 flex border border-[#253556]">
          <button
            onClick={() => setActiveTab('galeria')}
            className={`flex-1 py-2 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'galeria'
                ? 'bg-[#fca311] text-black shadow-sm font-extrabold'
                : 'text-[#e5e5e5]/70 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            <span>Galeria ({artworks.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('conquistas')}
            className={`flex-1 py-2 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'conquistas'
                ? 'bg-[#fca311] text-black shadow-sm font-extrabold'
                : 'text-[#e5e5e5]/70 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">emoji_events</span>
            <span>Conquistas ({achievements.length})</span>
          </button>
        </div>
      </section>

      {/* Tab Content 1: Galeria */}
      {activeTab === 'galeria' && (
        <section className="px-4 flex flex-col gap-3 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-extrabold text-white font-display">
              Minha Galeria de Desenhos
            </h2>
            <span className="text-[11px] text-[#fca311] font-bold uppercase tracking-wider">
              Mais Recentes
            </span>
          </div>

          {/* Visual Portfolio Grid */}
          <div className="grid grid-cols-2 gap-3">
            {artworks.map((art) => (
              <article
                key={art.id}
                onClick={() => setSelectedArtwork(art)}
                className="bg-[#18233b] rounded-2xl overflow-hidden border border-[#253556] shadow-md flex flex-col group transition-transform active:scale-98 hover:border-[#fca311]/50 cursor-pointer"
              >
                <div className="relative h-44 w-full bg-black/40 overflow-hidden">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Date badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#0a0e18]/85 backdrop-blur-sm text-[#e5e5e5] text-[11px] font-bold flex items-center gap-1 border border-[#253556] shadow-sm">
                    {art.dateLabel === 'Hoje' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fca311]" />
                    )}
                    {art.dateLabel}
                  </div>

                  {/* Like heart button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(art.id);
                    }}
                    className={`absolute bottom-2 right-2 px-2 py-1 rounded-full backdrop-blur-sm text-[11px] font-bold flex items-center gap-1 border shadow-sm transition-transform active:scale-110 cursor-pointer ${
                      art.isLiked
                        ? 'bg-[#fca311] text-black border-[#fca311]'
                        : 'bg-[#0a0e18]/85 text-[#fca311] border-[#253556]'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[15px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                    <span>{art.likes}</span>
                  </button>
                </div>

                <div className="p-3 flex flex-col flex-1 justify-between gap-1">
                  <div>
                    <h3 className="text-[13px] font-extrabold text-white line-clamp-1 font-display">
                      {art.title}
                    </h3>
                    <p className="text-[11px] text-[#e5e5e5]/70 line-clamp-1">{art.lessonName}</p>
                  </div>

                  <span className="text-[11px] text-[#e5e5e5]/90 font-semibold flex items-center gap-1 pt-1">
                    <span
                      className="material-symbols-outlined text-[14px] text-[#fca311]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span>{art.statusLabel}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tab Content 2: Conquistas */}
      {activeTab === 'conquistas' && (
        <section className="px-4 flex flex-col gap-3 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[17px] font-extrabold text-white font-display">
              Conquistas Desbloqueadas
            </h2>
            <span className="text-[11px] text-[#fca311] font-bold">
              {unlockedCount} de {achievements.length} liberadas
            </span>
          </div>

          <div className="space-y-2.5">
            {achievements.map((ach) => {
              const isUnlocked = ach.status === 'unlocked';
              const isInProgress = ach.status === 'in_progress';
              const isLocked = ach.status === 'locked';

              return (
                <div
                  key={ach.id}
                  className={`p-4 rounded-2xl border shadow-md flex items-center gap-3 transition-all ${
                    isUnlocked
                      ? 'bg-[#131c30] border-[#253556]'
                      : isInProgress
                      ? 'bg-[#131c30] border-[#fca311]/40'
                      : 'bg-[#131c30]/50 border-[#253556]/40 opacity-50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                      isUnlocked
                        ? 'bg-[#fca311] text-black shadow-[0_0_12px_rgba(252,163,17,0.4)]'
                        : isInProgress
                        ? 'bg-black/40 border border-[#253556] text-[#e5e5e5]'
                        : 'bg-black/30 border border-[#253556]/40 text-[#e5e5e5]/40'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[24px]"
                      style={isUnlocked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      {ach.icon}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-[15px] font-bold truncate font-display ${
                          isLocked ? 'text-[#e5e5e5]/60' : 'text-white'
                        }`}
                      >
                        {ach.title}
                      </h3>

                      {isUnlocked && (
                        <span className="text-[11px] text-black font-extrabold bg-[#fca311] px-2 py-0.5 rounded-full shadow-sm">
                          +{ach.xp} XP
                        </span>
                      )}

                      {isInProgress && ach.progress && (
                        <span className="text-[11px] text-[#e5e5e5] font-bold bg-[#1e2c4a] px-2 py-0.5 rounded-full border border-[#253556]">
                          {ach.progress.current} / {ach.progress.total}
                        </span>
                      )}

                      {isLocked && (
                        <span className="text-[11px] text-[#e5e5e5]/40 font-medium">Bloqueado</span>
                      )}
                    </div>

                    <p
                      className={`text-[12px] mt-0.5 ${
                        isLocked ? 'text-[#e5e5e5]/40' : 'text-[#e5e5e5]/70'
                      }`}
                    >
                      {ach.description}
                    </p>

                    {/* Progress bar if in progress */}
                    {isInProgress && ach.progress && (
                      <div className="w-full bg-black/40 rounded-full h-2 mt-2 overflow-hidden border border-[#253556]/50">
                        <div
                          className="bg-[#fca311] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(252,163,17,0.6)]"
                          style={{
                            width: `${(ach.progress.current / ach.progress.total) * 100}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Expanded Artwork Detail Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14213d] border border-[#253556] rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl flex flex-col animate-scaleUp">
            <div className="relative h-64 w-full bg-black">
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer hover:bg-black"
              >
                ✕
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#fca311] uppercase tracking-wider">
                  {selectedArtwork.lessonName}
                </span>
                <span className="text-[11px] text-[#a0aec0]">{selectedArtwork.dateLabel}</span>
              </div>
              <h3 className="text-[18px] font-bold text-white font-display">
                {selectedArtwork.title}
              </h3>
              <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
                Arte produzida utilizando as técnicas guiadas de sombreamento e proporção do
                Rabiskr.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedArtwork.tags?.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#101a2e] text-[#a0aec0] text-[10px] border border-[#223354]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#223354]">
                <button
                  onClick={() => onToggleLike(selectedArtwork.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                    selectedArtwork.isLiked
                      ? 'bg-[#fca311] text-black border-[#fca311]'
                      : 'bg-[#1a2744] text-[#fca311] border-[#2a3c63]'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                  <span>{selectedArtwork.likes} Curtidas</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('Link do desenho copiado com sucesso!');
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#1a2744] hover:bg-[#223354] text-white text-xs font-semibold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[15px]">share</span>
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
