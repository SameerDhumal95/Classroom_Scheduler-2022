import {adminActionTypes} from '../constants/adminActionTypes'

export const adminLoginRequest=(user)=>{
        return{
            type:adminActionTypes.ADMIN_LOGIN_REQUEST,
            payload:user,
        }
    }

    export const adminLoginSuccess=(user)=>{
        return{
            type:adminActionTypes.ADMIN_LOGIN_SUCCESS,
            payload:user,
        }
    }

    