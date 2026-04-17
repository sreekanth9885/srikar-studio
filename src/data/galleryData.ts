export interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'Wedding', title: 'Wedding Ceremony' },
  { id: 2, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', category: 'Wedding', title: 'Bride Portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'Wedding', title: 'Wedding Couple' },
  { id: 4, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800', category: 'Events', title: 'Birthday Celebration' },
  { id: 5, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', category: 'Events', title: 'Corporate Event' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', category: 'Events', title: 'Party Moments' },
  { id: 7, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', category: 'Portraits', title: 'Fashion Portrait' },
  { id: 8, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', category: 'Portraits', title: 'Studio Portrait' },
  { id: 9, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', category: 'Portraits', title: 'Natural Light Portrait' },
  { id: 10, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', category: 'Pre-Wedding', title: 'Pre-Wedding Shoot' },
  { id: 11, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', category: 'Pre-Wedding', title: 'Engagement Session' },
  { id: 12, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', category: 'Wedding', title: 'Wedding Reception' },
];