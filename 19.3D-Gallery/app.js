const $galleryContainer = document.querySelector('.gallery-container');

function updateGallery() {
    const $firstImage = $galleryContainer.firstElementChild
    $firstImage.remove();
    $galleryContainer.appendChild($firstImage);
}

setInterval(updateGallery, 2000);