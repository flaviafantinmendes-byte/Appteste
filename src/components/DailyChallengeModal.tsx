import React, { useState, useEffect, useRef } from 'react';

interface DailyChallengeModalProps {
  onClose: () => void;
  onComplete: (xpEarned: number) => void;
}

export const DailyChallengeModal: React.FC<DailyChallengeModalProps> = ({
  onClose,
  onComplete
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(300); // 5 minutes (300 seconds)
  const [isRunning, setIsRunning] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    if (!isRunning || secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    isDrawingRef.current = true;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    ctx.strokeStyle = '#e5e5e5';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
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
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    setTimeout(() => {
      onComplete(50);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md">
      <div className="bg-[#101a2e] border border-[#223354] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl flex flex-col">
        {/* Header with Timer */}
        <div className="p-4 bg-[#14213d] border-b border-[#223354] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fca311] text-[22px]">
              timer
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#fca311] tracking-wider">
                Desafio Diário
              </span>
              <h3 className="font-bold text-sm text-white font-display">
                Desenhe uma xícara em 5 minutos
              </h3>
            </div>
          </div>

          {/* Glowing Timer */}
          <div className="px-3 py-1 rounded-full bg-black/60 border border-[#fca311]/40 flex items-center gap-1.5 text-[#fca311] font-mono font-bold text-sm">
            <span className="material-symbols-outlined text-[16px]">hourglass_top</span>
            <span>{formattedTime}</span>
          </div>
        </div>

        {/* Challenge prompt & reference tips */}
        <div className="p-3 bg-[#0d1527] border-b border-[#223354] text-xs text-[#a0aec0] flex items-center justify-between">
          <span>Dica: Use 1 elipse para a boca, 2 retas para o corpo e 1 alça em "C".</span>
          <span className="text-[#fca311] font-bold">+50 XP</span>
        </div>

        {/* Interactive Drawing Pad */}
        <div className="relative w-full aspect-[4/3] bg-[#070b14] overflow-hidden select-none touch-none border-b border-[#223354]">
          {/* Subtle cup reference silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none text-[#fca311]">
            <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="50" cy="30" rx="30" ry="12" />
              <path d="M20,30 L26,75 Q50,85 74,75 L80,30" />
              <path d="M80,40 Q95,40 95,55 Q95,70 76,70" />
              <ellipse cx="50" cy="85" rx="38" ry="8" />
            </svg>
          </div>

          <canvas
            ref={canvasRef}
            width={400}
            height={300}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="absolute inset-0 w-full h-full cursor-crosshair"
          />

          <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/75 border border-[#223354] text-[10px] text-[#a0aec0]">
            Rabisco Livre Ativo
          </div>
        </div>

        {/* Completion Celebration Overlay */}
        {isCompleted && (
          <div className="p-6 bg-[#fca311] text-black text-center flex flex-col items-center justify-center animate-bounce">
            <span className="text-3xl mb-1">🎉</span>
            <h4 className="font-extrabold text-base font-display">Desafio Concluído!</h4>
            <p className="text-xs font-semibold">+50 XP e Troféu Relâmpago adicionados ao seu perfil!</p>
          </div>
        )}

        {/* Footer Actions */}
        {!isCompleted && (
          <div className="p-4 bg-[#14213d] flex gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-[#1a2744] hover:bg-[#223354] text-white text-xs font-bold border border-[#2a3c63] cursor-pointer"
            >
              Desistir
            </button>
            <button
              onClick={handleSubmit}
              className="flex-[1.5] py-3 rounded-full bg-[#fca311] text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 cursor-pointer font-display"
            >
              <span className="material-symbols-outlined text-[18px]">done_all</span>
              <span>Enviar Desenho (+50 XP)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
