document.getElementById("noButton").addEventListener("click", function() {
    let button = document.getElementById("noButton");
    let moveButton = setInterval(function() {
        let direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0:
                button.style.top = (button.offsetTop - 10) + 'px';
                break;
            case 1:
                button.style.top = (button.offsetTop + 10) + 'px';
                break;
            case 2:
                button.style.left = (button.offsetLeft - 10) + 'px';
                break;
            case 3:
                button.style.left = (button.offsetLeft + 10) + 'px';
                break;
        }
    }, 200);
    
    setTimeout(() => {
        clearInterval(moveButton);
    }, 3000);
});

document.getElementById("yesButton").addEventListener("click", function() {
    // Hide all elements except the celebration
    document.querySelector('.container').style.display = 'none';
    document.getElementById("celebration").style.display = 'block';
    document.getElementById("celebration").classList.remove("hidden");

    // Show celebration message
    const message = document.createElement("div");
    message.className = "celebrate-message";
    message.innerHTML = "YA RABAK KANBGHIK KTER MUAAH! 💖❤️";
    document.getElementById("celebration").appendChild(message);

    // Start confetti animation
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.querySelector(".confetti");
    const colors = ["#ffcc00", "#ff66b2", "#ff4d4d", "#66ff66", "#66ccff"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.opacity = Math.random();
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        confettiContainer.appendChild(confetti);
    }
}

// Keyframes for confetti fall animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(${window.innerHeight}px); }
}`, styleSheet.cssRules.length);
