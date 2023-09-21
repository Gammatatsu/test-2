import 'normalize.css';
import './styles/main.scss';
let navigation = document.querySelector('.navigation')
let menuButton = document.querySelector('.services__menu-button')
let prevButton = document.querySelector('.slider__switch-prev')
let nextButton = document.querySelector('.slider__switch-next')
let offset = 0;
let width = document.querySelector('.slider__item').clientWidth;;
let sliderContent = document.querySelector('.slider__content')
let countItem = document.querySelector('.slider__switch-value')
let popup = document.querySelector('.popup')
let popupOpen = document.querySelectorAll('.popup__open-button')
let popupClose = document.querySelector('.popup__close-button')

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('navigation--active')
    menuButton.classList.toggle('services__menu-button--active')
    document.querySelector('body').classList.toggle('menu-opened');

})

nextButton.addEventListener('click', function () {
    if (width == 1140) {
        offset += 1140;
        if (offset > 3420) {
            offset = 0;
        }
        sliderContent.style.left = -offset + 'px';

        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 1140) {
            countItem.textContent = '2';
        } else if (offset == 2280) {
            countItem.textContent = '3';
        } else if (offset == 3420) {
            countItem.textContent = '4';
        }
    }
    else if (width == 600) {
        offset += 600;
        if (offset > 1800) {
            offset = 0;
        }
        sliderContent.style.left = -offset + 'px';
        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 600) {
            countItem.textContent = '2';
        } else if (offset == 1200) {
            countItem.textContent = '3';
        } else if (offset == 1800) {
            countItem.textContent = '4';
        }
    }

    else {
        offset += 340;

        if (offset > 1020) {
            offset = 0;
        }
        sliderContent.style.left = -offset + 'px';

        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 340) {
            countItem.textContent = '2';
        } else if (offset == 680) {
            countItem.textContent = '3';
        } else if (offset == 1020) {
            countItem.textContent = '4';
        }
    }

});

prevButton.addEventListener('click', function () {
    offset -= 1140;

    console.log('уебище')
    if (width == 1140) {
        if (offset < 0) {
            offset = 3420;
        }
        sliderContent.style.left = -offset + 'px';

        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 1140) {
            countItem.textContent = '2';
        } else if (offset == 2280) {
            countItem.textContent = '3';
        } else if (offset == 3420) {
            countItem.textContent = '4';
        }
    }
    else if (width == 600) {
        offset -= 600;
        if (offset < 0) {
            offset = 1800;
        }
        sliderContent.style.left = -offset + 'px';
        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 600) {
            countItem.textContent = '2';
        } else if (offset == 1200) {
            countItem.textContent = '3';
        } else if (offset == 1800) {
            countItem.textContent = '4';
        }
    }


    else {
        offset -= 340;
        if (offset < 0) {
            offset = 1020;
        }
        sliderContent.style.left = -offset + 'px';

        if (offset == 0) {
            countItem.textContent = '1';
        } else if (offset == 340) {
            countItem.textContent = '2';
        } else if (offset == 680) {
            countItem.textContent = '3';
        } else if (offset == 1020) {
            countItem.textContent = '4';
        }
    }
});

for (let button of popupOpen) {
    button.addEventListener('click', () => {
        popup.classList.add('popup--active')
    })
}
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup--active')
})
