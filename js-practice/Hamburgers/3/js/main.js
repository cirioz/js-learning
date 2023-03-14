const mq = window.matchMedia("(max-width: 500px)");

if (mq.matches){
  const mainNav = document.getElementById('main-nav');
  const submenu = document.querySelectorAll(".submenu");
  const submenu2 = document.querySelectorAll (".submenu-2");
  const hasSubmenu = document.querySelectorAll(".has-submenu");
  const hasSubmenu2 = document.querySelectorAll(".has-submenu-2");

  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", function (){
    if (mainNav.style.display != "block") {
    mainNav.style.display = "block";
    this.innerHTML = "X";
  } else {
    mainNav.style.display = "none";
    this.innerHTML = "MENU";
  }
});

for (let i = 0; i < hasSubmenu.length; i++){
  hasSubmenu[i].addEventListener("click", function(){
    submenu[i].classList.toggle("display-block");
  });
}

for (let i = 0; i < hasSubmenu2.length; i++){
  hasSubmenu2[i].addEventListener("click", function(){
    submenu2[i].classList.toggle("display-block");
  });
}
}
