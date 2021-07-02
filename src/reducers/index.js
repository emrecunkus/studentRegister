
import { combineReducers } from "redux";
import kimlikdogrulamaReducers from "./KimlikdogrulamaReducers";
import StudentListReducer from "./StudentListReducer";
 
export default combineReducers({
    kimlikdogrulamaResponse: kimlikdogrulamaReducers,
    studentListResponse: StudentListReducer

});