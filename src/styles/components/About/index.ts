import styled, { keyframes } from "styled-components";
import { colors, sizes } from "./data";
import { darkTheme, lightTheme } from "theme/color";
interface WrapperProps {
  isDarkMode: boolean;
}

export const AboutContainer = styled.div<WrapperProps>`
  font-family: "Roboto", sans-serif;
  padding: 40px 20px;
  background-color: ${(props) =>
    props.isDarkMode ? darkTheme.background : lightTheme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column; /* Stacks AnimatedTitle and ProfileImage */
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${sizes.sectionWidth};
  margin-bottom: 30px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: white;

  @media (min-width: 768px) {
    flex-direction: row; /* Aligns side-by-side for larger screens */
    text-align: left;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    color: ${colors.secondary};
  }
`;


export const ProfileImage = styled.img<WrapperProps>`
  width: ${sizes.profileImageSize};
  height: ${sizes.profileImageSize};
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${colors.accent};
`;

export const Section = styled.div<WrapperProps>`
  width: ${sizes.sectionWidth};
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isDarkMode ? darkTheme.background : lightTheme.background};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: ${(props) =>
      props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
    margin-bottom: 15px;
    border-left: 5px solid ${colors.accent};
    padding-left: 10px;
  }
`;

export const Card = styled.div<WrapperProps>`
  margin-bottom: 20px;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: ${(props) =>
      props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
  }

  p {
    font-size: 1.1rem;
    color: ${(props) =>
      props.isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};
    line-height: 1.5;
  }
`;

export const SkillsList = styled.div<WrapperProps>`
  margin-bottom: 20px;

  h1 {
    font-size: 1.4rem;
    color: ${(props) =>
      props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${(props) =>
      props.isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};
    margin-left: 20px;
    line-height: 1.5;
  }
`;

export const Divider = styled.hr<WrapperProps>`
  border: none;
  height: 2px;
  background-color: ${colors.accent};
  margin: 15px 0;
`;

export const showTopText = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }`;

export const showBottomText = keyframes`
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }`;

  export const AnimatedTitle = styled.div`
  color: #222;
  font-family: 'Roboto', Arial, sans-serif;
  height: 20vmin; /* Smaller height */
  width: 20vmin;  /* Smaller width */
  position: relative;
  transform: none; /* Removes unnecessary translation */
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Adds spacing for mobile */
  }
`;

export const TextWrapper = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const TextTop = styled(TextWrapper)<WrapperProps>`
  border-bottom: 1vmin solid #000;
  top: 0;

  div {
    animation: ${showTopText} 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);

    span:first-child {
      color: ${(props) => props.isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary };
    }
  }
`;

export const TextBottom = styled(TextWrapper)<WrapperProps>`
  bottom: 0;

  div {
    animation: ${showBottomText} 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
    color: ${(props) => props.isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};
  }

`;

export const Text = styled.div`
  font-size: 3vmin;
  padding: 2vmin 0;
  position: absolute;

  span {
    display: block;
  }
`;
