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

}