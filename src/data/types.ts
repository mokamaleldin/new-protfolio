export interface LocalizedText {
  en: string;
  ar: string;
}

export interface AssetImage {
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
  placeholder?: boolean;
}
