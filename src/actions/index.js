import axiosWithAuth from "../utils/axiosWithAuth"


export const FETCH_CLASS_START = "FETCH_CLASS_START"
export const FETCH_CLASS_SUCCESS = "FETCH_CLASS_SUCCESS"
export const FETCH_CLASS_FAILURE = "FETCH_CLASS_FAILURE"

export const ATTEND_CLASS_START = "ATTEND_CLASS_START"
export const ATTEND_CLASS_SUCCESS = "ATTEND_CLASS_SUCCESS"
export const ATTEND_CLASS_FAILURE = "ATTEND_CLASS_FAILURE"

export const FETCH_MY_CLASSES_START = "FETCH_MY_CLASSES_START"
export const FETCH_MY_CLASSES_SUCCESS = "FETCH_MY_CLASSES_SUCCESS"
export const FETCH_MY_CLASSES_FAILURE = "FETCH_MY_CLASSES_FAILURE"


// export const fetchUserData = () => dispatch => {
//     dispatch({ type: FETCH_USER_START });

//     axiosWithAuth().get('/api/auth/whoami')
//         .then(res => {
//             dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
//         })
//         .catch(err => {
//             dispatch({ type: FETCH_USER_FAILURE, payload: err.response.data.message });
//         })
// }

export const fetchClasses = () => dispatch => {
    dispatch({ type: FETCH_CLASS_START });

    axiosWithAuth().get('/api/classes')
        .then(res => {
            dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_CLASS_FAILURE, payload: err.res.data.message })
        })
}

export const attendClass = (user_id, class_id) => dispatch => {
    dispatch({ type: ATTEND_CLASS_START });

    axiosWithAuth().post(`/api/users/${user_id}/attend-class`, { class_id })
        .then(res => {
            axiosWithAuth().get(`/api/classes/${class_id}`)
                .then(res => {
                    console.log(res.data)
                    dispatch({ type: ATTEND_CLASS_SUCCESS, payload: res.data });
                })
        })
        .catch(err => {
            dispatch({ type: ATTEND_CLASS_FAILURE, payload: err.response.data.message })
        })
}

export const fetchMyClasses = (user_id) => dispatch => {
    dispatch({ type: FETCH_MY_CLASSES_START });

    axiosWithAuth().get(`/api/users/${user_id}/clients-classes`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_MY_CLASSES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_MY_CLASSES_FAILURE, payload: err.response.data.message })
        })
}