const output = document.getElementById("output");
const getContentBtn = document.getElementById("getContentBtn");
const copyBtn = document.getElementById("copyBtn");
const likeBtn = document.getElementById("likeBtn");
const categorySelect = document.getElementById("category");

async function getContent() {
  const category = categorySelect.value;
  output.textContent = "Loading...";

  try {
    let res, data;

    if (category === "joke") {
      res = await fetch("https://official-joke-api.appspot.com/random_joke");
      data = await res.json();
      output.textContent = `${data.setup} — ${data.punchline}`;
    }

    else if (category === "programming") {
      res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      data = await res.json();
      output.textContent = data.joke;
    }

    else if (category === "dad") {
      res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      data = await res.json();
      output.textContent = data.joke;
    }

    else if (category === "fact") {
      res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      data = await res.json();
      output.textContent = data.text;
}
// Function to get a science fact from your Render backend
async function getScienceFact() {
    const factText = document.getElementById("fact");
    factText.innerText = "Loading...";

    try {
        const response = await fetch("https://science-facts-proxy.onrender.com/facts");//
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        factText.innerText = data.fact || "No fact found.";
    } catch (error) {
        console.error("Error fetching science fact:", error);
        factText.innerText = "Failed to load content.";
    }
}

}

    else if (category === "history") {
      res = await fetch("https://history.muffinlabs.com/date");
      data = await res.json();
      const event = data.data.Events[Math.floor(Math.random() * data.data.Events.length)];
      output.textContent = `${event.year} — ${event.text}`;
    }
  } catch {
    output.textContent = "Failed to load content 😢";
  }
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

getContentBtn.addEventListener("click", getContent);
copyBtn.addEventListener("click", copyToClipboard);
likeBtn.addEventListener("click", likeItem);
