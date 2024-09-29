// Get elements
const jokeButton = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke');

// Fetch a joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        
        // Display the joke
        jokeText.innerHTML = `${data.setup} <br> <em>${data.punchline}</em>`;
    } catch (error) {
        jokeText.innerHTML = "Oops! Couldn't fetch a joke. Try again later.";
    }
}

// Add event listener to the button
jokeButton.addEventListener('click', fetchJoke);
