
// 导入axios
import axios from "axios";


// 创建实例
const request = axios.create({
    baseURL:'http://gmall-h5-api.atguigu.cn/',
    timeout:10000
})

// 请求拦截器
request.interceptors.request.use(config=>{
    return config
})

// 相应拦截器
request.interceptors.response.use(
    (res)=>{
        return res.data
    },
    (error)=>{
        return new Promise(()=>{})
    }
)

export default request;