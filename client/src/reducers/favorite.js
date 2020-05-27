// favorite.js
// ******************************************************************
// *****  Client side -- client/src/reducers/favorite.js        *****
// *****  Favorite Reducers - manages state on favorite routes  *****
// ******************************************************************

import { 
  GET_FAVORITE,
  UPDATE_FAVORITE,
  CLEAR_FAVORITE,
  FAVORITE_ERROR,
  GET_FAVORITES
 } from '../actions/types'

const initialState = {
  favorite: null,
  favorites: [],
  repos: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case GET_FAVORITE:
    case UPDATE_FAVORITE:
      return {
        ...state,
        favorite: payload,
        loading: false
      }
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
        loading: false
      }
    case FAVORITE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        favorite: null
      }
    case CLEAR_FAVORITE:
      return {
        ...state,
        favorite: null,
        repos: [],
        loading:false
      }
    default:
      return state
  }
}