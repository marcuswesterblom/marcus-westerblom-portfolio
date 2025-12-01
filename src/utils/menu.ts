export const menuListener = () => {
    const menuNotActive = document.getElementById("menuNotActive");
    const menuActive = document.getElementById("menuActive");
    const nav = document.getElementById("nav");

    if (!menuNotActive || !menuActive) return;

    menuNotActive.addEventListener("click", () => {
        menuNotActive.classList.add("hide");
        menuActive.classList.add("show");
        menuNotActive.classList.remove("show");
        menuActive.classList.remove("hide");
        nav?.classList.add("show");
        nav?.classList.remove("hide");
    });
    menuActive.addEventListener("click", () => {
        menuNotActive.classList.add("show");
        menuActive.classList.add("hide");
        menuActive.classList.remove("show");
        menuNotActive.classList.remove("hide");
        nav?.classList.remove("show");
        nav?.classList.add("hide");
    });
};