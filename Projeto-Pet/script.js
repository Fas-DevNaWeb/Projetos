const btn__dog = document.querySelector(".get-dog");
const btn__cat = document.querySelector(".get-cat");
const btn__surprise = document.querySelector(".get-surprise");
const img__pet = document.querySelector(".img-pet");

//console.log(btn__dog);
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

btn__dog.addEventListener("click", () => {
  buscarApiDog();
});

btn__cat.addEventListener("click", () => {
  buscarApiCat();
});
