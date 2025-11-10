# 🏪 HomeNeeds - Quick Commerce Website

A modern quick commerce website for daily essentials including pooja items, fruits, vegetables, flowers, idols, and garlands. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🛍️ **Category-wise Product Display** - Organized like Blinkit UI
- ⚡ **Direct Add to Cart** - No product preview needed
- 🛒 **Shopping Cart** - Add, remove, and update quantities
- 📱 **WhatsApp Integration** - Orders sent directly to WhatsApp
- 💾 **Local Storage** - Cart persists across sessions
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Attractive UI** - Modern and clean design

## 🗂️ Categories

1. **Pooja Stores**
   - Agarbattis (Incense sticks)
   - Cotton (Wicks & balls)
2. **Fruits** - Fresh seasonal fruits
3. **Vegetables** - Farm-fresh vegetables
4. **Idols** - Religious idols
5. **Flowers** - Fresh flowers
6. **Garlands** - Decorative garlands

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure WhatsApp Number**
   
   Open `components/Navbar.tsx` and update line 40 with your WhatsApp business number:
   ```typescript
   const whatsappNumber = '918686391991'; // Replace with your number
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deployment on Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `Home_needs` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## 🗄️ Database (For Future Enhancement)

Currently, products are stored in static files (`data/products.ts`). For a production app with dynamic inventory, consider:

### Option 1: Vercel Postgres (Free Tier)
- 256 MB storage
- 60 hours compute time/month
- Perfect for small catalogs

### Option 2: Vercel KV (Redis)
- 256 MB storage
- 30,000 commands/day
- Fast read/write operations

### Option 3: Supabase (Free Tier)
- 500 MB database
- 1 GB file storage
- Full PostgreSQL database

## 📱 WhatsApp Order Flow

1. Customer adds items to cart
2. Customer enters phone number
3. Customer clicks "Order on WhatsApp"
4. Order details are formatted and sent to your WhatsApp
5. You receive order and can confirm via WhatsApp
6. Cart is cleared automatically

## 🎨 Customization

### Update Product Images

Edit `data/products.ts` and replace image URLs with your product images.

### Change Color Theme

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: {
    500: '#f5a316', // Your brand color
  }
}
```

### Add New Categories

1. Add category to `data/products.ts`:
   ```typescript
   {
     id: 'new-category',
     name: 'New Category',
     image: 'image-url'
   }
   ```

2. Add products with `category: 'new-category'`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: Local Storage
- **Deployment**: Vercel

## 📊 Project Structure

```
Home_needs/
├── app/
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page with categories
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation & Cart
│   ├── CategoryCard.tsx   # Category display
│   └── ProductCard.tsx    # Product display
├── context/
│   └── CartContext.tsx    # Cart state management
├── data/
│   └── products.ts        # Product & category data
├── types/
│   └── index.ts           # TypeScript types
└── public/                # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

Create `.env.local` file (optional):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=918686391991
```

Then update `Navbar.tsx` to use:
```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918686391991';
```

## 🐛 Troubleshooting

### Images not loading
- Ensure image URLs are valid and publicly accessible
- Check `next.config.js` has proper image domains configured

### WhatsApp not opening
- Verify phone number format (country code + number, no spaces)
- Test on mobile device for best experience

### Cart not persisting
- Check browser's local storage is enabled
- Clear cache and reload

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Order history
- [ ] Admin panel for product management
- [ ] Payment gateway integration
- [ ] Delivery tracking
- [ ] Product search & filters
- [ ] Customer reviews & ratings
- [ ] Promotional banners
- [ ] Email notifications

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email your-email@example.com or message on WhatsApp.

---

Made with ❤️ for HomeNeeds