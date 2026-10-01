import React, { useState, useEffect } from 'react';
import { TabType, Lesson, Artwork, Achievement, AppSettings, CategoryId } from './types';
import {
  INITIAL_LESSONS,
  INITIAL_GALLERY,
  INITIAL_ACHIEVEMENTS,
  INITIAL_SETTINGS,
} from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { StudioScreen } from './components/StudioScreen';
import { ExplorarScreen } from './components/ExplorarScreen';
import { PerfilScreen } from './components/PerfilScreen';
import { ConfiguracoesScreen } from './components/ConfiguracoesScreen';
import { CameraTracingModal } from './components/CameraTracingModal';
import { DailyChallengeModal } from './components/DailyChallengeModal';
import { PublishDrawingModal } from './components/PublishDrawingModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('inicio');
  const [previousTab, setPreviousTab] = useState<TabType>('inicio');
  const [activeLessonId, setActiveLessonId] = useState<string>('aula-olho');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');

  // App data state
  const [lessons, setLessons] = useState<Lesson[]>(INITIAL_LESSONS);
  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_GALLERY);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [settings, setSettings] = useState<AppSettings>(INITIAL_SETTINGS);

  // Modals state
  const [isCameraTracingOpen, setIsCameraTracingOpen] = useState(false);
  const [isDailyChallengeOpen, setIsDailyChallengeOpen] = useState(false);
  const [isPublishDrawingOpen, setIsPublishDrawingOpen] = useState(false);
  const [celebrationToast, setCelebrationToast] = useState<{ message: string; xp: number } | null>(
    null
  );

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === 'claro') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [settings.theme]);

  const navigateTo = (tab: TabType) => {
    if (currentTab !== tab) {
      setPreviousTab(currentTab);
      setCurrentTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setPreviousTab(currentTab);
    setCurrentTab('estudio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: CategoryId) => {
    setSelectedCategory(cat);
    navigateTo('explorar');
  };

  const handleToggleLike = (artId: string) => {
    setArtworks((prev) =>
      prev.map((art) => {
        if (art.id === artId) {
          const isLiked = !art.isLiked;
          return {
            ...art,
            isLiked,
            likes: isLiked ? art.likes + 1 : art.likes - 1,
          };
        }
        return art;
      })
    );
  };

  const handlePublishArtwork = (newArt: Artwork) => {
    setArtworks((prev) => [newArt, ...prev]);
    showToast('Desenho publicado na galeria!', 50);

    // Update achievements
    setAchievements((prev) =>
      prev.map((ach) => {
        if (ach.id === 'ach-4' && ach.progress) {
          const next = Math.min(ach.progress.current + 1, ach.progress.total);
          return {
            ...ach,
            progress: { ...ach.progress, current: next },
            status: next >= ach.progress.total ? 'unlocked' : 'in_progress',
          };
        }
        return ach;
      })
    );
  };

  const handleLessonCompleted = (lessonId: string) => {
    showToast('Aula concluída com sucesso! Parabéns!', 100);

    setLessons((prev) =>
      prev.map((l) => {
        if (l.id === lessonId) {
          return {
            ...l,
            completedSteps: l.stepsCount,
            progressPercent: 100,
          };
        }
        return l;
      })
    );

    // Offer to publish drawing
    setTimeout(() => {
      setIsPublishDrawingOpen(true);
    }, 1200);
  };

  const handleChallengeCompleted = (xpEarned: number) => {
    showToast('Desafio diário concluído! Troféu conquistado!', xpEarned);
  };

  const showToast = (message: string, xp: number) => {
    setCelebrationToast({ message, xp });
    setTimeout(() => {
      setCelebrationToast(null);
    }, 3200);
  };

  const activeLesson = lessons.find((l) => l.id === activeLessonId) || lessons[0];

  return (
    <div
      className={`min-h-screen w-full flex flex-col ${
        settings.theme === 'claro' ? 'bg-[#f8f9fa] text-black' : 'bg-[#0a0e17] text-[#e5e5e5]'
      }`}
    >
      {/* Dynamic Header */}
      <Header
        currentTab={currentTab}
        onNavigate={navigateTo}
        titleOverride={
          currentTab === 'estudio'
            ? 'Pratica Passo A Passo'
            : currentTab === 'configuracoes'
            ? 'Configurações'
            : undefined
        }
        showBack={currentTab === 'estudio' || currentTab === 'configuracoes'}
        onBack={() => {
          if (currentTab === 'estudio') navigateTo(previousTab === 'estudio' ? 'inicio' : previousTab);
          else if (currentTab === 'configuracoes') navigateTo('perfil');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16 flex flex-col">
        {currentTab === 'inicio' && (
          <HomeScreen
            lessons={lessons}
            onStartLesson={handleStartLesson}
            onNavigate={navigateTo}
            onSelectCategory={handleSelectCategory}
            onOpenDailyChallenge={() => setIsDailyChallengeOpen(true)}
          />
        )}

        {currentTab === 'estudio' && (
          <StudioScreen
            lesson={activeLesson}
            onBack={() => navigateTo(previousTab === 'estudio' ? 'inicio' : previousTab)}
            onOpenCameraTracing={() => setIsCameraTracingOpen(true)}
            onCompleteLesson={handleLessonCompleted}
          />
        )}

        {currentTab === 'explorar' && (
          <ExplorarScreen
            lessons={lessons}
            onStartLesson={handleStartLesson}
            initialCategory={selectedCategory}
            onOpenWeeklyChallenge={() => setIsDailyChallengeOpen(true)}
          />
        )}

        {currentTab === 'perfil' && (
          <PerfilScreen
            artworks={artworks}
            achievements={achievements}
            onOpenUploadModal={() => setIsPublishDrawingOpen(true)}
            onNavigate={navigateTo}
            onToggleLike={handleToggleLike}
          />
        )}

        {currentTab === 'configuracoes' && (
          <ConfiguracoesScreen
            settings={settings}
            onUpdateSettings={(newSettings) =>
              setSettings((prev) => ({ ...prev, ...newSettings }))
            }
            onBack={() => navigateTo('perfil')}
          />
        )}
      </main>

      {/* Fixed Bottom Navigation (hidden on studio practice to maximize drawing canvas unless back pressed) */}
      {currentTab !== 'estudio' && (
        <BottomNav currentTab={currentTab} onNavigate={navigateTo} />
      )}

      {/* Camera Tracing AR Modal */}
      {isCameraTracingOpen && (
        <CameraTracingModal
          guideImageUrl={activeLesson.steps[2]?.guideImage || activeLesson.coverImage}
          onClose={() => setIsCameraTracingOpen(false)}
          onCaptureDrawing={(img) => {
            showToast('Foto do caderno capturada!', 25);
          }}
        />
      )}

      {/* Daily Challenge Modal */}
      {isDailyChallengeOpen && (
        <DailyChallengeModal
          onClose={() => setIsDailyChallengeOpen(false)}
          onComplete={handleChallengeCompleted}
        />
      )}

      {/* Publish Drawing Modal */}
      {isPublishDrawingOpen && (
        <PublishDrawingModal
          onClose={() => setIsPublishDrawingOpen(false)}
          onPublish={handlePublishArtwork}
        />
      )}

      {/* Universal Celebration XP Toast */}
      {celebrationToast && (
        <div className="fixed top-20 inset-x-4 max-w-sm mx-auto z-50 p-4 rounded-2xl bg-[#fca311] text-black font-extrabold flex items-center justify-between shadow-2xl animate-bounce border-2 border-white/20 font-display">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px]">verified</span>
            <span className="text-[13px] leading-tight">{celebrationToast.message}</span>
          </div>
          <span className="text-[14px] bg-black text-[#fca311] px-2.5 py-1 rounded-full shrink-0 shadow-sm">
            +{celebrationToast.xp} XP
          </span>
        </div>
      )}
    </div>
  );
}
