import { tweetGen, followGen } from "../utils/fn.js";
import { onHandleClick } from "../utils/events.js";
import { GET } from "../utils/http.js";

// const tweetData = {
//   id: 1,
//   image: "https://robohash.org/hicveldicta.png",
//   firstName: "Pippo",
//   username: "atuny0",
//   body: "His mother had always taught him",
//   reactions: 1,
// };

const handleTweetSubmit = (title, userId) => {
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      userId,
      /* other post data */
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

let userList = [];
let postList = [];
const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");
const tabsEl = document.querySelectorAll(".tabBar__tab");
const tweetButton = document.getElementById("tweetButton");
const followItemsEl = document.querySelector(".follow__items");
const tweetBarEl = document.querySelector(".tweetBar__content");

// contentEl.append(tweetGen(tweetData));

// Async
// GET("/posts").then(({ posts }) => (postList = posts));

// GET("/users")
//   .then(({ users }) => (userList = users))
//   .then(() => console.log(postList));

// Richiesta multipla in parallelo
const remoteData = Promise.all([GET("/posts"), GET("/users")]);

// Richiesta multipla in serie
// GET("/posts").then(() => GET("/users"));

remoteData
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() => {
    postList
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(tweetGen(post)));

    userList.map((user) => {
      if (user.id <= 400) followItemsEl.append(followGen(user));
    });
  });

// Events
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

if (tabsEl) {
  tabsEl.forEach((element) => {
    element.addEventListener("click", () => {
      let active = document.querySelector(".tabBar__tab.active");
      active.classList.remove("active");
      element.classList.add("active");
    });
  });
}

// al click sul tweetButton
// tweetButton.addEventListener("click", () => {
//   let inputTweet = document.getElementById("inputTweet");
//   // id consideriamo statico
//   let userId = 5;
//   if (inputTweet) {
//     handleTweetSubmit(inputTweet.value, userId);
//   }
// });

tweetBarEl.addEventListener("submit", onHandleClick);
