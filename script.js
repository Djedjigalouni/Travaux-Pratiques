let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', ()=>{ //ecouter l'évènement 'click' sur "a"... si 'click' => ALORS (instruction)
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
})

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});