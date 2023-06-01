export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
  const wrapperEl = cE("div");
  const userImageEl = cE("img");
  const profileEl = cE("div");
  const contentEl = cE("div");
  const nameEl = cE("p");
  const userNameEl = cE("p");
  const textContentEl = cE("p");
  const reactionsEl = cE("div");
  const likeValueEl = cE("div");
  const iconEl = cE("div");
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  // Corrispettivo optional chaining (?)
  // if(tweetData.user.image) userImageEl.src = tweetData.user.image || imagePlaceholder;

  wrapperEl.className = "tweet";
  userImageEl.src = tweetData.user?.image || imagePlaceholder;
  ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");
  userImageEl.alt = tweetData.user?.username;
  contentEl.className = "tweet__content";
  profileEl.className = "tweet__profile";
  nameEl.className = "tweet__profileName";
  userNameEl.className = "tweet__profileUsername";
  reactionsEl.className = "tweet__reactions";
  likeValueEl.className = "tweet__like__value";
  iconEl.className = "tweet__icon__heart";
  nameEl.textContent =
    tweetData.user?.firstName + " " + tweetData.user?.lastName;
  userNameEl.textContent = tweetData.user?.username;
  userNameEl.prepend("@");
  textContentEl.textContent = tweetData.body;
  likeValueEl.textContent = tweetData.reactions;

  profileEl.append(nameEl, userNameEl);
  contentEl.append(profileEl, textContentEl, reactionsEl);
  wrapperEl.append(userImageEl, contentEl);
  reactionsEl.append(iconEl, likeValueEl);

  return wrapperEl;
};

export const followGen = (user) => {
  // image Placeholder
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  const followEl = cE("div");
  const followImgEl = cE("img");
  const followUser = cE("div");
  const followUserInfo = cE("div");
  const followName = cE("p");
  const followUsername = cE("p");
  const followButton = cE("div");

  followEl.className = "follow__item";
  followImgEl.className = "follow__image";
  followUserInfo.className = "follow__userInfo";
  followUser.className = "follow__user";
  followName.className = "follow__name";
  followUsername.className = "follow__username";
  followButton.className = "follow__button";

  followImgEl.src = user?.image || imagePlaceholder;
  followImgEl.alt = user?.username;

  followName.textContent = user?.firstName + " " + user?.lastName;
  followUsername.textContent = "@" + user?.username;
  followButton.textContent = "Segui";

  followUserInfo.append(followName, followUsername);
  followUser.append(followUserInfo, followButton);
  followEl.append(followImgEl, followUser);

  return followEl;
};
