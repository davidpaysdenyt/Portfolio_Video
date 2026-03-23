const modal = document.getElementById("modal");
const player = document.getElementById("player");
const close = document.getElementById("close");
const grid = document.querySelector(".grid");

// your data
const projects = [
  {
    preview: "videos/WORKPREV.mp4",
    vimeo: "https://player.vimeo.com/video/123456789",
    order: 2
  },
  {
    preview: "videos/AFTERTYLERPREV.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    order: 1
  }
];

// 👇 SORT HERE from smaller to bigger
projects.sort((a, b) => a.order - b.order);

// build the grid
projects.forEach(project => {
  const item = document.createElement("div");
  item.classList.add("item");

  const video = document.createElement("video");
  video.src = project.preview;
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  video.play();

  item.appendChild(video);
  grid.appendChild(item);

  // click → open Vimeo
  item.addEventListener("click", () => {
    player.src = project.vimeo + "?autoplay=1";
    modal.style.display = "flex";
  });
});

// close modal
close.addEventListener("click", () => {
  modal.style.display = "none";
  player.src = "";
});
