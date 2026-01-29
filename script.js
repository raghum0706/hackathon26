// Countdown Timer
const eventDate = new Date("March 15, 2026 10:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff < 0) {
        countdown.innerHTML = "Event Started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);

// Registration Form
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "🎉 Registration Successful! See you at Hackathon2k26!";
    this.reset();
});
