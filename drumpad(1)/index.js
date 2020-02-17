function playSound(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const block = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
  block.classList.add("press");
  audio.currentTime = 0;
  audio.play();
}
function removeTransition(e) {
  console.log(this);
}
const keys = [...document.querySelectorAll(".sound")];
keys.forEach(key => key.addEventListener("transitioned", removeTransition));

window.addEventListener("keydown", playSound);
