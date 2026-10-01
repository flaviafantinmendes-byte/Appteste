import React, { useState } from 'react';
import { Lesson, CategoryId, TabType } from '../types';

interface HomeScreenProps {
  lessons: Lesson[];
  onStartLesson: (lessonId: string) => void;
  onNavigate: (tab: TabType) => void;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenDailyChallenge: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  lessons,
  onStartLesson,
  onNavigate,
  onSelectCategory,
  onOpenDailyChallenge,
}) => {
  const [bookmarkedLessons, setBookmarkedLessons] = useState<Record<string, boolean>>({
    'aula-gatinho': true,
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedLessons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const popularLessons = lessons.filter((l) => l.isPopular);

  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-28 max-w-xl mx-auto space-y-6">
      {/* Hero Banner Card */}
      <section className="relative overflow-hidden rounded-2xl bg-[#14213d] border border-[#223354] p-5 shadow-xl flex flex-col gap-4">
        {/* Glow ambient background effects */}
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#fca311]/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#fca311]/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-2">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#fca311]/20 text-[#fca311] border border-[#fca311]/40">
            <span
              className="material-symbols-outlined text-[16px] text-[#fca311]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              Passo a Passo Guiado
            </span>
          </div>

          <h1 className="text-[26px] sm:text-[28px] font-extrabold text-white tracking-tight leading-snug font-display">
            Aprenda a desenhar com um passo de cada vez.
          </h1>

          <p className="text-[14px] text-[#a0aec0] leading-relaxed">
            Do primeiro traço ao desenho completo. Pratique 10 minutos por dia com guias visuais
            interativos construídos para quem está começando do zero absoluto.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-3 pt-1">
          {/* Primary CTA */}
          <button
            onClick={() => onStartLesson('aula-olho')}
            className="w-full h-[52px] rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center gap-2 font-bold text-[15px] shadow-[0_8px_20px_-4px_rgba(252,163,17,0.4)] transition-all active:translate-y-0.5 hover:brightness-105 cursor-pointer font-display"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              draw
            </span>
            <span>Começar a desenhar</span>
          </button>

          {/* Progresso Diário Integrado */}
          <div className="rounded-xl bg-[#101a2e] border border-[#223354] p-3.5 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311]">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_fire_department
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-white leading-tight">
                    Meta de hoje: 1/2 lições
                  </span>
                  <span className="text-[11px] text-[#a0aec0]">7 Dias seguidos praticando</span>
                </div>
              </div>

              <button
                onClick={() => onStartLesson('aula-gatinho')}
                className="px-3 py-1.5 rounded-full bg-[#1a2744] border border-[#2a3c63] text-[#fca311] text-[11px] font-bold flex items-center gap-1 transition-transform active:scale-95 hover:bg-[#223354] cursor-pointer"
              >
                <span>Continuar</span>
                <span className="material-symbols-outlined text-[14px] text-[#fca311]">
                  play_arrow
                </span>
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#223354] h-2.5 rounded-full overflow-hidden mt-0.5">
              <div
                className="bg-[#fca311] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(252,163,17,0.5)]"
                style={{ width: '50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desafio Diário Instantâneo */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#101a2e] to-[#14213d] border border-[#223354] p-4 text-white shadow-md flex items-center justify-between gap-3">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#fca311]/15 blur-xl pointer-events-none" />

        <div className="flex flex-col gap-1 z-10 min-w-0">
          <div className="flex items-center gap-1.5 text-[#fca311]">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              timer
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              Desafio Diário
            </span>
          </div>

          <h2 className="text-[16px] text-white font-bold leading-snug font-display">
            Desenhe uma xícara em 5 minutos
          </h2>

          <div className="flex items-center gap-2 mt-0.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fca311] text-[#000000] text-[11px] font-extrabold">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
              +50 XP
            </span>
            <span className="text-[11px] text-[#cbd5e1] opacity-90">Troféu relâmpago</span>
          </div>
        </div>

        <button
          onClick={onOpenDailyChallenge}
          className="shrink-0 px-4 py-2.5 rounded-full bg-[#fca311] text-[#000000] text-[12px] font-extrabold shadow-sm flex items-center gap-1 transition-transform active:scale-95 hover:brightness-105 cursor-pointer font-display"
        >
          <span>Aceitar</span>
          <span className="material-symbols-outlined text-[18px]">bolt</span>
        </button>
      </section>

      {/* Trilhas de Habilidade */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-white tracking-tight font-display">
              Trilhas de Habilidade
            </h2>
            <p className="text-[12px] text-[#a0aec0]">Escolha o que você quer rabiscar hoje</p>
          </div>
          <button
            onClick={() => onNavigate('explorar')}
            className="text-[12px] font-bold text-[#fca311] flex items-center gap-0.5 hover:underline cursor-pointer"
          >
            <span>Ver todas</span>
            <span className="material-symbols-outlined text-[16px] text-[#fca311]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-2 gap-3">
          {/* Fundamentos */}
          <div
            onClick={() => onSelectCategory('fundamentos')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">shapes</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                18 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Fundamentos</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Linhas, formas e sombras</span>
            </div>
          </div>

          {/* Pessoas */}
          <div
            onClick={() => onSelectCategory('pessoas')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">face</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                24 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Pessoas</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Rostos, proporções e mãos</span>
            </div>
          </div>

          {/* Animais */}
          <div
            onClick={() => onSelectCategory('animais')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">pets</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                16 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Animais</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Pets expressivos e aves</span>
            </div>
          </div>

          {/* Anime & Mangá */}
          <div
            onClick={() => onSelectCategory('anime')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">brush</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                32 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Anime & Mangá</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Expressões e cabelos</span>
            </div>
          </div>

          {/* Natureza */}
          <div
            onClick={() => onSelectCategory('natureza')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">forest</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                14 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Natureza</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Folhagens e paisagens</span>
            </div>
          </div>

          {/* Personagens */}
          <div
            onClick={() => onSelectCategory('personagens')}
            className="rounded-xl bg-[#14213d] border border-[#223354] p-3.5 shadow-sm flex flex-col justify-between gap-3 transition-transform active:scale-[0.98] hover:border-[#fca311]/50 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#fca311]/20 flex items-center justify-center text-[#fca311] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#fca311]">
                  accessibility_new
                </span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#101a2e] text-[#a0aec0] border border-[#223354]">
                20 aulas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white font-display">Personagens</span>
              <span className="text-[11px] text-[#a0aec0] leading-snug">Poses e estilização</span>
            </div>
          </div>
        </div>
      </section>

      {/* Aulas Populares */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-white tracking-tight font-display">
              Aulas Populares
            </h2>
            <p className="text-[12px] text-[#a0aec0]">Guiadas com papel digital interativo</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[20px] text-[#fca311]">
              trending_up
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {popularLessons.map((lesson) => {
            const isBookmarked = !!bookmarkedLessons[lesson.id];
            const hasProgress = lesson.progressPercent !== undefined;

            return (
              <div
                key={lesson.id}
                className="rounded-2xl bg-[#14213d] border border-[#223354] overflow-hidden shadow-lg flex flex-col transition-all hover:border-[#2a3c63]"
              >
                {/* Image header with level & duration badges */}
                <div className="relative w-full h-44 bg-[#101a2e] overflow-hidden">
                  <img
                    src={lesson.coverImage}
                    alt={lesson.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold shadow-sm ${
                        lesson.level === 'facil'
                          ? 'bg-black/85 text-[#fca311] border border-[#223354]'
                          : lesson.level === 'medio'
                          ? 'bg-[#fca311] text-black font-extrabold'
                          : 'bg-[#101a2e] text-[#fca311] border border-[#fca311]/40'
                      }`}
                    >
                      {lesson.level === 'facil'
                        ? 'FÁCIL'
                        : lesson.level === 'medio'
                        ? 'MÉDIO'
                        : 'DIFÍCIL'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#0a0e17]/85 backdrop-blur-md text-[#e5e5e5] text-[11px] font-semibold flex items-center gap-1 border border-[#223354]">
                    <span className="material-symbols-outlined text-[14px] text-[#fca311]">
                      schedule
                    </span>
                    <span>{lesson.durationMinutes} min</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-[17px] font-bold text-white font-display leading-snug">
                        {lesson.title}
                      </h3>
                      <span className="text-[12px] text-[#a0aec0] mt-0.5">{lesson.subtitle}</span>
                    </div>

                    <button
                      onClick={(e) => toggleBookmark(lesson.id, e)}
                      aria-label="Favoritar"
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                        isBookmarked
                          ? 'bg-[#fca311]/20 border-[#fca311]/40 text-[#fca311]'
                          : 'bg-[#1a2744] border-[#2a3c63] text-[#e5e5e5] hover:text-[#fca311]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={isBookmarked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        bookmark
                      </span>
                    </button>
                  </div>

                  {/* Optional progress tracker if in-progress */}
                  {hasProgress ? (
                    <div className="flex flex-col gap-1 pt-1">
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-[#a0aec0]">Progresso</span>
                        <span className="text-white font-bold">
                          Etapa {lesson.completedSteps} de {lesson.stepsCount} (
                          <span className="text-[#fca311]">{lesson.progressPercent}%</span>)
                        </span>
                      </div>
                      <div className="w-full bg-[#223354] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#fca311] h-full rounded-full transition-all duration-300"
                          style={{ width: `${lesson.progressPercent}%` }}
                        />
                      </div>
                    </div>
                  ) : null}

                  {/* Action button */}
                  {hasProgress ? (
                    <button
                      onClick={() => onStartLesson(lesson.id)}
                      className="mt-1 w-full h-11 rounded-full bg-[#fca311] text-[#000000] text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(252,163,17,0.3)] active:translate-y-0.5 hover:brightness-105 cursor-pointer font-display"
                    >
                      <span>Continuar de onde parou</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onStartLesson(lesson.id)}
                      className="mt-1 w-full h-11 rounded-full bg-[#1a2744] border border-[#2a3c63] text-white text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-[0.99] hover:bg-[#223354] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#fca311]">
                        play_circle
                      </span>
                      <span>Iniciar aula interativa</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
