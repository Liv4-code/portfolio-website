// Add mouseover event for block 1 nav icons giving CV description.

// Form Styling

const form = document.querySelector("form");
const formChildren = form.children;

Array.from(formChildren).forEach(child => {
    child.style.marginTop = "15px";
});

// Home Button

const homeButton = document.querySelector(".nav-3");

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

// Mouseenter event for project blocks to give them an overlay:

const projectBlocks = document.querySelectorAll(".project-img");

projectBlocks.forEach(project => {
    project.addEventListener("mouseenter", e => {
        e.target.firstElementChild.style.display = "grid";
        // console.log(e.type);
    });
    project.addEventListener("mouseleave", e => {
        e.target.firstElementChild.style.display = "none";
    });
});

// Block 2 carousel:

class Project {
    constructor(){
        this.image = "assets/history-quiz.png";
        this.code = "https://github.com/Liv4-code/history-quiz";
        this.link = link;
    }
}

const historyQuiz = new Project();
const todoList = new Project();
const nailWebsite = new Project();
const BcgChanger = new Project();

const projects = [historyQuiz, todoList, nailWebsite, BcgChanger];

// Grab a reference to Next and Prev buttons

// Add click event listener to projects container, then, IF:

// Next button is clicked, add 1 to index of current array item.

// Minus 1 from index of current array item when prev is clicked.

// when Next is clicked, add the prev button

// if displayed project is last item in array