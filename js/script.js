// =================================
// NAVBAR INTERACTION & TOGGLE SCRIPT
// =================================

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDropdown = document.querySelector('.mobile-dropdown');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Toggle Mobile Menu Popup
  if (mobileToggle && mobileDropdown) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdown.classList.toggle('active');
    });

    // Close Popup when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDropdown.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDropdown.classList.remove('active');
      }
    });

    // Close Popup when a link inside is clicked
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('active');
      });
    });
  }
});


// =================================
// HERO BANNER AUTOMATIC SLIDER
// =================================
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 Seconds

  if (slides.length > 0) {
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
      });

      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    let autoSlide = setInterval(nextSlide, slideInterval);

    // Click on Dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        currentSlide = index;
        showSlide(currentSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
      });
    });
  }
});


// =================================
// SECTION 06 - DYNAMIC GALLERY CAROUSEL
// =================================
document.addEventListener('DOMContentLoaded', () => {
  const API_PORTFOLIO_URL = "https://https://amin-backend.vercel.app/api/portfolio";

  async function loadHomeGallery() {
    const galleryTrack = document.getElementById("dynamicGalleryTrack");
    if (!galleryTrack) return;

    try {
      // Backend se sirf category=gallery ki asli images mangwana
      const res = await fetch(`${API_PORTFOLIO_URL}?category=gallery`);
      const result = await res.json();

      if (result.success && result.data.length > 0) {
        const items = result.data;
        const totalItems = items.length;

        // Sirf wahi images render hongi jo database mein hain (Koi duplicate/repeat nahi!)
        let galleryHTML = items.map((item, index) => {
          const itemNum = (index % 20) + 1; // Glow styles ke liye index rotation
          return `
            <div class="gallery-item item-${itemNum}">
              <img src="${item.imageUrl}" alt="${item.title || 'Gallery Showcase'}" loading="lazy">
            </div>
          `;
        }).join('');

        // Gallery Track HTML Inject
        galleryTrack.innerHTML = galleryHTML;

        // Dynamic Total Width Animation Offset Calculation (Database ki total items ke mutabiq)
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
          @keyframes galleryInfiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc((-23vw - 20px) * ${totalItems})); }
          }
          @media screen and (max-width: 768px) {
            @keyframes galleryInfiniteScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc((-62vw - 12px) * ${totalItems})); }
            }
          }
        `;
        document.head.appendChild(styleSheet);

      } else {
        galleryTrack.innerHTML = `<p style="color: #664328; text-align: center; width: 100%;">No gallery images uploaded yet. Add images from Admin Panel.</p>`;
      }
    } catch (err) {
      console.log("Gallery backend fetch error:", err);
    }
  }

  // Load Gallery Function Call
  loadHomeGallery();
});
