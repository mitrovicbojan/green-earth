var i = 0;
var images = [];
var time = 3000;

images[0] = '/images/photo-1.jpg';
images[1] = '/images/photo-2.jpg';
images[2] = '/images/photo-3.jpg';

function slideImg() {
    document.slider.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImg()", time);
}
window.onload = slideImg();