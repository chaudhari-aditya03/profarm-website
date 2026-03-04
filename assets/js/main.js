document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
  }

  // Handle product card clicks
  const productCards = document.querySelectorAll('[data-product]');
  productCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const productName = card.getAttribute('data-product');
      const encodedProduct = encodeURIComponent(productName);
      window.location.href = `contact.html?product=${encodedProduct}`;
    });
  });

  // Auto-fill product field from URL parameter on contact page
  const productSelect = document.getElementById('productSelect');
  if (productSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    if (productParam) {
      productSelect.value = productParam;
    }
  }
});
