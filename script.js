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
    preview: "WORKPREV.mp4",
    vimeo: "https://player.vimeo.com/video/123456789",
  },
  {
    preview: "AFTERTYLERPREV.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
  }
];

const grid = document.querySelector(".grid");

projects.forEach(project => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.setAttribute("data-video", project.vimeo);

  const video = document.createElement("video");
  video.src = project.preview;
  video.muted = true;
  video.loop = true;

  item.appendChild(video);
  grid.appendChild(item);

  // click
  item.addEventListener("click", () => {
    player.src = project.vimeo + "?autoplay=1";
    modal.style.display = "flex";
  });
});
    
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
