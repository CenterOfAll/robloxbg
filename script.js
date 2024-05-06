const gamesSection = document.getElementById('games-section');

function addGameCard(imgSrc, gameName, description, buttonLink) {
    const card = document.createElement('div');
    card.classList.add('game-card');
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = gameName + ' Image';
    
    const heading = document.createElement('h2');
    heading.textContent = gameName;
    
    const desc = document.createElement('p');
    desc.textContent = description;
    
    const button = document.createElement('button');
    button.textContent = 'Play Now';
    button.addEventListener('click', () => {
        window.location.href = buttonLink;
    });
    
    card.appendChild(img);
    card.appendChild(heading);
    card.appendChild(desc);
    card.appendChild(button);
    
    gamesSection.appendChild(card);
}

addGameCard('game1.jpg', 'Game 1', 'Description of Game 1', 'game1.html');
addGameCard('game2.jpg', 'Game 2', 'Description of Game 2', 'game2.html');
addGameCard('game3.jpg', 'Game 3', 'Description of Game 3', 'game3.html');
