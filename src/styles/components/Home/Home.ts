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


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  text-align: left;
`;

export const TableHead = styled.thead`
  background-color: #f4f4f4;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-weight: bold;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
