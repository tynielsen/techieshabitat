import type { DeskCategory } from '../types';

export const deskItems: DeskCategory[] = [
  {
    category: 'Ergonomics',
    items: [
      { name: 'Adjustable Standing Desk', benefit: 'Reduces back pain, improves posture', price: '$300-800' },
      { name: 'Ergonomic Chair', benefit: 'Lumbar support, reduces strain', price: '$200-600' },
      { name: 'Monitor Arm', benefit: 'Eye-level positioning, reduces neck strain', price: '$80-200' },
      { name: 'Keyboard Tray', benefit: 'Proper wrist alignment', price: '$40-100' },
    ],
  },
  {
    category: 'Health Protection',
    items: [
      { name: 'Blue Light Glasses', benefit: 'Reduces eye strain and improves sleep', price: '$20-80' },
      { name: 'Desk Lamp (5000K)', benefit: 'Reduces eye fatigue', price: '$30-100' },
      { name: 'Footrest', benefit: 'Improves circulation, posture', price: '$20-50' },
      { name: 'Wrist Rest', benefit: 'Prevents carpal tunnel', price: '$15-40' },
    ],
  },
  {
    category: 'Productivity',
    items: [
      { name: 'Noise-Cancelling Headphones', benefit: 'Focus in open offices', price: '$150-400' },
      { name: 'Mechanical Keyboard', benefit: 'Typing comfort and speed', price: '$80-200' },
      { name: 'External Monitor(s)', benefit: 'Increased screen real estate', price: '$200-600' },
      { name: 'Cable Management Kit', benefit: 'Organized, clean workspace', price: '$15-40' },
    ],
  },
];
