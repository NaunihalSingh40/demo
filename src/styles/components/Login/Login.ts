import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../theme/color";
import { TextField, FormControl, Button } from "@mui/material";

// Define the interface for the props to be passed to styled components
interface WrapperProps {
  $isDarkMode: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.$isDarkMode ? darkTheme.background : lightTheme.background};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

interface CustomTextFieldProps {
  $isDarkMode: boolean;
}

export const CustomTextField = styled(TextField)<CustomTextFieldProps>`
  & .MuiOutlinedInput-root {
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};
    color: ${(props) =>
      props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};

    & fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.border : lightTheme.border};
    }

    &:hover fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
    }
  }
`;

interface CustomFormControlProps {
  $isDarkMode: boolean;
}

export const CustomFormControl = styled(FormControl)<CustomFormControlProps>`
  margin-top: 10px;
  background-color: ${(props) =>
    props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  & .MuiOutlinedInput-root {
    color: ${(props) =>
      props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.cardBackground : lightTheme.cardBackground};

    & fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.border : lightTheme.border};
    }

    &:hover fieldset {
      border-color: ${(props) =>
        props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
    }
  }
`;

interface CustomButtonProps {
  $isDarkMode: boolean;
}

export const CustomButton = styled(Button)<CustomButtonProps>`
  margin-top: 16px;
  background-color: ${(props) =>
    props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
  color: ${(props) =>
    props.$isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  
  &:hover {
    background-color: ${(props) =>
      props.$isDarkMode ? darkTheme.accent : lightTheme.accent};
  }
`;
