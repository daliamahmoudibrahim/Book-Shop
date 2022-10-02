let  load=document.getElementById('load')
   , userform=document.getElementById('userform')
    ,form=document.getElementById('form')
    ,closeform=document.getElementById('closeform');

window.addEventListener('load',()=>{
    setTimeout(() => {
       load.style.display="none";
    }, 4500);
});

userform.onclick=()=>{
    // form.style.display='block';
    form.style.visibility='visible'

    // form.style.transform='translateX(0px)';
    console.log('hello');
}
closeform.onclick=()=>{
    form.style.visibility='hidden';
    // form.style.transform='translateX(1600px)';
    // form .style.display='none';
    
}


window.onscroll=function(){
  if(window.scrollY > 0){
    document.querySelector('#nav').classList.add('position');
}else{
    document.querySelector('#nav').classList.remove('position');
}
}

// swiper
var swiper = new Swiper(".mainimg .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });

  // swiper media main page

  var swipermedia= new Swiper(".media .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 1,
  });


  // featurebook media 
  var swiperfeaturemedia = new Swiper(" #featurebook-media .mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiper1 = new Swiper(".newArrivals-books .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });


  var swiper2 = new Swiper("#reviews .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
 

  var swiper3 = new Swiper("#Blogs .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });



  var swiper4 = new Swiper("#featurebooks .mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 4,
  });