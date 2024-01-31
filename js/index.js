
// Slider

const slider = new Swiper('.slider', {
  loop: true,
  cssMode: true,
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

}
);

// Modal window

const openButton = document.querySelector('.we-deliver-info');
const popup = document.querySelector ('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

const openMenu = () => {
    openButton.addEventListener('click', function () {
        popup.classList.remove('closed');
    }
    )
  }
  
  const closeMenu = () => {
    closeButton.addEventListener('click', function () {      
        popup.classList.add('closed');
      }
    )
  }

  // Blinking arrow

const div = document.createElement('div');
const parentDiv = document.querySelector('.categories');

const startBlinking = () => {
    parentDiv.append(div);
    div.classList.add('blinking-arrow');
}



    startBlinking();
    slider.init();
    openMenu();
    closeMenu();
