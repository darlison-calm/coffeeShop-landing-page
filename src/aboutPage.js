import '/src/styles.css'
const loadAbout = () => {
  const aboutDiv = document.createElement('div');
  const aboutText = document.createElement('p')
  aboutText.textContent = `Welcome to Cafuné Coffee Shop in the heart of São Paulo, 
  where we craft each cup with care inspired by the Brazilian Portuguese word "cafuné"—a tender gesture embodying warmth and intimacy. 
  Enjoy the finest coffee from around the world in a cozy, inviting space. Our expert baristas are passionate storytellers, 
  ensuring every visit is an experience to savor. Whether you seek a tranquil morning ritual or a place to unwind with friends, 
  join us at Cafuné for great coffee and simple pleasures.`;

  aboutDiv.appendChild(aboutText);
  aboutDiv.classList.add('about-content')
  
  const content = document.getElementById('content');
  
  content.appendChild(aboutDiv);
}

export default loadAbout;