import {
    FETCH_CLASS_START,
    FETCH_CLASS_SUCCESS,
    FETCH_CLASS_FAILURE,

    ATTEND_CLASS_START,
    ATTEND_CLASS_SUCCESS,
    ATTEND_CLASS_FAILURE,

    FETCH_MY_CLASSES_START,
    FETCH_MY_CLASSES_SUCCESS,
    FETCH_MY_CLASSES_FAILURE

} from "../actions/index";

export const initialState = {
    classes: [],
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

        default:
            return {
                ...state
            }
    }

}