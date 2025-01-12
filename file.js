// target form html by using class and id propaty
let userinput = document.getElementById("date");
let buttonel = document.querySelector(".button");
let resultel = document.getElementById("result");
let date = new Date().getFullYear();
let agetext = document.querySelector(".agetext");
let index = 0;
let text = "Age Calculator";


//display age calculator with animation
function animationtext() {
  agetext.textContent = text.slice(0, index)
  index++;
  if (index > text.length) {
    index = 0;
  }
  setTimeout(animationtext, 200);
}

animationtext();




//display your current age 
buttonel.addEventListener("click", () => {
  if (userinput.value === " ") {
    alert("please enter a valid date");
  } else {
      let userinputvalue = new Date(userinput.value);
      let userinputyear = userinputvalue.getFullYear();
      let resultelvalue = date - userinputyear;
      console.log(resultelvalue);
    let output = `your age is ${resultelvalue}`
    resultel.textContent=output
  }



})