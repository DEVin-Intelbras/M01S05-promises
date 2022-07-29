const renderizaCard = (nome, stack) => {
  return /*html*/ `
  <div class="card">
    <span class="card__titulo">${nome}</span>
    <span class="card__stack">${stack}</span>
  </div>
  `;
};

const renderizaTela = (listaDeAlunos = []) => {
  const listaCardsEl = document.getElementById("lista-cards");
  listaCardsEl.innerHTML = null;
  listaDeAlunos.forEach((aluno) => {
    listaCardsEl.innerHTML += renderizaCard(aluno.nome, aluno.stack);
  });
};

fetch("assets/database/dados.json")
  .then((resultado) => resultado.json())
  .then((dados) => {
    const alunos = dados.alunos;
    renderizaTela(alunos);
  });

// // SWAPI
// // Remova o comentário desse código para ver os dados do Luke
// // no console do navegador!!
// fetch("https://swapi.dev/api/people/1")
// .then((res) => res.json())
// .then((data) => console.log(data));
