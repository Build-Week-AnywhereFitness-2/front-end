import {
    FETCH_CLASS_START,
    FETCH_CLASS_SUCCESS,
    FETCH_CLASS_FAILURE,

    ATTEND_CLASS_START,
    ATTEND_CLASS_SUCCESS,
    ATTEND_CLASS_FAILURE,

    FETCH_MY_CLASSES_START,
    FETCH_MY_CLASSES_SUCCESS,
    FETCH_MY_CLASSES_FAILURE,

    FETCH_TRAINER_CLASS_START,
    FETCH_TRAINER_CLASS_SUCCESS, 
    FETCH_TRAINER_CLASS_FAILURE, 

    POST_TRAINER_CLASS_START,
    POST_TRAINER_CLASS_SUCCESS, 
    POST_TRAINER_CLASS_FAILURE, 

    PUT_TRAINER_CLASS_START,
    PUT_TRAINER_CLASS_SUCCESS,
    PUT_TRAINER_CLASS_FAILURE,

    DELETE_TRAINER_CLASS_START,
    DELETE_TRAINER_CLASS_SUCCESS,
    DELETE_TRAINER_CLASS_FAILURE


} from "../actions/index";


export const initialState = {
    classes: [],
    newClassData: [],
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
                classes: action.payload,
                fetching: false
            }

        case FETCH_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        case ATTEND_CLASS_START:
            return {
                ...state,
                fetching: true
            }

        case ATTEND_CLASS_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    classesAttending: [ ...state.user.classesAttending, action.payload ]
                },
                fetching: false
            }

        case ATTEND_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        case FETCH_MY_CLASSES_START:
            return {
                ...state,
                fetching: true
            }

        case FETCH_MY_CLASSES_SUCCESS:
            return {
                ...state,
                user: {...state.user, classesAttending: action.payload},
                fetching: false
            }

        case FETCH_MY_CLASSES_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }


        case FETCH_TRAINER_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_TRAINER_CLASS_SUCCESS:
            return {
                ...state,
                classes: action.payload,

                fetching: false
            }
        case FETCH_TRAINER_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case POST_TRAINER_CLASS_START:
            return {
                ...state,
                
                fetching: true
            }
        case POST_TRAINER_CLASS_SUCCESS:
            return {
                ...state,
                classes: [...state.classes, action.payload],
                user: {...state.user },
                fetching: false
            }
        case POST_TRAINER_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case PUT_TRAINER_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case PUT_TRAINER_CLASS_SUCCESS:

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
    
        case PUT_TRAINER_CLASS_FAILURE:
            return{
                ...state,
                error: action.payload,
                fetching: false
            }

        case DELETE_TRAINER_CLASS_START:
            return {
                ...state,
                fetching: true
            }
        case DELETE_TRAINER_CLASS_SUCCESS:
            const deleteFromClasses = state.classes.filter(cls => {
                if (cls.id !== action.payload){
                    return true;
                } else {
                    return false
                }
            })

            return {
                ...state,
                classes: [...deleteFromClasses],
                fetching: false
            }
        case DELETE_TRAINER_CLASS_FAILURE:
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