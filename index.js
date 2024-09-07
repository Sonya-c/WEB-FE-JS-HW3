
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

document.querySelector("#example-1-btn").addEventListener("click", () => {
    slowTask(5000);
});
