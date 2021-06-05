$(document).ready(function () {
    $('.slider-image').slick({
        fade: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 900,
        infinite: true

    })

    $('.step2__list').slick({
        fade: false,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        autoplaySpeed: 1500,
        speed: 900,
        infinite: false,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1330,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 770,
                settings: {
                  slidesToShow: 2,
                }
              }
        ]
    })
})

let progressBar = document.querySelector('.progreess-bar')
let servicesListWrap = document.querySelector('.services__list_wrap')
let servicesList = document.querySelector('.services__list')
let body = document.querySelector('body')
let menuOpenBtn = document.querySelector('.menu-burger')
let menu = document.querySelector('.menu_wrap')
let background = document.querySelector('.background--black')
let closeMenuBtn = document.querySelector('.button--close')

menuOpenBtn.addEventListener('click', function() {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

background.addEventListener('click', function() {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

closeMenuBtn.addEventListener('click', function() {
    background.classList.toggle('active')
    menu.classList.toggle('active')
})

const arrayLink = document.querySelectorAll('.menu-item__link')
if(arrayLink.length > 0){
    arrayLink.forEach(link => {
        link.addEventListener('click', function(e) {
            background.classList.toggle('active')
            menu.classList.toggle('active')
            setTimeout(function() {
                imageStep1.classList.add('active')
                blockStep1.classList.add('active')
            }, 700)
            const menuLink = e.target
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const block = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = block.getBoundingClientRect().top + pageYOffset
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault()
            }
        }) 
    })
}

body.addEventListener('click', function() {
    console.log(pageYOffset)
})

let complex = document.querySelector('.complex')
let step3 = document.querySelector('.step3')
let imageStep1 = document.querySelector('.slider-image_wrap')
let blockStep1 = document.querySelector('.step1-block')
let blockStep3 = document.querySelector('.step3-block')
let imageStep3 = document.querySelector('.step3__image_wrap');

window.addEventListener('scroll', function(e) {
   if(pageYOffset > 1800) {
    imageStep1.classList.add('active')
    blockStep1.classList.add('active')
   }
   if(pageYOffset > 2900) {
    imageStep3.classList.add('active')
    blockStep3.classList.add('active')
   }

})

servicesList.addEventListener('wheel', function(e) {
        if(servicesList.scrollLeft < 430) {
            e.preventDefault()
            servicesList.scrollLeft += e.deltaY;
            let progressWidth = servicesList.scrollLeft / 4
            console.log(progressWidth)
            progressBar.style.width = progressWidth + '%'
        }
})


// (function(){
//     $.jInvertScroll(['.services-item'],{
//         height: 40,
//         onScroll: function(percent) {
//             console.log(percent)
//         }
//     });
// })(jQuery);

//   horwheel(servicesList);

