{
  const welcome = () => {
    console.log("Witaj w devtools mojej strony :)");
  };
  welcome();

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const darkedName = document.querySelector(".darkedName");
    body.classList.toggle("darkBody");
    darkedName.innerText = body.classList.contains("darkBody")
      ? "jasny"
      : "ciemny";
  };
  const init = () => {
    const changeBackground = document.querySelector(
      ".js-button__changeBackground"
    );
    changeBackground.addEventListener("click", toggleBackground);
  };
  init();
}
