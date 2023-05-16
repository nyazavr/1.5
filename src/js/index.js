import '../scss/style.scss'
import * as $ from 'jquery'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'


const swiper = new Swiper('.brends--swiper', {
  modules:[Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  }
})
if(window.matchMedia('(min-width: 768px)').matches){
  swiper.disable();
}else{
  swiper.enable();
  
}
$(window).on( "resize", function() {
  if(window.matchMedia('(min-width: 768px)').matches){
    swiper.disable();
  }else{
    
    swiper.enable();
  }
} );

let fl=true
$('.read-more__button').on('click',function() {
  $('.read-more__content').toggleClass('read-more--close read-more--open')
  $('.read-more__button .expand').toggleClass('expand--read-more expand--less');
  if(fl){
    $('.read-more__button span').html('Свернуть');
    fl=false;
  }else{
    $('.read-more__button span').html('Читать далее');
    fl=true;
  }
})

console.log('hello!!')
