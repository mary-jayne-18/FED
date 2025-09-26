// JavaScript Document
console.log("hi");

/*****************************/
/* MENU openen (hamburger)  */
/****************************/
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

/*****************************************/
/* MENU sluiten met het kruis icoontje  */
/*****************************************/
var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

/*****************************/
/* MENU sluiten met escape  */
/*****************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}
