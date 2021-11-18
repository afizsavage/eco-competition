const speakers = [
  {
    name: 'Greta Thunberg',
    title: 'Environmental Activist',
    image: '../assets/index.jpeg',
    insight:
      'Greta Thunberg influenced multiple coordinated multi-city protests involving over a million students each.',
  },
  {
    name: 'Yvonne Aki Sawyerr',
    title: 'Freetown City Mayor',
    image: './assets/evon.jpeg',
    insight:
      'Yvomme Aki Sawyerr started the #FreetownTheTreeTown campaign. Using digital tools to encourage tree cultivation in the city',
  },
  {
    name: 'Rajagopalan Vasudevan',
    title: 'Professor in Thiagarajar College of Engineering',
    image: './assets/vas.jpeg',
    insight:
      'Rajagopalan Vasudevan developed an innovative method to reuse plastic waste to construct better, durable and very cost-effective roads.',
  },
  {
    name: 'Vanessa Nakate',
    title: 'Climate Activist.',
    image: './assets/Vanessa_Nakate.jpg',
    insight:
      'Vanessa Nakate helped published a letter calling on companies, banks and governments to immediately stop subsidizing fossil fuels',
  },
  {
    name: 'Oladosu Adenike',
    title: 'Climate Activist',
    image: './assets/Adenike.png',
    insight:
      'Founded “ILeadClimate” a youth-led movement which aims to showcase the threat of climate change and how it can create political instability.',
  },
  {
    name: 'Nzambi Matee',
    title: 'Environmentalist',
    image: './assets/matee.jpeg',
    insight:
      'She pioneered the sustainable efforts by recycling plastic to make bricks that can be even stronger than a concrete',
  },
];

const body = document.querySelector('body');
const menuIcon = document.querySelector('nav i');
const mobileMenu = document.querySelector('nav > div');
const header = document.querySelector('header');
const speakersSection = document.getElementById('speakers');
const seemoreBtn = document.getElementById('more');

function checkIfMenuOpen(menu, button) {
  if (menu.classList.contains('show')) {
    button.className = 'fas fa-times';
    body.classList.add('disScroll');
    header.classList.add('mobile');
  } else {
    button.className = 'fas fa-bars';
    body.classList.remove('disScroll');
    header.classList.remove('mobile');
  }
}

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  checkIfMenuOpen(mobileMenu, menuIcon);
});

function createSpeakerCards() {
  let cardContent = '';
  const cardsParent = document.createElement('ul');
  speakers.forEach((speaker) => {
    cardContent += `<li>
    <div class="speaker-image">
      <img src=${speaker.image} alt="" width="130" height="130" />
    </div>
    <div class="speaker-details">
      <h4>${speaker.name}</h4>
      <p>${speaker.title}</p>
      <p>
        ${speaker.insight}
      </p>
    </div>
  </li>`;
    cardsParent.innerHTML = cardContent;
  });
  speakersSection.insertBefore(cardsParent, seemoreBtn);
}

const load = () => {
  createSpeakerCards();
};
window.onload = load;
