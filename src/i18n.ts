import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export default getRequestConfig(async ({ requestLocale }) => {
  // This function gets called on every request
  const locale = (await requestLocale) || defaultLocale;
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

