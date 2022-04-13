const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");

const show = () => {
  container.classList.add("show-nav");
};
const hide = () => {
  container.classList.remove("show-nav");
};

open.addEventListener("click", show);
close.addEventListener("click", hide);
