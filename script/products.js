const allColorsTemplate = document.querySelector('#colors');
const colorSection = document.querySelector('.products__items');

const links = document.querySelectorAll('.products__link');
const blueLink = document.querySelector('.products-blue');
const bluePictures = ['./img/product.jpg', './img/product.jpg'];
const redLink = document.querySelector('.products-red');
const redPictures = ['./img/product-red.jpg', './img/product-red.jpg']
const greenLink = document.querySelector('.products-green');
const greenPictures = ['./img/product-green.jpg', './img/product-green.jpg']
const yellowLink = document.querySelector('.products-yellow');
const yellowPictures = ['./img/product-yellow.jpg', './img/product-yellow.jpg']
const allLink = document.querySelector('.products-all');
const allPictures = ['./img/product.jpg', './img/product.jpg', './img/product-red.jpg',
 './img/product-red.jpg', './img/product-green.jpg', './img/product-green.jpg', 
 './img/product-yellow.jpg', './img/product-yellow.jpg'];


function createTemplate(link) {
    const color = allColorsTemplate.content.cloneNode(true);
    const colorTag = color.querySelector('.products__item');
    colorTag.src = link;
    return colorTag;
}

bluePictures.forEach((picture) => {
    colorSection.append(createTemplate(picture));
})

redPictures.forEach((picture) => {
    colorSection.append(createTemplate(picture));
})

greenPictures.forEach((picture) => {
    colorSection.append(createTemplate(picture));
})

yellowPictures.forEach((picture) => {
    colorSection.append(createTemplate(picture));
})

blueLink.addEventListener('click', function (e) {
    colorSection.innerHTML = '';
    bluePictures.forEach((picture) => {
        colorSection.append(createTemplate(picture));
    });
    links.forEach((link) => {
        if(link.classList.contains('products__link_active')) {
            link.classList.remove('products__link_active');
            blueLink.classList.add('products__link_active');
        }
    })
})

redLink.addEventListener('click', function (e) {
    colorSection.innerHTML = '';
    redPictures.forEach((picture) => {
        colorSection.append(createTemplate(picture));
    });
    links.forEach((link) => {
        if(link.classList.contains('products__link_active')) {
            link.classList.remove('products__link_active');
            redLink.classList.add('products__link_active');
        }
    })
})

greenLink.addEventListener('click', function (e) {
    colorSection.innerHTML = '';
    greenPictures.forEach((picture) => {
        colorSection.append(createTemplate(picture));
    });
    links.forEach((link) => {
        if(link.classList.contains('products__link_active')) {
            link.classList.remove('products__link_active');
            greenLink.classList.add('products__link_active');
        }
    })
})

yellowLink.addEventListener('click', function (e) {
    colorSection.innerHTML = '';
    yellowPictures.forEach((picture) => {
        colorSection.append(createTemplate(picture));
    });
    links.forEach((link) => {
        if(link.classList.contains('products__link_active')) {
            link.classList.remove('products__link_active');
            yellowLink.classList.add('products__link_active');
        }
    })
})

allLink.addEventListener('click', function (e) {
    colorSection.innerHTML = '';
    allPictures.forEach((picture) => {
        colorSection.append(createTemplate(picture));
    });
    links.forEach((link) => {
        if(link.classList.contains('products__link_active')) {
            link.classList.remove('products__link_active');
            allLink.classList.add('products__link_active');
        }
    })
})



