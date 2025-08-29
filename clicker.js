const cookie = document.getElementById("cookie");
const scoreDisplay = document.getElementById("score-value");
const upgradeCostDisplay = document.getElementById("upgrade-cost");
const upgradeButton = document.getElementById("upgrade");

let clickValue = 1;
let score = 0;
let upgradeCost = 10;
checkUpgradeBorder();

//change border color of upgrade button based on if user can afford it
function checkUpgradeBorder() {
if (score >= upgradeCost) {
        upgradeButton.style.border = "3px solid green";}
    else {
        upgradeButton.style.border = "3px solid red";}
    }
        

//clicking the cookie
cookie.addEventListener("click", () => {
    score += clickValue;
    scoreDisplay.textContent = score;
    rainCookies();
    
    cookie.style.transform = "scale(0.9)";
    cookie.style.transition = "transform 0.1s ease";

    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 100);
    checkUpgradeBorder();
});

//falling cookies in bakground
function rainCookies() {
    const cookieRain = document.createElement("div");
    cookieRain.classList.add("cookie-rain");
    cookieRain.innerHTML = '<img src="Cookie_img.png" alt="Cookie" />';



    cookieRain.style.left = Math.random() * 100 + "vw";
// Adjust animationspeed based on score
    if (score >= 1000) {
        cookieRain.style.animationDuration = Math.random() * 0.5 + 1 + "s";
    } else if (score >= 500) {
        cookieRain.style.animationDuration = Math.random() * 1 + 1.5 + "s";
    } else if (score >= 100) {
        cookieRain.style.animationDuration = Math.random() * 1.5 + 2 + "s";
    } else if (score > 20) {
        cookieRain.style.animationDuration = Math.random() * 2 + 3 + "s";
    }

    document.body.appendChild(cookieRain);

    setTimeout(() => {
        cookieRain.remove();
    }, 5000);
}

//check if user can afford upgrade on click
document.getElementById("upgrade").addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickValue++;
        
        scoreDisplay.textContent = score;

        upgradeCost = upgradeCost * clickValue;
        upgradeCostDisplay.textContent = upgradeCost;
    }
    checkUpgradeBorder();
});

