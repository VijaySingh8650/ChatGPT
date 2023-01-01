import axios from "axios";
import { chatData_Error, chatData_Loading, chatData_Success } from "./chatdata.types";


export const postTheData = (data) => async (dispatch) => {
    dispatch({ type: chatData_Loading });
    try {
        let res = await axios.post(`http://localhost:8000`, { data });
        console.log(res.data);
        dispatch({ type: chatData_Success, payload: res.data.data});
    }
    catch (err) {
        dispatch({ type: chatData_Error });
    }
}