// question # 3
//3. Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.

// method 1...............
 document.getElementById("main").innerHTML= "<h1>WELCOME TO OUR WEBSITE</h1>";
 console.log();

// method 2...............
//  function paragraph(text) {
//      var para = document.createElement("p");
//     para.innerHTML = text;
    
//     document.body.appendChild(para);
//   }
//   paragraph("This is a new paragraph.");
