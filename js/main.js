const button = document.querySelector('input');
const prices = document.querySelectorAll('.price');

button.addEventListener('change', (e) => {
  if (button.checked) {
    prices[0].innerText = 19.99;
    prices[1].innerText = 24.99;
    prices[2].innerText = 39.99;
    return;
  }
  prices[0].innerText = 199.99;
  prices[1].innerText = 249.99;
  prices[2].innerText = 399.99;
})