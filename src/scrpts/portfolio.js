"use strict";

function themeChager() {
    $('.nav__info--theme').addEventListener('click', e => {
        let theme = $('.nav__info--theme-box');
        if (e.target.classList.contains('dark')){
            theme.classList.remove('left-[3px]');
           theme.classList.add('right-[3px]');
           $('body').style.cssText = 'background-color: #111317; color: white;';

           $('.dark').style.color = 'white';
           $('.light').style.color = '#AAAAAA';
           $('.order').style.background = '#0E1014';
           $('.foot').style.cssText = 'background:rgba(14, 16, 20, 0.9); border-top: 1px solid #4E4E4E;';
    
           
        }
    
    
    
        if( e.target.classList.contains('light') ) {
            theme.classList.remove('right-[3px]');
            theme.classList.add('left-[3px]');
           $('body').style.cssText = 'background-color: white; color:black;';
           $('button').style.color = 'white';

           $('header').style.cssText = 'background:rgba(23, 25, 29, 0.1); backdrop-filter: blur(1px);';
           $('.light').style.color = 'white';
           $('.dark').style.color = '#AAAAAA';
           
    
           $$('.card__date').forEach( e => {
            e.style.color = '#272727';
           });
           $('.order').style.background = 'rgba(255, 255, 255, 0.9)';
           $('.foot').style.cssText = 'background:rgba(255, 255, 255, 0.9); border-top: 1px solid #FFFFFF;';
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
    themeChager();
    toggleMenu();
})



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

