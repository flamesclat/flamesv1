function animateHeading() {
  let x = document.getElementsByTagName("h2");
  for (item of x) {
    item.classList.add("animate__animated");
    item.classList.add("animate__heartBeat");
  }
}

function removeHeading() {
  let x = document.getElementsByTagName("h2");
  for (item of x) {
    item.classList.remove("animate__animated");
    item.classList.remove("animate__heartBeat");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.getElementById("modelOne").click();
  }, 5000);

  setTimeout(() => {
    document.getElementById("modelTwo").click();
  }, 40000);
});

let x = document.getElementsByTagName("h2");
for (item of x) {
  item.addEventListener("mouseover", animateHeading);
  item.addEventListener("mouseout", removeHeading);
}
