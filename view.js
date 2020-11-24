// Add mouseover event for block 1 nav icons giving CV description.

const homeButton = document.querySelector("button");

homeButton.addEventListener("click", () => {
    window.scrollTo(0,0);
});

const form = document.querySelector("form");
const formChildren = form.children;

// console.log(Array.from(formChildren));

Array.from(formChildren).forEach(child => {
    child.style.marginTop = "15px";
});

