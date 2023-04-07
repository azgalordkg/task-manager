import { Chat, Heart, Image, Send, ShieldDone, Star } from '@/components/icons';

export const SETTINGS_LIST = [
  { navigationName: 'Language', prependIcon: Chat, title: 'TAGS' },
  { navigationName: 'TagsSettings', prependIcon: Image, title: 'THEME' },
  { navigationName: 'AppIcon', prependIcon: Heart, title: 'APP_ICON' },
  { navigationName: 'ContactUs', prependIcon: Send, title: 'CONTACT_US' },
  { navigationName: 'RateUs', prependIcon: Star, title: 'RATE_US' },
  { navigationName: 'AboutUs', prependIcon: ShieldDone, title: 'ABOUT_US' },
];
