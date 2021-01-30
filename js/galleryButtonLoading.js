(function () {
    const galleryBtnDropMenuEl = document.querySelector('.gallery__btn-drop-menu');
    const loadingGalleryEl = document.querySelector('.gallery__cssload-loader');
    const galleryItemsDropEl = document.querySelector('.gallery__items-drop');
    
    const hideLoadingShowDropGallery  = () => { 
        setTimeout(() => {
            loadingGalleryEl.style.display = 'none';
            galleryItemsDropEl.style.display = 'grid';
        }, 2000)
    };
    
    galleryBtnDropMenuEl.addEventListener('click', function() {
        this.style.display = 'none';
        loadingGalleryEl.style.display = 'block';
    });
    galleryBtnDropMenuEl.addEventListener('click', hideLoadingShowDropGallery);
}());
