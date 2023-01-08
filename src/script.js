const caseBtns = document.querySelectorAll(".general__cases-btn");
const text = document.querySelector("#general__cases-text");

const playBtn = document.querySelector("#info__screen-filler-btn");
const player = document.querySelector("#my-video");

caseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("general__cases-btn-active")) return;

    caseBtns.forEach((btn) => {
      btn.classList.remove("general__cases-btn-active");
    });
    target.classList.add("general__cases-btn-active");

    switch (target.id) {
      case "case-1":
        text.innerText = "1";
        break;
      case "case-2":
        text.innerText = "2";
        break;
      case "case-3":
        text.innerText = "3";
        break;
      case "case-4":
        text.innerText = "4";
        break;
    }
  });
});

playBtn.addEventListener("click", (e) => {
  playBtn.style.display = "none";
  player.style.display = "block";
  player.play();
});
