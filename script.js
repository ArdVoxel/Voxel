// Carousel functionality
const carouselStates = {};

// Initialize carousels
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const carouselId = carousel.getAttribute('data-carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        
        carouselStates[carouselId] = {
            currentIndex: 0,
            totalImages: images.length
        };
    });
    
    // Auto-rotate carousels
    setInterval(() => {
        Object.keys(carouselStates).forEach(carouselId => {
            const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
            if (!carousel.hasAttribute('data-paused')) {
                changeSlide(parseInt(carouselId), 1);
            }
        });
    }, 4000);
});

// Change slide function
function changeSlide(carouselId, direction) {
    const carousel = document.querySelector(`[data-carousel="${carouselId}"]`);
    const images = carousel.querySelectorAll('.carousel-image');
    const state = carouselStates[carouselId];
    
    // Remove active class from current image
    images[state.currentIndex].classList.remove('active');
    
    // Calculate new index
    state.currentIndex += direction;
    
    // Handle wrap around
    if (state.currentIndex >= state.totalImages) {
        state.currentIndex = 0;
    } else if (state.currentIndex < 0) {
        state.currentIndex = state.totalImages - 1;
    }
    
    // Add active class to new image
    images[state.currentIndex].classList.add('active');
}

// Download functionality for .vox files
function downloadFile(filename) {
    if (!filename || filename === '') {
        showDownloadFeedback('File not available', false);
        return;
    }
    
    // Create a temporary link element to download the actual file
    const link = document.createElement('a');
    link.href = `models/${filename}`;
    link.download = filename;
    link.style.display = 'none';
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    
    // Check if file exists by trying to fetch it
    fetch(`models/${filename}`)
        .then(response => {
            if (response.ok) {
                link.click();
                showDownloadFeedback(filename, true);
            } else {
                throw new Error('File not found');
            }
        })
        .catch(error => {
            console.error('Error downloading file:', error);
            showDownloadFeedback(`Error: ${filename} not found`, false);
        })
        .finally(() => {
            document.body.removeChild(link);
        });
}

// Download multiple files function
function downloadMultipleFiles(filenames) {
    if (!filenames || filenames.length === 0) {
        showDownloadFeedback('Files not available', false);
        return;
    }
    
    let downloadCount = 0;
    let successCount = 0;
    
    filenames.forEach((filename, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = `models/${filename}`;
            link.download = filename;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            
            fetch(`models/${filename}`)
                .then(response => {
                    if (response.ok) {
                        link.click();
                        successCount++;
                    } else {
                        throw new Error('File not found');
                    }
                })
                .catch(error => {
                    console.error('Error downloading file:', error);
                })
                .finally(() => {
                    document.body.removeChild(link);
                    downloadCount++;
                    
                    // Show feedback when all downloads are processed
                    if (downloadCount === filenames.length) {
                        if (successCount === filenames.length) {
                            showDownloadFeedback(`Pack downloaded (${successCount} files)`, true);
                        } else if (successCount > 0) {
                            showDownloadFeedback(`Downloaded ${successCount} of ${filenames.length} files`, true);
                        } else {
                            showDownloadFeedback('Error: Could not download files', false);
                        }
                    }
                });
        }, index * 500); // Stagger downloads by 500ms
    });
}

// Show download feedback
function showDownloadFeedback(filename, success = true) {
    // Create feedback element
    const feedback = document.createElement('div');
    const bgColor = success ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)';
    const icon = success ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
    const message = success ? `Downloading ${filename}` : filename;
    
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
        backdrop-filter: blur(10px);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    feedback.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="bi ${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => {
        feedback.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(feedback)) {
                document.body.removeChild(feedback);
            }
        }, 300);
    }, 3000);
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe(e.target);
});

function handleSwipe(target) {
    const carousel = target.closest('.carousel');
    if (!carousel) return;
    
    const carouselId = parseInt(carousel.getAttribute('data-carousel'));
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image
        changeSlide(carouselId, 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image
        changeSlide(carouselId, -1);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        // Navigate all carousels to previous
        Object.keys(carouselStates).forEach(carouselId => {
            changeSlide(parseInt(carouselId), -1);
        });
    } else if (e.key === 'ArrowRight') {
        // Navigate all carousels to next
        Object.keys(carouselStates).forEach(carouselId => {
            changeSlide(parseInt(carouselId), 1);
        });
    }
});

// Pause auto-rotation on hover
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Pause auto-rotation for this specific carousel
        const carousel = item.querySelector('.carousel');
        const carouselId = carousel.getAttribute('data-carousel');
        carousel.setAttribute('data-paused', 'true');
    });
    
    item.addEventListener('mouseleave', function() {
        // Resume auto-rotation
        const carousel = item.querySelector('.carousel');
        carousel.removeAttribute('data-paused');
    });
});

// Add loading states to download buttons
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Downloading...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 2000);
    });
});