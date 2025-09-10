'use client';

import AppCard from '@/components/AppCard';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';
import Portrait from '@/components/Portrait';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLocale } from '@/contexts/LocaleContext';

// 图片资源常量
const imgPortrait = "/homeimage/portrait/portrait.png";
const videoPortraitLight = "/homeimage/portrait/dynamic-portrait-light.mp4";
const videoPortraitDark = "/homeimage/portrait/dynamic-portrait-dark.mp4";

// 根据主题选择图片的函数
const getThemedImage = (baseName: string) => {
  const appName = baseName.split('-')[0]; // 提取应用名称 (pictune 或 tohdr)
  return {
    light: `/homeimage/${appName}/${baseName}-light.png`,
    dark: `/homeimage/${appName}/${baseName}-dark.png`
  };
};

// 根据主题和语言选择应用截图的函数
const getThemedAppImage = (baseName: string, locale: string) => {
  const appName = baseName.split('-')[0]; // 提取应用名称 (pictune 或 tohdr)
  const langSuffix = locale === 'zh' ? '-zh' : '-en';
  return {
    light: `/homeimage/${appName}/${baseName}${langSuffix}-light.png`,
    dark: `/homeimage/${appName}/${baseName}${langSuffix}-dark.png`
  };
};

// App Store 链接
const picTuneAppStoreUrl = "https://apps.apple.com/cn/app/pictune-%E9%9F%B3%E4%B9%90%E5%AE%9E%E5%86%B5%E7%85%A7%E7%89%87/id6744852198?itscg=30200&itsct=apps_box_badge&mttnsubad=6744852198";
const toHDRAppStoreUrl = "https://apps.apple.com/cn/app/tohdr/id6746218392?itscg=30200&itsct=apps_box_badge&mttnsubad=6746218392";

export default function Home() {
  const { translations, locale } = useLocale();

  // 应用图片资源 - 根据当前语言动态生成
  const picTuneImages = {
    icon: getThemedImage('pictune-icon'),
    app: getThemedAppImage('pictune-app', locale)
  };

  const toHDRImages = {
    icon: getThemedImage('tohdr-icon'),
    app: getThemedAppImage('tohdr-app', locale)
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="flex flex-col gap-16 md:gap-[100px] items-center md:items-start justify-start max-w-[1000px] w-full px-4 md:px-5 pt-16 md:pt-[100px] pb-0">
        
        {/* Self Introduction Section */}
        <div className="flex flex-col gap-5 items-center md:items-start justify-start w-full text-center md:text-left">
          {/* Portrait */}
          <Portrait 
            imageSrc={imgPortrait} 
            videoSrcLight={videoPortraitLight} 
            videoSrcDark={videoPortraitDark} 
          />
          
          {/* Introduction */}
          <div className="flex flex-col items-center md:items-start justify-start w-full">
            {/* Name */}
            <div className="large-title w-full" style={{ color: 'var(--label-primary)' }}>
              {translations.name}
            </div>
            
            {/* Information */}
            <div className="flex flex-col gap-1.5 items-center md:items-start justify-center pb-8 md:pb-10 pt-2.5 px-0 w-full">
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                {translations.developer}
              </div>
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                {translations.formerPM}
              </div>
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                {translations.education}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-1.5 items-center md:items-start justify-start w-full">
              <div className="body-text w-full" style={{ color: 'var(--label-secondary)' }}>
                <a 
                  href="https://www.google.com/maps?q=22.5429,114.0596" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--label-secondary)' }}
                >
                  22°32′ N, 114°05′ E
                </a>
                <ExternalLinkIcon />
              </div>
              <div className="body-text w-full" style={{ color: 'var(--label-secondary)' }}>
                <a href="mailto:jerrycode@126.com" className="hover:underline">jerrycode@126.com</a>
                <ExternalLinkIcon />
              </div>
            </div>
          </div>
        </div>
        
        {/* Works List Section */}
        <div className="flex flex-col gap-5 items-center md:items-start justify-start w-full">
          {/* Title */}
          <div className="title1 w-full text-center md:text-left" style={{ color: 'var(--label-primary)' }}>
            {translations.works}
          </div>
          
          {/* List */}
          <div className="flex flex-col gap-6 md:gap-10 items-start justify-start w-full">
            {/* PicTune App Card */}
            <AppCard
              appIcon={picTuneImages.icon}
              appName="PicTune"
              appDescription={translations.pictuneDescription}
              appDetail={
                <>
                  <p style={{ marginBottom: '1rem' }}>{translations.pictuneDetail1}</p>
                  <p>{translations.pictuneDetail2}</p>
                </>
              }
              appImage={picTuneImages.app}
              appStoreUrl={picTuneAppStoreUrl}
            />
            
            {/* toHDR App Card */}
            <AppCard
              appIcon={toHDRImages.icon}
              appName="toHDR"
              appDescription={translations.tohdrDescription}
              appDetail={translations.tohdrDetail}
              appImage={toHDRImages.app}
              appStoreUrl={toHDRAppStoreUrl}
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col items-center md:items-start pb-8 md:pb-10 pt-0 px-0 w-full gap-2.5">
          {/* Mobile Language Switcher - Visible on mobile, hidden on desktop */}
          <div className="flex md:hidden items-center justify-center w-full">
            <LanguageSwitcher />
          </div>
          
          {/* Desktop Footer with Language Switcher */}
          <div className="flex items-center md:items-start justify-center md:justify-between w-full">
            <div className="footnote text-center md:text-left" style={{ color: 'var(--label-secondary)' }}>
              {translations.copyright} <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: 'var(--label-secondary)' }}
              >
                粤ICP备2025409264号
              </a>
            </div>
            
            {/* Language Switcher - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
