import styled from "styled-components";
import { colors, sizes } from "./data";

export const AboutContainer = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 40px 20px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${sizes.sectionWidth};
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: white;

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

export const ProfileImage = styled.img`
  width: ${sizes.profileImageSize};
  height: ${sizes.profileImageSize};
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${colors.accent};
`;

export const Section = styled.div`
  width: ${sizes.sectionWidth};
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: ${colors.textPrimary};
    margin-bottom: 15px;
    border-left: 5px solid ${colors.accent};
    padding-left: 10px;
  }
`;

export const Card = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: ${colors.primary};
  }

  p {
    font-size: 1.1rem;
    color: ${colors.textSecondary};
    line-height: 1.5;
  }
`;

export const SkillsList = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 1.4rem;
    color: ${colors.primary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${colors.textSecondary};
    margin-left: 20px;
    line-height: 1.5;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: ${colors.accent};
  margin: 15px 0;
`;

