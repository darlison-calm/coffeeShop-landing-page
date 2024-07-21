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
  })

  const aboutBtn = document.getElementById('about-btn')
  aboutBtn.addEventListener('click', (e) => {
    clean(content)
    loadAbout()
  })
  
  const menuBtn = document.getElementById('menu-btn')
  menuBtn.addEventListener('click', (e) => {
    clean(content)
  })
  
  function clean(element) {
    element.firstElementChild.remove();
  }
}

display()