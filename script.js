/* =========================
   PAGE NAVIGATION
========================= */

const pages = document.querySelectorAll(".page");
const pageButtons = document.querySelectorAll(".page-btn");


function showPage(pageNumber) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById(`page${pageNumber}`);

    if (!nextPage) return;

    nextPage.classList.add("active");

    const scrollArea = nextPage.querySelector(".page-scroll");

    if (scrollArea) {
        scrollArea.scrollTop = 0;
    }

    window.scrollTo(0, 0);
}


pageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextPage = button.dataset.next;

        if (nextPage) {
            showPage(nextPage);
        }

    });

});


/* =========================
   SECRET MESSAGE
========================= */

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const secretCard = document.querySelector(".secret-card");


secretBtn.addEventListener("click", () => {

    secretMessage.classList.remove("hidden");

    secretCard.classList.add("unlocked");

    secretBtn.textContent = "Message unlocked ✨";

    secretBtn.disabled = true;

    secretBtn.style.opacity = "0.7";


    // Next page button ko clearly visible rakho
    const finalBtn = document.querySelector(".final-btn");

    if (finalBtn) {

        finalBtn.style.display = "block";
        finalBtn.style.visibility = "visible";
        finalBtn.style.opacity = "1";

    }

});


/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const visualizer = document.getElementById("visualizer");

let musicPlaying = false;


musicBtn.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {

            await music.play();

            musicPlaying = true;

            musicBtn.innerHTML = `
                <span class="music-icon">♫</span>
                <span>Playing</span>
            `;

            visualizer.classList.remove("paused");

        } catch (error) {

            console.log("Music could not start:", error);

        }

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML = `
            <span class="music-icon">♪</span>
            <span>Music</span>
        `;

        visualizer.classList.add("paused");

    }

});


/* =========================
   FINAL CELEBRATION
========================= */

const celebrateBtn = document.getElementById("celebrateBtn");


celebrateBtn.addEventListener("click", () => {

    createConfetti(140);

    createSparkles(45);

});


function createConfetti(amount) {

    const emojis = [
        "🎉",
        "✨",
        "💜",
        "🎂",
        "🥳",
        "⭐",
        "🎈"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (Math.random() * 18 + 12) + "px";


        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";


        confetti.style.animationDelay =
            Math.random() * 1.2 + "s";


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


/* =========================
   SPARKLE BURST
========================= */

function createSparkles(amount) {

    for (let i = 0; i < amount; i++) {

        const sparkle = document.createElement("div");

        sparkle.textContent = "✦";

        sparkle.style.position = "fixed";

        sparkle.style.left = "50%";

        sparkle.style.top = "50%";

        sparkle.style.zIndex = "9999";

        sparkle.style.color = "#d9b8ff";

        sparkle.style.fontSize =
            (Math.random() * 12 + 10) + "px";

        sparkle.style.pointerEvents = "none";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 350 + 80;

        sparkle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200 + Math.random() * 700,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);

    }

}


/* =========================
   EASTER EGG
========================= */

/*
   Secret keyboard sequence:
   P → R → I → Y → A → N → S → H → I
*/

const secretCode = [
    "p",
    "r",
    "i",
    "y",
    "a",
    "n",
    "s",
    "h",
    "i"
];

let typedKeys = [];

const easterEgg = document.getElementById("easterEgg");


document.addEventListener("keydown", event => {

    typedKeys.push(event.key.toLowerCase());

    if (typedKeys.length > secretCode.length) {
        typedKeys.shift();
    }


    if (
        typedKeys.join("") ===
        secretCode.join("")
    ) {

        easterEgg.classList.add("show");

        createSparkles(25);


        setTimeout(() => {

            easterEgg.classList.remove("show");

        }, 4000);


        typedKeys = [];

    }

});

function checkPassword(){
const password =
    document
    .getElementById("passwordInput")
    .value
    .trim();

   const correctPassword = "25July2026";

    if(password === correctPassword){

        document
            .getElementById("passwordScreen")
            .style.display = "none";

        document
            .getElementById("websiteContent")
            .style.display = "block";

    }

    else{

        document
            .getElementById("errorText")
            .innerText =
            "Wrong Secret Code 😅";
    }
}
