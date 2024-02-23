import React from "react";
import { Navigate } from "react-router-dom";

function Home(props){
    const {auth}=props;
    if(auth.isAuth===true){
        return(
            <h1>Home Page</h1>
        )
    }
    else{
        return <Navigate to="/login" replace={true}/>
    }
}
export default Home