export type Locale = 'en' | 'zh';

export interface Translations {
  // Header
  name: string;
  title: string;
  
  // Personal info
  developer: string;
  formerPM: string;
  education: string;
  
  // Works section
  works: string;
  
  // PicTune app
  pictuneDescription: string;
  pictuneDetail1: string;
  pictuneDetail2: string;

  // Melory app
  meloryDescription: string;
  meloryDetail1: string;
  meloryDetail2: string;
  
  // toHDR app
  tohdrDescription: string;
  tohdrDetail: string;
  
  // Footer
  copyright: string;
  
  // Language switcher
  switchToZh: string;
  switchToEn: string;
}
