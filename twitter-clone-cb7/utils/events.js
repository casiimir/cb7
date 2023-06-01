import { POST } from "./http.js";

export const onHandleClick = (event) => {
  event.preventDefault();

  const body = {
    title: event.target[0].value,
    userId: 9,
  };

  return POST("/posts/add", body);
};
