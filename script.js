let body = document.body;
let btn1 = document.querySelector(".black");
let btn2 = document.querySelector(".orange");
let btn3 = document.querySelector(".green");
let btn4 = document.querySelector(".blue");
let btn5 = document.querySelector(".red");

btn1.addEventListener("click", ()=>{
  body.style.backgroundColor = "black";

})

btn2.addEventListener("click",()=>{
  body.style.backgroundColor="orange";
})

btn3.addEventListener("click",()=>{
  body.style.backgroundColor="green";
})

btn4.addEventListener("click",()=>{
  body.style.backgroundColor ="blue";
})

btn5.addEventListener("click",()=>{
  body.style.backgroundColor="red";
})


// let btns = document.querySelectorAll(".a");

// let colors = ["black", "orange", "green", "blue", "red"];

// btns.forEach(function (btn,i){
//   btn.addEventListener("click",()=>{
//     body.style.backgroundColor = colors[i];

//   })
// })