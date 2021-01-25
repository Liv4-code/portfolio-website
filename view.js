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

// RegEx for first and last name input fields:

const pattern = /^[a-zA-z]{2,}$/

// Submit event on form:

form.addEventListener("submit", e => {
    e.preventDefault();

    // validation
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;

    if(pattern.test(firstname) && pattern.test(lastname)){
        alert("The name you submitted is valid, thank you.");
    } else {
        alert("Make sure your first and last name are at least 2 characters long...");
    }
});

// User input color-change while typing into field (keyboard event):

const names = document.querySelectorAll(".name");

names.forEach(name => {
    name.addEventListener("keyup", e => {
        if(pattern.test(e.target.value)){
            e.target.setAttribute("class", "valid");
        } else {
            e.target.setAttribute("class", "invalid");
        }
    });
});
// Removing the invalid class (removing colour) when input field is empty.
names.forEach(name => {
    name.addEventListener("keyup", () => {
        if(name.value === ""){
            name.classList.remove("invalid");
        }
    });
});

// Mouseover event for project blocks to give them an overlay:

const projectBlocks = document.querySelectorAll(".project-img");

projectBlocks.forEach(project => {
    project.addEventListener("mouseover", e => {
        e.target.firstElementChild.style.display = "grid";
        // console.log(e.type);
    });
});

// projectBlocks.forEach(project => {
//     project.addEventListener("mouseout", e => {
//     e.target.firstElementChild.style.display = "none";
//     });
// });
