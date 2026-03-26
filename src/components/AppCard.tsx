import React from 'react';
import ThemedBackgroundImage from './ThemedBackgroundImage';
import { useLocale } from '@/contexts/LocaleContext';

interface ThemedImagePair {
  light: string;
  dark: string;
}

interface AppCardProps {
  appIcon: ThemedImagePair;
  appName: string;
  appDescription: string;
  appDetail: string | React.ReactNode;
  appImage: ThemedImagePair;
  appStoreUrl: string;
}

export default function AppCard({
  appIcon,
  appName,
  appDescription,
  appDetail,
  appImage,
  appStoreUrl
}: AppCardProps) {
  const { locale } = useLocale();
  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-[60px] items-center md:items-start justify-start overflow-hidden relative rounded-[24px] md:rounded-[36px] w-full p-0" style={{ backgroundColor: 'var(--background-secondary)' }}>
      {/* Content Section */}
      <div className="flex flex-col gap-6 md:gap-10 grow items-center md:items-start justify-start p-6 md:p-[36px] relative self-stretch min-w-0 text-center md:text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4.5 items-center md:items-center justify-start w-full">
          {/* App Icon - Clickable */}
          <a href={appStoreUrl} className="relative shrink-0 w-[70px] h-[70px] hover:scale-102 transition-transform duration-200">
            <ThemedBackgroundImage
              lightSrc={appIcon.light}
              darkSrc={appIcon.dark}
              className="w-full h-full"
            />
          </a>
          
          {/* Label */}
          <div className="flex flex-col gap-0.25 grow items-center md:items-start justify-center min-w-0">
            <a href={appStoreUrl} className="hover:opacity-80 transition-opacity duration-200">
              <div className="title2 w-full" style={{ color: 'var(--label-primary)' }}>
                {appName}
              </div>
            </a>
            <a href={appStoreUrl} className="hover:opacity-80 transition-opacity duration-200">
              <div className="body-text w-full" style={{ color: 'var(--label-secondary)' }}>
                {appDescription}
              </div>
            </a>
          </div>
        </div>
        
        {/* App Detail - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block body-text w-full flex-1" style={{ color: 'var(--label-primary)', lineHeight: '1.39' }}>
          {appDetail}
        </div>
        
        {/* App Store Badge - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block w-[120px] h-[40px] overflow-hidden relative shrink-0">
          <a href={appStoreUrl} style={{ display: 'inline-block' }}>
            <img 
              src={`https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/${locale === 'zh' ? 'zh-cn' : 'en-us'}?releaseDate=1755820800`}
              alt={locale === 'zh' ? '立即下载，就在 App Store' : 'Download on the App Store'} 
              style={{ width: '120px', height: '40px', verticalAlign: 'middle', objectFit: 'contain' }} 
            />
          </a>
        </div>
      </div>
      
      {/* Image Section - Visible on all devices, Clickable */}
      <div className="flex items-center md:items-end justify-center pt-6 md:pt-9 px-6 md:px-9 pb-0 relative shrink-0 self-center md:self-end">
        <a href={appStoreUrl} className="hover:scale-[1.025] transition-transform duration-350" style={{ transformOrigin: 'center bottom' }}>
          <ThemedBackgroundImage
            lightSrc={appImage.light}
            darkSrc={appImage.dark}
            className="w-[275px] h-[399px] md:w-[300px] md:h-[435px]"
            backgroundSize="contain"
          />
        </a>
      </div>
    </div>
  );
}
