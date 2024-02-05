import { SHOW_MODAL, HIDE_MODAL, LIKE, DISLIKE } from "./ActionTypes";

export const showPost = () => {
  return {
    type: SHOW_MODAL,
    payload: undefined,
  };
};

export const hidePost = () => {
  return {
    type: HIDE_MODAL,
    payload: undefined,
  };
};

export const likeUser = (User) => {
  return {
    type: LIKE,
    payload: User,
  };
};

export const dislikePortolio = (User) => {
  return {
    type: DISLIKE,
    payload: User,
  };
};
