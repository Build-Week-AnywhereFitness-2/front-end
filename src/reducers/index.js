import { 
    FETCH_CLASS_START,
    FETCH_CLASS_SUCCESS, 
    FETCH_CLASS_FAILURE, 

    POST_CLASS_START, 
    POST_CLASS_SUCCESS, 
    POST_CLASS_FAILURE, 

    PUT_CLASS_START,
    PUT_CLASS_SUCCESS,
    PUT_CLASS_FAILURE,

    DELETE_CLASS_START,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE

} from "../actions/index"

export const initialState = {
    classes: [
        {
        name: "",
        type:"",
        start:"",
        duration:"",
        intensity:"",
        location:"",
        registered: "",
        max: "",
        error:""
        }
    ],
    user: {},
    fetching: false,
    error: ""

}

export default function reducers(state = initialState, action){
    switch(action.type){
        case FETCH_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_CLASS_SUCCESS:
            return {
                ...state,
                classes: [...action.payload],
                fetching: false
            }
        case FETCH_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case POST_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case POST_CLASS_SUCCESS:
            return {
                ...state,
                classes: [...state.classes, action.payload],
                fetching: false
            }
        case POST_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case PUT_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case PUT_CLASS_SUCCESS:

            const newClassArray = state.classes.filter(cls => {
                if (cls.id === action.payload.id) {
                    return false;
                }else {
                    return true;
                }
            });
            return {
                ...state,
                classes: [...newClassArray, action.payload],
                fetching: false
            }
 
        case PUT_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case DELETE_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case DELETE_CLASS_SUCCESS:
            const deleteFromClasses = state.classes.filter(cls => {
                if (cls.id === action.payload.id){
                    return false;
                }else {
                    return true
                }
            })

            return {
                ...state,
                classes: [...deleteFromClasses],
                fetching: false
            }
        case DELETE_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return{
                ...state
            }
    }

}