export type Product = {
  id: string;
  name: string;
  category: 'Seating' | 'Storage' | 'Tables' | 'Beds';
  price: number;
  material: string;
  color: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  stock: boolean;
  description: string;
  dimensions: string;
  care: string;
  colors: string[];
};

const chair = '/images/sumi-chair.png';
const storage = '/images/nara-sideboard.png';
const room = '/images/kanso-hero.png';
const diningTable = '/images/ma-dining-table.png';
const bed = '/images/tsuki-platform-bed.png';

export const products: Product[] = [
  {
    id: 'sumi-lounge-chair',
    name: 'Sumi Lounge Chair',
    category: 'Seating',
    price: 1890,
    material: 'Smoked Oak',
    color: 'Sumi',
    image: chair,
    badge: 'New',
    rating: 4.9,
    reviews: 48,
    stock: true,
    description:
      'A low, sculptural chair with a generous woven seat. Sumi balances a grounded silhouette with joinery designed to be seen.',
    dimensions: 'W 72 × D 78 × H 71 cm',
    care: 'Dust with a soft dry cloth. Blot spills immediately. Avoid direct heat and prolonged sunlight.',
    colors: ['Sumi', 'Natural', 'Indigo'],
  },
  {
    id: 'aoi-reading-chair',
    name: 'Aoi Reading Chair',
    category: 'Seating',
    price: 1650,
    material: 'White Oak',
    color: 'Natural',
    image: chair,
    rating: 4.8,
    reviews: 31,
    stock: true,
    description: 'A composed reading chair with a hand-shaped back and resilient paper-cord seat.',
    dimensions: 'W 68 × D 72 × H 74 cm',
    care: 'Vacuum woven surfaces gently. Wipe oak with a barely damp cloth.',
    colors: ['Natural', 'Sumi'],
  },
  {
    id: 'mori-occasional-chair',
    name: 'Mori Occasional Chair',
    category: 'Seating',
    price: 1490,
    material: 'Ash',
    color: 'Natural',
    image: chair,
    rating: 4.7,
    reviews: 22,
    stock: true,
    description:
      'Light in profile and quietly supportive, Mori brings hand-finished ash into any corner.',
    dimensions: 'W 65 × D 70 × H 72 cm',
    care: 'Clean with a dry lint-free cloth. Do not use abrasive cleaners.',
    colors: ['Natural', 'Clay'],
  },
  {
    id: 'yugen-armchair',
    name: 'Yūgen Armchair',
    category: 'Seating',
    price: 2190,
    material: 'Walnut',
    color: 'Sumi',
    image: chair,
    badge: 'Limited',
    rating: 5,
    reviews: 16,
    stock: false,
    description: 'Deep walnut and a handwoven seat give Yūgen a rich, contemplative character.',
    dimensions: 'W 74 × D 80 × H 73 cm',
    care: 'Keep away from strong sunlight. Refresh timber twice yearly with furniture oil.',
    colors: ['Sumi'],
  },
  {
    id: 'nara-sideboard',
    name: 'Nara Sideboard',
    category: 'Storage',
    price: 3290,
    material: 'White Oak',
    color: 'Natural',
    image: storage,
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 64,
    stock: true,
    description:
      'Rounded edges and silent sliding doors give this generous sideboard a gentle presence.',
    dimensions: 'W 168 × D 44 × H 72 cm',
    care: 'Wipe with a soft damp cloth, then dry. Use coasters beneath hot or wet objects.',
    colors: ['Natural', 'Sumi'],
  },
  {
    id: 'kumo-media-console',
    name: 'Kumo Media Console',
    category: 'Storage',
    price: 2890,
    material: 'White Oak',
    color: 'Natural',
    image: storage,
    rating: 4.8,
    reviews: 39,
    stock: true,
    description:
      'Low storage with ventilated sliding panels, shaped to keep technology quietly out of sight.',
    dimensions: 'W 180 × D 42 × H 54 cm',
    care: 'Dust regularly. Avoid silicone-based polishes.',
    colors: ['Natural', 'Indigo'],
  },
  {
    id: 'hako-low-cabinet',
    name: 'Hako Low Cabinet',
    category: 'Storage',
    price: 2450,
    material: 'Ash',
    color: 'Clay',
    image: storage,
    rating: 4.6,
    reviews: 18,
    stock: true,
    description:
      'A compact cabinet inspired by traditional storage chests and contemporary small-space living.',
    dimensions: 'W 124 × D 40 × H 68 cm',
    care: 'Use a soft cloth and mild soap solution for marks. Dry immediately.',
    colors: ['Clay', 'Natural'],
  },
  {
    id: 'rei-entry-cabinet',
    name: 'Rei Entry Cabinet',
    category: 'Storage',
    price: 1980,
    material: 'Smoked Oak',
    color: 'Sumi',
    image: storage,
    rating: 4.7,
    reviews: 27,
    stock: true,
    description:
      'A narrow cabinet for calm arrivals, with adjustable shelves and recessed handles.',
    dimensions: 'W 92 × D 34 × H 86 cm',
    care: 'Dust weekly. Protect from standing water and direct heat.',
    colors: ['Sumi', 'Natural'],
  },
  {
    id: 'ishi-coffee-table',
    name: 'Ishi Coffee Table',
    category: 'Tables',
    price: 1760,
    material: 'White Oak',
    color: 'Natural',
    image: room,
    badge: 'New',
    rating: 4.9,
    reviews: 43,
    stock: true,
    description:
      'Softened geometry and substantial legs make Ishi a quiet anchor for the living room.',
    dimensions: 'W 128 × D 70 × H 34 cm',
    care: 'Use coasters and trivets. Clean spills promptly with a dry cloth.',
    colors: ['Natural', 'Sumi'],
  },
  {
    id: 'sora-low-table',
    name: 'Sora Low Table',
    category: 'Tables',
    price: 1420,
    material: 'Ash',
    color: 'Natural',
    image: room,
    rating: 4.7,
    reviews: 29,
    stock: true,
    description:
      'A low table with balanced proportions, made for tea, books, and unhurried evenings.',
    dimensions: 'W 110 × D 62 × H 31 cm',
    care: 'Avoid abrasive cleaners. Tighten fittings after the first month of use.',
    colors: ['Natural', 'Clay'],
  },
  {
    id: 'enso-side-table',
    name: 'Ensō Side Table',
    category: 'Tables',
    price: 790,
    material: 'Walnut',
    color: 'Sumi',
    image: room,
    rating: 4.8,
    reviews: 52,
    stock: true,
    description:
      'A compact circular side table whose offset base creates a subtle sense of movement.',
    dimensions: 'Ø 46 × H 48 cm',
    care: 'Wipe clean with a soft dry cloth. Oil yearly if the surface appears dry.',
    colors: ['Sumi', 'Natural'],
  },
  {
    id: 'ma-dining-table',
    name: 'Ma Dining Table',
    category: 'Tables',
    price: 3890,
    material: 'White Oak',
    color: 'Natural',
    image: diningTable,
    rating: 4.9,
    reviews: 34,
    stock: true,
    description:
      'Ma leaves room for conversation with a slender top and reassuring solid-oak frame.',
    dimensions: 'W 200 × D 92 × H 74 cm',
    care: 'Use placemats under tableware. Wipe spills immediately and dry thoroughly.',
    colors: ['Natural', 'Sumi'],
  },
  {
    id: 'tsuki-platform-bed',
    name: 'Tsuki Platform Bed',
    category: 'Beds',
    price: 3590,
    material: 'White Oak',
    color: 'Natural',
    image: bed,
    badge: 'New',
    rating: 4.9,
    reviews: 21,
    stock: true,
    description:
      'A low, grounded bed with softened oak edges and a quiet headboard, designed to make rest feel spacious.',
    dimensions: 'W 190 × D 218 × H 76 cm · Queen mattress',
    care: 'Dust timber with a soft dry cloth. Air linen regularly and avoid placing the frame in direct sunlight.',
    colors: ['Natural', 'Sumi'],
  },
];

export const formatPrice = (price: number) => `RM ${price.toLocaleString('en-MY')}`;
export const getProduct = (id: string) => products.find((product) => product.id === id);
