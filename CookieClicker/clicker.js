const cookie = document.getElementById("cookie");
const scoreDisplay = document.getElementById("score");


let score = 0;

cookie.addEventListener("click", () => {
    score++;
    scoreDisplay.innerHTML = `<p>Score: ${score}</p>`;
    rainCookies();

    cookie.style.transform = "scale(0.9)";
    cookie.style.transition = "transform 0.1s ease";

    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 100);
});

function rainCookies() {
    const cookieRain = document.createElement("div");
    cookieRain.classList.add("cookie-rain");
    cookieRain.innerHTML = '<img src="Cookie_img.png" alt="Cookie" />';

    
    cookieRain.style.left = Math.random() * 100 + "vw";
    if (score > 20) {
    cookieRain.style.animationDuration = Math.random() * 2 + 3 + "s";
    }
    else if (score >= 100) {
        cookieRain.style.animationDuration = Math.random() * 1.5 + 2 + "s";
    }
    else if (score >= 500) {
        cookieRain.style.animationDuration = Math.random() * 1 + 1.5 + "s";
    }
    else if (score >= 1000) {
        cookieRain.style.animationDuration = Math.random() * 0.5 + 1 + "s";
    }

    document.body.appendChild(cookieRain);

    
    setTimeout(() => {
        cookieRain.remove();
    }, 5000);
}
