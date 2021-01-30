const worksBtnDropMenu1 = document.querySelector('#works__btn-drop-menu-1');
const worksBtnDropMenu2 = document.querySelector('#works__btn-drop-menu-2');
const worksItemsDrop1 = document.querySelector('#works__items-drop-1');
const worksItemsDrop2 = document.querySelector('#works__items-drop-2');
const loadingWorks = document.querySelector('.works__cssload-loader');

const showDropGallery1  = () => { 
    worksBtnDropMenu1.style.display = 'none';
    loadingWorks.style.display = 'block';
    setTimeout(() => {
        loadingWorks.style.display = 'none';
        worksItemsDrop1.style.display = 'grid';
        worksBtnDropMenu2.style.display = 'block';
    }, 2000)  
    
};
const showDropGallery2  = () => { 
    worksBtnDropMenu2.style.display = 'none';
    loadingWorks.style.display = 'block';
    setTimeout(() => {
        loadingWorks.style.display = 'none';
        worksItemsDrop2.style.display = 'grid';
    }, 2000)  
   
};

worksBtnDropMenu1.addEventListener('click', showDropGallery1);
worksBtnDropMenu2.addEventListener('click', showDropGallery2);