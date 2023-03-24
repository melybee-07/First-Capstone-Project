// humberger menu ----------------------------------------

const menuBtn = document.querySelector('.hamburger');
const mbileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mbileMenu.classList.toggle('is-active');
});

// feature speaker section -------------------------------

// function to generate the content
function generateContent([grillimg, peopleimg, hfour, hfive, descriptionp]) {
  const code = `
    
                <div class="cont card">
                    <div class="image-container">
                        <img src="${grillimg}" alt="grille" class="imggrille">
                        <img src="${peopleimg}" alt="mario klingemann" class="imgpersone">
                    </div>
                    <div class="cards-intro">
                        <ul>
                            <li>
                                <h4>${hfour}</h4>
                            </li>
                            <li>
                                <h5>${hfive}</h5>
                            </li>
                            <li>
                                <p>${descriptionp}</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                
    `;
  return code;
}

const card1 = [
  './images/grille-hermann.jpg',
  './images/mario-klingemann-700x700.jpg',
  'Mario Klingemann',
  'Ex-resident of Google Arts and Culture from 2016 to 2018',
  'He is a German artist and researcher who creates generative art using machin learning techniques, best known for his work on neural networks, code and algorithms.',
];
const card2 = [
  './images/grille-hermann.jpg',
  './images/254_gene_profile pic.jpg',
  'Gene Kogan',
  'Instructor in the School for Poetic Computation, NYU Tisch School of the Arts, and the University of Toronto',
  'He is an artist and a programmer who is known for his work in the field of generative art and artificial intelligence. He is based in New York City and is a prominent figure in the intersection of art,technology, and AI.',
];
const card3 = [
  './images/grille-hermann.jpg',
  './images/1572454393_ian-goodfellow.jpg',
  'Ian Goodfellow',
  'Researcher Scientist at Apple Inc. and an Adjunct Professor at Stanford University',
  'a computer scientist and artificial intelligence researcher who is known for developing the Generative Adversarial Network (GAN) algorithm, which has been used for generating new and original digital art',
];
const card4 = [
  './images/grille-hermann.jpg',
  './images/Portrait_Refik_Anadol_Credit_Efsun_Erkilic.width-1280.jpg',
  'Refik Anadol',
  'Media artist, director, and pioneer in the field of artificial intelligence and data visualization',
  'A media artist and director who uses machine learning algorithms to create immersive installations and sculptures, blurring the boundaries between art and technology',
];
const card5 = [
  './images/grille-hermann.jpg',
  './images/AnnaRidler-sq-800x800.jpg',
  'Anna Ridler',
  'British artist and researcher',
  'She uses machine learning to create generative art that explores the relationship between technology, data, and society. Her work often involves training machine learning algorithms on large datasets and using the resulting models to generate new images or other types of data.',
];
const card6 = [
  './images/grille-hermann.jpg',
  './images/GolanLevin_Headshot.jpg',
  'Golan Levin',
  'co-founded the studio and research lab, the STUDIO for Creative Inquiry at Carnegie Mellon University.',
  'He an artist, engineer, and educator who works with generative systems, computational design, and creative coding',
];

// Create a new HTML element to contain the generated content
const newElement = document.createElement('dev');
newElement.classList.add('my-class');

// Locate the container element where you want to insert the content
const container = document.getElementById('content-container');

// Insert the new HTML element containing the generated content into the container element
container.appendChild(newElement);

newElement.innerHTML += generateContent(card1);
newElement.innerHTML += generateContent(card2);
newElement.innerHTML += generateContent(card3);
newElement.innerHTML += generateContent(card4);
newElement.innerHTML += generateContent(card5);
newElement.innerHTML += generateContent(card6);

// Select the "See More" and "See Less" buttons
const seeMoreButton = document.getElementById('see-more');
const seeLessButton = document.getElementById('see-less');

// Select all the cards
const cards = document.querySelectorAll('.my-class > .card');

// Hide all cards except the first three
for (let i = 3; i < cards.length; i += 1) {
  cards[i].classList.add('hidden');
}

// Hide the "See Less" button when the page loads
seeLessButton.classList.add('hidden');

// Add event listeners to the buttons
seeMoreButton.addEventListener('click', () => {
  // Show all cards
  for (let i = 3; i < cards.length; i += 1) {
    cards[i].classList.remove('hidden');
  }
  // Hide the "See more" button and show the "See less" button
  seeMoreButton.classList.add('hidden');
  seeLessButton.classList.remove('hidden');
});

seeLessButton.addEventListener('click', () => {
  // Hide all cards except the first three
  for (let i = 3; i < cards.length; i += 1) {
    cards[i].classList.add('hidden');
  }
  // Hide the "See less" button and show the "See more" button
  seeLessButton.classList.add('hidden');
  seeMoreButton.classList.remove('hidden');
});
