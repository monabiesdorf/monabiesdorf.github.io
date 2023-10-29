let containerScheibe = document.querySelector('.containerScheibe');
let moveBy = 10;

window.addEventListener('load', () => {
    containerScheibe.style.position = 'absolute';
    containerScheibe.style.left = 0;
});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'l':
            containerScheibe.style.left = parseInt(containerScheibe.style.left) - moveBy + frameElement;
            break;
        case 'r':
            containerScheibe.style.left = parseInt(containerScheibe.style.left) + moveBy + 'px';
            break;

    }
});