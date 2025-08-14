const output = document.getElementById("output");
const jokeBtn = document.getElementById("jokeBtn");
const factBtn = document.getElementById("factBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const copyBtn = document.getElementById("copyBtn");
const likeBtn = document.getElementById("likeBtn");

async function getJoke() {
  output.textContent = "Loading joke...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    output.textContent = `${data.setup} — ${data.punchline}`;
  } catch {
    output.textContent = "Failed to fetch joke 😢";
  }
}

async function getFact() {
  output.textContent = "Loading fact...";
  try {
    const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await res.json();
    output.textContent = data.text;
  } catch {
    output.textContent = "Failed to fetch fact 😢";
  }
}

function surpriseMe() {
  Math.random() < 0.5 ? getJoke() : getFact();
}

function copyToClipboard() {
  navigator.clipboard.writeText(output.textContent).then(() => {
    alert("Copied to clipboard!");
  });
}

let likes = 0;
function likeItem() {
  likes++;
  alert(`You liked this ${likes} time${likes > 1 ? "s" : ""}!`);
}

jokeBtn.addEventListener("click", getJoke);
factBtn.addEventListener("click", getFact);
surpriseBtn.addEventListener("click", surpriseMe);
copyBtn.addEventListener("click", copyToClipboard);
likeBtn.addEventListener("click", likeItem);
