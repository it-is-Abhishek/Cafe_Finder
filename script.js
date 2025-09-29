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
