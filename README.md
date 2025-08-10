# 🎨 ArdVoxel - Digital Gallery

A modern, responsive digital gallery showcasing voxel art collections with a sleek bento-style design. Built with vanilla HTML, CSS, and JavaScript.

![ArdVoxel Gallery](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🖼️ Gallery Features
- **Interactive Carousels**: Each gallery item features a smooth image carousel with navigation controls
- **Auto-rotation**: Carousels automatically cycle through images with pause-on-hover functionality
- **Touch/Swipe Support**: Mobile-friendly swipe gestures for carousel navigation
- **Keyboard Navigation**: Arrow keys control all carousels simultaneously

### 📱 Responsive Design
- **Bento Grid Layout**: Modern asymmetric grid that adapts to different screen sizes
- **Mobile Optimized**: Fully responsive design that works seamlessly on all devices
- **Glassmorphism UI**: Blurred background with transparent, frosted glass elements

### 💾 Download System
- **Direct Downloads**: Click to download individual .vox files
- **Multi-file Packs**: Some galleries offer multiple files in a single download
- **Smart Feedback**: Visual notifications for successful downloads and errors
- **File Validation**: Checks file availability before attempting downloads

### 🎨 Visual Design
- **Blurred Background**: Dynamic background image with blur effect
- **Outfit Font**: Clean, modern typography from Google Fonts
- **Bootstrap Icons**: Consistent iconography throughout the interface
- **Smooth Animations**: Hover effects, transitions, and loading states

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Local web server (optional, for file downloads to work properly)

### Installation

1. **Clone or download** the project files
2. **Place your images** in the `img/IMGArts/` directory
3. **Add your .vox files** to the `models/` directory
4. **Update the background** by replacing `Background.webp`
5. **Open `index.html`** in your browser

### File Structure
```
ArdGaleria/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── Background.webp         # Blurred background image
├── README.md              # This file
├── img/
│   ├── Perfil.jpg         # Profile image
│   └── IMGArts/           # Gallery images
│       ├── IMG-20250810-WA0006.jpg
│       ├── snap2025-08-03-16-28-02.png
│       └── ...
└── models/                # Downloadable .vox files
    ├── Chef.vox
    ├── dragon.vox
    ├── Duke.vox
    ├── glugluglu.vox
    ├── Mastodon.vox
    ├── referi.vox
    ├── scene_fall.vox
    ├── XioXio.vox
    └── Zonder.vox
```

## 🎮 Gallery Collections

| Collection | Files | Description |
|------------|-------|-------------|
| **Pichirilitos Collection** | - | Artistic collection (files not available) |
| **Chef and Waiter** | `Chef.vox` | Culinary-themed voxel characters |
| **Clay, The Hunting Mammoth** | `Mastodon.vox`, `scene_fall.vox` | Prehistoric adventure pack |
| **Dragons of the East** | `dragon.vox` | Mythical dragon model |
| **Dusk and his Klanker** | `Duke.vox` | Character with mechanical companion |
| **Xender V1** | `Zonder.vox` | Futuristic character design |
| **Oliver the Expeditioner** | `XioXio.vox` | Adventure explorer character |
| **Little Fishes** | `glugluglu.vox` | Aquatic scene with fish |

## 🛠️ Customization

### Adding New Gallery Items

1. **Add images** to `img/IMGArts/` directory
2. **Add .vox files** to `models/` directory
3. **Update HTML** in `index.html`:

```html
<div class="gallery-item">
    <div class="carousel-container">
        <div class="carousel" data-carousel="9">
            <div class="carousel-track">
                <img src="img/IMGArts/your-image.png" alt="Your Image" class="carousel-image active">
            </div>
            <!-- Carousel buttons -->
        </div>
    </div>
    <h3 class="gallery-title">Your Collection Name</h3>
    <button class="download-btn" onclick="downloadFile('your-file.vox')">
        <i class="bi bi-download"></i>
        Download
    </button>
</div>
```

### Styling Customization

Key CSS variables and classes you can modify:

- **Colors**: Update gradient colors in `.download-btn` and `.profile-link`
- **Blur Effect**: Adjust `filter: blur(8px)` in `.background-overlay`
- **Grid Layout**: Modify grid columns in `.gallery-grid`
- **Animations**: Customize transition durations and effects

### JavaScript Configuration

- **Auto-rotation Speed**: Change interval in `setInterval()` (default: 4000ms)
- **Download Stagger**: Modify delay in `downloadMultipleFiles()` (default: 500ms)
- **Swipe Threshold**: Adjust `swipeThreshold` for touch sensitivity

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Dependencies
- **Google Fonts**: Outfit font family
- **Bootstrap Icons**: Icon library
- **No JavaScript frameworks**: Pure vanilla JS

### Performance Features
- **Lazy Loading**: Images load as needed
- **Optimized Animations**: CSS transforms for smooth performance
- **Efficient DOM Manipulation**: Minimal reflows and repaints

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Alt Text**: Descriptive alt attributes for images
- **Focus Management**: Proper focus indicators
- **Screen Reader Friendly**: Semantic HTML structure

## 🎯 Use Cases

- **Digital Art Portfolios**: Showcase voxel art and 3D models
- **Game Asset Libraries**: Distribute downloadable game assets
- **Educational Resources**: Share 3D modeling examples
- **Personal Galleries**: Display creative work with style
