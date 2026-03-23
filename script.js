const items = document.querySelectorAll(".item");
const modal = document.getElementById("modal");
const player = document.getElementById("player");
const close = document.getElementById("close");

items.forEach(item => {
    const video = item.querySelector("video");

    // hover = play preview
    // item.addEventListener("mouseenter", () => video.play());
    // item.addEventListener("mouseleave", () => video.pause());
const projects = [
  {
    preview: "videos/preview1.mp4",
    vimeo: "https://player.vimeo.com/video/123456789",
  },
  {
    preview: "videos/preview2.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
  }
];
    
    // click = open Vimeo
    item.addEventListener("click", () => {
        const vimeoURL = item.getAttribute("data-video");
        player.src = vimeoURL + "?autoplay=1";
        modal.style.display = "flex";
    });
});

// close modal
close.addEventListener("click", () => {
    modal.style.display = "none";
    player.src = "";
});
