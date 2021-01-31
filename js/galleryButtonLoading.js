(function () {
    const galleryBtnDropMenu = document.querySelector('.gallery__btn-drop-menu');
    const loadingGallery = document.querySelector('.gallery__cssload-loader');
    const galleryItemsDrop = document.querySelector('.gallery__items-drop');
    const showDropGallery  = () => { 
        galleryBtnDropMenu.style.display = 'none';
        loadingGallery.style.display = 'block';
        setTimeout(() => {
            loadingGallery.style.display = 'none';
            galleryItemsDrop.style.display = 'grid'
        }, 2000)
    };
    galleryBtnDropMenu.addEventListener('click', showDropGallery);
}());
