document.addEventListener('DOMContentLoaded', () => {

  getLocalStorage();

  const cards = [
    {
      name: 'inter',
      path: '../assets/imgs/internacional.png'
    },
    {
      name: 'palmeiras',
      path: '../assets/imgs/palmeiras.png'
    },
    {
      name: 'santos',
      path: '../assets/imgs/santos.png'
    },
    {
      name: 'sao_paulo',
      path: '../assets/imgs/sao-paulo.png'
    },
    {
      name: 'corinthians',
      path: '../assets/imgs/corinthians.png'
    },
    {
      name: 'flamengo',
      path: '../assets/imgs/flamengo.png'
    },
    {
      name: 'gremio',
      path: '../assets/imgs/gremio.png'
    },
    {
      name: 'athletico',
      path: '../assets/imgs/atletico.png'
    },
    {
      name: 'vasco',
      path: '../assets/imgs/vasco.png'
    }
  ];

  const board = document.querySelector('.container-cards');
  const cardsMatched = [];

  function createCard(card, index) {
    const cardGame = document.createElement('img');
    cardGame.setAttribute('src', '../assets/imgs/logo-brasileirao.png');
    cardGame.setAttribute('data-id', index);
    cardGame.className = 'back';
    board.appendChild(cardGame);
    cardGame.addEventListener('click', flipCard);
  }

  let flippedCards = [];

  function flipCard() {
    counter += 1;
    counterElement.textContent = counter;
    const cardId = Number(this.getAttribute('data-id'));
    this.setAttribute('src', cards[cardId].path);
    if (flippedCards.length === 2 || cardsMatched.includes(cardId)) {
      return;
    }
    flippedCards.push({ cardId, element: this });
    if (flippedCards.length === 2) {
      setTimeout(() => {
        if (flippedCards[0].cardId === flippedCards[1].cardId) {
          flippedCards.forEach(({ element }) => {
            element.setAttribute('src', '../assets/imgs/Green-Check.png');
            element.removeEventListener('click', flipCard);
            cardsMatched.push(flippedCards[0].cardId);
            points += 0.5;
            resultElement.textContent = points;
            if (points === 9) {
              alert("Você Ganhou!")
              setLocalStorage();
            }
          });
        } else {
          flippedCards.forEach(({ element }) => {
            element.setAttribute('src', '../assets/imgs/logo-brasileirao.png');
          });
        }
        flippedCards = [];
      }, 500);
    }
  }

  // Embaralhar as cartas
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      array[i].parentNode.insertBefore(array[j], array[i].nextSibling);
    }
  }

  cards.forEach((card, index) => {
    createCard(card, index);
    createCard(card, index);
  });

  const cardsElements = document.querySelectorAll('.back');
  shuffleCards(cardsElements);

});