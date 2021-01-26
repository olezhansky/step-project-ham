// Services tabs
let buttonsTab = document.querySelector('.services__menu');
const BACKGROUND_COLOR_TAB_1= '#18CFAB';
const BACKGROUND_COLOR_TAB_2 = '#F8FCFE';
function changeTabsOnClick(event) {
    if (event.target.className == 'services__menu-item') {
        let dataTab = event.target.getAttribute('data-tab');
        let tabContentItem = document.querySelectorAll('.services__menu-content-item');
        let tabsTitle = document.querySelectorAll('.services__menu-item');
        for (let i = 0; i < tabsTitle.length; i++ ) {
            tabsTitle[i].classList.remove('services__menu-item--active');
        }
        for (let i = 0; i < tabContentItem.length; i++) {
            if (dataTab == i) {
                tabContentItem[i].style.display = 'flex';
                tabsTitle[i].classList.add('services__menu-item--active');
                for (let i = 0; i < tabsTitle.length; i++) {
                    if (dataTab == i) {
                        tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_1;
                    } else {
                        tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_2;
                    }
                }
            } else {
                tabContentItem[i].style.display = 'none'; 
            }
        }
    }
};
buttonsTab.addEventListener('click', changeTabsOnClick);