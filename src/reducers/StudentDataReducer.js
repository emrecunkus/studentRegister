
import { STUDENT_LIST_DATA_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
  
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_LIST_DATA_SUCCESS:
        console.log("burda mı:" + action)
            return action.payload;
       


        default:
            return state;

    }

}
