document.addEventListener('DOMContentLoaded', () => {
  // Gallery filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 500);
        }
      });
    });
  });

  // Before & After Slider
  const sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(slider => {
    const handle = slider.querySelector('.slider-handle');
    const beforeImage = slider.querySelector('.before-image');
    let isResizing = false;

    const resize = (e) => {
      if (!isResizing) return;

      const sliderRect = slider.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.pageX - sliderRect.left, sliderRect.width));
      const percent = (x / sliderRect.width) * 100;

      handle.style.left = `${percent}%`;
      beforeImage.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    };

    handle.addEventListener('mousedown', () => {
      isResizing = true;
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
      }, { once: true });
    });

    // Touch events for mobile
    handle.addEventListener('touchstart', (e) => {
      isResizing = true;
      e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
      if (!isResizing) return;
      resize(e.touches[0]);
    });

    document.addEventListener('touchend', () => {
      isResizing = false;
    });
  });

  // Lightbox functionality
  const lightbox = document.querySelector('.gallery-lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeLightbox = lightbox.querySelector('.close-lightbox');
  const prevBtn = lightbox.querySelector('.prev-btn');
  const nextBtn = lightbox.querySelector('.next-btn');
  const zoomBtns = document.querySelectorAll('.zoom-btn');
  let currentImageIndex = 0;
  let galleryImages = [];

  // Collect all gallery images
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    const caption = item.querySelector('h3')?.textContent || '';
    if (img) {
      galleryImages.push({
        src: img.src,
        caption: caption
      });
    }
  });

  // Open lightbox
  zoomBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImageIndex = index;
      updateLightboxImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Navigate images
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  });

  // Update lightbox image
  function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.caption;
  }

  // Close lightbox on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });

  // Prevent scrolling when lightbox is open
  lightbox.addEventListener('wheel', (e) => {
    if (lightbox.classList.contains('active')) {
      e.preventDefault();
    }
  });

  // Background mini icons animation
  const iconItems = document.querySelectorAll('.icon-item');
  iconItems.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.opacity = '0.3';
      icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
      icon.style.opacity = '0.1';
      icon.style.transform = 'scale(1)';
    });
  });
}); 