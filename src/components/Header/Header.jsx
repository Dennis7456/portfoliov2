import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  IconButton,
  useColorMode,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FiSun, FiMenu } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import "./header.css";
import profileImg from "../../media/IMG_20210105_181312.jpg";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
  _hover: {
    color: "#ff6247",
  },
};

const navLinks = [
  { name: "About Me", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Projects", url: "/projects" },
  { name: "Contact me", url: "/contact" },
];

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  return (
    <div>
      <Box w="100%" h="6px" bgGradient="linear(to-r, #ff6247, #000000)" />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        px={[0, "1.5rem", "1.5rem"]}
        marginLeft="auto"
        marginRight="auto"
        maxWidth="55rem"
        paddingTop="3rem"
        {...props}
      >
        <Flex
          align="center"
          mr={{ md: "5" }}
          width={["100%", "100", "auto"]}
          justifyContent={["space-between", "space-between", "flex-start"]}
        >
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Box
              w="110px"
              h="110px"
              borderRadius="full"
              bgGradient="linear(to-r, #ff6247, #000000)"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                name="Dennis Ngetich Kiplangat"
                size="xl"
                src={profileImg}
              />
            </Box>
          </Heading>

          <HStack spacing={2}>
            <Box display={{ sm: "block", md: "none" }}>
              <IconButton
                aria-label="Color Mode"
                icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
                onClick={toggleColorMode}
                size="lg"
                isRound={true}
                {...iconProps}
              />
            </Box>
            <Box
              cursor="pointer"
              display={{ sm: "block", md: "none" }}
              onClick={handleToggle}
            >
              <FiMenu
                fontSize="2.5rem"
                color={colorMode === "light" ? "#000" : "#fff"}
              />
            </Box>
          </HStack>
        </Flex>

        <Box
          display={[show ? "flex" : "none", show ? "flex" : "none", "flex"]}
          width={["100%", "100%", "auto"]}
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          flexGrow={1}
        >
          {navLinks.map((link, index) => {
            return (
              <Link
                as={RouterLink}
                key={index}
                to={link.url}
                w={["100%", "100%", "auto"]}
                borderRadius={["5px", "5px", "5px"]}
                mr={["0", "0", "3"]}
                mt={["2", "2", "0"]}
                padding={["0.7rem", "0.7rem", "0.4rem"]}
                display={["block", "block", "auto"]}
                _visited={{ outline: "none" }}
                _hover={{
                  background: "#ff6247",
                  color: "#fff",
                }}
                // className={
                //   location.pathname === link.url ? "active" : undefined
                // }
                className={"active"}
                //onClick={() => setShow(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </Box>

        <Box
          mt={[3, 3, 0]}
          display={["none", "none", "block"]}
          position={{ sm: "absolute", md: "unset" }}
          top="3.5rem"
          right="5.5rem"
        >
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Header;
