const userProfile = {
    name: "Madina",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["draw", "volleyball", "mobilegames"]
};

const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const ageInMonth = age * 12;
const countHobbies = userProfile.hobbies.length;

console.log("Current age: ", age);
console.log("Hobbies count: ", countHobbies);
console.log("Age in month: ", ageInMonth);

const form = document.getElementById("profileForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputName = document.getElementById("name").value;
    const inputBirthYear = document.getElementById("birthYear").value;

    if (inputName !== "") {
        userProfile.name = inputName;
    }

    if (inputBirthYear !== "") {
        userProfile.birthYear = Number(inputBirthYear);
    }

    console.log("Updated profile: ", userProfile);
})

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newLi = document.createElement("li");

        newLi.textContent = taskText;

        taskList.appendChild(newLi);

        taskInput.value = "";
    }
});

const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function() {
    const lastItem = taskList.lastElementChild;

    if (lastItem !== null) {
        lastItem.remove();
    }
});