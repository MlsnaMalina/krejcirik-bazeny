document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializace AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    // Header scroll efekt
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '0';
            header.style.background = 'rgba(255, 255, 255, 0.6)';
        }
    });

    // Plynulé scrollování pro kotvy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interaktivní kurzor - jemné bubliny při pohybu
    let lastBubbleTime = 0;
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        // Omezení tvorby bublin na max 1 za 50ms pro výkon
        if (now - lastBubbleTime > 50) {
            createCursorBubble(e.clientX, e.clientY);
            lastBubbleTime = now;
        }
    });

    function createCursorBubble(x, y) {
        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';
        
        // Náhodná velikost bubliny
        const size = Math.random() * 15 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        
        document.body.appendChild(bubble);
        
        // Odstranění bubliny po animaci (1.5s)
        setTimeout(() => {
            bubble.remove();
        }, 1500);
    }

    // Ovládání Tabs komponenty
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Odebrat active class všem tlačítkům a panelům
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Přidat active class kliknutému tlačítku
            btn.classList.add('active');
            
            // Zobrazit odpovídající panel
            const targetId = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Navigace na konkrétní taby z hlavičky
    const scrollTabs = document.querySelectorAll('.scroll-tab');
    scrollTabs.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                const tabBtn = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
                if (tabBtn) {
                    tabBtn.click(); // Spustí výše definovanou logiku pro taby
                }
            }
        });
    });

    // Before/After slider logik
    const beforeAfterWrappers = document.querySelectorAll('.before-after-wrapper');
    beforeAfterWrappers.forEach(wrapper => {
        const slider = wrapper.querySelector('.slider-range');
        const imgBefore = wrapper.querySelector('.img-before');
        const handle = wrapper.querySelector('.slider-handle');

        if (slider && imgBefore && handle) {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                imgBefore.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
                handle.style.left = `${value}%`;
            });
        }
    });

    // Carousel logik
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsNav = document.querySelector('.carousel-nav');
        const dots = dotsNav ? Array.from(dotsNav.children) : [];

        let currentIndex = 0;

        const updateCarousel = (index) => {
            if (slides.length === 0) return;
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${index * slideWidth}px)`;
            
            slides.forEach(s => s.classList.remove('current-slide'));
            slides[index].classList.add('current-slide');

            dots.forEach(d => d.classList.remove('current-indicator'));
            if(dots[index]) dots[index].classList.add('current-indicator');
        };

        if(nextButton && prevButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
                updateCarousel(currentIndex);
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
                updateCarousel(currentIndex);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
            });
        });

        window.addEventListener('resize', () => {
            updateCarousel(currentIndex);
        });
    }

    // Lightbox logik
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (lightbox && lightboxImg && galleryItems.length > 0) {
        let currentImageIndex = 0;
        const images = Array.from(galleryItems).map(img => img.src);

        const openLightbox = (index) => {
            currentImageIndex = index;
            lightboxImg.src = images[currentImageIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Zakázat scroll pozadí
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        const showPrev = (e) => {
            if(e) e.stopPropagation();
            currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
            lightboxImg.src = images[currentImageIndex];
        };

        const showNext = (e) => {
            if(e) e.stopPropagation();
            currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
            lightboxImg.src = images[currentImageIndex];
        };

        galleryItems.forEach((img, index) => {
            img.closest('.gallery-item').addEventListener('click', () => {
                openLightbox(index);
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && e.target !== prevBtn && e.target !== nextBtn && e.target.closest('.lightbox-btn') === null) {
                closeLightbox();
            }
        });

        prevBtn.addEventListener('click', showPrev);
        nextBtn.addEventListener('click', showNext);

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });
    }
});

// Pool detail anchor scroll (bazeny.html)
function activatePoolFromHash() {
  const hash = window.location.hash;
  const allowed = ['#detail-laminat', '#detail-folie', '#detail-mozaika'];
  if (allowed.includes(hash)) {
    const target = document.querySelector(hash);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}
window.addEventListener('hashchange', activatePoolFromHash);
window.addEventListener('DOMContentLoaded', activatePoolFromHash);

// Animated reveal of "Hlavní výhody" bullets (bazeny.html)
const advantageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.pool-advantages-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 150);
      });
      advantageObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.pool-alt-content .benefits-box-dark').forEach(card => {
  advantageObserver.observe(card);
});
