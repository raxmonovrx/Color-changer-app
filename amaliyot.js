const btn = document.querySelector(".btn");
const rgb = document.querySelector(".rgb");
const colordock = document.querySelector(".colordock");
const bradius = document.querySelector(".bradius");
const copy = document.querySelector(".copy");
const copiedNotification = document.querySelector(".copysms");

function changeColor() {
  const r = randomColor(0, 255);
  const g = randomColor(0, 255);
  const b = randomColor(0, 255);
  const c = randomColor(0, 255);

  colordock.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  colordock.style.borderRadius = `${r}px ${g}px ${b}px ${c}px`;
  rgb.innerHTML = `rgb(${r}, ${g}, ${b})`;
  bradius.innerHTML = `${r}px ${g}px ${b}px ${c}px`;
}

function randomColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// setInterval(changeColor, 1000);

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

copy.addEventListener("click", (event) => {
  const rgbText = `background-color: ${rgb.textContent};`;
  const bradiusText = `border-radius: ${bradius.textContent};`;
  const combinedText = `${rgbText}\n${bradiusText}`;
  copyToClipboard(combinedText);
  showCopiedNotification(event);
});

function showCopiedNotification(event) {
  copiedNotification.style.left = `${event.pageX}px`;
  copiedNotification.style.top = `${event.pageY}px`;
  copiedNotification.style.display = "block";
  setTimeout(() => {
    copiedNotification.style.display = "none";
  }, 1000);
}
