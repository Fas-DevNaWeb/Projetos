const btn__dog = document.querySelector(".get-dog");
const btn__cat = document.querySelector(".get-cat");
const btn__surprise = document.querySelector(".get-surprise");
const img__pet = document.querySelector(".img-pet");


const buscarApiDog = () => {
  const promiseDog = fetch("https://dog.ceo/api/breeds/image/random")
    .then((respostaDog) => {
      return respostaDog.json();
    })
    .then((dataDog) => {
      img__pet.src = dataDog.message;
    });
};

const buscarApiCat = () => {
  const promiseCat = fetch("https://api.thecatapi.com/v1/images/search")
    .then((respostaCat) => {
      return respostaCat.json();
    })
    .then((dataCat) => {
      img__pet.src = dataCat[0].url;
    });
};


const buscaAleatoria = () => {
    const todasPromesas = [];    
    const promeseRegect = Promise.reject(0);
    const promeseResolveDog = fetch("https://dog.ceo/api/breeds/image/random");
    const promeseResolveCat = fetch("https://api.thecatapi.com/v1/images/search");

    todasPromesas.push(promeseRegect);
    todasPromesas.push(promeseResolveDog);
    todasPromesas.push(promeseResolveCat);

    Promise.any(todasPromesas).then((value) => {
    value.json().then((data) =>  (data.message)? img__pet.src = data.message : img__pet.src = data[0].url)
    })
  }

btn__dog.addEventListener("click", () => {
  buscarApiDog();
});

btn__cat.addEventListener("click", () => {
  buscarApiCat();
});

btn__surprise.addEventListener('click', () => {
  buscaAleatoria();
})