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

addGameCard('game1.jpg', 'Idle Meme', 'IdleMeme is a clicker', 'https://idlememe.vercel.app/');
