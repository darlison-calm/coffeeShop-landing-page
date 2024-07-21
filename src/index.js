import loadHome from "./loadHomePage";
import loadAbout from "./aboutPage";
import loadMenu from "./menuPage";

function display() {
  loadHome()
  
  const content = document.getElementById('content')

  const homeBtn = document.getElementById('home-btn')
  homeBtn.addEventListener('click', (e) => {
    clean(content);
    loadHome()
    toogleActivePageColor(e)
  })

  const aboutBtn = document.getElementById('about-btn')
  aboutBtn.addEventListener('click', (e) => {
    clean(content)
    loadAbout()
    toogleActivePageColor(e)
  })
  
  const menuBtn = document.getElementById('menu-btn')
  menuBtn.addEventListener('click', (e) => {
    clean(content)
    loadMenu()
    toogleActivePageColor(e)
  })
  
  function clean(element) {
    element.firstElementChild.remove();
  }

  const navLinks = document.querySelectorAll('button');

  function toogleActivePageColor(element){
    navLinks.forEach(link => link.classList.remove('active'));
    element.target.classList.add('active')
  }
}

display()