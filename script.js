const openSocials = document.querySelector(".card-bottom__btn");
const socials = document.querySelector(".links");

openSocials.addEventListener("click", function () {
    openSocials.classList.toggle("card-bottom__btn--active");
    socials.classList.toggle("links--active");
});
