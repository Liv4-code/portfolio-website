// Add mouseover event for block 1 nav icons giving CV description.

// Form Styling

const form = document.querySelector("form");
const formChildren = form.children;

Array.from(formChildren).forEach((child) => {
    child.style.marginTop = "15px";
});

// Home Button

const homeButton = document.querySelector(".nav-3");

homeButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// RegEx for first and last name input fields:

const pattern = /^[a-zA-z]{2,}$/;

// User input color-change while typing into field (keyboard event):

const names = document.querySelectorAll(".name");

names.forEach((name) => {
    name.addEventListener("keyup", (e) => {
        if (pattern.test(e.target.value)) {
            e.target.setAttribute("class", "valid");
        } else {
            e.target.setAttribute("class", "invalid");
        }
    });
});
// Removing the invalid class (removing colour) when input field is empty.
names.forEach((name) => {
    name.addEventListener("keyup", () => {
        if (name.value === "") {
            name.classList.remove("invalid");
        }
    });
});

// Block 2 carousel:

class Project {
    constructor(image, code, link) {
        this.image = image;
        this.code = code;
        this.link = link;
    }
}

const nutritionApp = new Project(
    "assets/nutrition-app.png",
    "https://github.com/Liv4-code/nutrition-app",
    "https://pensive-lumiere-200aaa.netlify.app"
);

const historyQuiz = new Project(
    "assets/history-quiz.png",
    "https://github.com/Liv4-code/history-quiz",
    "https://historyquiz.online"
);

const sProductions = new Project(
    "assets/scholtz-productions.png",
    "https://github.com/Liv4-code/scholtz-productions",
    "https://historyquiz.online"
);

const projects = [nutritionApp, historyQuiz, sProductions];

const projectsContainer = document.querySelector(".projects-container");
const projectLi = document.querySelector(".project");

const htmlChange = (changeImage, changeLink, changeCode) => {
    projectLi.innerHTML = `<img src="${changeImage}" alt="history quiz project">
    <a href="${changeLink}">View Project</a>
    <a href="${changeCode}">View Code</a>`;
};

htmlChange(projects[0].image, projects[0].link, projects[0].code);

// Next and Prev Button
const nextButton = document.querySelector(".right");
const prevButton = document.querySelector(".left");

// When next button is clicked, add 1 to index of current array item.
let projectIndex = 0;

projectsContainer.addEventListener("click", (e) => {
    if (e.target === nextButton) {
        projectIndex++;
        htmlChange(
            projects[projectIndex].image,
            projects[projectIndex].link,
            projects[projectIndex].code
        );
        // return projectIndex;
        prevButton.style.visibility = "visible";
    } else if (e.target === prevButton) {
        projectIndex--;
        htmlChange(
            projects[projectIndex].image,
            projects[projectIndex].link,
            projects[projectIndex].code
        );
    }
    // Display next and previous buttons at first or last project.
    if (projectIndex === 0) {
        nextButton.style.visibility = "visible";
    } else if (projectIndex === 2) {
        prevButton.style.visibility = "visible";
    }
    // When displayed project is last item in array then remove next button
    // If displayed project is first item in array then remove prev button
    if (projectIndex === 2) {
        nextButton.style.visibility = "hidden";
    } else if (projectIndex === 0) {
        prevButton.style.visibility = "hidden";
    }
});

if (projects.indexOf(historyQuiz) === 0) {
    nextButton.style.visibility = "visible";
}
