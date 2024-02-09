import { DISLIKE, HIDE, LIKE, SHOW } from "./ActionsType"

export const archiffer = ()  => {
	return {
	  type : HIDE,
	  payload: undefined
	}
  }
  
export const visualiser = () => {
  return {
    type : SHOW,
    payload : undefined
  }
}

export const dislike = (user)  => {
	return {
	  type : DISLIKE,
	  payload : user
	}
  }
export const like = (user)=> {
  return {
    type : LIKE,
    payload : user
  }
}
