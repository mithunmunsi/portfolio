const backToTop = document.querySelector('#backToTop');

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

backToTop.addEventListener('click', getTop);
