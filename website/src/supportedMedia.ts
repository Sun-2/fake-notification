export const supportedMedia = ["instagram", "snapchat", "facebook", "twitter"] as const;

export type SupportedMedia = typeof supportedMedia[number];
