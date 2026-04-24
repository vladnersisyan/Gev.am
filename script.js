const btn = document.querySelector("#videoBtn")
const video = document.querySelector("#myVideo")

btn.addEventListener("click", () => {
    video.style.display = "block";
    video.scrollIntoView({behavior: "smooth"});
    video.play();
}) 