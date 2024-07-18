const food = "https://recipe-finder-zeta-sooty.vercel.app/meals";

fetch(food)
  .then((res) => res.json())
  .then((meals) => (users = meals.map((meal) => displayMeal(meal))));

const searchBox = document.querySelector("[data-search");
const storeitems = document.getElementById("result");
const product = document.querySelectorAll(".meal");
const pname = storeitems.getElementsByTagName("h2");

let users = [];
searchBox.addEventListener("input", (e) => {
  const value = e.target.value.toUpperCase();
  users.forEach((user) =>{
    const isVisible = user.name.toUpperCase().includes(value)
    user.divCard.classList.toggle('hide', !isVisible)
  })
});

function displayMeal(meal) {
  const { id, name, ingredients, instructions, cuisine, picture } = meal;
  const result = document.getElementById("result");
  const divCard = document.createElement("div");

  divCard.className = "meal";
  divCard.addEventListener('click', displayImage)
  function displayImage() {
    const html = `
    <div id = "details">
    <h2>${name}</h2>
    <p>INGREDIENTS: ${ingredients}</p>
    <p>COOKING INSTRUCTIONS: ${instructions}</p>
    <p>${cuisine} cuisine</p>
    <img  src="${picture}" alt="">`
    divCard.innerHTML = html
  }

  const html = `<h2>${name}</h2>
    <p>INGREDIENTS: ${ingredients}</p>
    <p>COOKING INSTRUCTIONS: ${instructions}</p>
    <p>${cuisine} cuisine</p>
    <button>click to reveal image </button>`;

  divCard.innerHTML = html;
  result.appendChild(divCard);

  return { name, ingredients, instructions, cuisine, divCard };
}
