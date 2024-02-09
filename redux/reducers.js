
import { DATA } from "../data/usersData"
import { DISLIKE, HIDE, LIKE, SHOW } from "./ActionsType"


const initialState = {
  data: DATA,
  visible: false,
  LikesV : false,
  Likes: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        visible : !state.visible
      }
    case HIDE:
      return {
        ...state,
        visible : !state.visible
      }
    case LIKE:
      return {
        ...state,
        Likes: [...state.Likes, action.payload]
      }
    case DISLIKE:
      return {
        ...state,
        Likes: state.Likes.filter((user) => user.id != action.payload.id)
		
      }
    default:
      return state
  }
}
