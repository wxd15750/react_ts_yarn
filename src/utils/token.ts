
const saveToken = 'react-keys'

/**
 * @description 保存token
 * @param token 字符串
 * @returns 
 */
export const SET_TOKEN = (token:string) => {
    return localStorage.setItem(saveToken,token)
}

/**
 * @description 获取token
 */
export const GET_TOKEN = () => {
    localStorage.getItem(saveToken)
}

/**
 * @description 删除token
 */
export const REMOVE_TOKEN = () => {
    localStorage.removeItem(saveToken)
}

