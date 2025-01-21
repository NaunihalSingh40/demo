import { useEffect } from "react";
import { introduction, skills } from "./data";
import {
  AboutContainer,
  Header,
  ProfileImage,
  Section,
  Card,
  SkillsList,
  Divider,
  AnimatedTitle,
  Text,
  TextTop,
  TextBottom,
} from "../../styles/components/About";
import { useSelector } from "react-redux";
import { Navbar } from "components/Navbar";

interface aboutProps {}

export const About: React.FC<aboutProps> = () => {
  const theme = useSelector(
    (state: { theme: { value: boolean } }) => state.theme.value
  );
  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <Navbar>
      <AboutContainer isDarkMode={theme}>
        <Header isDarkMode={theme}>
          <AnimatedTitle>
            <TextTop isDarkMode={theme}>
              <Text>
                <span>Naunihal Singh</span>
              </Text>
            </TextTop>
            <TextBottom isDarkMode={theme}>
              <Text>Software Developer</Text>
            </TextBottom>
          </AnimatedTitle>
          <ProfileImage
            isDarkMode={theme}
            alt="Profile pic"
            src="/profile.jpeg"
          />
        </Header>

        <Section isDarkMode={theme}>
          <h1>Introducing Myself</h1>
          <Divider isDarkMode={theme} />
          {introduction.map((item, index) => (
            <Card isDarkMode={theme} key={index}>
              <h1>{item.heading}</h1>
              <p>{item.description}</p>
            </Card>
          ))}
        </Section>

        <Section isDarkMode={theme}>
          <h1>Skills Adapted</h1>
          <Divider isDarkMode={theme} />
          {skills.map((item, index) => (
            <SkillsList isDarkMode={theme} key={index}>
              <h1>{item.category}</h1>
              {item.items.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </SkillsList>
          ))}
        </Section>
      </AboutContainer>
    </Navbar>
  );
};
