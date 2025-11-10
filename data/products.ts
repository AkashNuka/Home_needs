import { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'pooja',
    name: 'Pooja Stores',
    image: 'https://images.unsplash.com/photo-1604608672516-f1b9b1a0e8c0?w=400&h=300&fit=crop',
    subcategories: ['Agarbattis', 'Cotton']
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop'
  },
  {
    id: 'idols',
    name: 'Idols',
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=300&fit=crop'
  },
  {
    id: 'flowers',
    name: 'Flowers',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop'
  },
  {
    id: 'garlands',
    name: 'Garlands',
    image: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=300&fit=crop'
  }
];

export const products: Product[] = [
  // Pooja Stores - Agarbattis
  {
    id: 'p1',
    name: 'Cycle Pure Agarbatti',
    price: 45,
    image: 'https://images.unsplash.com/photo-1604608672516-f1b9b1a0e8c0?w=300&h=300&fit=crop',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '100 sticks',
    description: 'Premium quality incense sticks'
  },
  {
    id: 'p2',
    name: 'Mangaldeep Agarbatti',
    price: 35,
    image: 'https://images.unsplash.com/photo-1583314965950-cd54a8b6db84?w=300&h=300&fit=crop',
    category: 'pooja',
    subcategory: 'Agarbattis',
    unit: '75 sticks',
    description: 'Aromatic incense sticks'
  },
  {
    id: 'p3',
    name: 'Zed Black Agarbatti',
    price: 55,
    image: 'https://images.unsplash.com/photo-1602524206684-c8d3c0e71d37?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=300&fit=crop',
    category: 'pooja',
    subcategory: 'Cotton',
    unit: '100 pcs',
    description: 'Pure cotton diya wicks'
  },
  {
    id: 'p5',
    name: 'Cotton Balls',
    price: 30,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '1 dozen',
    description: 'Fresh ripe bananas'
  },
  {
    id: 'p7',
    name: 'Red Apples',
    price: 120,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '1 kg',
    description: 'Crisp and fresh apples'
  },
  {
    id: 'p8',
    name: 'Sweet Mangoes',
    price: 180,
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '1 kg',
    description: 'Seasonal sweet mangoes'
  },
  {
    id: 'p9',
    name: 'Fresh Oranges',
    price: 80,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '1 kg',
    description: 'Juicy oranges'
  },
  {
    id: 'p10',
    name: 'Green Grapes',
    price: 90,
    image: 'https://images.unsplash.com/photo-1599819177331-4e9f02c6d13d?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '500g',
    description: 'Seedless green grapes'
  },
  {
    id: 'p11',
    name: 'Pomegranate',
    price: 150,
    image: 'https://images.unsplash.com/photo-1570039912-4a46d8f93391?w=300&h=300&fit=crop',
    category: 'fruits',
    unit: '1 kg',
    description: 'Fresh pomegranate'
  },
  
  // Vegetables
  {
    id: 'p12',
    name: 'Fresh Tomatoes',
    price: 30,
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '500g',
    description: 'Farm fresh tomatoes'
  },
  {
    id: 'p13',
    name: 'Green Capsicum',
    price: 40,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh bell peppers'
  },
  {
    id: 'p14',
    name: 'Potatoes',
    price: 25,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Quality potatoes'
  },
  {
    id: 'p15',
    name: 'Fresh Onions',
    price: 35,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '1 kg',
    description: 'Fresh red onions'
  },
  {
    id: 'p16',
    name: 'Cauliflower',
    price: 45,
    image: 'https://images.unsplash.com/photo-1568584711271-61edd2b6d5ce?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '1 pc',
    description: 'Fresh cauliflower'
  },
  {
    id: 'p17',
    name: 'Green Peas',
    price: 60,
    image: 'https://images.unsplash.com/photo-1452252717670-5cc3f4d52b3e?w=300&h=300&fit=crop',
    category: 'vegetables',
    unit: '250g',
    description: 'Fresh green peas'
  },
  
  // Idols
  {
    id: 'p18',
    name: 'Ganesha Idol',
    price: 250,
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=300&h=300&fit=crop',
    category: 'idols',
    unit: '6 inch',
    description: 'Beautiful brass Ganesha idol'
  },
  {
    id: 'p19',
    name: 'Lakshmi Idol',
    price: 300,
    image: 'https://images.unsplash.com/photo-1582230999221-f50cfa649a1d?w=300&h=300&fit=crop',
    category: 'idols',
    unit: '8 inch',
    description: 'Brass Lakshmi idol'
  },
  {
    id: 'p20',
    name: 'Krishna Idol',
    price: 280,
    image: 'https://images.unsplash.com/photo-1595435742656-5272d0b3e430?w=300&h=300&fit=crop',
    category: 'idols',
    unit: '7 inch',
    description: 'Decorative Krishna idol'
  },
  {
    id: 'p21',
    name: 'Shiva Linga',
    price: 200,
    image: 'https://images.unsplash.com/photo-1582142306909-195724d33e1e?w=300&h=300&fit=crop',
    category: 'idols',
    unit: '5 inch',
    description: 'Marble Shiva Linga'
  },
  
  // Flowers
  {
    id: 'p22',
    name: 'Fresh Roses',
    price: 50,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop',
    category: 'flowers',
    unit: '20 pcs',
    description: 'Fresh red roses'
  },
  {
    id: 'p23',
    name: 'Jasmine Flowers',
    price: 30,
    image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=300&h=300&fit=crop',
    category: 'flowers',
    unit: '50g',
    description: 'Fragrant jasmine'
  },
  {
    id: 'p24',
    name: 'Marigold Flowers',
    price: 40,
    image: 'https://images.unsplash.com/photo-1563350006-d8f68e1e50b3?w=300&h=300&fit=crop',
    category: 'flowers',
    unit: '100g',
    description: 'Orange marigolds'
  },
  {
    id: 'p25',
    name: 'Lotus Flowers',
    price: 80,
    image: 'https://images.unsplash.com/photo-1508766206392-8e638d7290f7?w=300&h=300&fit=crop',
    category: 'flowers',
    unit: '5 pcs',
    description: 'Fresh lotus flowers'
  },
  {
    id: 'p26',
    name: 'Hibiscus Flowers',
    price: 25,
    image: 'https://images.unsplash.com/photo-1589122925089-0319e7f61fdd?w=300&h=300&fit=crop',
    category: 'flowers',
    unit: '10 pcs',
    description: 'Red hibiscus'
  },
  
  // Garlands
  {
    id: 'p27',
    name: 'Rose Garland',
    price: 150,
    image: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=300&h=300&fit=crop',
    category: 'garlands',
    unit: '3 ft',
    description: 'Fresh rose garland'
  },
  {
    id: 'p28',
    name: 'Jasmine Garland',
    price: 100,
    image: 'https://images.unsplash.com/photo-1556314073-531d94a4c569?w=300&h=300&fit=crop',
    category: 'garlands',
    unit: '2 ft',
    description: 'Fragrant jasmine garland'
  },
  {
    id: 'p29',
    name: 'Marigold Garland',
    price: 120,
    image: 'https://images.unsplash.com/photo-1604950497224-a1df1151a04c?w=300&h=300&fit=crop',
    category: 'garlands',
    unit: '4 ft',
    description: 'Traditional marigold garland'
  },
  {
    id: 'p30',
    name: 'Mixed Flower Garland',
    price: 180,
    image: 'https://images.unsplash.com/photo-1529610523989-c42f9c1e5b23?w=300&h=300&fit=crop',
    category: 'garlands',
    unit: '3 ft',
    description: 'Beautiful mixed flower garland'
  }
];
