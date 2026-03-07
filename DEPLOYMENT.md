# 🚀 ProFarm Website - Deployment Guide

## Pre-Deployment Checklist

✅ **Configuration Updates Completed:**
- [x] Mobile number updated to 7875353481
- [x] Formspree link updated to mvzwggbp
- [x] FSSAI license number added: 12456789799
- [x] UI enhanced with modern design
- [x] No errors found in codebase

✅ **Files Ready:**
- [x] All HTML pages optimized
- [x] Images in assets/images/
- [x] CSS files compiled
- [x] JavaScript files working
- [x] API endpoints configured

## Deployment Options

### Option 1: Vercel (Recommended for Node.js apps)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **For production:**
```bash
vercel --prod
```

**Configuration:** `vercel.json` is already configured in the project root.

---

### Option 2: Netlify (Great for static sites)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify:**
```bash
netlify login
```

3. **Initialize and deploy:**
```bash
netlify init
netlify deploy --prod
```

**Configuration:** `netlify.toml` is already configured in the project root.

---

### Option 3: GitHub Pages (Free static hosting)

1. **Create a GitHub repository**
2. **Push your code:**
```bash
git init
git add .
git commit -m "Initial commit - ProFarm website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Save

**Note:** GitHub Pages doesn't support Node.js backend. Use for static content only.

---

### Option 4: Traditional Web Hosting (cPanel/FTP)

1. **Build the project:**
```bash
npm run build:css
```

2. **Upload these files via FTP:**
   - All HTML files
   - assets/ folder
   - api/ folder (if hosting supports serverless functions)
   - server.js (if hosting supports Node.js)

3. **Configure your hosting:**
   - Set document root to project folder
   - Enable Node.js if using backend features
   - Set environment variables if needed

---

## Environment Variables (if needed)

Create a `.env` file for sensitive data:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/mvzwggbp
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
OWNER_PHONE_NUMBER=+917875353481
```

**Important:** Never commit `.env` to version control!

---

## Post-Deployment Tasks

### 1. Test All Features
- [ ] Navigation links work
- [ ] Contact form submission
- [ ] WhatsApp links open correctly
- [ ] Phone number links work on mobile
- [ ] Email links work
- [ ] All images load properly
- [ ] Mobile responsiveness
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

### 2. SEO & Performance
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed with Lighthouse
- [ ] Verify meta tags and descriptions
- [ ] Check Open Graph tags for social media

### 3. Security
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS if using API
- [ ] Set up proper headers (already in netlify.toml)
- [ ] Regular backups

### 4. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Monitor form submissions
- [ ] Check analytics regularly

---

## Quick Deploy Commands

### For Vercel:
```bash
# First time
npm install
vercel

# Subsequent deployments
vercel --prod
```

### For Netlify:
```bash
# First time
npm install
netlify init
netlify deploy --prod

# Subsequent deployments
netlify deploy --prod
```

### For traditional hosting:
```bash
# Build CSS
npm run build:css

# Then upload via FTP/cPanel
```

---

## Custom Domain Setup

### Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as shown

### Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS (automatic with Netlify DNS)

### GitHub Pages:
1. Create CNAME file with your domain
2. Update DNS A records to GitHub IPs
3. Enable HTTPS in settings

---

## Troubleshooting

### Issue: Forms not submitting
- Check Formspree endpoint URL
- Verify CORS settings
- Check browser console for errors

### Issue: Images not loading
- Verify image paths are relative
- Check file names match case-sensitive
- Compress large images

### Issue: WhatsApp link not working
- Verify phone number format: 917875353481
- Test on different devices

### Issue: Map not showing
- Check Google Maps embed URL
- Verify iframe is allowed

---

## Support & Maintenance

- **Website:** [Add your domain here]
- **Email:** profarm.india@gmail.com
- **Phone:** +91 7875353481
- **FSSAI Lic:** 12456789799

---

## Version History

- **v1.0.0** - Initial deployment (March 8, 2026)
  - Modern UI with enhanced design
  - Mobile-responsive layout
  - Contact form integration
  - WhatsApp integration
  - FSSAI compliance

---

**Last Updated:** March 8, 2026
**Deployment Ready:** ✅ YES
