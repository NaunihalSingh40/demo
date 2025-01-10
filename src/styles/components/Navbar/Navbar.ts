import styled from "styled-components";
import { colors } from "./data";

export const NavbarContainer = styled.div`
  background-color: ${colors.background};
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavBrand = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    color: ${colors.textHover};
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.textPrimary};
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.textHover};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NavToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${colors.textPrimary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
