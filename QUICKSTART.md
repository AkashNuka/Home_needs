# ⚡ Quick Start Guide

Get your HomeNeeds website running in 5 minutes!

## 🚀 Local Development

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure WhatsApp
Open `components/Navbar.tsx` and update line 40:
```typescript
const whatsappNumber = '919876543210'; // Your WhatsApp number
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to: **http://localhost:3000**

That's it! Your website is running locally. 🎉

---

## 📱 How the Website Works

### For Customers:

1. **Browse Products** - Organized by categories
2. **Add to Cart** - Click "Add" button (no preview needed)
3. **Review Cart** - Click cart icon in top-right
4. **Enter Phone** - Type phone number
5. **Order** - Click "Order on WhatsApp"
6. **Confirm** - Confirm order on WhatsApp

### For You (Store Owner):

1. **Receive Order** - Get WhatsApp message with order details
2. **Confirm** - Reply to customer on WhatsApp
3. **Prepare** - Pack the items
4. **Deliver** - Deliver to customer
5. **Payment** - Collect cash on delivery

---

## 🛒 Testing the Flow

Try these steps:

1. ✅ Add "Cycle Pure Agarbatti" to cart
2. ✅ Add "Fresh Bananas" to cart
3. ✅ Click cart icon (shows 2 items)
4. ✅ Increase quantity of Agarbatti
5. ✅ Enter phone: 9876543210
6. ✅ Click "Order on WhatsApp"
7. ✅ See formatted order message
8. ✅ WhatsApp opens with pre-filled message

---

## 🎨 Customize Your Store

### Update Products

Edit `data/products.ts`:

```typescript
{
  id: 'p1',
  name: 'Product Name',
  price: 99,
  image: 'https://image-url.com/image.jpg',
  category: 'fruits',
  unit: '1 kg'
}
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#f5a316', // Your brand color
  }
}
```

### Update Store Name

Edit `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Store Name',
  description: 'Your description',
}
```

Also update `components/Navbar.tsx` (line 58):

```typescript
<h1>🏪 Your Store Name</h1>
```

---

## 🚢 Deploy to Production

### Quick Deploy (2 minutes):

1. Push to GitHub
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project" → Import your repo

4. Click "Deploy"

Done! Your site is live at: `https://your-site.vercel.app`

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📖 Full Documentation

- [README.md](README.md) - Complete documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

---

## 💡 Pro Tips

1. **Test on Mobile** - Most customers will order from phones
2. **Good Images** - Use high-quality product images
3. **Update Prices** - Keep prices current
4. **Quick Response** - Reply to WhatsApp orders quickly
5. **Save Template** - Save common WhatsApp replies

---

## 🆘 Need Help?

Common issues:

| Problem | Solution |
|---------|----------|
| npm install fails | Try `npm cache clean --force` then retry |
| Port 3000 in use | Use `npm run dev -- -p 3001` |
| Images not showing | Check image URLs are accessible |
| WhatsApp not opening | Verify phone number format |

---

## ✅ Success Checklist

- [ ] Dependencies installed
- [ ] WhatsApp number updated
- [ ] Dev server running
- [ ] Can add items to cart
- [ ] Cart opens and closes
- [ ] Quantity buttons work
- [ ] WhatsApp order works
- [ ] Ready to deploy!

---

**Next Step:** See [DEPLOYMENT.md](DEPLOYMENT.md) to go live! 🚀
