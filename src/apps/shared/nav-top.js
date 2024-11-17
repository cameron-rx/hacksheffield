import LoginButton from "../accounts/login";
import LogoutButton from "../accounts/logout";
import Profile from "../accounts/profile";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";


// import Habits from "./apps/habits/habitsPage";
import './nav-top.css';


function ShowAuthenticatedUserData() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

    return isAuthenticated && ((
        
        <div className="profile-container d-flex align-items-center justify-content-center">
            <img className="img-fluid rounded-circle border border-3 me-2" src={user.picture}></img>
            
            <LogoutButton/>
        </div>
    ));
}

function ShowLoginData() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    return !isAuthenticated && ((
        <div className="profile-container">
            <LoginButton/>
        </div>
    ));
}


export function TopNavigation() {
    const [isLoading, setIsLoading] = useState(true);  // Initially loading
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated authentication status
  
    useEffect(() => {
      // Simulate a delay (e.g., checking authentication status or fetching data)
      const timer = setTimeout(() => {
        setIsLoading(false); // After the delay, stop loading
        setIsAuthenticated(false); // Simulate unauthenticated user, set to true for authenticated
      }, 2000); // 2-second delay
  
      // Cleanup the timeout when the component unmounts
      return () => clearTimeout(timer);
    }, []);
  
    // If still loading, show the loading text
    if (isLoading) {
      return (
        <div className="top-navigation d-flex justify-content-between align-items-center p-4">
          <p className="title m-0">HABIT TRACKER</p>
          <p>Loading...</p> {/* Loading text is shown */}
        </div>
      );
    }
  
    console.log("Finished loading, isAuthenticated:", isAuthenticated);
    // After the delay (when isLoading is false), display the actual content
    return (
      <div className="top-navigation d-flex justify-content-between align-items-center p-4">
        <p className="title-nav m-0">HABIT TRACKER</p>
        {/* Show authenticated user data or login data based on authentication status */}
        <ShowAuthenticatedUserData />
        <ShowLoginData />
      </div>
    );
  }
