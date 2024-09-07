let currentStep = 0; /** number 0-6 */

/**
 * It's a simple logger function that logs content to a DOM element
 * 
 * @param {string} id DOM element id 
 * @param {string} content Content to log
 * @param {boolean} append Append content to existing content or re write it
 */
function logger(id, content, append) {
    const element = document.getElementById(id);

    if (!element) return;

    if (append) 
        element.innerHTML += content;
    else 
        element.innerHTML = content;
}


/**
 * It clears the content of a DOM element
 * 
 * @param {string} id DOOM element id 
 */
function clearOutput(id) {
    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";
}


/**
 * It waits for a given amount of milliseconds
 * 
 * @param {number} milliseconds 
 */
function slowTask(milliseconds) {
    const startTime = new Date().getTime();
    let currentTime = startTime;

    while (currentTime - startTime < milliseconds) {
        currentTime = new Date().getTime();
    }

    logger("example-1-console", `Completed after ${milliseconds} milliseconds.`, false);
}


/**
 * It fetch pokemon data from the pokeapi given a pokemon name
 * 
 * @param {string} name Pokemon name
 */
async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    if (!response.ok) 
        logger("example-3-console", `Error: ${response.status}`, false);

    const data = await response.json();
    logger("example-3-console", JSON.stringify(data, null, 2), false);
}


/**
 * (This function is not working as expected) It fetch pokemon data from the pokeapi given a pokemon name
 * 
 * @param {string} name Pokemon name 
 */
function getPokemon2(name) {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    console.log(response);
    logger("example-4-console", 'Promise { <pending> }', false);
}


/**
 * It updates the visual representation of the current step
 */
function updateVisual() {
    document.querySelector("#frame1").style.opacity = 
        currentStep >= 1 && currentStep < 6 ? 1 : 0;
    document.querySelector("#frame2").style.opacity =
        currentStep >= 2 && currentStep < 5 ? 1 : 0;
    document.querySelector("#frame3").style.opacity =
        currentStep >= 3 && currentStep < 4 ? 1 : 0;

    document.querySelector("#current-step").innerHTML = currentStep;
}

/**
 * It moves to the next step
 */
function nextStep() {
    currentStep = (currentStep + 1) % 7;
    updateVisual();
}

/**
 * It moves to the previous step
 */
function prevStep() {
    currentStep = (currentStep + 1) % 7;
    updateVisual();
}

document.querySelector("#example-2-btn").addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/psyduck/`)
        .then(response => response.json())
        .then(data => {
            logger("example-2-console", JSON.stringify(data, null, 2), false);
        })
        .catch(error => {
            logger("example-2-console", error, false);
        });
});

document.querySelector("#example-3-btn").addEventListener("click", () => {
    getPokemon("psyduck");
});

document.querySelector("#example-4-btn").addEventListener("click", () => {
    getPokemon2("psyduck");
});
