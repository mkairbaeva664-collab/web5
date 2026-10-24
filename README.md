# Assignment #5: JavaScript Basics (DOM Manipulation & Events)

**Student Name:** Madina Kairbayeva
**Group:** IT-2504 

---

## Overview
This project introduces core concepts of JavaScript, including working with variables, data types, dynamic dynamic arithmetic calculations, and interacting with the Document Object Model (DOM). It demonstrates capturing form input events and performing dynamic list manipulation (adding and removing elements).

---

## Assignment Parts & Implementation

### Part 1: Profile Object, Data Types & Arithmetic
- **Tasks 1 & 2:** Created a `userProfile` object storing various data types (string, number, boolean, and array). 
- Implemented arithmetic calculations to dynamically determine the user's age based on the birth year (`currentYear - userProfile.birthYear`) and calculated additional metrics such as age in months and total hobbies count.
- Outputs were logged to the browser console.

> **Screenshot:**  
<img width="662" height="393" alt="image" src="https://github.com/user-attachments/assets/6f1c5779-a62b-4391-bd9b-4fcb5f3f2d9a" />
<img width="713" height="151" alt="image" src="https://github.com/user-attachments/assets/ce07d37c-d7f2-4d86-bafa-b794242d2d4f" />

---

### Part 2: Form Input & Event Responses
- **Tasks 3 & 4:** Set up an HTML form with inputs for Username and Birth Year, alongside a submission button.
- Attached a `submit` event listener to the form using `addEventListener`. Prevented default page refresh with `event.preventDefault()`, captured input values, and dynamically updated the `userProfile` object.

> **Screenshot:**  
<img width="883" height="298" alt="image" src="https://github.com/user-attachments/assets/ea7b2644-4b33-469a-a5ac-7ff40793eae7" />
<img width="757" height="441" alt="image" src="https://github.com/user-attachments/assets/26a30246-edce-4826-9ce0-a71549bbebd0" />
<img width="692" height="55" alt="image" src="https://github.com/user-attachments/assets/63600b1f-4fe9-4b00-be63-92ae995a9155" />


---

### Part 3: DOM List Manipulation
- **Task 5:** Created an unordered list (`<ul>`) representing tasks/hobbies.
- Implemented an "Add Item" button using `document.createElement("li")` and `.appendChild()` to dynamically append user inputs to the list.
- Implemented a "Remove Item" button using `.lastElementChild` and `.remove()` to delete the last item from the list.

> **Screenshot:**  
<img width="998" height="337" alt="image" src="https://github.com/user-attachments/assets/8479cea7-1e64-43ef-a8ad-5ec82df821eb" />
<img width="770" height="660" alt="image" src="https://github.com/user-attachments/assets/9545ed3b-5eff-4c45-8d79-ac322485519a" />


---

## Work Process Summary
During this assignment, I learned how to integrate JavaScript with HTML elements via the DOM. I practiced handling events (`submit` and `click`), reading user inputs from forms, mutating JavaScript objects dynamically, and programmatically creating or deleting HTML nodes. This helped me understand how client-side scripts make web pages interactive and responsive.
