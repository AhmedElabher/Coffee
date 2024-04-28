let menu = document.querySelectorAll(".menu img");
menu.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);
      popupbox.appendChild(imgHeading);
    }
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupbox.appendChild(popupImage);
    document.body.appendChild(popupbox);
    let CloseButton = document.createElement("span");
    let CloseButtonText = document.createTextNode("X");
    CloseButton.appendChild(CloseButtonText);
    CloseButton.className = "close-button";
    popupbox.appendChild(CloseButton);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.className === "close-button") {
    e.target.parentElement.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

let BurgerIcon = document.querySelector(".fa-solid");
let Links = document.querySelector(".links");
BurgerIcon.onclick = function () {
  Links.classList.toggle("open");
};
