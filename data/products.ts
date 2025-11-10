import { Category, Product } from '@/types';

// Generate placeholder image data URI
const generatePlaceholder = (color: string, text: string) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3E${text}%3C/text%3E%3C/svg%3E`;
};

export const categories: Category[] = [
  {
    id: 'pooja',
    name: 'Pooja Stores',
    image: generatePlaceholder('%23f59e0b', 'Pooja%20Stores'),
    subcategories: ['Agarbattis', 'Cotton']
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: generatePlaceholder('%2310b981', 'Fruits')
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: generatePlaceholder('%2334d399', 'Vegetables')
  },
  {
    id: 'idols',
    name: 'Idols',
    image: generatePlaceholder('%238b5cf6', 'Idols')
  },
  {
    id: 'flowers',
    name: 'Flowers',
    image: generatePlaceholder('%23ec4899', 'Flowers')
  },
  {
    id: 'garlands',
    name: 'Garlands',
    image: generatePlaceholder('%23f97316', 'Garlands')
  }
];

export const products: Product[] = [
  // Pooja Stores - Agarbattis
  {
    id: 'p1',
    name: 'Cycle Pure Agarbatti',
    price: 45,
    image: generatePlaceholder('%23f59e0b', 'Agarbatti'),
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '100 sticks',
    description: 'Premium quality incense sticks'
  },
  {
    id: 'p2',
    name: 'Mangaldeep Agarbatti',
    price: 35,
    image: generatePlaceholder('%23f59e0b', 'Agarbatti'),
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '75 sticks',
    description: 'Aromatic incense sticks'
  },
  {
    id: 'p3',
    name: 'Zed Black Agarbatti',
    price: 55,
    image: generatePlaceholder('%23f59e0b', 'Agarbatti'),
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '120 sticks',
    description: 'Long lasting fragrance'
  },
  
  // Pooja Stores - Cotton
  {
    id: 'p4',
    name: 'Pure Cotton Wicks',
    price: 25,
    image: generatePlaceholder('%23fbbf24', 'Cotton'),
    category: 'pooja',
    subcategory: 'Cotton',
    unit: '100 pcs',
    description: 'Pure cotton diya wicks'
  },
  {
    id: 'p5',
    name: 'Cotton Balls',
    price: 30,
    image: generatePlaceholder('%23fbbf24', 'Cotton'),
    category: 'pooja',
    subcategory: 'Cotton',
    unit: '200g',
    description: 'Soft cotton balls for puja'
  },
  
  // Fruits
  {
    id: 'p6',
    name: 'Fresh Bananas',
    price: 40,
    image: generatePlaceholder('%23fde047', 'Bananas'),
    category: 'fruits',
    unit: '1 dozen',
    description: 'Fresh ripe bananas'
  },
  {
    id: 'p7',
    name: 'Red Apples',
    price: 120,
    image: generatePlaceholder('%23dc2626', 'Apples'),
    category: 'fruits',
    unit: '1 kg',
    description: 'Crisp and fresh apples'
  },
  {
    id: 'p8',
    name: 'Sweet Mangoes',
    price: 180,
    image: generatePlaceholder('%23fb923c', 'Mangoes'),
    category: 'fruits',
    unit: '1 kg',
    description: 'Seasonal sweet mangoes'
  },
  {
    id: 'p9',
    name: 'Fresh Oranges',
    price: 80,
    image: generatePlaceholder('%23f97316', 'Oranges'),
    category: 'fruits',
    unit: '1 kg',
    description: 'Juicy oranges'
  },
  {
    id: 'p10',
    name: 'Green Grapes',
    price: 90,
    image: generatePlaceholder('%2384cc16', 'Grapes'),
    category: 'fruits',
    unit: '500g',
    description: 'Seedless green grapes'
  },
  {
    id: 'p11',
    name: 'Pomegranate',
    price: 150,
    image: generatePlaceholder('%23be123c', 'Pomegranate'),
    category: 'fruits',
    unit: '1 kg',
    description: 'Fresh pomegranate'
  },
  
  // Vegetables
  {
    id: 'p12',
    name: 'Fresh Tomatoes',
    price: 30,
    image: generatePlaceholder('%23dc2626', 'Tomatoes'),
    category: 'vegetables',
    unit: '500g',
    description: 'Farm fresh tomatoes'
  },
  {
    id: 'p13',
    name: 'Green Capsicum',
    price: 40,
    image: generatePlaceholder('%2322c55e', 'Capsicum'),
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh bell peppers'
  },
  {
    id: 'p14',
    name: 'Potatoes',
    price: 25,
    image: generatePlaceholder('%23a16207', 'Potatoes'),
    category: 'vegetables',
    unit: '1 kg',
    description: 'Quality potatoes'
  },
  {
    id: 'p15',
    name: 'Fresh Onions',
    price: 35,
    image: generatePlaceholder('%23a855f7', 'Onions'),
    category: 'vegetables',
    unit: '1 kg',
    description: 'Fresh red onions'
  },
  {
    id: 'p16',
    name: 'Cauliflower',
    price: 45,
    image: generatePlaceholder('%23f5f5f4', 'Cauliflower'),
    category: 'vegetables',
    unit: '1 pc',
    description: 'Fresh cauliflower'
  },
  {
    id: 'p17',
    name: 'Green Peas',
    price: 60,
    image: generatePlaceholder('%2316a34a', 'Peas'),
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh green peas'
  },
  
  // Idols
  {
    id: 'p18',
    name: 'Ganesha Idol',
    price: 250,
    image: generatePlaceholder('%23f59e0b', 'Ganesha'),
    category: 'idols',
    unit: '6 inch',
    description: 'Beautiful brass Ganesha idol'
  },
  {
    id: 'p19',
    name: 'Lakshmi Idol',
    price: 300,
    image: generatePlaceholder('%23f59e0b', 'Lakshmi'),
    category: 'idols',
    unit: '8 inch',
    description: 'Brass Lakshmi idol'
  },
  {
    id: 'p20',
    name: 'Krishna Idol',
    price: 280,
    image: generatePlaceholder('%232563eb', 'Krishna'),
    category: 'idols',
    unit: '7 inch',
    description: 'Decorative Krishna idol'
  },
  {
    id: 'p21',
    name: 'Shiva Linga',
    price: 200,
    image: generatePlaceholder('%236b7280', 'Shiva'),
    category: 'idols',
    unit: '5 inch',
    description: 'Marble Shiva Linga'
  },
  
  // Flowers
  {
    id: 'p22',
    name: 'Fresh Roses',
    price: 50,
    image: generatePlaceholder('%23f43f5e', 'Roses'),
    category: 'flowers',
    unit: '20 pcs',
    description: 'Fresh red roses'
  },
  {
    id: 'p23',
    name: 'Jasmine Flowers',
    price: 30,
    image: generatePlaceholder('%23fef3c7', 'Jasmine'),
    category: 'flowers',
    unit: '50g',
    description: 'Fragrant jasmine'
  },
  {
    id: 'p24',
    name: 'Marigold Flowers',
    price: 40,
    image: generatePlaceholder('%23fb923c', 'Marigold'),
    category: 'flowers',
    unit: '100g',
    description: 'Orange marigolds'
  },
  {
    id: 'p25',
    name: 'Lotus Flowers',
    price: 80,
    image: generatePlaceholder('%23ec4899', 'Lotus'),
    category: 'flowers',
    unit: '5 pcs',
    description: 'Fresh lotus flowers'
  },
  {
    id: 'p26',
    name: 'Hibiscus Flowers',
    price: 25,
    image: generatePlaceholder('%23dc2626', 'Hibiscus'),
    category: 'flowers',
    unit: '10 pcs',
    description: 'Red hibiscus'
  },
  
  // Garlands
  {
    id: 'p27',
    name: 'Rose Garland',
    price: 150,
    image: generatePlaceholder('%23f43f5e', 'Rose%20Garland'),
    category: 'garlands',
    unit: '3 ft',
    description: 'Fresh rose garland'
  },
  {
    id: 'p28',
    name: 'Jasmine Garland',
    price: 100,
    image: generatePlaceholder('%23fef3c7', 'Jasmine%20Garland'),
    category: 'garlands',
    unit: '2 ft',
    description: 'Fragrant jasmine garland'
  },
  {
    id: 'p29',
    name: 'Marigold Garland',
    price: 120,
    image: generatePlaceholder('%23fb923c', 'Marigold%20Garland'),
    category: 'garlands',
    unit: '4 ft',
    description: 'Traditional marigold garland'
  },
  {
    id: 'p30',
    name: 'Mixed Flower Garland',
    price: 180,
    image: generatePlaceholder('%23a855f7', 'Mixed%20Garland'),
    category: 'garlands',
    unit: '3 ft',
    description: 'Beautiful mixed flower garland'
  }
];
