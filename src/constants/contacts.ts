import Email from "../assets/icons/envelope.svg?react";
import LinkedIn from "../assets/icons/linkedin.svg?react";
import GitHub from "../assets/icons/github.svg?react";

export const contacts = [
  {
    name: "Email",
    value: "gutierrezchristianm@gmail.com",
    href: "mailto:gutierrezchristian@gmail.com",
    className: "hover:text-sky-600  hover:border-sky-600 hover:fill-sky-600",
    icon: Email,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/christian-gutierrez-66057b35a",
    href: "https://www.linkedin.com/in/christian-gutierrez-66057b35a/",
    className: "hover:text-blue-600 hover:border-blue-600 hover:fill-blue-600",
    icon: LinkedIn,
  },
  {
    name: "GitHub",
    value: "github.com/mgchristian",
    href: "https://github.com/mgchristian",
    className: "hover:text-gray-600 hover:border-gray-600 hover:fill-gray-600",
    icon: GitHub,
  },
];
