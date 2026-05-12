# A.R.K Initiative - Wildlife Conservation Website

A beautiful, responsive static website for A.R.K Initiative, a Singapore-based youth-led groundup dedicated to wildlife conservation, animal welfare, and ecosystem restoration.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching hero with wildlife imagery
- **Event Listings**: Display upcoming events with availability tracking
- **Mission Cards**: Showcase core values (Advocacy, Restoration, Kinship)
- **About Section**: Tell the A.R.K story
- **Call-to-Action**: Multiple conversion points for event signups
- **Social Integration**: Links to Instagram and other social media
- **Modern Styling**: Clean, nature-inspired design with green color scheme

## Project Structure

```
ark-initiative-static/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/ark-initiative-static.git
cd ark-initiative-static
```

2. Open in a local server (required for best experience):
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

3. Open your browser and navigate to `http://localhost:8000`

### GitHub Pages Deployment

1. Push the code to GitHub:
```bash
git add .
git commit -m "Initial commit: A.R.K Initiative website"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/root" folder
   - Click "Save"

3. Your site will be live at: `https://YOUR_USERNAME.github.io/ark-initiative-static/`

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #1a5f3f;        /* Main green color */
    --accent: #e8b85f;         /* Gold accent */
    --text-dark: #1a1a1a;      /* Dark text */
    --text-light: #666666;     /* Light text */
}
```

### Content
- Update event information in the Events section
- Modify mission statements in the Mission section
- Change contact email in footer
- Update social media links

### Images
Replace image URLs with your own:
- Hero images use CDN URLs (can be replaced with local paths)
- Update image paths in `index.html`

## Event Signup Integration

The "Sign Up Now" buttons currently show a placeholder message. To integrate with real signup forms:

1. **Google Forms**: Replace button click handler with form link
2. **Eventbrite**: Use Eventbrite embed or redirect
3. **Custom Form**: Create a backend form handler

Example for Google Forms:
```javascript
button.addEventListener('click', function() {
    window.open('https://forms.gle/YOUR_FORM_ID', '_blank');
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Pure HTML/CSS/JavaScript (no build process needed)
- Fast loading times
- Optimized images using WebP format
- Mobile-first responsive design

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors for readability

## Contact

- Email: hello@arkinitiative.sg
- Instagram: [@arkinitiative.sg](https://www.instagram.com/arkinitiative.sg/)

## License

© 2026 A.R.K Initiative. All rights reserved.

## Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for suggestions.

---

**A.R.K Initiative**: Advocacy for Wildlife • Restoration of Ecosystems • Kinship with Nature
