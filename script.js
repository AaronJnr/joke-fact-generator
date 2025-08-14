const jokeBtn = document.getElementById('jokeBtn');
const factBtn = document.getElementById('factBtn');
const output = document.getElementById('output');

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the scarecrow win an award? Because he was outstanding in his field."
];

const facts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries are not.",
    "Octopuses have three hearts."
];

jokeBtn.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    output.textContent = randomJoke;
});

factBtn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    output.textContent = randomFact;
});
