import React, { useState } from 'react';
import { Artwork } from '../types';
import { APP_ASSETS } from '../data/mockData';

interface PublishDrawingModalProps {
  onClose: () => void;
  onPublish: (artwork: Artwork) => void;
}

export const PublishDrawingModal: React.FC<PublishDrawingModalProps> = ({
  onClose,
  onPublish
}) => {
  const [title, setTitle] = useState('');
  const [lessonName, setLessonName] = useState('Aula: Olho Realista do Zero');
  const [selectedImage, setSelectedImage] = useState<string>(APP_ASSETS.galleryEye);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample presets for drawing uploads
  const samplePresets = [
    { label: 'Olho Realista', url: APP_ASSETS.galleryEye },
    { label: 'Gatinho Siamês', url: APP_ASSETS.galleryCat },
    { label: 'Garota Anime', url: APP_ASSETS.galleryAnimeGirl },
    { label: 'Mãos e Gestos', url: APP_ASSETS.galleryHands },
    { label: 'Esfera com Lápis', url: APP_ASSETS.sphere }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!title.trim()) {
      alert('Por favor, informe um título para a sua obra.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newArtwork: Artwork = {
        id: `art-${Date.now()}`,
        title: title.trim(),
        lessonName,
        imageUrl: selectedImage,
        dateLabel: 'Hoje',
        likes: 1,
        isLiked: true,
        statusLabel: '100% Concluída',
        tags: ['Novo Desenho', 'Comunidade'],
        feedbackNotes: 1
      };

      onPublish(newArtwork);
      setIsSubmitting(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md">
      <div className="bg-[#101a2e] border border-[#223354] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-[#14213d] border-b border-[#223354] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fca311] text-[22px]">
              add_a_photo
            </span>
            <div>
              <h3 className="font-bold text-sm text-white font-display">
                Publicar Desenho na Galeria
              </h3>
              <p className="text-[11px] text-[#a0aec0]">
                Compartilhe com a comunidade e ganhe +50 XP
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

        {/* Content Body */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar">
          {/* Preview Image with Change Trigger */}
          <div className="relative w-full h-44 rounded-2xl bg-black overflow-hidden border border-[#223354]">
            <img
              src={selectedImage}
              alt="Prévia do desenho"
              className="w-full h-full object-cover"
            />
            <label className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-[#fca311] border border-[#223354] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              <span>Carregar Foto</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Quick Preset Selector */}
          <div>
            <label className="text-xs text-[#a0aec0] block mb-1.5 font-medium">
              Ou escolha uma referência recente:
            </label>
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              {samplePresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(preset.url)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold shrink-0 border transition-all cursor-pointer ${
                    selectedImage === preset.url
                      ? 'bg-[#fca311] text-black border-[#fca311] font-bold shadow-sm'
                      : 'bg-[#14213d] text-[#e5e5e5] border-[#223354] hover:border-[#fca311]/50'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div>
            <label className="text-xs text-[#a0aec0] block mb-1 font-medium">
              Título da sua Obra:
            </label>
            <input
              type="text"
              placeholder="Ex: Meu Primeiro Olho Realista"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#14213d] border border-[#223354] text-sm text-white placeholder:text-[#64748b] outline-none focus:border-[#fca311]"
            />
          </div>

          {/* Lesson Selector */}
          <div>
            <label className="text-xs text-[#a0aec0] block mb-1 font-medium">
              Aula Correspondente:
            </label>
            <select
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#14213d] border border-[#223354] text-sm text-white outline-none focus:border-[#fca311] cursor-pointer"
            >
              <option value="Aula: Olho Realista do Zero">Aula: Olho Realista do Zero</option>
              <option value="Aula: Gatinho Esboço Rápido">Aula: Gatinho Esboço Rápido</option>
              <option value="Aula: Proporção da Cabeça Mangá">Aula: Proporção da Cabeça Mangá</option>
              <option value="Aula: Sombra e Volume com Lápis">Aula: Sombra e Volume com Lápis</option>
              <option value="Estudo Livre de Caderno">Estudo Livre de Caderno</option>
            </select>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#14213d] border-t border-[#223354] flex gap-2.5">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-[#1a2744] hover:bg-[#223354] text-white text-xs font-bold border border-[#2a3c63] cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={isSubmitting}
            className="flex-[1.5] py-3 rounded-full bg-[#fca311] text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 cursor-pointer font-display"
          >
            {isSubmitting ? (
              <span className="material-symbols-outlined text-[18px] animate-spin">
                sync
              </span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">publish</span>
            )}
            <span>{isSubmitting ? 'Publicando...' : 'Publicar (+50 XP)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
