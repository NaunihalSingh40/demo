import React, { useEffect } from "react";
import { Wrapper } from "styles/components/Home/Home";
import { useSelector } from "react-redux";

// Define the shape of the login credentials object
interface LoginCredentials {
  Username: string;
  Password: string;
}

export const Home = () => {
  // Use `useSelector` to access the theme from the Redux store
  const theme = useSelector((state: { theme: { value: boolean } }) => state.theme.value);

  // Retrieve and parse login credentials from localStorage
  const loginCredentials: LoginCredentials | null = JSON.parse(window.localStorage.getItem("loginCredentials:") || "null");
  
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <Wrapper isDarkMode={theme}>
        <h1>
          Hello {loginCredentials?.Username}, your password breached: {loginCredentials?.Password}
        </h1>
      </Wrapper>
    </>
  );
};
