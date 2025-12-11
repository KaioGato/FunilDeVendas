const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");

// abrir menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
});

// fechar menu pelo botão
closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});

// fechar ao clicar fora
document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && event.target !== menuBtn) {
        mobileMenu.classList.remove("open");
    }
});
