import { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'pooja',
    name: 'Pooja Stores',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23FFF3E0" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E🪔%3C/text%3E%3C/svg%3E',
    subcategories: ['Agarbattis', 'Cotton']
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23FFF8E1" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E🍎%3C/text%3E%3C/svg%3E'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23F1F8E9" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E🥬%3C/text%3E%3C/svg%3E'
  },
  {
    id: 'idols',
    name: 'Idols',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23FCE4EC" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E🕉️%3C/text%3E%3C/svg%3E'
  },
  {
    id: 'flowers',
    name: 'Flowers',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23F3E5F5" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E🌸%3C/text%3E%3C/svg%3E'
  },
  {
    id: 'garlands',
    name: 'Garlands',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"%3E%3Crect fill="%23E8F5E9" width="200" height="150"/%3E%3Ctext x="100" y="85" font-size="60" text-anchor="middle"%3E💐%3C/text%3E%3C/svg%3E'
  }
];

export const products: Product[] = [
  // Pooja Stores - Agarbattis
  {
    id: 'p1',
    name: 'Cycle Pure Agarbatti',
    price: 45,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🧘%3C/text%3E%3C/svg%3E',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '100 sticks',
    description: 'Premium quality incense sticks'
  },
  {
    id: 'p2',
    name: 'Mangaldeep Agarbatti',
    price: 35,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFE0B2" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🧘%3C/text%3E%3C/svg%3E',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '75 sticks',
    description: 'Aromatic incense sticks'
  },
  {
    id: 'p3',
    name: 'Zed Black Agarbatti',
    price: 55,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFECB3" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🧘%3C/text%3E%3C/svg%3E',
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
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF9C4" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🪔%3C/text%3E%3C/svg%3E',
    category: 'pooja',
    subcategory: 'Cotton',
    unit: '100 pcs',
    description: 'Pure cotton diya wicks'
  },
  {
    id: 'p5',
    name: 'Cotton Balls',
    price: 30,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFFDE7" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🪔%3C/text%3E%3C/svg%3E',
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
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF9C4" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍌%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '1 dozen',
    description: 'Fresh ripe bananas'
  },
  {
    id: 'p7',
    name: 'Red Apples',
    price: 120,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFEBEE" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍎%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '1 kg',
    description: 'Crisp and fresh apples'
  },
  {
    id: 'p8',
    name: 'Sweet Mangoes',
    price: 180,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🥭%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '1 kg',
    description: 'Seasonal sweet mangoes'
  },
  {
    id: 'p9',
    name: 'Fresh Oranges',
    price: 80,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍊%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '1 kg',
    description: 'Juicy oranges'
  },
  {
    id: 'p10',
    name: 'Green Grapes',
    price: 90,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23F1F8E9" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍇%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '500g',
    description: 'Seedless green grapes'
  },
  {
    id: 'p11',
    name: 'Pomegranate',
    price: 150,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FCE4EC" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍑%3C/text%3E%3C/svg%3E',
    category: 'fruits',
    unit: '1 kg',
    description: 'Fresh pomegranate'
  },
  
  // Vegetables
  {
    id: 'p12',
    name: 'Fresh Tomatoes',
    price: 30,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFEBEE" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🍅%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '500g',
    description: 'Farm fresh tomatoes'
  },
  {
    id: 'p13',
    name: 'Green Capsicum',
    price: 40,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23E8F5E9" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🫑%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh bell peppers'
  },
  {
    id: 'p14',
    name: 'Potatoes',
    price: 25,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23F5F5DC" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🥔%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Quality potatoes'
  },
  {
    id: 'p15',
    name: 'Fresh Onions',
    price: 35,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF9E6" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🧅%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Fresh red onions'
  },
  {
    id: 'p16',
    name: 'Cauliflower',
    price: 45,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23F5F5F5" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🥦%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '1 pc',
    description: 'Fresh cauliflower'
  },
  {
    id: 'p17',
    name: 'Green Peas',
    price: 60,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23C8E6C9" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🫛%3C/text%3E%3C/svg%3E',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh green peas'
  },
  
  // Idols
  {
    id: 'p18',
    name: 'Ganesha Idol',
    price: 250,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🐘%3C/text%3E%3C/svg%3E',
    category: 'idols',
    unit: '6 inch',
    description: 'Beautiful brass Ganesha idol'
  },
  {
    id: 'p19',
    name: 'Lakshmi Idol',
    price: 300,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FCE4EC" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🪷%3C/text%3E%3C/svg%3E',
    category: 'idols',
    unit: '8 inch',
    description: 'Brass Lakshmi idol'
  },
  {
    id: 'p20',
    name: 'Krishna Idol',
    price: 280,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23E3F2FD" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🪈%3C/text%3E%3C/svg%3E',
    category: 'idols',
    unit: '7 inch',
    description: 'Decorative Krishna idol'
  },
  {
    id: 'p21',
    name: 'Shiva Linga',
    price: 200,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23E8EAF6" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🕉️%3C/text%3E%3C/svg%3E',
    category: 'idols',
    unit: '5 inch',
    description: 'Marble Shiva Linga'
  },
  
  // Flowers
  {
    id: 'p22',
    name: 'Fresh Roses',
    price: 50,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FCE4EC" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🌹%3C/text%3E%3C/svg%3E',
    category: 'flowers',
    unit: '20 pcs',
    description: 'Fresh red roses'
  },
  {
    id: 'p23',
    name: 'Jasmine Flowers',
    price: 30,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23F3E5F5" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🌼%3C/text%3E%3C/svg%3E',
    category: 'flowers',
    unit: '50g',
    description: 'Fragrant jasmine'
  },
  {
    id: 'p24',
    name: 'Marigold Flowers',
    price: 40,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🌻%3C/text%3E%3C/svg%3E',
    category: 'flowers',
    unit: '100g',
    description: 'Orange marigolds'
  },
  {
    id: 'p25',
    name: 'Lotus Flowers',
    price: 80,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23E1F5FE" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🪷%3C/text%3E%3C/svg%3E',
    category: 'flowers',
    unit: '5 pcs',
    description: 'Fresh lotus flowers'
  },
  {
    id: 'p26',
    name: 'Hibiscus Flowers',
    price: 25,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFEBEE" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E🌺%3C/text%3E%3C/svg%3E',
    category: 'flowers',
    unit: '10 pcs',
    description: 'Red hibiscus'
  },
  
  // Garlands
  {
    id: 'p27',
    name: 'Rose Garland',
    price: 150,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FCE4EC" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E💐%3C/text%3E%3C/svg%3E',
    category: 'garlands',
    unit: '3 ft',
    description: 'Fresh rose garland'
  },
  {
    id: 'p28',
    name: 'Jasmine Garland',
    price: 100,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23F3E5F5" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E💐%3C/text%3E%3C/svg%3E',
    category: 'garlands',
    unit: '2 ft',
    description: 'Fragrant jasmine garland'
  },
  {
    id: 'p29',
    name: 'Marigold Garland',
    price: 120,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFF3E0" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E💐%3C/text%3E%3C/svg%3E',
    category: 'garlands',
    unit: '4 ft',
    description: 'Traditional marigold garland'
  },
  {
    id: 'p30',
    name: 'Mixed Flower Garland',
    price: 180,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23E8F5E9" width="200" height="200"/%3E%3Ctext x="100" y="115" font-size="80" text-anchor="middle"%3E💐%3C/text%3E%3C/svg%3E',
    category: 'garlands',
    unit: '3 ft',
    description: 'Beautiful mixed flower garland'
  }
];
