import React, { useEffect } from "react";
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

export const About = () => {
  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <AboutContainer>
      <Header>
        <div>
          <h1>Naunihal Singh</h1>
          <p>Software Developer</p>
        </div>
        <ProfileImage alt="Profile pic" src="/profile.jpeg" />
      </Header>

      <Section>
        <h1>Introducing Myself</h1>
        <Divider />
        {introduction.map((item, index) => (
          <Card key={index}>
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
          </Card>
        ))}
      </Section>

      <Section>
        <h1>Skills Adapted</h1>
        <Divider />
        {skills.map((item, index) => (
          <SkillsList key={index}>
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
