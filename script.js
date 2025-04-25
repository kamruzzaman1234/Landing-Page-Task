const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');

    // Close other items
    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileIcon = document.querySelector('.mobile_icons');
  const menuBar = document.querySelector('.menu_bar');

  mobileIcon.addEventListener('click', function () {
    menuBar.classList.toggle('active');
  });
});