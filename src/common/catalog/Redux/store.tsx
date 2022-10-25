import { createStoreHook } from "react-redux"
import { FILTER_SELECTED, NO_FILTER_SELECTED } from "./actions"

const selectedAction = {
  type: "FILTER_SELECTED", payload: true
}
const noSelectedAction = {
  type: "NO_FILTER_SELECTED", payload: false
}


const reduser = (state, action) =>{
  switch (action.type) {
    case FILTER_SELECTED:
      return {...state, selectedFiltrer: action.payload}

    case NO_FILTER_SELECTED:
      return {...state, selectedFiltrer: action.payload}

    default:
      return state;
  }

}




export const store = createStoreHook (reduser)