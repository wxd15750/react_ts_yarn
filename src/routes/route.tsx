import {Navigate} from 'react-router-dom'

import Login from "@/pages/login"
import Home from "@/pages/home"
import NotFound from "@/pages/404"

const router = [
    {
        path:'/',
        element:<Navigate to="/home"></Navigate>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/*',
        element:<Navigate to="/404"></Navigate>
    },
    {
        path:'/404',
        element:<NotFound></NotFound>
    },
    
]

export default router