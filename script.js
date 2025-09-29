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

    container.appendChild(card);
  });
}

function saveCafe(cafeJSON) {
  const cafe = JSON.parse(cafeJSON);
  let saved = JSON.parse(localStorage.getItem('savedCafes') || '[]');
  if (!saved.find(c => c.id === cafe.id)) {
    saved.push(cafe);
    localStorage.setItem('savedCafes', JSON.stringify(saved));
    alert(`${cafe.name} saved!`);
  } else {
    alert(`${cafe.name} is already saved.`);
  }
}
