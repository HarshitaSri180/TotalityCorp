import React from 'react'
import {  Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const token = localStorage.getItem("token")  || null;
    console.log(token , "token");


    if(token !== null) {
        return (
            <div>{children}</div>
          )
    } else {
       return <Navigate to="/signin" />
    }
 
}

export default PrivateRoutes