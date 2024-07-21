import '/src/styles.css';

const loadHome = () => {
  const content = document.getElementById('content');
  const homeText = document.createElement('div')
  
  homeText.textContent = "Welcome to Cafuné"
  content.appendChild(homeText);
  content.classList.add("home-content")
  return content;
}


export default loadHome;