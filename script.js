const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const card = document.getElementById("card");
const gif = document.getElementById("gif");

// No-nappi karkaa
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Mobiilissa kosketus
noBtn.addEventListener("touchstart", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes-painallus 💖
yesBtn.addEventListener("click", () => {
    card.classList.add("love-mode");

    question.textContent = "Yay! 💖 I knew it!";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWtqZHV5a2ppNm5vdnY2dmdpM2JmdjJ1MXJvMm9oNmV1NGJ0ZzZzbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif";

    noBtn.style.display = "none";
    yesBtn.textContent = "🥰";
});
