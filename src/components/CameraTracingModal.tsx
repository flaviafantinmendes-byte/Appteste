import React, { useState, useRef, useEffect } from 'react';

interface CameraTracingModalProps {
  guideImageUrl: string;
  onClose: () => void;
  onCaptureDrawing?: (dataUrl: string) => void;
}

export const CameraTracingModal: React.FC<CameraTracingModalProps> = ({
  guideImageUrl,
  onClose,
  onCaptureDrawing
}) => {
  const [guideOpacity, setGuideOpacity] = useState(0.5);
  const [cameraActive, setCameraActive] = useState(false);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [cameraError, setCameraError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initCamera() {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera API not available');
        }
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode }
        });
        if (!isMounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setCameraActive(true);
        setCameraError(false);
      } catch (err) {
        console.warn('Webcam stream not available, falling back to simulated AR desk preview:', err);
        setCameraActive(false);
        setCameraError(true);
      }
    }

    initCamera();

    return () => {
      isMounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode]);

  const toggleCameraFacing = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  const handleCapture = () => {
    // Capture snapshot or use fallback
    let capturedUrl = guideImageUrl;
    if (videoRef.current && cameraActive) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        capturedUrl = canvas.toDataURL('image/jpeg');
      }
    }

    if (onCaptureDrawing) {
      onCaptureDrawing(capturedUrl);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md">
      <div className="bg-[#101a2e] border border-[#223354] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-[#14213d] border-b border-[#223354] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fca311] text-[22px]">
              photo_camera
            </span>
            <div>
              <h3 className="font-bold text-sm text-white font-display">
                Câmera de Apoio / Calcar no Papel
              </h3>
              <p className="text-[11px] text-[#a0aec0]">
                Aponte para o seu caderno para comparar ou calcar o traço
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1a2744] hover:bg-[#223354] text-white flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Viewport area */}
        <div className="relative w-full aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
          {cameraActive ? (
            <video
              ref={videoRef}
              playsInline
              autoPlay
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* Simulated AR desk workspace with paper background */
            <div className="absolute inset-0 w-full h-full bg-[#202736] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#fca311]/20 border border-[#fca311]/40 flex items-center justify-center text-[#fca311] mb-2 animate-pulse">
                <span className="material-symbols-outlined text-[32px]">smartphone</span>
              </div>
              <p className="text-sm font-bold text-white font-display">
                Modo Simulado de Apoio / Calque
              </p>
              <p className="text-xs text-[#a0aec0] max-w-xs mt-1">
                Coloque o celular sobre uma xícara ou suporte apontado para o seu caderno de desenho real.
              </p>
            </div>
          )}

          {/* Transparent Guide Overlay */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center p-4 transition-opacity duration-150"
            style={{ opacity: guideOpacity }}
          >
            <img
              src={guideImageUrl}
              alt="Gabarito para Calque"
              className="w-full h-full object-contain filter invert contrast-150"
            />
          </div>

          {/* Crosshair guide lines */}
          <div className="absolute inset-0 pointer-events-none border border-[#fca311]/30">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#fca311]/20" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#fca311]/20" />
          </div>

          {/* Flip camera button */}
          <button
            onClick={toggleCameraFacing}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md text-white border border-[#223354] flex items-center justify-center shadow-lg active:scale-90 transition-all cursor-pointer"
            title="Alternar Câmera"
          >
            <span className="material-symbols-outlined text-[18px]">flip_camera_ios</span>
          </button>
        </div>

        {/* Controls footer */}
        <div className="p-4 bg-[#14213d] flex flex-col gap-3">
          {/* Opacity slider */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-[#a0aec0] whitespace-nowrap">
              Opacidade do Guia: {Math.round(guideOpacity * 100)}%
            </span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={guideOpacity}
              onChange={(e) => setGuideOpacity(parseFloat(e.target.value))}
              className="w-full accent-[#fca311] cursor-pointer"
            />
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-[#1a2744] hover:bg-[#223354] text-white text-xs font-bold border border-[#2a3c63] cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={handleCapture}
              className="flex-[1.5] py-3 rounded-full bg-[#fca311] text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 cursor-pointer font-display"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              <span>Capturar & Comparar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
