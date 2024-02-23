import React from 'react';
import { Navigate } from 'react-router-dom';

function Login(props) {
    const {auth}=props;
    if(auth.isAuth===true){
        return <Navigate to="/" replace={true}/>
    }else{
        return(
            <h1>Login Page</h1>
        )
    }
  
};

export default Login;
