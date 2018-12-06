const king = document.querySelector('#b325');
console.log(king);

const businessLamp = document.querySelectorAll('.big');
console.log(businessLamp);

const conceitedKing = document.querySelector('.container');
for (let i = 0; i < conceitedKing.children.length; i++) {
  alert(conceitedKing.children[i].innerText)
}

const noBusiness = document.querySelectorAll('div.asteroid');
noBusiness.forEach(e => {
  console.log(e);
});
