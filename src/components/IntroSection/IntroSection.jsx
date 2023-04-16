import React from "react";
import {
  Container,
  Stack,
  Heading,
  Text,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import kenyanFlag from "../../media/kenya_glossy_round_icon_256.png";
import "./introsection.css";

const IntroSection = () => {
  return (
    <Container maxW="7xl" p={["4", "8", "12"]}>
      <Stack as="main" mx="auto" marginTop="3rem">
        <Stack spacing={2} marginBottom={8}>
          {/* <Heading display="flex">
            Hi, I&apos;m <div className="red-text"> Dennis</div>
          </Heading> */}
          <Heading display="flex">
            Hi, I&apos;m
            <Text as="span" ml={1} className="red-text">
              Dennis
            </Text>
          </Heading>
          <Text fontSize="3xl">
            A <span className="red-text">Software Developer</span>
          </Text>
          <HStack alignItems="center">
            <Text fontSize="lg">
              I am a Full Stack developer, an open source lover and a writer
              from Kenya
            </Text>
            <Avatar
              d={["none", "block", "block"]}
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="Kenyan Flag"
              src={kenyanFlag}
            />
          </HStack>
          <Text fontSize="lg">
            As a Full Stack developer, open source enthusiast, and writer
            hailing from Kenya, this digital garden serves as my platform to
            share my experiences, learnings, and projects. With a passion for
            coding and an avid interest in open source technologies, I&lsquo;m
            constantly working on new projects and learning from them. In this
            digital garden, I document my journey as a developer, sharing
            insights, tips, and tricks I&lsquo;ve learned along the way. I also
            express my love for open source, highlighting the importance of
            contributing to the community and collaborating with fellow
            developers. As a writer, I use this space to share my thoughts,
            ideas, and experiences related to coding, technology, and other
            topics of interest. Through my writings, I aim to inspire and
            educate fellow developers, while also fostering a sense of community
            and collaboration among like-minded individuals. Whether it&lsquo;s
            showcasing my latest coding projects, discussing open source
            contributions, or sharing my thoughts on various subjects, this
            digital garden is my virtual space to connect with others and
            contribute to the tech community.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default IntroSection;
