import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../../theme/color';

// Define the interface for props to pass 'isDarkMode'
interface WrapperProps {
  isDarkMode: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.isDarkMode ? darkTheme.background : lightTheme.background};
  color: ${(props) =>
    props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
`;
