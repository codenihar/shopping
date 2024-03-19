import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  } else {
    return (
      <div>
        <h1>Home Page</h1>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          LogOut
        </button>
      </div>
    );
  }
}

export default Home;
