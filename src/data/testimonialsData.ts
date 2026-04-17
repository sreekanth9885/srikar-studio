export interface Testimonial {
  id: number;
  name: string;
  role: string;
  photo: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anusha Bethi',
    role: 'Wedding Client',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    comment: 'Absolutely amazing work! The photos captured every precious moment of our wedding day. Professional, creative, and such a joy to work with.',
  },
  {
    id: 2,
    name: 'Srikanth Bethi',
    role: 'Portrait Client',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    comment: 'Best photography experience I\'ve ever had. The team made me feel comfortable and the results were stunning. Highly recommended!',
  },
  {
    id: 3,
    name: 'Sindhu Bethi',
    role: 'Event Planner',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    comment: 'We\'ve worked with many photographers, but this studio stands out. Their attention to detail and artistic vision is unmatched.',
  },
  {
    id: 4,
    name: 'Srikar Merugu',
    role: 'Corporate Client',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 4,
    comment: 'Professional team, great communication, and fantastic results. Will definitely use their services again.',
  },
];