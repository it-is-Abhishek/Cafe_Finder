async function getLocation() {
  try {
    const response = await fetch('./cafes.json');
    const cafes = await response.json();
    displayCards(cafes);
  } catch (e) {
    console.error("Error loading cafes:", e);
    alert("Error loading cafes.");
  }
}



function displayCards(cafes) {
  const container = document.querySelector('.cards');
  container.innerHTML = '';

  cafes.forEach((cafe) => {
    const card = document.createElement('div');
    card.className = 'location-card';

    const imgUrl = cafe.photo;

    const cafeData = {
      name: cafe.name,
      id: cafe.id,
      photo: imgUrl,
      rating: cafe.rating
    };

    card.innerHTML = `
      <img src="${imgUrl}" alt="${cafe.name}" />
      <h3>${cafe.name}</h3>
      <p>⭐️ Rating: ${cafe.rating}</p>
      <button class="save-btn">Save</button>
    `;

    container.appendChild(card);
    card.querySelector('.save-btn').addEventListener('click', () => saveCafe(cafeData));
  });
}


function saveCafe(cafe) {
  let saved = JSON.parse(localStorage.getItem('savedCafes') || '[]');
  if (!saved.find(c => c.id === cafe.id)) {
    saved.push(cafe);
    localStorage.setItem('savedCafes', JSON.stringify(saved));
    alert(`${cafe.name} saved!`);
  } else {
    alert(`${cafe.name} is already saved.`);
  }
}


function showSaved() {
  const container = document.querySelector('.cards');
  container.innerHTML = '';
  const saved = JSON.parse(localStorage.getItem('savedCafes') || '[]');
  if (saved.length === 0) {
    container.innerHTML = '<p> No saved cafes yet 😢</p>';
    return;
  }
  saved.forEach(cafe => {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.innerHTML = `
      <img src="${cafe.photo}" alt="${cafe.name}" />
      <h3>${cafe.name}</h3>
      <p>⭐️ Rating: ${cafe.rating}</p>
    `;
    container.appendChild(card);
  });
}

localStorage.removeItem('savedCafes');
