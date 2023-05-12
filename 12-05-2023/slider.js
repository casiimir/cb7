const imageList = [
  "https://picsum.photos/400/300?1",
  "https://picsum.photos/400/300?2",
  "https://picsum.photos/400/300?3",
  "https://picsum.photos/400/300?4",
  "https://picsum.photos/400/300?5",
  "https://picsum.photos/400/300?6",
  "https://picsum.photos/400/300?7",
];

let imageIndex = 0;

const rootEl = document.querySelector("#root");

const imgEl = document.createElement("img");
// const buttonNextEl = document.createElement("button");
// const buttonPrevEl = document.createElement("button");

imgEl.src = imageList[imageIndex];
imgEl.alt = "random image";
// buttonNextEl.textContent = ">";
// buttonPrevEl.textContent = "<";

// rootEl.append(buttonPrevEl, imgEl, buttonNextEl);
rootEl.append(imgEl); // Da rimuove se si attivano i buttons!!

// setInterval(() => {
//   imgEl.src = imageList[imageIndex];
//   imageIndex++;

//   if (imageIndex === imageList.length) imageIndex = 0;
// }, 3000);

// buttonNextEl.addEventListener("click", () => {
//   if (imageIndex > imageList.length - 2) imageIndex = 0;

//   imageIndex++;
//   imgEl.src = imageList[imageIndex];
// });

// buttonPrevEl.addEventListener("click", () => {
//   if (imageIndex <= 0) imageIndex = imageList.length - 1;

//   imageIndex--;
//   imgEl.src = imageList[imageIndex];
// });

document.addEventListener("scroll", () => {
  // console.log(document.body.offsetHeight); // Total page height
  if (window.pageYOffset >= 100) {
    // Actuale page height
    if (imageIndex >= imageList.length - 1) imageIndex = 0;
    imageIndex++;
    imgEl.src = imageList[imageIndex];
  }
});
