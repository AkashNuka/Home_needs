# 🚀 Deployment Guide for HomeNeeds

This guide will help you deploy your HomeNeeds quick commerce website to Vercel.

## Prerequisites

- Git installed on your computer
- A GitHub account
- A Vercel account (free tier is sufficient)

## Step 1: Prepare Your Repository

### 1.1 Update WhatsApp Number

Before deploying, update your WhatsApp business number in `components/Navbar.tsx`:

```typescript
// Line 40 in components/Navbar.tsx
const whatsappNumber = '919876543210'; // Replace with your actual WhatsApp number
```

**Important:** Use format: Country Code + Number (no spaces, no + sign)
- India: 91XXXXXXXXXX
- USA: 1XXXXXXXXXX
- UK: 44XXXXXXXXXX

### 1.2 Commit Your Changes

```bash
git add .
git commit -m "Initial commit: HomeNeeds quick commerce website"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. **Go to Vercel**
   - Visit [https://vercel.com](https://vercel.com)
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Find and select your `Home_needs` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (Auto-detected)
   - **Root Directory**: `./` (Leave as default)
   - **Build Command**: `npm run build` (Auto-filled)
   - **Output Directory**: `.next` (Auto-filled)
   - **Install Command**: `npm install` (Auto-filled)

4. **Environment Variables** (Optional)
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_WHATSAPP_NUMBER` = Your WhatsApp number
   - This allows you to change the number without code changes

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - You'll get a URL like: `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project settings
   - Deployment will start automatically

## Step 3: Custom Domain (Optional)

### 3.1 Add Custom Domain

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow DNS configuration instructions

### 3.2 Popular Domain Providers

- **Namecheap**: Update A and CNAME records
- **GoDaddy**: Add Vercel nameservers
- **Cloudflare**: Set DNS records as instructed

## Step 4: Post-Deployment Checks

### 4.1 Test Your Website

✅ Check these features:
- [ ] Homepage loads correctly
- [ ] All categories are visible
- [ ] Products display with images
- [ ] Click on a category scrolls to products
- [ ] Add to cart button works
- [ ] Cart sidebar opens
- [ ] Cart displays items correctly
- [ ] Increase/decrease quantity works
- [ ] Remove from cart works
- [ ] Enter phone number field works
- [ ] WhatsApp order button opens WhatsApp
- [ ] Order message is formatted correctly

### 4.2 Mobile Testing

Test on mobile devices:
- Open your Vercel URL on phone
- Test all cart operations
- Verify WhatsApp integration works
- Check responsive design

## Step 5: Update Products & Pricing

### 5.1 Edit Product Data

Update `data/products.ts`:

```typescript
{
  id: 'p1',
  name: 'Your Product Name',
  price: 99,  // Your price
  image: 'https://your-image-url.com/image.jpg',
  category: 'pooja',
  subcategory: 'Agarbattis',
  unit: '100 sticks',
  description: 'Your description'
}
```

### 5.2 Deploy Updates

```bash
git add data/products.ts
git commit -m "Update products and pricing"
git push origin main
```

Vercel will automatically redeploy your site in 2-3 minutes.

## Step 6: Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. Make changes locally
2. Commit and push to GitHub
3. Vercel detects changes
4. Automatic deployment starts
5. New version goes live

## Troubleshooting

### Issue: Images Not Loading

**Solution:**
- Use HTTPS URLs for images
- Use Unsplash, Cloudinary, or image CDN
- Or upload to Vercel's image optimization

### Issue: WhatsApp Not Opening

**Solution:**
- Check phone number format (no spaces, no +)
- Test on mobile device (works better than desktop)
- Verify WhatsApp is installed

### Issue: Deployment Failed

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Issue: 404 Error After Deployment

**Solution:**
- Check Vercel project settings
- Verify framework preset is "Next.js"
- Check build logs for errors

## Performance Optimization

### 6.1 Image Optimization

Replace URLs with optimized images:
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes (300x300 for products)

### 6.2 Loading Speed

Current setup is optimized:
- ✅ Static data (no API calls)
- ✅ Client-side cart (no database)
- ✅ Minimal dependencies
- ✅ Tailwind CSS (tree-shaken)

## Monitoring & Analytics

### 7.1 Vercel Analytics (Optional)

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Vercel Analytics
4. Track page views, performance

### 7.2 Google Analytics (Optional)

Add to `app/layout.tsx`:

```typescript
// Add Google Analytics script
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## Scaling for Growth

### When to Upgrade

Current setup handles:
- ✅ 1,000-10,000 monthly visitors
- ✅ 50-100 products
- ✅ Small business needs

**Upgrade when:**
- More than 100 products
- Need order management
- Want customer accounts
- Require payment processing

### Database Options

For larger scale:
1. **Vercel Postgres** - $20/month
2. **Supabase** - Free tier, then $25/month
3. **MongoDB Atlas** - Free tier, then $9/month

## Support & Updates

### Get Help

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issue in your repo

### Keep Updated

```bash
# Update Next.js
npm install next@latest react@latest react-dom@latest

# Update all dependencies
npm update

# Check for vulnerabilities
npm audit fix
```

## Backup & Version Control

### Backup Strategy

1. Code is backed up on GitHub
2. Vercel keeps deployment history
3. Cart data is in user's browser (localStorage)

### Rollback Deployment

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous deployment
4. Click "..." → "Promote to Production"

## Cost Breakdown

### Vercel Free Tier Includes:

- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month
- ✅ 100 deployments/day
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ DDoS protection

**Your site will cost: $0/month** 🎉

### If You Outgrow Free Tier:

- Pro: $20/month
- Includes:
  - Unlimited bandwidth
  - Unlimited deployments
  - Team collaboration
  - Advanced analytics

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all features
3. ✅ Share your URL
4. ✅ Start getting orders!

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Your Deployment Checklist

- [ ] Updated WhatsApp number
- [ ] Committed all changes to Git
- [ ] Pushed to GitHub
- [ ] Created Vercel account
- [ ] Imported repository
- [ ] Deployed successfully
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Verified WhatsApp integration
- [ ] Shared URL with first customer!

---

🎉 **Congratulations!** Your HomeNeeds website is now live!

If you need any help, refer to the README.md or create an issue on GitHub.
