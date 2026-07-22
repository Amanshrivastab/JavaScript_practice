//1. get elementById - single element by id 
const title = document.getElementById("main-title");
title.textContent = "text changed";

//2. getElementByClassName - return html collection
const paras = document.getElementsByClassName("para");
paras[0].setAttribute("style", "color: red; font-size: 20px;");

//3. getElementByTagName - return html collection
const listItems = document.getElementsByTagName("li");
listItems[0].textContent = "List item changed";

//4. querySelector - return first element that matches the selector
const firstPara = document.querySelector(".para");
firstPara.textContent = "First paragraph changed";

//5. querySelectorAll - return all elements that match the selector
const allParas = document.querySelectorAll(".para");
allParas.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1} changed`;
});

//6 Selecting by attribute
const box = document.querySelector('[data-role = "box" ]');
box.style.border = "2px solid blue";

//7 Selecting by new attribute 
const input = document.querySelector('input[name = "username"]');
input.value = "Aman";

// DOM manupulation - changing styles and attributes
title.innerText = "changed via innerText";
title.innerHTML = "<i>changed via innerHTML</i>";

//change attribute 
box.setAttribute("data-role", "udated-box");
console.log(box.getAttribute("data-role"));

//add remove and toggle classes 
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("active");

//create and append new element 
const newli = document.createElement("li");
newli.textContent ="item 3";
document.querySelector(".list").appendChild(newli);
listItems[0].remove(); // it works as an array remove index 0
//document.querySelector(".list").remove();  remove the all child list

// insert before another element 
const list = document.querySelector(".list");
const  newItem = document.createElement("li");
newItem.textContent = " Item 0";
list.insertBefore(newItem,list.firstChild);

//event lisitner
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    alert("button clicked");
    title.style.color ="red";
});


// create edit andd remove operation using function 
function createElementDOM(){
    const para = document.createElement("p");
    para.id = "my-para";
    para.textContent = "This is a new paragraph create using createElementDOM function";
   document.getElementById("container").appendChild(para);
}
// edit the element
function editElementDOM(){
    const para = document.getElementById("my-para");
    if (para) {
        para.textContent = "The paragraph has been updated!";
        para.style.color = "blue";
        para.style.fontSize = "20px";
    } else {
        alert("Element not found!");
    }
}
// remove the element
function removeElementDOM(){
    const para = document.getElementById("my-para");
    if (para) {
        para.remove();
    } else {
        alert("Element not found!");
    }
}