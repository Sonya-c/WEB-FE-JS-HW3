
function logger(id, content, append) {
    const element = document.getElementById(id);

    if (!element) return;

    if (append) 
        element.innerHTML += content;
    else 
        element.innerHTML = content;
}


function clearOutput(id) {
    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";
}

function slowTask(milliseconds) {
    const startTime = new Date().getTime();
    let currentTime = startTime;

    while (currentTime - startTime < milliseconds) {
        currentTime = new Date().getTime();
    }

    logger("example-1-console", `Completed after ${milliseconds} milliseconds.`, false);
}


async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    if (!response.ok) 
        logger("example-3-console", `Error: ${response.status}`, false);

    const data = await response.json();
    logger("example-3-console", JSON.stringify(data, null, 2), false);
}

function getPokemon2(name) {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    console.log(response);
    logger("example-4-console", 'Promise { <pending> }', false);
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