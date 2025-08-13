const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she should embrace her mistakes… She gave me a hug.",
    "Why did the math book look sad? Because it had too many problems."
];

const facts = [
    "Honey never spoils. Archaeologists have found 3000-year-old honey still edible.",
    "Bananas are berries, but strawberries aren't.",
    "Sharks existed before trees."
];

function getJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("output").innerText = jokes[randomIndex];
}

function getFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("output").innerText = facts[randomIndex];
}

