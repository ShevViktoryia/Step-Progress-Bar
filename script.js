const bar_btns = document.querySelectorAll(".bar-btn");
const line = document.querySelector(".line");
const buttons = document.querySelectorAll("button");

let curStage = 1;

const updateBar = (e) => {
  curStage = e.target.className === "next-btn" ? ++curStage : --curStage;
  bar_btns.forEach((btn, ind) => {
    btn.classList[`${ind < curStage ? "add" : "remove"}`]("active");
  });
  line.style.width = `${((curStage - 1) / (bar_btns.length - 1)) * 100}%`;
  if (curStage === bar_btns.length) {
    buttons[1].disabled = true;
  } else if (curStage === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((btn) => (btn.disabled = false));
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", updateBar);
});
