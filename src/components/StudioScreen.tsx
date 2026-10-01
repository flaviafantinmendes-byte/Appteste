import React, { useState, useRef, useEffect } from 'react';
import { Lesson, LessonStep } from '../types';

interface StudioScreenProps {
  lesson: Lesson;
  onBack: () => void;
  onOpenCameraTracing: () => void;
  onCompleteLesson: (lessonId: string) => void;
}

type ViewMode = 'step' | 'compare' | 'final';
type ToolType = 'pencil-hb' | 'pencil-2b' | 'pencil-6b' | 'accent' | 'eraser';

export const StudioScreen: React.FC<StudioScreenProps> = ({
  lesson,
  onBack,
  onOpenCameraTracing,
  onCompleteLesson
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(2); // Step 3 (0-indexed 2) to match screenshot
  const [completedSteps, setCompletedSteps] = useState<number[]>([1, 2]);
  const [viewMode, setViewMode] = useState<ViewMode>('step');
  const [isFlipped, setIsFlipped] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showCanvasTools, setShowCanvasTools] = useState(true);
  const [selectedTool, setSelectedTool] = useState<ToolType>('pencil-2b');
  const [brushSize, setBrushSize] = useState(3);
  const [guideOpacity, setGuideOpacity] = useState(0.85);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Canvas drawing ref and state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const historyRef = useRef<ImageData[]>([]);

  const step: LessonStep = lesson.steps[currentStepIndex] || lesson.steps[0];
  const totalSteps = lesson.stepsCount || lesson.steps.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  // Resize canvas to match display size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [viewMode, isFlipped]);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (historyRef.current.length > 10) historyRef.current.shift();
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    saveCanvasState();
    isDrawingRef.current = true;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);

    applyBrushStyle(ctx);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.closePath();
    }
  };

  const applyBrushStyle = (ctx: CanvasRenderingContext2D) => {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (selectedTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = brushSize * 4;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      if (selectedTool === 'pencil-hb') {
        ctx.strokeStyle = 'rgba(70, 75, 85, 0.65)';
        ctx.lineWidth = brushSize;
      } else if (selectedTool === 'pencil-2b') {
        ctx.strokeStyle = 'rgba(30, 35, 45, 0.85)';
        ctx.lineWidth = brushSize * 1.3;
      } else if (selectedTool === 'pencil-6b') {
        ctx.strokeStyle = 'rgba(10, 15, 20, 0.95)';
        ctx.lineWidth = brushSize * 1.8;
      } else if (selectedTool === 'accent') {
        ctx.strokeStyle = '#fca311';
        ctx.lineWidth = brushSize * 1.2;
      }
    }
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || historyRef.current.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const previousState = historyRef.current.pop();
    if (previousState) {
      ctx.putImageData(previousState, 0, 0);
    }
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    saveCanvasState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleNextStep = () => {
    if (!completedSteps.includes(step.stepNumber)) {
      setCompletedSteps((prev) => [...prev, step.stepNumber]);
    }

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 2000);
    } else {
      // Completed lesson!
      onCompleteLesson(lesson.id);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Determine stage image according to viewMode
  const getStageImage = () => {
    if (viewMode === 'final' && step.viewModes?.final3D) {
      return step.viewModes.final3D;
    }
    if (viewMode === 'compare' && step.viewModes?.compare) {
      return step.viewModes.compare;
    }
    return step.guideImage;
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-[#e5e5e5] pb-32">
      {/* Top Progress & Meta Bar */}
      <section className="px-4 pt-4 max-w-xl mx-auto w-full flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#14213d] text-[#fca311] border border-[#223354] text-[11px] font-extrabold uppercase tracking-wider">
              {lesson.level === 'facil'
                ? 'FÁCIL'
                : lesson.level === 'medio'
                ? 'MÉDIO'
                : 'DIFÍCIL'}
            </span>
            <span className="flex items-center gap-1 text-[12px] text-[#e5e5e5]/70">
              <span className="material-symbols-outlined text-[16px] text-[#fca311]">
                schedule
              </span>
              4 min restantes
            </span>
          </div>

          <button
            onClick={() => setShowInfoModal(true)}
            aria-label="Informações da lição"
            className="w-8 h-8 rounded-full bg-[#14213d] border border-[#223354] flex items-center justify-center text-[#fca311] hover:bg-[#1e2f50] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">lightbulb</span>
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[18px] text-white font-bold font-display">
              Etapa {step.stepNumber} de {totalSteps}
            </span>
            <span className="text-[12px] text-[#fca311] font-bold">
              {progressPercent}% concluído
            </span>
          </div>
          <p className="text-[13px] text-[#e5e5e5]/80 mb-2.5 truncate font-medium">
            {step.title}
          </p>

          {/* Micro-step Pill Track */}
          <div className="grid grid-cols-6 gap-1.5 w-full">
            {lesson.steps.map((st, idx) => {
              const isDone = completedSteps.includes(st.stepNumber);
              const isCurrent = idx === currentStepIndex;

              return (
                <button
                  key={st.stepNumber}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#fca311] relative overflow-hidden shadow-[0_0_12px_rgba(252,163,17,0.8)] ring-1 ring-white/50'
                      : isDone
                      ? 'bg-[#fca311]'
                      : 'bg-[#14213d] border border-[#223354]/60'
                  }`}
                  title={`Etapa ${st.stepNumber}: ${st.title}`}
                >
                  {isCurrent && (
                    <div className="absolute inset-0 bg-white/40 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Dual-Layer Visual Workspace */}
      <section className="px-4 mt-4 max-w-xl mx-auto w-full">
        <div className="w-full bg-[#14213d]/90 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-[#223354] flex flex-col gap-3">
          {/* Stage Viewport */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#090e17] overflow-hidden flex items-center justify-center border border-[#223354]/80 shadow-inner select-none touch-none">
            {/* Background guide schematic image */}
            <img
              src={getStageImage()}
              alt={step.title}
              className={`w-full h-full object-cover transition-all duration-300 pointer-events-none ${
                isFlipped ? 'scale-x-[-1]' : ''
              }`}
              style={{
                opacity: guideOpacity,
                transform: `${isFlipped ? 'scaleX(-1)' : ''} scale(${zoomLevel})`
              }}
            />

            {/* Interactive HTML5 Drawing Canvas on top */}
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="absolute inset-0 w-full h-full cursor-crosshair z-20"
              style={{
                touchAction: 'none'
              }}
            />

            {/* Subtle overlay ring */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 z-10" />

            {/* Overlay HUD controls */}
            <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-30">
              <button
                onClick={() => setZoomLevel((z) => (z === 1 ? 1.4 : 1))}
                aria-label="Ampliar"
                className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center shadow-lg active:scale-95 transition-all border border-[#223354] cursor-pointer ${
                  zoomLevel > 1 ? 'bg-[#fca311] text-black font-bold' : 'bg-[#0a1120]/85 text-[#e5e5e5]'
                }`}
                title="Zoom 1.4x"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {zoomLevel > 1 ? 'zoom_out' : 'zoom_in'}
                </span>
              </button>

              <button
                onClick={() => setIsFlipped((f) => !f)}
                aria-label="Inverter vista"
                className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center shadow-lg active:scale-95 transition-all border border-[#223354] cursor-pointer ${
                  isFlipped ? 'bg-[#fca311] text-black font-bold' : 'bg-[#0a1120]/85 text-[#e5e5e5]'
                }`}
                title="Espelhar traço (encontrar erros)"
              >
                <span className="material-symbols-outlined text-[18px]">flip</span>
              </button>
            </div>

            <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-[#000000]/90 backdrop-blur-md text-[#e5e5e5] border border-[#223354] flex items-center gap-1.5 shadow-md z-30">
              <span className="w-2 h-2 rounded-full bg-[#fca311] animate-ping" />
              <span className="text-[11px] font-semibold text-white">Traço Guiado Ativo</span>
            </div>
          </div>

          {/* Quick Drawing Tools Drawer */}
          {showCanvasTools && (
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#0d1527] border border-[#223354]/80 gap-1.5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1">
                {/* Pencil HB */}
                <button
                  onClick={() => setSelectedTool('pencil-hb')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedTool === 'pencil-hb'
                      ? 'bg-[#fca311] text-black shadow-sm'
                      : 'bg-[#14213d] text-slate-300 hover:text-white'
                  }`}
                  title="Lápis HB (traço claro para esboço)"
                >
                  ✏️ HB
                </button>

                {/* Pencil 2B */}
                <button
                  onClick={() => setSelectedTool('pencil-2b')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedTool === 'pencil-2b'
                      ? 'bg-[#fca311] text-black shadow-sm'
                      : 'bg-[#14213d] text-slate-300 hover:text-white'
                  }`}
                  title="Lápis 2B (contorno médio)"
                >
                  ✏️ 2B
                </button>

                {/* Pencil 6B */}
                <button
                  onClick={() => setSelectedTool('pencil-6b')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedTool === 'pencil-6b'
                      ? 'bg-[#fca311] text-black shadow-sm'
                      : 'bg-[#14213d] text-slate-300 hover:text-white'
                  }`}
                  title="Lápis 6B (sombreamento escuro)"
                >
                  ✏️ 6B
                </button>

                {/* Accent Orange */}
                <button
                  onClick={() => setSelectedTool('accent')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedTool === 'accent'
                      ? 'bg-[#fca311] text-black shadow-sm ring-1 ring-white'
                      : 'bg-[#14213d] text-[#fca311] hover:brightness-110'
                  }`}
                  title="Guia Laranja"
                >
                  🟠 Guia
                </button>

                {/* Eraser */}
                <button
                  onClick={() => setSelectedTool('eraser')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    selectedTool === 'eraser'
                      ? 'bg-[#fca311] text-black shadow-sm'
                      : 'bg-[#14213d] text-slate-300 hover:text-white'
                  }`}
                  title="Borracha"
                >
                  🧹 Borracha
                </button>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleUndo}
                  className="w-7 h-7 rounded-lg bg-[#14213d] hover:bg-[#1e293b] flex items-center justify-center text-slate-300 hover:text-white text-[14px] cursor-pointer"
                  title="Desfazer"
                >
                  ↺
                </button>
                <button
                  onClick={handleClearCanvas}
                  className="w-7 h-7 rounded-lg bg-[#14213d] hover:bg-[#1e293b] flex items-center justify-center text-slate-300 hover:text-red-400 text-[12px] cursor-pointer"
                  title="Limpar papel"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Mode View Toggle Tabs */}
          <div className="flex items-center p-1 rounded-full bg-[#0a1120] border border-[#223354]/80 gap-1">
            <button
              onClick={() => setViewMode('step')}
              className={`flex-1 py-1.5 rounded-full text-[12px] text-center transition-all duration-200 cursor-pointer ${
                viewMode === 'step'
                  ? 'bg-[#fca311] text-[#000000] font-bold shadow-md'
                  : 'text-[#e5e5e5]/80 font-semibold hover:text-white'
              }`}
            >
              Passo Atual
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`flex-1 py-1.5 rounded-full text-[12px] text-center transition-all duration-200 cursor-pointer ${
                viewMode === 'compare'
                  ? 'bg-[#fca311] text-[#000000] font-bold shadow-md'
                  : 'text-[#e5e5e5]/80 font-semibold hover:text-white'
              }`}
            >
              Comparar
            </button>
            <button
              onClick={() => setViewMode('final')}
              className={`flex-1 py-1.5 rounded-full text-[12px] text-center transition-all duration-200 cursor-pointer ${
                viewMode === 'final'
                  ? 'bg-[#fca311] text-[#000000] font-bold shadow-md'
                  : 'text-[#e5e5e5]/80 font-semibold hover:text-white'
              }`}
            >
              Final 3D
            </button>
          </div>
        </div>
      </section>

      {/* Step Coaching Instruction Card */}
      <section className="px-4 mt-4 max-w-xl mx-auto w-full flex flex-col gap-3">
        <div className="bg-[#14213d]/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#223354] flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#fca311]/20 text-[#fca311] flex items-center justify-center shrink-0 border border-[#fca311]/50 shadow-inner">
              <span
                className="material-symbols-outlined text-[20px] text-[#fca311]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                draw
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[17px] text-white font-bold leading-tight font-display">
                {step.title}
              </h2>
              <p className="mt-1.5 text-[14px] text-[#e5e5e5]/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* Master Tip Accent Box */}
          <div className="p-3.5 rounded-xl bg-[#0d1527] border border-[#223354] flex items-start gap-2.5">
            <span className="text-[#fca311] text-[20px] select-none">💡</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-[12px] text-[#fca311] font-bold uppercase tracking-wider">
                Dica do Rabiskr
              </h3>
              <p className="text-[12px] text-[#e5e5e5]/80 mt-0.5 leading-snug">
                {step.tip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Milestone Thumbnail Carousel */}
      <section className="mt-5 flex flex-col gap-2 max-w-xl mx-auto w-full">
        <div className="px-4 flex items-center justify-between">
          <span className="text-[14px] text-white font-bold font-display">Mapa da Lição</span>
          <span className="text-[11px] text-[#e5e5e5]/60">Toque para pré-visualizar</span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto px-4 pt-1 pb-2 no-scrollbar">
          {lesson.steps.map((st, idx) => {
            const isCompleted = completedSteps.includes(st.stepNumber);
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={st.stepNumber}
                onClick={() => setCurrentStepIndex(idx)}
                className={`w-24 shrink-0 rounded-xl p-2 flex flex-col items-center gap-1.5 shadow-md cursor-pointer transition-all ${
                  isCurrent
                    ? 'bg-[#162238] border-2 border-[#fca311] scale-105'
                    : 'bg-[#14213d] border border-[#223354] opacity-80 hover:opacity-100'
                }`}
              >
                <div
                  className={`relative w-full aspect-square rounded-lg bg-[#0a1120] overflow-hidden border ${
                    isCurrent ? 'border-[#fca311]/60' : 'border-[#223354]/50'
                  }`}
                >
                  <img
                    src={st.thumbnailImage || st.guideImage}
                    alt={st.title}
                    className={`w-full h-full object-cover ${
                      !isCompleted && !isCurrent ? 'grayscale opacity-60' : ''
                    }`}
                  />

                  {isCurrent ? (
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-[#fca311] text-black text-[9px] font-extrabold shadow-sm">
                      AGORA
                    </div>
                  ) : isCompleted ? (
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#fca311] text-black font-bold flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[13px]">check</span>
                    </div>
                  ) : null}
                </div>

                <span
                  className={`text-[11px] text-center line-clamp-1 font-semibold ${
                    isCurrent ? 'text-[#fca311] font-bold' : 'text-[#e5e5e5]'
                  }`}
                >
                  {st.stepNumber}. {st.title.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Floating Interactive Control Deck */}
      <div className="fixed bottom-4 inset-x-4 z-40 max-w-xl mx-auto flex flex-col gap-2">
        {/* Camera Canvas Quick Trigger */}
        <button
          onClick={onOpenCameraTracing}
          className="w-full h-11 rounded-full bg-[#14213d]/95 backdrop-blur-md text-[#e5e5e5] border border-[#223354] flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] hover:border-[#fca311]/50 hover:text-[#fca311] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] text-[#fca311]">
            photo_camera
          </span>
          <span className="text-[12px] font-bold font-display">
            Abrir Câmera de Apoio / Calcar
          </span>
        </button>

        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            aria-label="Etapa anterior"
            className={`flex-1 h-12 py-2.5 rounded-full border text-[#e5e5e5] text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all ${
              currentStepIndex === 0
                ? 'opacity-40 border-[#223354] bg-[#14213d]/50 cursor-not-allowed'
                : 'bg-[#14213d] border-[#223354] active:scale-95 hover:bg-[#1a2b4d] cursor-pointer'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Anterior</span>
          </button>

          <button
            onClick={handleNextStep}
            aria-label="Avançar para a próxima etapa"
            className="flex-[1.5] h-12 py-2.5 rounded-full bg-[#fca311] text-[#000000] text-[14px] flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(252,163,17,0.5)] active:translate-y-0.5 active:shadow-md transition-all font-bold cursor-pointer font-display"
          >
            <span>
              {currentStepIndex === totalSteps - 1 ? 'Concluir Aula (+100 XP)' : 'Concluir Passo'}
            </span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Success step advancing toast */}
      {showSuccessToast && (
        <div className="fixed top-20 inset-x-4 max-w-sm mx-auto z-50 p-3 rounded-xl bg-[#fca311] text-black font-bold flex items-center justify-between shadow-2xl animate-bounce">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span className="text-xs">Passo avançado! Bom traço!</span>
          </div>
          <span className="text-xs font-black">+25 XP</span>
        </div>
      )}

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14213d] border border-[#223354] rounded-2xl p-5 max-w-sm w-full text-white flex flex-col gap-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base font-display">Sobre Esta Aula</h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-8 h-8 rounded-full bg-[#1a2744] flex items-center justify-center text-[#e5e5e5]"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#a0aec0] leading-relaxed">
              Você está na modalidade de papel digital interativo guiado. Você pode desenhar diretamente
              na tela por cima do gabarito ou apoiar seu papel real usando a câmera de apoio.
            </p>
            <div className="p-3 bg-[#0d1527] rounded-xl text-xs flex flex-col gap-1.5 border border-[#223354]">
              <div className="flex justify-between text-[#a0aec0]">
                <span>Técnica:</span>
                <span className="text-white font-bold">Grafite Realista</span>
              </div>
              <div className="flex justify-between text-[#a0aec0]">
                <span>Dificuldade:</span>
                <span className="text-[#fca311] font-bold">Média</span>
              </div>
              <div className="flex justify-between text-[#a0aec0]">
                <span>Tempo recomendado:</span>
                <span className="text-white font-bold">18 minutos</span>
              </div>
            </div>
            <button
              onClick={() => setShowInfoModal(false)}
              className="mt-2 w-full py-2.5 rounded-full bg-[#fca311] text-black font-bold text-xs"
            >
              Continuar praticando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
