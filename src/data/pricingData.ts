export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '₹10000',
    description: 'Perfect for small events and intimate gatherings',
    features: [
      '4 hours of coverage',
      '100+ edited photos',
      'Online gallery',
      'Print release',
    ],
  },
  {
    name: 'Standard',
    price: '₹15000',
    description: 'Most popular for weddings and large events',
    features: [
      '8 hours of coverage',
      '300+ edited photos',
      'Online gallery',
      'Print release',
      '2 photographers',
      'Engagement session',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹25000',
    description: 'Ultimate coverage for luxury events',
    features: [
      '12 hours of coverage',
      '500+ edited photos',
      'Online gallery',
      'Print release',
      '3 photographers',
      'Engagement session',
      'Wedding album',
      'Video highlights',
    ],
  },
];