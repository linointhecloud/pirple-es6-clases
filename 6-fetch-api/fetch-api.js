// fetch API
// returns a promise

const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button");
const mySecondButton = document.getElementById("otherButton");

myButton.addEventListener("click", getPlanet);
mySecondButton.addEventListener("click", getPlanets);

function getPlanet() {
  const randomNum = Math.floor(Math.random() * 10) + 1 ;
  fetch(`https://swapi.co/api/planets/${randomNum}`)
    .then(data => data.json())
    .then(d => populatePlanet(d))
    .catch(error => console.log(error.message));
}

function getPlanets() {
  fetch(`https://swapi.co/api/planets/`)
  .then(data => data.json())
  .then(planets => {
    const { next } = planets;
    const newURL = next.replace(/^http:\/\//i, "https://");
    fetch(planets.next);
  })
    .then(morePlanets => console.log(morePlanets));
}

function populatePlanet(planetObj) {
  const {name, climate, terrain, population, orbital_period} = planetObj;
  let pop;
  population === "unknown" ? pop = population : pop = parseInt(population).toLocaleString("en-US");
  /* if (pop === "unknown") {
    pop = population;
  } else {
    pop = parseInt(population).toLocaleString("en-US");
  }*/
  const planetDiv = `
    <div>
      <h1>${name}</h1>
      <p>${name} has a climate that is ${climate}. The terrain is ${terrain}, with a pop. of 
      ${pop}. The orbital period is ${orbital_period}</p>
    </div>
  `
  //myDiv.innerHTML += planetDiv;
  myDiv.insertAdjacentHTML("beforeend", planetDiv);
}
