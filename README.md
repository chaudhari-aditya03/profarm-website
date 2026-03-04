# ProFarm Website

Professional static website for ProFarm organic farm products.

## 🚀 Quick Start

### Prerequisites
- Node.js installed on your system
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the CSS:
```bash
npm run build:css
```

3. Open `index.html` in your browser to view the website.

## 📦 Build Commands

### Production Build
Builds and minifies the Tailwind CSS for production:
```bash
npm run build:css
```

### Development Mode
Watch for changes and rebuild CSS automatically:
```bash
npm run watch:css
```

## 📁 Project Structure

```
farm-product/
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products page
├── services.html           # Services page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   ├── tailwind.css    # Compiled Tailwind CSS (generated)
│   │   └── styles.css      # Custom styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Images and logos
├── src/
│   └── input.css           # Tailwind source file
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🎨 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Vanilla JavaScript** - Interactive features
- **AOS Library** - Scroll animations
- **EmailJS** - Contact form integration

## 🔧 Configuration

### Tailwind Configuration
Customize Tailwind in `tailwind.config.js`. Brand colors are defined in the theme extension.

### Email Integration
Update EmailJS credentials in `contact.html`:
- `YOUR_PUBLIC_KEY`
- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`

### Contact Information
Update placeholder values in all HTML files:
- WhatsApp number: `91XXXXXXXXXX`
- Email: `info@profarm.com`
- Address and Google Maps embed

## 📝 Development Workflow

1. Make changes to HTML files
2. If you added new Tailwind classes, rebuild CSS:
   ```bash
   npm run build:css
   ```
3. For active development, use watch mode:
   ```bash
   npm run watch:css
   ```

## 🌐 Deployment

1. Run production build:
   ```bash
   npm run build:css
   ```
2. Upload all files to your web hosting
3. Ensure `assets/css/tailwind.css` is included

## ✅ Features

- ✓ Responsive design (mobile, tablet, desktop)
- ✓ Smooth scroll animations (AOS)
- ✓ SEO optimized with meta tags
- ✓ Image lazy loading
- ✓ Floating WhatsApp button
- ✓ Product inquiry system
- ✓ Contact form with EmailJS
- ✓ Google Maps integration
- ✓ Professional branding

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

Copyright © 2026 ProFarm. All rights reserved.
