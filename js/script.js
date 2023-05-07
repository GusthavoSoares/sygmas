const bannerIndex = $('#banner1')
const bannerWorks = $('#banner2')
const bannerContact = $('#banner3')
var nome = document.getElementById('name');
var email = document.getElementById('mail');
var telefone = document.getElementById('telefone');
var mensagem = document.getElementById('mensagem');
var error = document.getElementById('info');
$(document).ready(function(){
    $('.menuMobile i').click(function(){
        ul = $('.menuMobile ul')
        ul.fadeToggle()
        
     })
     bannerIndex.css('background-image', 'url(./img/banner1.jpg)')
     bannerWorks.css('background-image', 'url(./img/banner2.png)')
     bannerContact.css('background-image', 'url(./img/banner3.png)')
          $('#img').css('background-image','url(./img/codar.jpg)')
})




