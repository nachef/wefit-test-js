//conteúdo do header
const headerContent = document.querySelector(".jumbotron");
const headerTextElements = document.querySelectorAll(
  ".jumbotron h1, .jumbotron p, .jumbotron a"
);
const headerButtons = document.querySelectorAll(".jumbotron .btn");

//alterando o conteúdo do header
headerContent.style.textAlign = "right";
headerContent.style.backgroundColor = "#6B757E";

//removo uma classe e adiciono outra
headerButtons.forEach((button) => {
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");
});

//mudo a cor dos textos para branco
headerTextElements.forEach((element) => {
  element.style.color = "#ffffff";
});

//conteúdo do menu
const btnGroup = document.querySelector(".btn-group-vertical");

btnGroup.classList.remove("btn-group-vertical");
btnGroup.classList.add("btn-group");

const btns = btnGroup.querySelectorAll(".btn");

//adiciono uma classe a todos os botões
btns.forEach((btn) => {
  btn.classList.add("btn-group-item");
});

//adiciono margem a todos os botões
btns.forEach((btn) => {
  btn.style.marginRight = "10px";
});

//conteúdo da lista
const list = document.querySelector(".list-group");
const quartoItem = document.createElement("li");

//adiciono um novo item a lista com a classe no active
quartoItem.classList.add("list-group-item");
quartoItem.textContent = "Quarto item";
quartoItem.classList.add("active");

//adiciono um novo item a lista
const quintoItem = document.createElement("li");
quintoItem.classList.add("list-group-item");
quintoItem.textContent = "Quinto item";

list.appendChild(quartoItem);
list.appendChild(quintoItem);

//removo a classe active do primeiro item
const primeiroItem = document.querySelector(".list-group-item:first-child");
primeiroItem.classList.remove("active");

//conteúdo dos cards
const newOrder = ["Natureza", "Animais", "Pessoas", "Tecnologia"];
const cardContainers = document.querySelectorAll(".col-lg-3");

//array vazio para armazenar os cards ordenados
const sortedCardContainers = [];

//ordeno os cards de acordo com o array newOrder
newOrder.forEach((title) => {
  const cardContainer = Array.from(cardContainers).find(
    (container) =>
      container.querySelector(".card-body h5").textContent === title
  );
  sortedCardContainers.push(cardContainer);
});

//adiciono os cards ordenados ao DOM
sortedCardContainers.forEach((container) => {
  container.parentNode.appendChild(container);

  //mudo a cor do botão do card de animais
  const cardTitle = container.querySelector(".card-body h5").textContent;
  if (cardTitle === "Animais") {
    const button = container.querySelector(".btn");
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
  }
});
