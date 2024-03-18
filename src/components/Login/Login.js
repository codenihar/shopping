import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {isAuthenticated,loginWithRedirect} = useAuth0();
  const navigate = useNavigate();
  if(!isAuthenticated){
    return(
      <button onClick={()=>loginWithRedirect()}>Login</button>
    )
  }
  else{
    navigate("/");
  }
};

export default Login;
