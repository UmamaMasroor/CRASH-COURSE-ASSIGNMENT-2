// question 5

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

let color=["red", "blue","purple","orange","green","grey","yellow","black"];
let btn= document.getElementById("btn");
btn.addEventListener("click", function(){
   let randomColor=color[Math.floor(Math.random()*color.length)]
   document.body.style.background=randomColor;
//    console.log(randomColor);
});
