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

export const FETCH_TRAINER_CLASS_START = "FETCH_TRAINER_CLASS_START"
export const FETCH_TRAINER_CLASS_SUCCESS = "FETCH_TRAINER_CLASS_SUCCESS"
export const FETCH_TRAINER_CLASS_FAILURE = "FETCH_TRAINER_CLASS_FAILURE"

export const POST_TRAINER_CLASS_START = "POST_TRAINER_CLASS_START"
export const POST_TRAINER_CLASS_SUCCESS = "POST_TRAINER_CLASS_SUCCESS"
export const POST_TRAINER_CLASS_FAILURE = "POST_TRAINER_CLASS_FAILURE"

export const PUT_TRAINER_CLASS_START = "PUT_TRAINER_CLASS_START"
export const PUT_TRAINER_CLASS_SUCCESS = "PUT_TRAINER_CLASS_SUCCESS"
export const PUT_TRAINER_CLASS_FAILURE = "PUT_TRAINER_CLASS_FAILURE"

export const DELETE_TRAINER_CLASS_START = "DELETE_TRAINER_CLASS_START"
export const DELETE_TRAINER_CLASS_SUCCESS = "DELETE_TRAINER_CLASS_SUCCESS"
export const DELETE_TRAINER_CLASS_FAILURE = "DELETE_TRAINER_CLASS_FAILURE"

export const DELETE_CLIENT_CLASS_START = "DELETE_CLIENT_CLASS_START"
export const DELETE_CLIENT_CLASS_SUCCESS = "DELETE_CLIENT_CLASS_SUCCESS"
export const DELETE_CLIENT_CLASS_FAILURE = "DELETE_CLIENT_CLASS_FAILURE"


export const getTrainerClasses = (user_id) => dispatch => {
    dispatch({ type: FETCH_TRAINER_CLASS_START });

    axiosWithAuth().get(`api/users/${user_id}/instructors-classes`)
        .then(res => {
            dispatch({ type: FETCH_TRAINER_CLASS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_TRAINER_CLASS_FAILURE, payload: err.response.data.message })
        })
}

export const postTrainerClasses = (cls) => (dispatch) => {
    dispatch({ type: POST_TRAINER_CLASS_START });

    axiosWithAuth().post('/api/classes', cls)
        .then(res => {
            dispatch({ type: POST_TRAINER_CLASS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: POST_TRAINER_CLASS_FAILURE, payload: err.response.data.message });
        });
};


export const putTrainerClasses = (cls, id) => dispatch => {

    dispatch ({ type: PUT_TRAINER_CLASS_START })

    axiosWithAuth().put(`/api/classes${id}`, {name: cls.name, type: cls.type, start_time: cls.start, durationHr: cls.duration, intensity_level: cls.intensity, location: cls.location, attendees_amt: cls.registered, max_class_size: cls.max})
        .then(res => {
            dispatch ({ type: PUT_TRAINER_CLASS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch ({ type: PUT_TRAINER_CLASS_FAILURE, payload: err.response.data.message })
        })
}

export const deleteTrainerClass = (id) => dispatch => {
    dispatch ({ type: DELETE_TRAINER_CLASS_START })

    axiosWithAuth().delete(`/api/classes/${id}`)
        .then(res => {
            dispatch({ type: DELETE_TRAINER_CLASS_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch ({ type: DELETE_TRAINER_CLASS_FAILURE, payload: err.response.data.message })
        })
}

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

export const attendClass = (user_id, cls) => dispatch => {
    dispatch({ type: ATTEND_CLASS_START });

    axiosWithAuth().post(`/api/users/${user_id}/attend-class`, { class_id: cls.id })
        .then(res => {
            dispatch({ type: ATTEND_CLASS_SUCCESS, payload: cls });
        })
        .catch(err => {
            dispatch({ type: ATTEND_CLASS_FAILURE, payload: err.response.data.message })
        })
}

export const fetchMyClasses = (user_id) => dispatch => {
    dispatch({ type: FETCH_MY_CLASSES_START });

    axiosWithAuth().get(`/api/users/${user_id}/clients-classes`)
        .then(res => {

            dispatch({ type: FETCH_MY_CLASSES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_MY_CLASSES_FAILURE, payload: err.response.data.message })
        })
}

export const deleteClientClass = (id) => dispatch => {
    dispatch ({ type: DELETE_CLIENT_CLASS_START })

    axiosWithAuth().delete(`/api/classes/${id}`)
        .then(res => {
            dispatch({ type: DELETE_CLIENT_CLASS_SUCCESS, payload: id })
        })
        .catch(err => {
            dispatch ({ type: DELETE_CLIENT_CLASS_FAILURE, payload: err.response.data.message })
        })
}