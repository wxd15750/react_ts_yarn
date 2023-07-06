// 导入封装的request
import request from "@/utils/request";

// 请求的类型
export interface DataType{
    token: string;
    username:string
    password:string
}

interface ResponseData{
    code: number
    message: string
    data: DataType
}

// 获取token
export const reqLogin = (data:DataType)=>{
    return request.post<any, ResponseData>('/admin/acl/index/login',data)
}