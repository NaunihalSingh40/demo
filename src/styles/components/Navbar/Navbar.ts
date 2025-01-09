import styled from "styled-components";
import { lightTheme, darkTheme } from "theme/color";

export const Wrapper = styled.div`
  transition: background-color 0.3s, color 0.3s;
  background-color: ${darkTheme.background};
  height: calc(100vh - 60px); // Subtracting NavBar height from the full height
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box; // Ensures padding doesn't overflow the container
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px; // To push content below the fixed navbar
`;

export const NavWrapper = styled.nav`
  background-color: ${darkTheme.background};
  height: 60px; // Fixed height for the navbar
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: ${darkTheme.textPrimary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; // Ensures the navbar stays on top of the content
`;

export const NavList = styled.ul``;

export const NavItem = styled.li``;
