// URL do JSON com os dados dos profetas
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Seleciona o container no HTML
const cards = document.querySelector('#cards');

// Função assíncrona para buscar os dados
const getProphetData = async () => {
  try {
    const response = await fetch(url);       // busca os dados
    const data = await response.json();      // converte para objeto JS
    // console.table(data.prophets);         // pode usar para testar no console
    displayProphets(data.prophets);          // chama a função que monta os cards
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

// Função que monta os cards
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // cria elementos
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // adiciona conteúdo
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // monta o card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // adiciona ao container
    cards.appendChild(card);
  });
};

// chama a função principal
getProphetData();
