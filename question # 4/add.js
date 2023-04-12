//question 4
// 4-Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


const value = ["sugar", "water", "tea"];
let ul= document.createElement("ul");
for (let user of value){
    let li= document.createElement("li");
    li.innerText=user;
    ul.appendChild(li);
}
document.body.appendChild(ul);