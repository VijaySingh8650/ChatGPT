import { chatData_Error, chatData_Loading, chatData_Success } from "./chatdata.types"

const initialValue = {
    loading: false,
    error: false,
    result:""
}

export const chatDataReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case chatData_Loading: {
            return {
                ...state,
                loading:true
            }
        }
        case chatData_Error: {
            return {
                ...state,
                error: true,
                loading:false
            }
        }
        case chatData_Success: {
            return {
                loading: false,
                error: false,
                result:payload
            }
        }
        default: return state;
    }
}