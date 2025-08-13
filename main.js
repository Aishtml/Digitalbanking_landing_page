const image = document.querySelector('#intro-image');

const imageChange = () => {
    if(window.innerWidth <= 1104 ) {
        image.className = 'mobile--image';
    } else {
        image.className = 'desktop--image';
    }
}

window.onresize = imageChange();
window.onload = imageChange();