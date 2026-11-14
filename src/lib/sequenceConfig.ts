export interface SequenceConfig {
  totalFrames: number;
  framePrefix: string;
  frameSuffix: string;
  padLength: number;
}

export const SEQUENCE_CONFIG: SequenceConfig = {
  totalFrames: 101, // 000 to 100
  framePrefix: "/sequence/frame_",
  frameSuffix: "_delay-0.05s.png",
  padLength: 3,
};

export function getFrameUrl(index: number): string {
  const safeIndex = Math.max(0, Math.min(index, SEQUENCE_CONFIG.totalFrames - 1));
  const padded = String(safeIndex).padStart(SEQUENCE_CONFIG.padLength, "0");
  return `${SEQUENCE_CONFIG.framePrefix}${padded}${SEQUENCE_CONFIG.frameSuffix}`;
}

export const FRAME_URLS: string[] = Array.from(
  { length: SEQUENCE_CONFIG.totalFrames },
  (_, i) => getFrameUrl(i)
);
