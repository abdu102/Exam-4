"use strict";

function themechanger() {
    $('.nav__info--theme').addEventListener('click', e => {
        let theme = $('.nav__info--theme-box');
        if (e.target.classList.contains('dark')){
            theme.classList.remove('left-[3px]');
           theme.classList.add('right-[3px]');
           $('body').style.cssText = 'background-color: #111317; color: white;';
           $('main').classList.add('bg-[url(./img/noise.png)]')
           $('.dark').style.color = 'white';
           $('.light').style.color = '#AAAAAA';
           $$('.advantages__cards--card').forEach(e => {
            e.style.background = 'rgba(17, 19, 23, 0.5)'
           });
           $('.services__cards').style.background = 'rgba(14, 16, 20, 0.9)';
    
           $$('.card').forEach( e => {
            e.style.background = 'rgba(14, 16, 20, 0.9)';
           });
    
           $$('.name').forEach( e => {
            e.style.color = '#fff';
           });
    
           $$('.description').forEach( e => {
            e.style.color = 'rgba(255, 255, 255, 0.7)';
           });
    
           $$('.card__date').forEach( e => {
            e.style.color = '#B0B0B0';
           });
           $('.order').style.background = '#0E1014';
           $('.foot').style.cssText = 'background:rgba(14, 16, 20, 0.9); border-top: 1px solid #4E4E4E;';
    
           
        }
    
    
    
        if( e.target.classList.contains('light') ) {
            theme.classList.remove('right-[3px]');
            theme.classList.add('left-[3px]');
           $('body').style.cssText = 'background-color: white; color:black;';
           $('button').style.color = 'white';
           $('main').classList.remove('bg-[url(./img/noise.png)]')
           $('header').style.cssText = 'background:rgba(23, 25, 29, 0.1); backdrop-filter: blur(1px);';
           $('.light').style.color = 'white';
           $('.dark').style.color = '#AAAAAA';
           $('.order').style.background = 'rgba(255, 255, 255, 0.9)';
           $('.services__cards').style.background = 'rgba(255, 255, 255, 0.9)';
           $('.foot').style.cssText = 'background:rgba(255, 255, 255, 0.9); border-top: 1px solid #FFFFFF;';
           $$('.advantages__cards--card').forEach(e => {
            e.style.background = 'rgba(243, 243, 243, 0.5)'
           });
           $$('.card').forEach( e => {
            e.style.background = 'rgba(255, 255, 255, 0.9)';
           });
           $$('.name').forEach( e => {
            e.style.color = '#000';
           });
           $$('.description').forEach( e => {
            e.style.color = 'rgba(39, 39, 39, 0.7)';
           });
           $$('.card__date').forEach( e => {
            e.style.color = '#272727';
           });
        }
    })
}

function toggleMenu() {
    $('.burger').addEventListener('click', e => {
        $('.nav__menu').classList.remove('hidden');
        $('body').classList.add('overflow-y-hidden');
    
    })
    $('.closed').addEventListener('click', e => {
        $('.nav__menu').classList.add('hidden');
        $('body').classList.remove('overflow-y-hidden');
    })  
}

window.addEventListener('load', e => {
    themechanger();
    toggleMenu();
})
$('.portfolio__title--category').addEventListener('click', e => {
    e.preventDefault()

    
    if(e.target.classList.contains('web')) {
        $('.changer').style.left = '21%';
        console.log("sd");
    } else if( e.target.classList.contains('edit') ) {
        $('.changer').style.left = '43%';

    } else if ( e.target.classList.contains('smm') ) {
        $('.changer').style.left = '63%';

    } else if (e.target.classList.contains('app')) {
        $('.changer').style.left = '83%';
    } else if(e.target.classList.contains('all')){
        $('.changer').style.left = '0';

    }
})
var swiper1 = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },  
    
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });

 var swiper2 = new Swiper(".my-slider", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },  
    
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });




function sendToHost(e) {
    e.preventDefault();
    let username = $('#name').value;
    let phone = $('#phoneNumber').value;
    let idea = $('#idea').value > 0 ? $('#idea').value : null;
    let job = [];
    let chexArr = $$('#default-checkbox').forEach(el => {
        if( el.checked ) {
            job.push(el.value);
        }
    });
    let drink = $('.drinks').addEventListener('click', e => {
        if( e.target.classList.contains('drinks__black') ) {
            return 'Achchiq coffee';
        } else if(e.target.classList.contains('drinks__milk')) {
            return 'Sutli coffee';
        } else if( e.target.classList.contains('drinks__water') ) {
            return 'Suv';
        } else if( e.target.classList.contains('drinks__tea') ) {
            return 'Choy';
        }
    });

    let newUser = {
        id: Date.now(),
        username: username,
        phoneNumber: phone,
        idea: idea,
        job: job,
        preferableDrink: drink
    }
    if( newUser.username.length == 0 || newUser.phoneNumber.length == 0 ) {
        alert('Please enter register form!')
    } else{
        fetch('https://echo.htmlacademy.ru/', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        console.log(newUser);
    }
}
$('#sub-btn1').addEventListener('click', e => {
    sendToHost(e);
})
$('#sub-btn2').addEventListener('click', e => {
    sendToHost(e);
})


