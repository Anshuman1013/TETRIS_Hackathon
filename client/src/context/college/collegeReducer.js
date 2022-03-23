import * as collegeTypes from './types'

const collegeReducer = (state, action) => {
    switch (action.type) {
        case collegeTypes.REGISTER_SUCCESS:
        case collegeTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
            }
        case collegeTypes.REGISTER_FAIL:
        case collegeTypes.LOGIN_FAIL:
        case collegeTypes.AUTH_ERROR:
        case collegeTypes.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                college: null,
                error: action.payload,
            }
        case collegeTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        case collegeTypes.USER_LOADED:
            return {
                ...state,
                isAuth: true,
                loading: false,
                college: action.payload,
            }
        case collegeTypes.ADD_PLACEMENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case collegeTypes.GET_PLACEMENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                placement: action.payload,
            }
        case collegeTypes.ADD_PLACEMENT_DETAILS_FAIL:
        case collegeTypes.GET_PLACEMENT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                placement: null,
                error: action.payload,
            }
        default:
            throw new Error(`Unsupported type of: ${action.type}`)
    }
}

export default collegeReducer
