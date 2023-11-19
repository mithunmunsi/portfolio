const backToTop = document.querySelector('#backToTop');
const mobIcon = document.querySelector('.mobIcon');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
// Browser onscroll event triger
window.onscroll = function () {
  scrollFunction();
};
// Code from W3S about scrolling to top
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

function getTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener('click', mobMenu);
  }
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  } else {
    nav.classList.add('responsive');
  }
};
backToTop.addEventListener('click', getTop);
mobIcon.addEventListener('click', mobMenu);
