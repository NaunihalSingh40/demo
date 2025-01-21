import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginCredentials {
  Username: string;
  Password: string;
  Role: string;
}

export const ProductManager = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
  
  const loginCredentials: LoginCredentials | null = JSON.parse(
    window.localStorage.getItem("loginCredentials:") || "null"
  );

  useEffect(() => {
    document.title = "PM Page";

    // If role is not "Financer", redirect the user
    if (loginCredentials?.Role !== "Product Manager") {
      setIsAuthorized(false); // Set authorization status
      navigate("/Login"); // Redirect to login page
    }
  }, [loginCredentials, navigate]);

  if (!isAuthorized) {
    return null; // Prevent rendering anything while redirecting
  }

  return (
    <div>
      Welcome {loginCredentials?.Username} to {loginCredentials?.Role} Route.
    </div>
  );
};
