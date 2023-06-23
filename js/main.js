// sliders

$(function(){
    $('.members__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 525,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });

      $('.participation__slider').slick({
        slidesToShow: 1,
      });
})

// modal

const btnNo = document.querySelector('.popUp__btn--no')
const btnYes = document.querySelector('.popUp__btn--yes')
const popUpAuth = document.querySelector('.popUp__auth')
const popUpClose = document.querySelector('.popUp__close')
const popUp = document.querySelector('.popUp')
const body = document.querySelector('body')
body.classList.add('modal-open')

btnYes.addEventListener('click', ()=>{
  popUp.classList.remove('modal-open')
  body.classList.remove('modal-open')
})
btnNo.addEventListener('click', ()=>{
  popUpAuth.classList.remove('active')
  popUpClose.classList.add('active')
})

// faq block accordion

const accordionHeader = document.querySelectorAll('.accordion__header')
const accordionItem = document.querySelectorAll('.accordion__item')

accordionHeader.forEach((el, i)=>el.addEventListener('click',()=>{
  if(accordionItem[i].classList.contains('open')){
    accordionItem[i].classList.remove('open')
  } else{
    accordionItem.forEach(el=>el.classList.remove('open'))
    accordionItem[i].classList.add('open')
  }
  
}))

// nav

const navBtn = document.querySelector('.nav__btn')
const navIcon = document.querySelector('.nav-icon')
const navBlock = document.querySelector('.nav')
navBtn.addEventListener('click', ()=>{
  if(navBlock.classList.contains('open')){
    navBlock.classList.remove('open')
    navIcon.classList.remove('open')
  } else{
    navBlock.classList.add('open')
    navIcon.classList.add('open')
  }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });

      navBlock.classList.remove('open')
      navIcon.classList.remove('open')
  });
});

// map

const region1 = document.querySelector('#region1')
const region1_1 = document.querySelector('#region1-1')
const region1Array = [region1, region1_1]
const region2 = document.querySelector('#region2')
const region2_2 = document.querySelector('#region2-2')
const region2Array = [region2, region2_2]
const region3 = document.querySelector('#region3')
const region4 = document.querySelector('#region4')
const region5 = document.querySelector('#region5')
const region6 = document.querySelector('#region6')
const region7 = document.querySelector('#region7')
const region8 = document.querySelector('#region8')

const region6Img = document.querySelector('.region6__img')
const region4Img = document.querySelector('.region4__img')
const region7Img = document.querySelector('.region7__img')
const region3Img = document.querySelector('.region3__img')
const region8Img = document.querySelector('.region8__img')
const region5Img = document.querySelector('.region5__img')
const region2Img = document.querySelector('.region2__img')
const region1Img = document.querySelector('.region1__img')

region1Array.forEach(r=>{
  r.addEventListener('mouseover', ()=>{
    region1.classList.add('active')
    region1_1.classList.add('active')
    region1Img.classList.add('active')
  })
})
region1Array.forEach(r=>{
  r.addEventListener('mouseout', ()=>{
    region1.classList.remove('active')
    region1_1.classList.remove('active')
    region1Img.classList.remove('active')
  })
})
region2Array.forEach(r=>{
  r.addEventListener('mouseover', ()=>{
    region2.classList.add('active')
    region2_2.classList.add('active')
    region2Img.classList.add('active')
  })
})
region2Array.forEach(r=>{
  r.addEventListener('mouseout', ()=>{
    region2.classList.remove('active')
    region2_2.classList.remove('active')
    region2Img.classList.remove('active')
  })
})
region3.addEventListener('mouseover', ()=>{
  region3.classList.add('active')
  region3Img.classList.add('active')
})
region3.addEventListener('mouseout', ()=>{
  region3.classList.remove('active')
  region3Img.classList.remove('active')
})
region4.addEventListener('mouseover', ()=>{
  region4.classList.add('active')
  region4Img.classList.add('active')
})
region4.addEventListener('mouseout', ()=>{
  region4.classList.remove('active')
  region4Img.classList.remove('active')
})
region5.addEventListener('mouseover', ()=>{
  region5.classList.add('active')
  region5Img.classList.add('active')
})
region5.addEventListener('mouseout', ()=>{
  region5.classList.remove('active')
  region5Img.classList.remove('active')
})
region6.addEventListener('mouseover', ()=>{
  region6.classList.add('active')
  region6Img.classList.add('active')
})
region6.addEventListener('mouseout', ()=>{
  region6.classList.remove('active')
  region6Img.classList.remove('active')
})
region7.addEventListener('mouseover', ()=>{
  region7.classList.add('active')
  region7Img.classList.add('active')
})
region7.addEventListener('mouseout', ()=>{
  region7.classList.remove('active')
  region7Img.classList.remove('active')
})
region8.addEventListener('mouseover', ()=>{
  region8.classList.add('active')
  region8Img.classList.add('active')
})
region8.addEventListener('mouseout', ()=>{
  region8.classList.remove('active')
  region8Img.classList.remove('active')
})
document.addEventListener('click', (e)=>{
  if(e.target!==region5 )
    {
      region5.classList.remove('active')
    }
})