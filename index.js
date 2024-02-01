const API_KEY = "a3527af632314d66a1f62b3edf36e825";
const recipeList = document.getElementById("recipe-list");

function displayRecipe(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeImg = document.createElement("img");
    recipeImg.src = recipe.image;
    recipeImg.alt = recipe.title;
    recipeTile = document.createElement("h2");
    recipeTile.innerText = recipe.title;
    recipeIngre = document.createElement("p");
    recipeIngre.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;
    recipeLink = document.createElement("a");
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";

    recipeItem.appendChild(recipeImg);
    recipeItem.appendChild(recipeTile);
    recipeItem.appendChild(recipeIngre);
    recipeItem.appendChild(recipeLink);

    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipe(recipes);
}

init();
