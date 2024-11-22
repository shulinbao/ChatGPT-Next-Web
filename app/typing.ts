export type Updater<T> = (updater: (value: T) => void) => void;

export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export interface RequestMessage {
  role: MessageRole;
  content: string;
}

export type DalleSize = "512x512" | "1024x1024";
export type DalleQuality = "standard" | "hd";
export type DalleStyle = "vivid" | "natural";
