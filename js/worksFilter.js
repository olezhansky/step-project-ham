(function() {
    const worksItems = document.querySelectorAll('.works__item');
    const worksMenuEl = document.querySelector('.works__menu');
    const worksMenuItemEl = document.querySelectorAll('.works__menu-item ');
    const worksItemsDdropEl = document.querySelector('.works__items-drop');
    const worksBtnDropMenuEl = document.querySelector('.works__btn-drop-menu');
    const worksItemsBlockEl = document.querySelector('.works__items');
    const worksItemsDropBlockEl = document.querySelector('.works__items-drop');
    const loadingWorksEl = document.querySelector('.works__cssload-loader');
    
    const filterGallery  = (event) => {
        if (event.target.tagName !== 'LI') return false;
        const filterClass = event.target.dataset['filter'];
        worksItems.forEach(item => {
            item.classList.remove('works__item-hide');
            if (!item.classList.contains(filterClass) && filterClass !== 'all-items') {
                item.classList.add('works__item-hide');
            }
            worksItemsBlockEl.style.marginLeft = '152px';
            worksItemsDropBlockEl.style.marginLeft = '152px';
            if (filterClass === 'all-items') {
                worksItemsBlockEl.style.marginLeft = '0px';
                worksItemsDropBlockEl.style.marginLeft = '0px'; 
            }
        })
    };
    const changeBorderColorInWorksMenuItem = (event) => {
        if (event.target.tagName !== 'LI') return false;
        for (let menuItem of worksMenuItemEl) {
            menuItem.classList.remove('works__menu-item--active')
        }
        event.target.classList.add('works__menu-item--active');
    };
    const hideLoadingShowDropGallery  = () => { 
        setTimeout(() => {
            loadingWorksEl.style.display = 'none';
            worksItemsDdropEl.style.display = 'grid';
        }, 2000)
    };
    
    worksMenuEl.addEventListener('click', filterGallery);
    worksMenuEl.addEventListener('click', changeBorderColorInWorksMenuItem);
    worksBtnDropMenuEl.addEventListener('click', function () {
        this.style.display = 'none';
        loadingWorksEl.style.display = 'block';
    });
    worksBtnDropMenuEl.addEventListener('click', hideLoadingShowDropGallery);
}());








