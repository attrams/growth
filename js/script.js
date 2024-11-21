document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) {
      return;
    }

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // toggle item
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('fa-plus');

    // toggle body visibility
    groupBody.classList.toggle('open');

    // close other FAQ
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherGroupIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherGroupIcon.classList.remove('fa-minus');
        otherGroupIcon.classList.add('fa-plus');
      }
    });
  });

  // mobile menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
