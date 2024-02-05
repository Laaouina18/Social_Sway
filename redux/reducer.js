import { SHOW_POST, HIDE_POST, LIKE, DISLIKE } from "./ActionTypes";
import { DATA } from "../data/usersData";

const initialState = {
  data: DATA,
  Param: false,
  likelVisible: false,
  Likes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POST:
    case HIDE_POST:
      return {
        ...state,
        Param: !state.Param,
      };
    case LIKE:
      return {
        ...state,
        Likes: [...state.Likes, action.payload],
      };
    case DISLIKE:
      return {
        ...state,
        Likes: state.Likes.filter(
          (User) => User.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
