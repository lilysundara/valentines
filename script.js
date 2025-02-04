document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    // Yes Button Click
    yesBtn.addEventListener("click", function () {
        response.textContent = "Yippeeeee! 💖 Can't wait for Valentine's!";
        response.style.color = "red";
    });

    // No Button Moves Away
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
