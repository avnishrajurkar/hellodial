# HelloDials - Modern Home Services Website

A modern, responsive website design for HelloDials, inspired by industry leaders like Urban Company. Built with HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## 🚀 Features

### Design Highlights
- **Modern UI/UX**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Mobile-first approach, works seamlessly on all devices
- **Fast Performance**: Optimized CSS and JavaScript with minimal dependencies
- **Accessible**: WCAG compliant with proper ARIA labels and semantic HTML

### Sections
1. **Hero Section**: Eye-catching introduction with statistics and call-to-action
2. **Services**: 6 service cards with pricing and features (Cleaning, Plumbing, Electrical, Appliance Repair, Painting, Pest Control)
3. **How It Works**: 3-step process explanation with visual connectors
4. **Testimonials**: Auto-rotating customer reviews slider
5. **CTA Section**: Lead capture form with phone number input
6. **Contact**: Contact information and message form
7. **Footer**: Comprehensive footer with links and app download buttons

### Interactive Features
- Smooth scroll navigation
- Mobile hamburger menu
- Testimonial slider with auto-rotation
- Form validation with notifications
- Scroll-to-top button
- Animation on scroll
- Active navigation highlighting

## 📁 Project Structure

```
/workspace
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles with CSS variables
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks required
- **Font Awesome**: Icons (via CDN)
- **Google Fonts**: Inter font family

## 🚀 Deploy to GitHub Pages

### Method 1: Direct Push (Recommended)

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd /workspace
   git init
   git add .
   git commit -m "Initial commit: HelloDials modern website"
   ```

2. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository named `hellodials` (or your preferred name)
   - Don't initialize it with README

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/hellodials.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click "Save"

5. **Access Your Site**:
   - Your site will be live at: `https://YOUR_USERNAME.github.io/hellodials/`
   - Deployment usually takes 1-2 minutes

### Method 2: Using GitHub CLI

```bash
# Install GitHub CLI if not installed
gh repo create hellodials --public --source=. --remote=origin --push
gh pages enable
```

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #4f46e5;      /* Main brand color */
    --secondary-color: #0ea5e9;    /* Secondary accent */
    --accent-color: #f59e0b;       /* Highlight color */
    /* ... more variables */
}
```

### Content
- Update text content directly in `index.html`
- Replace images by updating the `src` attributes (currently using Unsplash)
- Modify services, testimonials, and contact info as needed

### Adding New Services
Copy an existing service card structure in `index.html` and modify:
```html
<div class="service-card" data-service="your-service">
    <!-- Update icon, title, description, features, and price -->
</div>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Tips

### Local Testing
Open `index.html` directly in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Performance Optimization
- Images are loaded from Unsplash CDN
- CSS and JS are minified-ready
- Consider adding lazy loading for images
- Enable gzip compression on your server

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📞 Support

For questions or issues, please create an issue in the GitHub repository.

---

**Made with ❤️ for HelloDials**

*Ready to compete with market giants like Urban Company!*
