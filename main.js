const image = document.querySelector('#intro-image');
const openBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#close');
const header = document.querySelector('header');

const imageChange = () => {
    if(window.innerWidth <= 1104 ) {
        image.className = 'mobile--image';
    } else {
        image.className = 'desktop--image';
    }
}

const openMenu = (event)  => {
    const menuList = event.target.parentElement.nextElementSibling;
    menuList.style.display = 'block';
    header.style.backgroundColor =  'hsl(233, 8%, 62%)';
}

const closeMenu = (event)  => {
    const menuList = event.target.parentElement;
    menuList.style.display = 'none';
    header.style.backgroundColor =  'hsl(0, 100%, 100%)';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

window.addEventListener('resize', imageChange);
window.onload = imageChange();