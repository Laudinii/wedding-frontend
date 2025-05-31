export interface AttendsChange {
  who: string;
  attends: boolean;
}

export type AttendsForm = Record<string, { label: string; attends: boolean }>;
