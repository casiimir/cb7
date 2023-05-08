function imageGen(imgUrl, parent) {
  const imgEl = document.createElement("img");

  imgEl.src = imgUrl;
  return parent.append(imgEl);
}

const imgList = [
  "https://picsum.photos/200/300?1",
  "https://picsum.photos/200/300?2",
  "https://picsum.photos/200/300?3",
  "https://picsum.photos/200/300?4",
  "https://picsum.photos/200/300?5",
  "https://picsum.photos/200/300?6",
  "https://picsum.photos/200/300?7",
  "https://picsum.photos/200/300?8",
  "https://picsum.photos/200/300?9",
  "https://picsum.photos/200/300?10",
  "https://picsum.photos/200/300?11",
  "https://picsum.photos/200/300?12",
  "https://picsum.photos/200/300?13",
  "https://picsum.photos/200/300?14",
];
const wrapperEl = document.createElement("div");

wrapperEl.className = "list";

// imageGen("https://picsum.photos/200/300?1", wrapperEl);
// imageGen("https://picsum.photos/200/300?2", wrapperEl);
// imageGen("https://picsum.photos/200/300?3", wrapperEl);
// imageGen("https://picsum.photos/200/300?4", wrapperEl);

for (let img of imgList) {
  imageGen(img, wrapperEl);
}

imageGen(imgList[7], document.body); // Aggiunta al body
document.body.append(wrapperEl); // Aggiunta al wrapperEl `list`
