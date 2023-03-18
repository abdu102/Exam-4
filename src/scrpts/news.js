"use strict";

function themeSwitcher() {
    $('.nav__info--theme').addEventListener('click', e => {
        let theme = $('.nav__info--theme-box');
        if (e.target.classList.contains('dark')){
            theme.classList.remove('left-[3px]');
           theme.classList.add('right-[3px]');
           $('body').style.cssText = 'background-color: #111317; color: white;';
           $('main').classList.add('bg-[url(./img/news.png]')
           $('main').classList.remove('bg-[url(./img/news__light.png)]');
           $('.dark').style.color = 'white';
           $('.light').style.color = '#AAAAAA';
    
           $('.foot').style.cssText = 'background:rgba(14, 16, 20, 0.9); border-top: 1px solid #4E4E4E;';
    
           $('.news__info').style.background = ' rgba(14, 16, 20, 0.9)';
           $$('.nws--txt').forEach( e => {
            e.style.color = '#FFFFFF';
           });
           $('.events__card--text').style.background = '#0E1014';
        }
    
    
    
        if( e.target.classList.contains('light') ) {
            theme.classList.remove('right-[3px]');
            theme.classList.add('left-[3px]');
           $('body').style.cssText = 'background-color: white; color:black;';
           $('button').style.color = 'white';
           $('main').classList.remove('bg-[url(./img/news.png)]');
           $('main').classList.add('bg-[url(./img/news__light.png)]');
           $('header').style.cssText = 'background:rgba(23, 25, 29, 0.1); backdrop-filter: blur(1px);';
           $('.light').style.color = 'white';
           $('.dark').style.color = '#AAAAAA';
           $('.news__info').style.background = 'rgba(255, 255, 255, 0.9)';
           $$('.nws--txt').forEach( e => {
            e.style.color = '#000';
           });
           $$('.card__date').forEach( e => {
            e.style.color = '#272727';
           });
           $('.foot').style.cssText = 'background:rgba(255, 255, 255, 0.9); border-top: 1px solid #FFFFFF;';
           $$('.events__card--text').forEach(e => {
            e.style.background = '#FFFFFF';
           })
    
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
    themeSwitcher();
    toggleMenu();
})