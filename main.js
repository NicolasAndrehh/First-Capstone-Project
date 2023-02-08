if (document.querySelector('.athletes-container')) {
  const athletesContainer = document.querySelector('.athletes-container');
  const athletes = [
    {
      name: 'Chris Bumstead',
      category: 'Classic physique competitor',
      description: 'Chris Bumstead is the reigning Mr. Olympia Classic Physique winner, having won the competition in 2019, 2020, 2021 and 2022.',
      image: 'images/chris-bumstead-img.jpg',
    },
    {
      name: 'Ramon Dino',
      category: 'Classic physique competitor',
      description: 'Ramon Rocha is a Brazilian professional bodybuilder. Currently, he is the runner-up of the Mr. Olympia, in the Classic Physique category, and the Arnold Classic Ohio.',
      image: 'images/ramon-dino-img.jfif',
    },
    {
      name: 'Ronnie Coleman',
      category: 'Mr Olympia Open ex-competitor',
      description: 'Ronnie is the winner of the Mr. Olympia title for eight consecutive years, he is widely regarded as either "the greatest" or one of the two greatest bodybuilders of all time.',
      image: 'images/ronnie-coleman-img.jfif',
    },
    {
      name: 'Phil Heath',
      category: 'Mr Olympia Open ex-competitor',
      description: 'Phil is a seven-time Mr. Olympia winner, having won the competition every year from 2011 to 2017. His latest victory tied him with Arnold Schwarzenegger',
      image: 'images/phil-heath-img.jpg',
    },
    {
      name: 'Arnold S.',
      category: 'Mr Olympia Open ex-competitor',
      description: 'Schwarzenegger went on to win the Mr. Universe title at age 20 and subsequently won the Mr. Olympia title seven times. He is widely regarded as one of the greatest bodybuilders of all time',
      image: 'images/arnold-img.jpg',
    },
    {
      name: 'Shaun Clarida',
      category: '212 competitor',
      description: 'On 2020 he defeated returning champion Kamal Elgargni in a tough fought battle. It was clear, win or lose, that this was the greatest physique of Clarida\'s career.',
      image: 'images/shaun-clarida-img.png',
    },
  ];
  athletes.forEach((athlete) => {
    athletesContainer.innerHTML += `
    <div class="athlete-card hide">
        <img src="${athlete.image}" alt="Athlete image">
        <div class="athlete-info">
            <h3>${athlete.name}</h3>
            <p class="athlete-category">${athlete.category}</p>
            <hr>
            <p>${athlete.description}</p>
        </div>
    </div>`;
  });
}

if (document.querySelector('#show-more-button')) {
  const showMoreButton = document.querySelector('#show-more-button');
  const athleteCards = document.querySelectorAll('.athletes-container > *');
  showMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    showMoreButton.classList.add('hide');
    athleteCards.forEach((athleteCard) => {
      athleteCard.classList.remove('hide');
      athleteCard.classList.add('show-all');
    });
  });
}
const openMenu = document.querySelector('#hamburguer-button');
const menu = document.querySelector('#navbar');
const closeMenu = document.querySelector('#close-menu');
const html = document.querySelector('html');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('show-menu');
  html.classList.add('stop-scroll');
});

closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show-menu');
  html.classList.remove('stop-scroll');
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function anchorScroll(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    menu.classList.remove('show-menu');
    html.classList.remove('stop-scroll');
  });
});