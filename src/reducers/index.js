
import { combineReducers } from "redux";
import kimlikdogrulamaReducers from "./KimlikdogrulamaReducers";
import StudentListReducer from "./StudentCreateReducer";
import StudentDataReducer from "./StudentDataReducer";
 
export default combineReducers({
    kimlikdogrulamaResponse: kimlikdogrulamaReducers,
    studentListResponse: StudentListReducer,
    StudentDataResponse: StudentDataReducer

});