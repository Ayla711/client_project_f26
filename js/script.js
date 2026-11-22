// footer: show the current year
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// reading progress bar
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    let percent = 0;
    if (scrollHeight > 0) {
        percent = (scrollTop / scrollHeight) * 100;
    }

    progressBar.style.width = percent + "%";
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);
updateProgressBar();