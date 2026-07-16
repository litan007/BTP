export interface AdminModelDraft {
  id: string;
  title: string;
  type: string;
  category: 'construction' | 'renovation' | 'extension';
  imageUrl: string;
  surface: string;
  location: string;
  price: string;
  duration: string;
  description: string;
  hiddenFromClients: boolean;
  createdAt: string;
}

const ADMIN_MODELS_KEY = 'batir-admin-models';

export function loadAdminModels(): AdminModelDraft[] {
  const raw = localStorage.getItem(ADMIN_MODELS_KEY);
  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as AdminModelDraft[];
  } catch {
    return [];
  }
}

export function saveAdminModels(models: AdminModelDraft[]) {
  localStorage.setItem(ADMIN_MODELS_KEY, JSON.stringify(models));
}
