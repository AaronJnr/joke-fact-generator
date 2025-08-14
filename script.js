// script.js

const jokeBtn = document.getElementById("jokeBtn");
const factBtn = document.getElementById("factBtn");
const output = document.getElementById("output");

// Fetch random joke
jokeBtn.addEventListener("click", async () => {
    output.textContent = "Loading joke...";
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        output.textContent = `${data.setup} — ${data.punchline}`;
    } catch (error) {
        output.textContent = "Oops! Couldn't fetch a joke.";
        console.error(error);
    }
});

// Fetch random fact
factBtn.addEventListener("click", async () => {
    output.textContent = "Loading fact...";
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();
        output.textContent = data.text;
    } catch (error) {
        output.textContent = "Oops! Couldn't fetch a fact.";
        console.error(error);
    }
});
