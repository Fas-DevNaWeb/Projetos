const btn__dog = document.querySelector('.get-dog');
const btn__cat = document.querySelector('.get-cat');
const btn__surprise = document.querySelector('.get-surprise');
const img__pet = document.querySelector(".img-pet");

//console.log(btn__dog);
const buscarApiDog = () => {
  const promise = fetch("https://dog.ceo/api/breeds/image/random")
    .then((resposta) => {
      return resposta.json();
    })
    .then((data) => {
      img__pet.src = data.message;
    });
};


buscarApiDog();
