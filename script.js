const modal = document.getElementById("modal");
const player = document.getElementById("player");
const close = document.getElementById("close");
const grid = document.querySelector(".grid");
const aboutSection = document.getElementById("aboutSection");

let items = [];

// your data
const projects = [
  {
    preview: "videos/WORKPREV.mp4",
    vimeo: "https://player.vimeo.com/video/123456789",
    tags: ["Music-video"],
    order: 1
  },
  {
    preview: "videos/AFTERTYLERPREV.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Music-video"],
    order: 6
  },
  {
    preview: "videos/NEWSEN.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Music-video"],
    order: 3
  },
  {
    preview: "videos/VOLMAG.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Sport"],
    order: 4
  },
  {
    preview: "videos/OLSEN.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Sport"],
    order: 5
  },
  {
    preview: "videos/CORPAUT.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Corporate"],
    order: 2
  },
  {
    preview: "videos/EPSTADIO.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Documentary"],
    order: 7
  },
  {
    preview: "videos/QSA.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Sport"],
    order: 8
  },
  {
    preview: "videos/VILLAIGEA.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Documentary"],
    order: 9
  },
  {
    preview: "videos/INTERLUDE.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Music-video"],
    order: 10
  },
  {
    preview: "videos/FVBARCA.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Luxury"],
    order: 11
  },
  {
    preview: "videos/SERAFINO.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Luxury"],
    order: 12
  },
  {
    preview: "videos/THALASSO.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Luxury"],
    order: 13
  },
  {
    preview: "videos/PARMA.mp4",
    vimeo: "https://player.vimeo.com/video/987654321",
    tags: ["Sport"],
    order: 14
  }
];

// 👇 SORT HERE from smaller to bigger
projects.sort((a, b) => a.order - b.order);

// build the grid
projects.forEach(project => {
  const item = document.createElement("div");
  item.classList.add("item");

  item.dataset.tags = project.tags.join(" "); // 👈 store tags

  const video = document.createElement("video");
  video.src = project.preview;
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  video.play();

  item.appendChild(video);
  grid.appendChild(item);

  items.push(item); // 👈 store reference

  // click → open Vimeo
  item.addEventListener("click", () => {
    player.src = project.vimeo + "?autoplay=1";
    modal.style.display = "flex";
  });
});

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "about") {
      items.forEach(item => {
        item.style.opacity = "0";
        item.style.pointerEvents = "none";
      });

      aboutSection.classList.add("active");
      return;
    }

    items.forEach(item => {
      if (filter === "all") {
        item.style.opacity = "1";
        item.style.pointerEvents = "auto";
      } else {
        const tags = item.dataset.tags;

        if (tags.includes(filter)) {
          item.style.opacity = "1";
          item.style.pointerEvents = "auto";
        } else {
          item.style.opacity = "0";
          item.style.pointerEvents = "none";
        }
      }
    });

    aboutSection.classList.remove("active");
  });
});

item.style.opacity = "0";
item.style.pointerEvents = "none";

// close modal
close.addEventListener("click", () => {
  modal.style.display = "none";
  player.src = "";
});
