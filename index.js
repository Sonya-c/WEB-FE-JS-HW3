
function logger(id, content, append) {
    const element = document.getElementById(id);

    if (!element) return;

    if (append) 
        element.innerHTML += content;
    else 
        element.innerHTML = content;
}

function slowTask(milliseconds) {
    const startTime = new Date().getTime();
    let currentTime = startTime;

    while (currentTime - startTime < milliseconds) {
        currentTime = new Date().getTime();
    }

    logger("example-1-console", `Completed after ${milliseconds} milliseconds.`, false);
}


function getPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => 
            logger("example-2-console", response.json(), true)
        )
        .catch(error =>
            logger("example-2-console", error, true)
        );
}

document.querySelector("#example-1-btn").addEventListener("click", () => {
    slowTask(5000);
});

document.querySelector("#example-2-btn").addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/psyduck/encounters`)
        .then(response => response.json())
        .then(data => {
            logger("example-2-console", JSON.stringify(data, null, 2), false);
        })
        .catch(error => {
            logger("example-2-console", error, false);
        });
});