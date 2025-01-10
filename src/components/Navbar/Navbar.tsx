import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  Nav,
  NavBrand,
  NavList,
  NavItem,
  NavLink,
  NavToggle,
} from "../../styles/components/Navbar/Navbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup, Switch } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../redux/modeSlice";
import { RootState } from "../../store"; // Adjusted to match store.ts

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Accessing the theme state from Redux
  const theme = useSelector((state: RootState) => state.theme.value);
  console.log(theme);

  return (
    <NavbarContainer>
      <Nav>
        <NavBrand>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img alt="logo" src="/logorm.png" height={70} width={70} />
          </Link>
        </NavBrand>
        <NavToggle onClick={() => setMenuOpen(!menuOpen)}>&#9776;</NavToggle>
        <NavList
          style={{
            display: menuOpen ? "flex" : undefined, // Use undefined instead of ""
            flexDirection: menuOpen ? "column" : undefined, // Use undefined here too
          }}
        >
          <NavItem>
            <NavLink as={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/About">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/Form">
              Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/Login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/Signup">
              Signup
            </NavLink>
          </NavItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={theme}
                  onChange={() => dispatch(toggleMode())}
                />
              }
              label="Dark Mode"
              sx={{
                color: theme ? "white" : "#2C3E50",
                fontWeight: "bolder",
                textTransform: "uppercase",
                fontSize: "1.5rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#E74C3C", // Bright Red on Hover
                },
                marginLeft: "20px",
              }}
            />
          </FormGroup>
        </NavList>
      </Nav>
    </NavbarContainer>
  );
};
