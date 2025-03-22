
const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
});


$(document).ready(function(){
    $("#home-btn").click(function(){
      $(this).hide();
    });
  });
  
  
let menu = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navber.classList.toggle('open');
};

window.onscroll = () =>{

    menu.classList.remove('bx-x');
    navber.classList.remove('open');



}
