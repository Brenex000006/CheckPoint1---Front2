const overlay = document.querySelector('.overlay');
const btnAdd = document.getElementById('addCard');
const formsAdd = document.getElementById('forms');
const cardsContainer = document.getElementById('cards-container');
const grupo = document.getElementById('grupo');
const btnAddCardSubimit = document.getElementById('addCardSubimit');
const btnAddCardCancel = document.getElementById('addCardCancel');
const btnRemoverCard = document.getElementById('removerCard');
const btnGrupo = document.getElementById('grupoBtn')

function criarCards() {
  const div = document.createElement('div');
  div.classList.add('card');
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('desc').value;
  const urlImg = document.getElementById('img').value;
  div.innerHTML = `
  <div class="card-body">
    <img src="${urlImg}" alt="" />
  </div>
  <div class="card-description">
    <div class="title">
      <h4>${titulo}</h4>
    </div>
    <p>${descricao}</p>
  </div>
  `
  const btnDelete = criarButtaoDelete()
  div.appendChild(btnDelete)
  cardsContainer.appendChild(div)
}

function criarButtaoDelete(){
  const div = document.createElement('div')
  div.classList.add('deletBtn')
  const btn = document.createElement('button')
  btn.addEventListener('click',()=>{
    div.parentElement.remove()
    console.log("entrou")
  })
  div.append(btn);
  return div
}

function fecharFormsAddCard(){
  overlay.classList.remove('show');
  formsAdd.classList.remove('show');
}

/* Listeners */
btnAddCardSubimit.addEventListener('click', (e) => {
  e.preventDefault();
  criarCards();
  formsAdd.querySelector('form').reset();
  fecharFormsAddCard();
})

btnAdd.addEventListener('click', () => {
  overlay.classList.add('show');
  formsAdd.classList.add('show');
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  formsAdd.classList.remove('show');
  grupo.classList.remove('show');
  formsAdd.querySelector('form').reset();
})

btnRemoverCard.addEventListener('click', () => {
  const todosCards = Array.from(cardsContainer.querySelectorAll('.card'));
    todosCards.forEach( card => card.classList.toggle('remover'))
})

btnAddCardCancel.addEventListener('click',()=> fecharFormsAddCard())

btnGrupo.addEventListener('click', () => {
  overlay.classList.add('show');
  grupo.classList.add('show');
})