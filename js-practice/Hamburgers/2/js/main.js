console.log("This is working");

document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdown").classList.toggle("active");

}
