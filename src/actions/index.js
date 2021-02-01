import axiosWithAuth from "../utils/axiosWithAuth"

export const FETCH_CLASS_START = "FETCH_CLASS_START"
export const FETCH_CLASS_SUCCESS = "FETCH_CLASS_SUCCESS"
export const FETCH_CLASS_FAILURE = "FETCH_CLASS_FAILURE"

export const POST_CLASS_START = "POST_CLASS_START"
export const POST_CLASS_SUCCESS = "POST_CLASS_SUCCESS"
export const POST_CLASS_FAILURE = "POST_CLASS_FAILURE"

export const PUT_CLASS_START = "PUT_CLASS_START"
export const PUT_CLASS_SUCCESS = "PUT_CLASS_SUCCESS"
export const PUT_CLASS_FAILURE = "PUT_CLASS_FAILURE"

export const DELETE_CLASS_START = "DELETE_CLASS_START"
export const DELETE_CLASS_SUCCESS = "DELETE_CLASS_SUCCESS"
export const DELETE_CLASS_FAILURE = "DELETE_CLASS_FAILURE"

export const getTrainerClasses = () => dispatch => {
    
    dispatch({ type: FETCH_CLASS_START })

    axiosWithAuth().get("/api/classes")
    .then(res => {

        dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: FETCH_CLASS_FAILURE, payload: err.response.data.message })
    })

}

export const postTrainerClasses = (cls, id) => dispatch => {

    dispatch ({ type: POST_CLASS_START })

    axiosWithAuth().post(`/api/classes/${id}`, {name: cls.name, type: cls.type, start_time: cls.start, durationHr: cls.duration, intensity_level: cls.intensity, location: cls.location, attendees_amt: cls.registered, max_class_size: cls.max})
    .then(res => {
        dispatch ({ type: POST_CLASS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: POST_CLASS_FAILURE, payload: err })
    })
}

export const putTrainerClasses = (cls, id) => dispatch => {

    dispatch ({ type: PUT_CLASS_START })

    axiosWithAuth().put(`/api/classes/${id}`, {name: cls.name, type: cls.type, start_time: cls.start, durationHr: cls.duration, intensity_level: cls.intensity, location: cls.location, attendees_amt: cls.registered, max_class_size: cls.max})
    .then(res => {
        dispatch ({ type: PUT_CLASS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: PUT_CLASS_FAILURE, payload: err.response.data.message })
    })
}

export const deleteTrainerClass = (id) => dispatch => {

    dispatch ({ type: DELETE_CLASS_START })

    axiosWithAuth().get(`/api/classes/${id}`)
    .then(res => {
        dispatch({ type: DELETE_CLASS_SUCCESS, payload: id })
    })
    .catch(err => {
        dispatch ({ type: DELETE_CLASS_FAILURE, payload: err.response.data.message })
    })
}

export const getClientClasses = () => dispatch => {
    
    dispatch({ type: FETCH_CLASS_START })

    axiosWithAuth().get("")
    .then(res => {

        dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: FETCH_CLASS_FAILURE, payload: err })
    })

}