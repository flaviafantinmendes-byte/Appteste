import React, { useState } from 'react';
import { AppSettings, TabType } from '../types';
import { APP_ASSETS } from '../data/mockData';

interface ConfiguracoesScreenProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onBack: () => void;
}

export const ConfiguracoesScreen: React.FC<ConfiguracoesScreenProps> = ({
  settings,
  onUpdateSettings,
  onBack
}) => {
  const [showManageStorage, setShowManageStorage] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  const [userName, setUserName] = useState('Mariana Silva');
  const [userBio, setUserBio] = useState('@marirabiscos • Nível 5 Artista');

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#000000] text-[#e5e5e5] pb-28">
      <main className="flex-1 px-4 py-5 flex flex-col gap-6 max-w-md mx-auto w-full">
        {/* Profile Card Preview */}
        <section className="bg-[#14213d] rounded-2xl p-4 shadow-md border border-[#223354] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={APP_ASSETS.avatar}
                alt={userName}
                className="w-13 h-13 rounded-full object-cover shadow-sm border-2 border-[#fca311]"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#fca311] text-black flex items-center justify-center text-[11px] font-black shadow-xs">
                ★
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="font-bold text-base text-white font-display">{userName}</h2>
                <span
                  className="material-symbols-outlined text-[16px] text-[#fca311]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <p className="text-xs text-[#a0aec0]">{userBio}</p>
            </div>
          </div>

          <button
            onClick={() => setEditingProfile(true)}
            className="px-3 py-1.5 rounded-full bg-[#1a2744] hover:bg-[#223354] border border-[#2a3c63] active:scale-95 transition-all text-xs font-semibold text-[#fca311] flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">edit</span>
            Editar
          </button>
        </section>

        {/* 1. SEÇÃO DE DESTAQUE: TEMA E APARÊNCIA */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#fca311] text-[20px]">palette</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">
                Aparência do Aplicativo
              </h3>
            </div>
            <span className="text-[11px] font-bold text-[#fca311] bg-[#fca311]/15 border border-[#fca311]/30 px-2 py-0.5 rounded-full">
              Tema Ativo
            </span>
          </div>

          <div className="bg-[#14213d] rounded-2xl p-4 shadow-md border border-[#223354] flex flex-col gap-4">
            <div>
              <p className="text-xs text-[#a0aec0] mb-3">
                Escolha a experiência visual mais confortável para suas sessões de desenho:
              </p>

              {/* 3 Theme Options */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Opção 1: Claro */}
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ theme: 'claro' })}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer text-center ${
                    settings.theme === 'claro'
                      ? 'border-[#fca311] bg-white/10 shadow-sm'
                      : 'border-transparent bg-[#101a2e] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="material-symbols-outlined text-[20px] text-[#fca311]">
                      light_mode
                    </span>
                    {settings.theme === 'claro' ? (
                      <span className="w-4 h-4 rounded-full bg-[#fca311] text-black flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="w-4 h-4" />
                    )}
                  </div>
                  <div className="w-full h-8 my-2 rounded-md bg-white border border-[#223354] flex items-center px-1.5 gap-1 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-[#fca311]" />
                    <div className="w-10 h-1 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-bold text-white">Claro</span>
                  <span className="text-[10px] text-[#a0aec0]">Padrão</span>
                </button>

                {/* Opção 2: Escuro (Oled Blue) */}
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ theme: 'escuro' })}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer text-center ${
                    settings.theme === 'escuro'
                      ? 'border-[#fca311] bg-[#1a2744] shadow-sm'
                      : 'border-transparent bg-[#101a2e] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="material-symbols-outlined text-[20px] text-[#fca311]">
                      dark_mode
                    </span>
                    {settings.theme === 'escuro' ? (
                      <span className="w-4 h-4 rounded-full bg-[#fca311] text-black flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="w-4 h-4" />
                    )}
                  </div>
                  <div className="w-full h-8 my-2 rounded-md bg-[#000000] border border-white/10 flex items-center px-1.5 gap-1 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-[#fca311]" />
                    <div className="w-10 h-1 rounded-full bg-white/20" />
                  </div>
                  <span className="text-xs font-bold text-white">Escuro</span>
                  <span className="text-[10px] text-[#fca311]/80 font-medium">Oled Blue</span>
                </button>

                {/* Opção 3: Sistema */}
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ theme: 'sistema' })}
                  className={`relative flex flex-col items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer text-center ${
                    settings.theme === 'sistema'
                      ? 'border-[#fca311] bg-white/10 shadow-sm'
                      : 'border-transparent bg-[#101a2e] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="material-symbols-outlined text-[20px] text-white">
                      devices
                    </span>
                    {settings.theme === 'sistema' ? (
                      <span className="w-4 h-4 rounded-full bg-[#fca311] text-black flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="w-4 h-4" />
                    )}
                  </div>
                  <div className="w-full h-8 my-2 rounded-md bg-gradient-to-r from-white to-[#14213d] border border-[#223354] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-[#fca311]">
                      auto_awesome
                    </span>
                  </div>
                  <span className="text-xs font-bold text-white">Sistema</span>
                  <span className="text-[10px] text-[#a0aec0]">Auto</span>
                </button>
              </div>
            </div>

            <hr className="border-[#223354]" />

            {/* Toggles Secundários de Aparência */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fca311] text-[20px]">
                  nightlight
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Alternar tema no pôr do sol</p>
                  <p className="text-[11px] text-[#a0aec0]">Muda suavemente para o escuro às 18:30</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.sunsetTheme}
                  onChange={(e) => onUpdateSettings({ sunsetTheme: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#223354] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]" />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fca311] text-[20px]">
                  contrast
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Alto contraste nas referências</p>
                  <p className="text-[11px] text-[#a0aec0]">Destaca contornos e guias de desenho</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => onUpdateSettings({ highContrast: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#223354] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]" />
              </label>
            </div>
          </div>
        </section>

        {/* 2. PREFERÊNCIAS DE DESENHO (ESTÚDIO & PRÁTICA) */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <span className="material-symbols-outlined text-[#fca311] text-[20px]">draw</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Prática & Desenho
            </h3>
          </div>

          <div className="bg-[#14213d] rounded-2xl p-4 shadow-md border border-[#223354] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#fca311]/15 flex items-center justify-center text-[#fca311]">
                  <span className="material-symbols-outlined text-[18px]">gesture</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Linhas de Guia Passo a Passo</p>
                  <p className="text-[11px] text-[#a0aec0]">Exibir overlay com formas geométricas</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.showGuidelines}
                  onChange={(e) => onUpdateSettings({ showGuidelines: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#223354] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]" />
              </label>
            </div>

            <hr className="border-[#223354]" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1a2744] flex items-center justify-center text-[#fca311]">
                  <span className="material-symbols-outlined text-[18px]">front_hand</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Orientação da Mão</p>
                  <p className="text-[11px] text-[#a0aec0]">Adapta botões na tela de prática</p>
                </div>
              </div>
              <div className="inline-flex rounded-lg p-0.5 bg-[#101a2e] border border-[#223354] text-xs font-bold">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ handOrientation: 'destro' })}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    settings.handOrientation === 'destro'
                      ? 'bg-[#fca311] text-black shadow-xs'
                      : 'text-[#a0aec0] hover:text-white'
                  }`}
                >
                  Destro
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ handOrientation: 'canhoto' })}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    settings.handOrientation === 'canhoto'
                      ? 'bg-[#fca311] text-black shadow-xs'
                      : 'text-[#a0aec0] hover:text-white'
                  }`}
                >
                  Canhoto
                </button>
              </div>
            </div>

            <hr className="border-[#223354]" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#fca311]/15 flex items-center justify-center text-[#fca311]">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Câmera de Escaneamento</p>
                  <p className="text-[11px] text-[#a0aec0]">
                    Correção automática de perspectiva do papel
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#fca311] bg-[#101a2e] border border-[#223354] px-2.5 py-1 rounded-md">
                Ativada (HD)
              </span>
            </div>
          </div>
        </section>

        {/* 3. NOTIFICAÇÕES & HÁBITOS */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <span className="material-symbols-outlined text-[#fca311] text-[20px]">
              notifications_active
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Notificações & Hábitos
            </h3>
          </div>

          <div className="bg-[#14213d] rounded-2xl p-4 shadow-md border border-[#223354] flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Lembrete Diário de Desenho</p>
                <p className="text-[11px] text-[#a0aec0]">
                  10 minutos de prática para manter o hábito
                </p>
              </div>
              <button
                onClick={() => {
                  const newTime = prompt('Novo horário do lembrete (ex: 19:30):', settings.dailyReminderTime);
                  if (newTime) onUpdateSettings({ dailyReminderTime: newTime });
                }}
                className="px-2.5 py-1 rounded-md bg-[#fca311]/15 text-[#fca311] border border-[#fca311]/30 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#fca311]/25"
              >
                <span className="material-symbols-outlined text-[13px] text-[#fca311]">
                  schedule
                </span>
                {settings.dailyReminderTime}
              </button>
            </div>

            <hr className="border-[#223354]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Proteger Ofensiva (7 dias 🔥)</p>
                <p className="text-[11px] text-[#a0aec0]">Avisar se faltar 1 hora para fechar o dia</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.protectStreak}
                  onChange={(e) => onUpdateSettings({ protectStreak: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#223354] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]" />
              </label>
            </div>

            <hr className="border-[#223354]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Curtidas & Comentários</p>
                <p className="text-[11px] text-[#a0aec0]">
                  Quando outros artistas elogiarem seus traços
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.communityNotifications}
                  onChange={(e) => onUpdateSettings({ communityNotifications: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#223354] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]" />
              </label>
            </div>
          </div>
        </section>

        {/* 4. CONTA, DADOS & SUPORTE */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <span className="material-symbols-outlined text-[#fca311] text-[20px]">tune</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Conta e Armazenamento
            </h3>
          </div>

          <div className="bg-[#14213d] rounded-2xl p-2 shadow-md border border-[#223354] divide-y divide-[#223354]">
            <button
              onClick={() => setShowManageStorage(true)}
              className="w-full px-3 py-2.5 flex items-center justify-between hover:bg-[#1a2744] rounded-xl transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fca311] text-[20px]">
                  folder_special
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Armazenamento de Rascunhos</p>
                  <p className="text-[11px] text-[#a0aec0]">142 MB usados • 14 obras salvas</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#fca311]">Gerenciar</span>
            </button>

            <button
              onClick={() => setShowHelpModal(true)}
              className="w-full px-3 py-2.5 flex items-center justify-between hover:bg-[#1a2744] rounded-xl transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fca311] text-[20px]">
                  help_center
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Central de Ajuda e Tutoriais</p>
                  <p className="text-[11px] text-[#a0aec0]">Dúvidas sobre lições e comunidade</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#a0aec0]">
                chevron_right
              </span>
            </button>

            <button
              onClick={() => setShowAboutModal(true)}
              className="w-full px-3 py-2.5 flex items-center justify-between hover:bg-[#1a2744] rounded-xl transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fca311] text-[20px]">info</span>
                <div>
                  <p className="text-xs font-semibold text-white">Sobre o Rabiskr</p>
                  <p className="text-[11px] text-[#a0aec0]">
                    Versão 2.4.0 (Build 412) • Termos e Privacidade
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#a0aec0]">
                chevron_right
              </span>
            </button>
          </div>
        </section>

        {/* Botão Sair da Conta */}
        <div className="pt-2 flex flex-col items-center gap-2">
          <button
            onClick={() => {
              if (confirm('Deseja realmente reiniciar o progresso da sessão demonstrativa?')) {
                window.location.reload();
              }
            }}
            className="w-full py-3 rounded-xl border border-red-500/40 text-red-400 bg-red-950/20 hover:bg-red-900/30 active:scale-98 transition-all font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer font-display"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Encerrar Sessão no Rabiskr
          </button>
          <p className="text-[11px] text-[#a0aec0] text-center">
            Rabiskr • Aprenda a desenhar com um passo de cada vez
          </p>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {editingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14213d] border border-[#223354] rounded-2xl p-5 max-w-sm w-full text-white flex flex-col gap-3 shadow-2xl">
            <h3 className="font-bold text-base font-display">Editar Perfil</h3>
            <div>
              <label className="text-xs text-[#a0aec0] block mb-1">Nome:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#101a2e] border border-[#223354] text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs text-[#a0aec0] block mb-1">Biografia / Nível:</label>
              <input
                type="text"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#101a2e] border border-[#223354] text-sm text-white"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setEditingProfile(false)}
                className="flex-1 py-2 rounded-xl bg-[#1a2744] text-[#a0aec0] text-xs font-bold"
              >
                Cancelar
              </button>
              <button
                onClick={() => setEditingProfile(false)}
                className="flex-1 py-2 rounded-xl bg-[#fca311] text-black text-xs font-bold"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14213d] border border-[#223354] rounded-2xl p-5 max-w-sm w-full text-white flex flex-col gap-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base font-display">Central de Ajuda</h3>
              <button onClick={() => setShowHelpModal(false)}>✕</button>
            </div>
            <p className="text-xs text-[#a0aec0] leading-relaxed">
              O Rabiskr foi criado para que você aprenda a desenhar dividindo temas complexos (rosto,
              mãos, olhos, animais) em blocos geométricos simples de 5 a 10 minutos.
            </p>
            <div className="p-3 bg-[#101a2e] rounded-xl text-xs space-y-1 text-[#e5e5e5]">
              <p>• Dica: Ative a Câmera de Apoio no Estúdio para calcar no papel físico.</p>
              <p>• Compartilhe suas fotos na Galeria para ganhar +50 XP!</p>
            </div>
            <button
              onClick={() => setShowHelpModal(false)}
              className="mt-1 w-full py-2.5 rounded-full bg-[#fca311] text-black font-bold text-xs"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Storage Modal */}
      {showManageStorage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14213d] border border-[#223354] rounded-2xl p-5 max-w-sm w-full text-white flex flex-col gap-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base font-display">Armazenamento Local</h3>
              <button onClick={() => setShowManageStorage(false)}>✕</button>
            </div>
            <p className="text-xs text-[#a0aec0]">
              Seus rascunhos e camadas de calque estão sincronizados com segurança no cache offline
              do dispositivo.
            </p>
            <div className="w-full bg-[#101a2e] p-3 rounded-xl border border-[#223354] text-xs space-y-1">
              <div className="flex justify-between">
                <span>Rascunhos:</span>
                <span className="font-bold text-white">14 arquivos (112 MB)</span>
              </div>
              <div className="flex justify-between">
                <span>Guias de Referência:</span>
                <span className="font-bold text-white">30 MB</span>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Cache de rascunhos otimizado!');
                setShowManageStorage(false);
              }}
              className="mt-1 w-full py-2.5 rounded-full bg-[#fca311] text-black font-bold text-xs"
            >
              Otimizar Espaço
            </button>
          </div>
        </div>
      )}

      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14213d] border border-[#223354] rounded-2xl p-5 max-w-sm w-full text-white flex flex-col gap-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base font-display">Sobre o Rabiskr</h3>
              <button onClick={() => setShowAboutModal(false)}>✕</button>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={APP_ASSETS.logo}
                alt="Rabiskr"
                className="w-12 h-12 rounded-xl object-contain border border-[#223354]"
              />
              <div>
                <h4 className="font-bold text-sm">Rabiskr</h4>
                <p className="text-xs text-[#a0aec0]">Versão 2.4.0 (Build 412)</p>
              </div>
            </div>
            <p className="text-xs text-[#a0aec0] leading-relaxed">
              Desenvolvido com foco no ensino de desenho passo a passo, método dos terços, luz e
              volume com lápis grafite e mangá.
            </p>
            <button
              onClick={() => setShowAboutModal(false)}
              className="mt-1 w-full py-2.5 rounded-full bg-[#fca311] text-black font-bold text-xs"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
