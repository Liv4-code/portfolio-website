// Add mouseover event for block 1 nav icons giving CV description.

// Form Styling

const form = document.querySelector("form");
const formChildren = form.children;

Array.from(formChildren).forEach(child => {
    child.style.marginTop = "15px";
});

// Home Button

const homeButton = document.querySelector("button");

homeButton.addEventListener("click", () => {
    window.scrollTo(0,0);
});

// Submit event on form:

form.addEventListener("submit", e => {
    e.preventDefault();

    // validation

    const pattern = /^[a-zA-z]{2,}$/
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;

    if(pattern.test(firstname) && pattern.test(lastname)){
        alert("Yes, that password is valid");
    } else {
        alert("No, your password is not valid!");
    }
});

// User input while they type into field (keyboard event):

