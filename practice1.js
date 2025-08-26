const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");
const progress = document.getElementById("progress");
const maxChars = 200;

textArea.addEventListener("input", () => {
  const len = textArea.value.length;

  // Character count display
  charCount.textContent = `Characters: ${len}`;

  // Color changes based on count
  if (len < 50) {
    charCount.style.color = "#5151e5"; // blue
  } else if (len < 100) {
    charCount.style.color = "#ff9800"; // orange
  } else {
    charCount.style.color = "#e53935"; // red
  }

  // Progress bar update
  let percent = (len / maxChars) * 100;
  if (percent > 100) percent = 100;
  progress.style.width = `${percent}%`;
});
