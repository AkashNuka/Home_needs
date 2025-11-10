import { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'pooja',
    name: 'Pooja Stores',
    image: 'https://picsum.photos/seed/pooja/400/300',
    subcategories: ['Agarbattis', 'Cotton']
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'https://picsum.photos/seed/fruits/400/300'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://picsum.photos/seed/vegetables/400/300'
  },
  {
    id: 'idols',
    name: 'Idols',
    image: 'https://picsum.photos/seed/idols/400/300'
  },
  {
    id: 'flowers',
    name: 'Flowers',
    image: 'https://picsum.photos/seed/flowers/400/300'
  },
  {
    id: 'garlands',
    name: 'Garlands',
    image: 'https://picsum.photos/seed/garlands/400/300'
  }
];

export const products: Product[] = [
  // Pooja Stores - Agarbattis
  {
    id: 'p1',
    name: 'Cycle Pure Agarbatti',
    price: 45,
    image: 'https://picsum.photos/seed/agarbatti1/400/400',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '100 sticks',
    description: 'Premium quality incense sticks'
  },
  {
    id: 'p2',
    name: 'Mangaldeep Agarbatti',
    price: 35,
    image: 'https://picsum.photos/seed/agarbatti2/400/400',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '75 sticks',
    description: 'Aromatic incense sticks'
  },
  {
    id: 'p3',
    name: 'Zed Black Agarbatti',
    price: 55,
    image: 'https://picsum.photos/seed/agarbatti3/400/400',
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
    image: 'https://picsum.photos/seed/cotton1/400/400',
    category: 'pooja',
    subcategory: 'Cotton',
    unit: '100 pcs',
    description: 'Pure cotton diya wicks'
  },
  {
    id: 'p5',
    name: 'Cotton Balls',
    price: 30,
    image: 'https://picsum.photos/seed/cotton2/400/400',
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
    image: 'https://picsum.photos/seed/banana/400/400',
    category: 'fruits',
    unit: '1 dozen',
    description: 'Fresh ripe bananas'
  },
  {
    id: 'p7',
    name: 'Red Apples',
    price: 120,
    image: 'https://picsum.photos/seed/apple/400/400',
    category: 'fruits',
    unit: '1 kg',
    description: 'Crisp and fresh apples'
  },
  {
    id: 'p8',
    name: 'Sweet Mangoes',
    price: 180,
    image: 'https://picsum.photos/seed/mango/400/400',
    category: 'fruits',
    unit: '1 kg',
    description: 'Seasonal sweet mangoes'
  },
  {
    id: 'p9',
    name: 'Fresh Oranges',
    price: 80,
    image: 'https://picsum.photos/seed/orange/400/400',
    category: 'fruits',
    unit: '1 kg',
    description: 'Juicy oranges'
  },
  {
    id: 'p10',
    name: 'Green Grapes',
    price: 90,
    image: 'https://picsum.photos/seed/grapes/400/400',
    category: 'fruits',
    unit: '500g',
    description: 'Seedless green grapes'
  },
  {
    id: 'p11',
    name: 'Pomegranate',
    price: 150,
    image: 'https://picsum.photos/seed/pomegranate/400/400',
    category: 'fruits',
    unit: '1 kg',
    description: 'Fresh pomegranate'
  },
  
  // Vegetables
  {
    id: 'p12',
    name: 'Fresh Tomatoes',
    price: 30,
    image: 'https://picsum.photos/seed/tomato/400/400',
    category: 'vegetables',
    unit: '500g',
    description: 'Farm fresh tomatoes'
  },
  {
    id: 'p13',
    name: 'Green Capsicum',
    price: 40,
    image: 'https://picsum.photos/seed/capsicum/400/400',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh bell peppers'
  },
  {
    id: 'p14',
    name: 'Potatoes',
    price: 25,
    image: 'https://picsum.photos/seed/potato/400/400',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Quality potatoes'
  },
  {
    id: 'p15',
    name: 'Fresh Onions',
    price: 35,
    image: 'https://picsum.photos/seed/onion/400/400',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Fresh red onions'
  },
  {
    id: 'p16',
    name: 'Cauliflower',
    price: 45,
    image: 'https://picsum.photos/seed/cauliflower/400/400',
    category: 'vegetables',
    unit: '1 pc',
    description: 'Fresh cauliflower'
  },
  {
    id: 'p17',
    name: 'Green Peas',
    price: 60,
    image: 'https://picsum.photos/seed/peas/400/400',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh green peas'
  },
  
  // Idols
  {
    id: 'p18',
    name: 'Ganesha Idol',
    price: 250,
    image: 'https://picsum.photos/seed/ganesha/400/400',
    category: 'idols',
    unit: '6 inch',
    description: 'Beautiful brass Ganesha idol'
  },
  {
    id: 'p19',
    name: 'Lakshmi Idol',
    price: 300,
    image: 'https://picsum.photos/seed/lakshmi/400/400',
    category: 'idols',
    unit: '8 inch',
    description: 'Brass Lakshmi idol'
  },
  {
    id: 'p20',
    name: 'Krishna Idol',
    price: 280,
    image: 'https://picsum.photos/seed/krishna/400/400',
    category: 'idols',
    unit: '7 inch',
    description: 'Decorative Krishna idol'
  },
  {
    id: 'p21',
    name: 'Shiva Linga',
    price: 200,
    image: 'https://picsum.photos/seed/shiva/400/400',
    category: 'idols',
    unit: '5 inch',
    description: 'Marble Shiva Linga'
  },
  
  // Flowers
  {
    id: 'p22',
    name: 'Fresh Roses',
    price: 50,
    image: 'https://picsum.photos/seed/rose/400/400',
    category: 'flowers',
    unit: '20 pcs',
    description: 'Fresh red roses'
  },
  {
    id: 'p23',
    name: 'Jasmine Flowers',
    price: 30,
    image: 'https://picsum.photos/seed/jasmine/400/400',
    category: 'flowers',
    unit: '50g',
    description: 'Fragrant jasmine'
  },
  {
    id: 'p24',
    name: 'Marigold Flowers',
    price: 40,
    image: 'https://picsum.photos/seed/marigold/400/400',
    category: 'flowers',
    unit: '100g',
    description: 'Orange marigolds'
  },
  {
    id: 'p25',
    name: 'Lotus Flowers',
    price: 80,
    image: 'https://picsum.photos/seed/lotus/400/400',
    category: 'flowers',
    unit: '5 pcs',
    description: 'Fresh lotus flowers'
  },
  {
    id: 'p26',
    name: 'Hibiscus Flowers',
    price: 25,
    image: 'https://picsum.photos/seed/hibiscus/400/400',
    category: 'flowers',
    unit: '10 pcs',
    description: 'Red hibiscus'
  },
  
  // Garlands
  {
    id: 'p27',
    name: 'Rose Garland',
    price: 150,
    image: 'https://picsum.photos/seed/rosegarland/400/400',
    category: 'garlands',
    unit: '3 ft',
    description: 'Fresh rose garland'
  },
  {
    id: 'p28',
    name: 'Jasmine Garland',
    price: 100,
    image: 'https://picsum.photos/seed/jasminegarland/400/400',
    category: 'garlands',
    unit: '2 ft',
    description: 'Fragrant jasmine garland'
  },
  {
    id: 'p29',
    name: 'Marigold Garland',
    price: 120,
    image: 'https://picsum.photos/seed/marigoldgarland/400/400',
    category: 'garlands',
    unit: '4 ft',
    description: 'Traditional marigold garland'
  },
  {
    id: 'p30',
    name: 'Mixed Flower Garland',
    price: 180,
    image: 'https://picsum.photos/seed/mixedgarland/400/400',
    category: 'garlands',
    unit: '3 ft',
    description: 'Beautiful mixed flower garland'
  }
];
