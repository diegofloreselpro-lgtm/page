document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const heartsContainer = document.querySelector(".hearts");

  if (!envelope || !heartsContainer) return;

  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["💖","💕","💘","💗","💞"];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 36 + 24) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  }

  setInterval(createHeart, 450);
});