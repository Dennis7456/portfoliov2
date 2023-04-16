import React from "react";
import {
  Container,
  Stack,
  Text,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

const SKILLS_LIST = [
  "Ruby, Ruby on Rails, Javascript, React, Python",
  "MySQL, PostgreSQL, Redis, HTML5",
  "Heroku, Amazon Web Services, Digital Ocean",
  "Software Architecture, Project Management",
  "Apache Server, GIT & Github, Unix, Bash",
  "C, Java, PHP, Javascript, ES6, TypeScript",
  "VueJS, React & Redux, Laravel, CSS3, Sass",
];

const Skills = () => {
  return (
    <Container maxW="7xl" p={["8", "12"]}>
      <Heading display="flex" py={[0, "1.5rem", "1.5rem"]}>
        My Skills
      </Heading>
      <Stack
        padding={4}
        borderLeft="4px solid"
        borderColor={"#ff6247"}
        _hover={{ shadow: "md" }}
        backgroundColor={useColorModeValue("gray.100", "gray.700")}
        rounded="md"
        fontWeight="bold"
        fontSize={["sm", "md", "lg"]}
      >
        {SKILLS_LIST.map((skills, index) => (
          <Text key={index}>{skills}</Text>
        ))}
      </Stack>
    </Container>
  );
};

export default Skills;
