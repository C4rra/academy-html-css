let red = document.getElementById("rosso");
let yellow = document.getElementById("giallo");
let green = document.getElementById("verde")
let container = document.getElementById("container");
let quad = document.getElementById("quadrato");
let buttons = document.getElementsByClassName("but");



container.style.height="400px";
container.style.width="700px";
container.style.border="4px";
container.style.borderStyle="solid"
container.style.borderColor="red"
container.style.backgroundColor="blue";
container.style.display="flex";
container.style.alignItems="center";
container.style.justifyContent="center";
container.style.flexDirection="column";




for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.margin = "10px 10px";
    button.style.height = "20px";
    button.style.width = "40px";
    button.style.display="flex"
}

quad.style.width="50px";
quad.style.height="50px";
quad.style.backgroundColor="black";
quad.style.alignItems="bottom";
quad.style.marginTop="auto"

red.addEventListener("click", function () {
    quad.style.backgroundColor="red";
  });
yellow.addEventListener("click", function () {
  quad.style.backgroundColor="yellow";
});  
green.addEventListener("click", function () {
    quad.style.backgroundColor="green";
  }); 