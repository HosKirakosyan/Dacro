
var header = document.getElementById('header');
var header_top = document.getElementById('header_top');
var header_bottom = document.getElementById('header_bottom');
const menu_btn = document.getElementById('header_burger')
const header_menu = document.getElementById('mobile_nav')
const mobile_backgorund = document.getElementById('mobile_backgorund')
const body = document.getElementsByTagName('body')[0];
const headerScroll = 80;



window.onscroll = function(){
    if(window.scrollY > headerScroll){
        header.classList.add("sticky")
        header_top.classList.add("sticky_top")
        header_bottom.classList.add("sticky_bottom")
    }else{
        header.classList.remove("sticky")
        header_top.classList.remove("sticky_top")
        header_bottom.classList.remove("sticky_bottom")
    }
}



menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    header_menu.classList.toggle('is-active');
    body.classList.toggle('is-active');
    mobile_backgorund.classList.toggle('is-active');
    
};


document.onclick = function(e){
    if(e.target.id !== 'header_burger' && e.target.id !== 'menu'){
        menu_btn.classList.remove('is-active');
        header_menu.classList.remove('is-active');
        mobile_backgorund.classList.remove('is-active');
        body.classList.remove('is-active');
    };
};



