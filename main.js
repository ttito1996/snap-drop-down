// drop-down-menu show product

const productDropDown = document.querySelector('.sub-menu-product');
const dropLinkProduct = document.getElementById('product-arrow');
var clearTime;

dropLinkProduct.addEventListener('mouseenter', (event) => {
    if(!productDropDown.classList.contains('open')) {
        productDropDown.classList.add('open');
    }
})

productDropDown.addEventListener('mouseenter', (event) => {
    productDropDown.classList.add('focused-on');
})

productDropDown.addEventListener('mouseleave', (event) => {
    productDropDown.classList.remove('focused-on', 'open');
})

dropLinkProduct.addEventListener('mouseout', (event) => {
    clearTime = setTimeout(function() {
        if(!productDropDown.classList.contains('focused-on')) {
            productDropDown.classList.remove('focused-on', 'open');
        }
    }, 500)
})

//drop-down-menu show features

const featureDropDown = document.querySelector('.sub-menu-features');
const dropLinkFeature = document.getElementById('features-arrow');


dropLinkFeature.addEventListener('mouseenter', (event) => {
    if(!featureDropDown.classList.contains('open')) {
        featureDropDown.classList.add('open');
    }
})

featureDropDown.addEventListener('mouseenter', (event) => {
    featureDropDown.classList.add('focused-on');
})

featureDropDown.addEventListener('mouseleave', (event) => {
    featureDropDown.classList.remove('focused-on', 'open');
})

dropLinkFeature.addEventListener('mouseout', (event) => {
    clearTime = setTimeout(function() {
        if(!featureDropDown.classList.contains('focused-on')) {
            featureDropDown.classList.remove('focused-on', 'open');
        }
    }, 500)
})


// mobile-menu

const mobileBtn = document.querySelector('.btn-mobile');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const humbergerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');

mobileBtn.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('is-active');
})

function openNav() {
    if(!mobileMenu.classList.contains('is-active')) {{
        document.querySelector('.icon-hamburger').style.display = 'none';
    }}
}

function closeNav() {
    if(mobileMenu.classList.contains('is-active')) {
        document.querySelector('.icon-close').style.display = 'block';
    }
}

mobileBtn.addEventListener('click', () => {
    if(mobileMenu.classList.contains('is-active')) {
        closeIcon.style.display = 'block';
        humbergerIcon.style.display = "none";
    } else {
        humbergerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
})