function welcome() {
  console.log("Witaj w devtools mojej strony :)");
}
welcome();

let onChangeBackgroundColor = () => 
{
  body.classList.toggle("darkBody");
  if (body.classList.contains("darkBody")) {
    darkedName.innerText = "jasny";
  } else {
    darkedName.innerText = "ciemny";
  }
};

let body = document.querySelector(".body");
let changeBackground = document.querySelector(".js-button__changeBackground");
let darkBody = document.querySelector(".darkBody");
let darkedName = document.querySelector(".darkedName");
let changeText = document.innerText;

changeBackground.addEventListener("click", onChangeBackgroundColor);
