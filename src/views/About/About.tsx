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
} from "../../styles/components/About/About";
import { useSelector } from "react-redux";

interface aboutProps{}

export const About: React.FC<aboutProps> = () => {

  const theme = useSelector((state: { theme: { value: boolean } }) => state.theme.value);
  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <AboutContainer isDarkMode={theme}>
      <Header isDarkMode={theme}>
        <div>
          <h1>Naunihal Singh</h1>
          <p>Software Developer</p>
        </div>
        <ProfileImage isDarkMode={theme} alt="Profile pic" src="/profile.jpeg" />
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
        <Divider isDarkMode={theme}/>
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
  );
};
