export type TabType = 'inicio' | 'explorar' | 'estudio' | 'perfil' | 'configuracoes';

export type DifficultyLevel = 'facil' | 'medio' | 'dificil';

export type CategoryId = 'todos' | 'fundamentos' | 'pessoas' | 'animais' | 'natureza' | 'personagens' | 'anime';

export interface LessonStep {
  stepNumber: number;
  title: string;
  description: string;
  tip: string;
  guideImage: string;
  thumbnailImage: string;
  viewModes?: {
    current: string;
    compare?: string;
    final3D?: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  level: DifficultyLevel;
  durationMinutes: number;
  stepsCount: number;
  rating: number;
  category: CategoryId;
  coverImage: string;
  completedSteps?: number;
  progressPercent?: number;
  isPopular?: boolean;
  steps: LessonStep[];
}

export interface Artwork {
  id: string;
  title: string;
  lessonName: string;
  imageUrl: string;
  dateLabel: string;
  likes: number;
  isLiked?: boolean;
  statusLabel: string;
  tags?: string[];
  feedbackNotes?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: string;
  status: 'unlocked' | 'in_progress' | 'locked';
  progress?: {
    current: number;
    total: number;
  };
}

export interface AppSettings {
  theme: 'claro' | 'escuro' | 'sistema';
  sunsetTheme: boolean;
  highContrast: boolean;
  showGuidelines: boolean;
  handOrientation: 'destro' | 'canhoto';
  scanCameraEnabled: boolean;
  dailyReminderTime: string;
  protectStreak: boolean;
  communityNotifications: boolean;
}
