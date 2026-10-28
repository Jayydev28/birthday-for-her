const container = document.getElementById("flowers-container");

function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower");
    flower.innerHTML = "🪻";

    flower.style.left =
        Math.random() * window.innerWidth + "px";

    flower.style.fontSize =
        Math.random() * 25 + 20 + "px";

    flower.style.animationDuration =
        Math.random() * 6 + 6 + "s";

    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 12000);
}

setInterval(createFlower, 250);