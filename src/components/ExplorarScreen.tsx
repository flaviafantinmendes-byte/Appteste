import React, { useState, useMemo } from 'react';
import { Lesson, DifficultyLevel, CategoryId } from '../types';

interface ExplorarScreenProps {
  lessons: Lesson[];
  onStartLesson: (lessonId: string) => void;
  initialCategory?: CategoryId;
  onOpenWeeklyChallenge: () => void;
}

export const ExplorarScreen: React.FC<ExplorarScreenProps> = ({
  lessons,
  onStartLesson,
  initialCategory = 'todos',
  onOpenWeeklyChallenge
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>('all');
  const [selectedDuration, setSelectedDuration] = useState<'all' | 'short' | 'medium' | 'long'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'duration'>('recent');

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      // Search
      const matchesSearch =
        !searchQuery ||
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      // Level
      const matchesLevel = selectedLevel === 'all' || lesson.level === selectedLevel;

      // Duration
      let matchesDuration = true;
      if (selectedDuration === 'short') matchesDuration = lesson.durationMinutes < 10;
      else if (selectedDuration === 'medium')
        matchesDuration = lesson.durationMinutes >= 10 && lesson.durationMinutes <= 20;
      else if (selectedDuration === 'long') matchesDuration = lesson.durationMinutes > 20;

      // Category
      const matchesCategory =
        selectedCategory === 'todos' || lesson.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesDuration && matchesCategory;
    });
  }, [lessons, searchQuery, selectedLevel, selectedDuration, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedDuration('all');
    setSelectedCategory('todos');
  };

  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-28 max-w-xl mx-auto space-y-4">
      {/* Search & Exploratory Header */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-extrabold text-white tracking-tight font-display">
              Explorar Catálogo
            </h1>
            <p className="text-[13px] text-[#94a3b8]">Descubra novas técnicas e solte o traço</p>
          </div>

          <button
            onClick={handleResetFilters}
            aria-label="Histórico de Aulas"
            className="w-10 h-10 rounded-full bg-[#14213d] flex items-center justify-center text-[#e5e5e5] transition-transform active:scale-90 shadow-sm hover:bg-[#1e293b] border border-[#1f293d] cursor-pointer"
            title="Redefinir / Ver histórico"
          >
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94a3b8]">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="O que você quer aprender? (ex: olho, gato...)"
            className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#14213d] border border-[#1f293d] text-[#e5e5e5] placeholder:text-[#64748b] text-[14px] outline-none focus:bg-[#192540] focus:border-[#fca311] focus:ring-2 focus:ring-[#fca311]/20 transition-all"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#94a3b8] hover:text-white cursor-pointer"
              aria-label="Limpar pesquisa"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          )}
        </div>
      </section>

      {/* Filter Pills (Difficulty & Duration) */}
      <section className="space-y-2.5">
        {/* Level Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedLevel === 'all'
                ? 'bg-[#fca311] text-[#000000] border border-[#fca311] shadow-sm'
                : 'bg-[#14213d] text-[#e5e5e5] border border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedLevel('facil')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedLevel === 'facil'
                ? 'bg-[#fca311] text-[#000000] border border-[#fca311] shadow-sm'
                : 'bg-[#14213d] text-[#e5e5e5] border border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            🌱 Fácil
          </button>
          <button
            onClick={() => setSelectedLevel('medio')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedLevel === 'medio'
                ? 'bg-[#fca311] text-[#000000] border border-[#fca311] shadow-sm'
                : 'bg-[#14213d] text-[#e5e5e5] border border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            ⚡ Médio
          </button>
          <button
            onClick={() => setSelectedLevel('dificil')}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedLevel === 'dificil'
                ? 'bg-[#fca311] text-[#000000] border border-[#fca311] shadow-sm'
                : 'bg-[#14213d] text-[#e5e5e5] border border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            🔥 Difícil
          </button>
        </div>

        {/* Duration Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-[#94a3b8] font-semibold shrink-0 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span> Duração:
          </span>
          <button
            onClick={() => setSelectedDuration(selectedDuration === 'short' ? 'all' : 'short')}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap cursor-pointer ${
              selectedDuration === 'short'
                ? 'bg-[#fca311] text-black border-[#fca311] font-bold'
                : 'bg-[#14213d] text-[#e5e5e5] border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            &lt; 10 min
          </button>
          <button
            onClick={() => setSelectedDuration(selectedDuration === 'medium' ? 'all' : 'medium')}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap cursor-pointer ${
              selectedDuration === 'medium'
                ? 'bg-[#fca311] text-black border-[#fca311] font-bold'
                : 'bg-[#14213d] text-[#e5e5e5] border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            10-20 min
          </button>
          <button
            onClick={() => setSelectedDuration(selectedDuration === 'long' ? 'all' : 'long')}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap cursor-pointer ${
              selectedDuration === 'long'
                ? 'bg-[#fca311] text-black border-[#fca311] font-bold'
                : 'bg-[#14213d] text-[#e5e5e5] border-[#1f293d] hover:bg-[#1e293b]'
            }`}
          >
            20+ min
          </button>
        </div>
      </section>

      {/* Category Nav Tabs */}
      <section className="pt-1">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'fundamentos', label: '📐 Fundamentos' },
            { id: 'pessoas', label: '👤 Pessoas' },
            { id: 'animais', label: '🦊 Animais' },
            { id: 'natureza', label: '🌿 Natureza' },
            { id: 'personagens', label: '🎭 Personagens' },
            { id: 'anime', label: '✨ Anime' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as CategoryId)}
              className={`px-3.5 py-2 rounded-full text-[12px] shrink-0 transition-transform active:scale-95 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#fca311] text-[#000000] font-bold shadow-sm'
                  : 'bg-[#14213d] text-[#e5e5e5] hover:bg-[#1e293b] border border-[#1f293d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Coach Pro-Tip of the Day */}
      <section className="pt-1">
        <div className="relative overflow-hidden rounded-2xl bg-[#14213d] text-white p-4 shadow-lg border-l-4 border-[#fca311] border-y border-r border-[#1f293d]">
          <div className="flex items-start gap-3 relative z-10">
            <div className="w-9 h-9 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center shrink-0 shadow-sm">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lightbulb
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#fca311]">
                  Dica do Mestre
                </span>
                <span className="text-[11px] text-[#94a3b8]">Hoje</span>
              </div>
              <p className="text-[12px] text-[#e5e5e5] font-medium leading-snug">
                Não aperte o lápis na fase do esboço! Linhas leves facilitam correções e dão fluidez ao
                traço final.
              </p>
            </div>
          </div>

          {/* Background pencil swirl decoration */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-15 pointer-events-none text-[#fca311]">
            <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100">
              <path d="M10,80 Q40,10 90,50 T30,90" strokeLinecap="round" />
              <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section Header: Lessons Found */}
      <section className="pt-2 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-[18px] font-bold text-white font-display">Aulas Disponíveis</h2>
          <span className="text-[11px] text-[#fca311] font-bold px-2 py-0.5 bg-[#14213d] border border-[#1f293d] rounded-full">
            {filteredLessons.length} {filteredLessons.length === 1 ? 'aula' : 'aulas'}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[#e5e5e5]">
          <span className="material-symbols-outlined text-[16px] text-[#fca311]">tune</span>
          <span className="text-[11px] font-bold">Mais recentes</span>
        </div>
      </section>

      {/* Lessons Catalog List */}
      {filteredLessons.length > 0 ? (
        <section className="space-y-3">
          {filteredLessons.map((lesson) => (
            <article
              key={lesson.id}
              onClick={() => onStartLesson(lesson.id)}
              className="bg-[#111a2d] border border-[#1f293d] rounded-2xl p-3 flex gap-3.5 items-center shadow-md active:scale-[0.99] transition-all cursor-pointer hover:border-[#fca311]/60 group"
            >
              {/* Thumbnail with Rating badge */}
              <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-[#14213d]">
                <img
                  src={lesson.coverImage}
                  alt={lesson.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-sm flex items-center gap-1 shadow-sm border border-white/10">
                  <span
                    className="material-symbols-outlined text-[12px] text-[#fca311]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-[11px] text-white font-extrabold">{lesson.rating}</span>
                </div>
              </div>

              {/* Text content & Quick Action */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-28 py-0.5">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        lesson.level === 'facil'
                          ? 'bg-[#fca311] text-black'
                          : lesson.level === 'medio'
                          ? 'bg-[#fca311]/20 text-[#fca311] border border-[#fca311]/40'
                          : 'bg-[#223354] text-[#fca311]'
                      }`}
                    >
                      {lesson.level === 'facil'
                        ? 'Fácil'
                        : lesson.level === 'medio'
                        ? 'Médio'
                        : 'Difícil'}
                    </span>
                    <span className="text-[11px] text-[#94a3b8] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">timer</span>
                      {lesson.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-white line-clamp-1 leading-snug font-display group-hover:text-[#fca311] transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-[12px] text-[#94a3b8] line-clamp-1 mt-0.5">
                    {lesson.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-1">
                  <div className="flex items-center gap-1.5 text-[#94a3b8] text-[11px]">
                    <span className="material-symbols-outlined text-[15px] text-[#fca311]">
                      layers
                    </span>
                    <span>{lesson.stepsCount} etapas</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        /* Empty State */
        <div className="py-10 flex flex-col items-center text-center px-4">
          <div className="w-20 h-20 rounded-full bg-[#14213d] border border-[#1f293d] flex items-center justify-center text-[#fca311] mb-3 shadow-inner">
            <span className="material-symbols-outlined text-[36px]">brush</span>
          </div>
          <h3 className="text-[16px] font-bold text-white font-display">
            Nenhum rabisco encontrado!
          </h3>
          <p className="text-[12px] text-[#94a3b8] max-w-xs mt-1 mb-4">
            Não achamos essa técnica por enquanto. Que tal tentar outro termo ou limpar os filtros?
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-full bg-[#fca311] text-[#000000] text-[12px] font-bold shadow-md transition-transform active:scale-95 cursor-pointer font-display"
          >
            Redefinir Filtros
          </button>
        </div>
      )}

      {/* Weekly Community Challenge Teaser */}
      <section className="pt-4">
        <div
          onClick={onOpenWeeklyChallenge}
          className="p-4 rounded-2xl bg-[#14213d] text-white flex items-center justify-between shadow-md border border-[#1f293d] cursor-pointer hover:border-[#fca311]/50 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center text-[22px] shadow-sm group-hover:scale-105 transition-transform">
              🏆
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-[#fca311] tracking-wide">
                Desafio Semanal
              </span>
              <p className="text-[15px] font-bold text-white font-display">
                Desafio da Caneca 3D
              </p>
              <p className="text-[12px] text-[#94a3b8]">Envie até domingo e ganhe +50 XP</p>
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#fca311] group-hover:text-black text-[#fca311] flex items-center justify-center shrink-0 transition-all">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </div>
        </div>
      </section>
    </div>
  );
};
