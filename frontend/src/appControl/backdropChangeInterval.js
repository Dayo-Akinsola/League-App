export default () => {
  let index = 1;

  setInterval(() => {
    const backdrops = document.querySelectorAll('.backdrop-img');
    const currentBackdrop = document.querySelector('.backdrop-img.shown');
    index %= backdrops.length;
    currentBackdrop.className = 'backdrop-img hidden';
    backdrops[index].className = 'backdrop-img shown';
    index += 1;
  }, 7000);
};
