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

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form values
      const name = document.querySelector('input[name="name"]').value;
      const phone = document.querySelector('input[name="phone"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const product = document.querySelector('select[name="product"]').value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Create WhatsApp message
      const whatsappMessage = `Hello ProFarm,\n\nI am interested in your products. Here are my details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct Interested: ${product}\n\nMessage: ${message}`;
      const whatsappUrl = `https://wa.me/917875353481?text=${encodeURIComponent(whatsappMessage)}`;

      // Create email body format
      const emailBody = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct Interested: ${product}\n\nMessage:\n${message}`;

      // Add email body to form as hidden field
      const emailBodyInput = document.createElement('input');
      emailBodyInput.type = 'hidden';
      emailBodyInput.name = 'message_body';
      emailBodyInput.value = emailBody;
      contactForm.appendChild(emailBodyInput);

      // Store WhatsApp URL for after email submission
      sessionStorage.setItem('whatsappUrl', whatsappUrl);

      // Submit form to Formspree (this will send email)
      // The form will be submitted normally via the action attribute
      contactForm.submit();

      // Open WhatsApp in new tab after brief delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    });
  }
});
