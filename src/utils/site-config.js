import React from "react";
import { FaGithub, FaDev, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `© ${new Date().getFullYear()} Templates Kart. All Rights Reserved.`,
  author: {
    name: "Dennis Ng'etich Kiplang'at",
    accounts: [
      {
        url: "https://github.com/Dennis7456",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://twitter.com/ulekip",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
      },
      {
        url: "https://dev.to/dennis7456",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />,
      },
      {
        url: "https://www.linkedin.com/in/dennis-kiplangat-403549176/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "mailto:denniskiplangat.dk@gmail.com",
        label: "Mail dennis",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
