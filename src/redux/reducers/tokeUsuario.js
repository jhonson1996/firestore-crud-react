import getUsuario from "../../componentes/GetUser";
import { type as actionType } from "../actions/setCurrentUser";
const defaultState = {
  Usuario: '',
};
let p = getUsuario()
function reducer(state = defaultState, { type,payload }) {
  console.log("holiiiiii0 " + p);
  switch (type) {
    case actionType: {
      return state;
    }

    default:
      return state;
  }
}

export default reducer;
