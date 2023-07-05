const bigImageEl = document.querySelector('.meet__person');
const miniImageEl = document.querySelectorAll('.people');

miniImageEl.forEach(miniImg => {
    miniImg.addEventListener('click', function (e) {
        bigImageEl.src = e.target.src;
});
});
