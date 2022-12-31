const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const iconClose = document.querySelector(".icon-close");
const iconHam = document.querySelector(".icon-hamburger");

navToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', 'true') : navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.hasAttribute('data-visible') ? iconClose.setAttribute('data-visible', 'true') : iconClose.setAttribute('data-visible', 'false');
    primaryNav.hasAttribute('data-visible') ? iconHam.setAttribute('data-visible', 'false') : iconHam.setAttribute('data-visible', 'true');
})
const slider = new A11YSlider(document.querySelector('.slider'), {
    dots: true,
    arrows: false,
    responsive: {
        480: {
            dots: false,
            autoplay: true,
            centerMode: true
        }
    }
  });