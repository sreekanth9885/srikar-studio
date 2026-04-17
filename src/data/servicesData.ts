export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capturing your special day with timeless elegance and emotional moments.',
    icon: '💑',
  },
  {
    id: 2,
    title: 'Pre-Wedding Shoots',
    description: 'Romantic and creative sessions celebrating your love story before the big day.',
    icon: '📸',
  },
  {
    id: 3,
    title: 'Birthday Events',
    description: 'Memorable coverage of birthday celebrations, from intimate to grand parties.',
    icon: '🎂',
  },
  {
    id: 4,
    title: 'Portrait Shoots',
    description: 'Professional portraits for individuals, families, or professional headshots.',
    icon: '👤',
  },
  {
    id: 5,
    title: 'Video Editing',
    description: 'Cinematic video editing services to bring your memories to life.',
    icon: '🎬',
  },
];