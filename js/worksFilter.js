(function() {
    const worksItems = document.querySelectorAll('.works__item');
    const worksMenu = document.querySelector('.works__menu');
    const worksMenuItem = document.querySelectorAll('.works__menu-item');
    const worksItemsBlock = document.querySelector('.works__items');
    const worksItemsDropBlock1 = document.querySelector('#works__items-drop-1');
    const worksItemsDropBlock2 = document.querySelector('#works__items-drop-2');

    const filterGallery  = (event) => {
        if (event.target.tagName !== 'LI') return false;
        const filterClass = event.target.dataset['filter'];
        worksItems.forEach(item => {
            item.classList.remove('works__item-hide');
            if (!item.classList.contains(filterClass) && filterClass !== 'all-items') {
                item.classList.add('works__item-hide');
            }
            worksItemsBlock.style.marginLeft = '152px';
            worksItemsDropBlock1.style.marginLeft = '152px';
            worksItemsDropBlock2.style.marginLeft = '152px'
            if (filterClass === 'all-items') {
                worksItemsBlock.style.marginLeft = '0px';
                worksItemsDropBlock1.style.marginLeft = '0px'; 
                worksItemsDropBlock2.style.marginLeft = '0px'
            }
        })
    };
    const changeBorderColorInWorksMenuItem = (event) => {
        if (event.target.tagName !== 'LI') return false;
        for (let menuItem of worksMenuItem) {
            menuItem.classList.remove('works__menu-item--active')
        }
        event.target.classList.add('works__menu-item--active');
    };
    worksMenu.addEventListener('click', filterGallery);
    worksMenu.addEventListener('click', changeBorderColorInWorksMenuItem);
}());









