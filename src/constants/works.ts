import TruckRentalPH from "../assets/projects/truckrentalph.png";
import EventManagement from "../assets/projects/eventmanagement.png";

export const development = [
  {
    name: "HTML",
    className: "bg-orange-400",
  },
  {
    name: "CSS",
    className: "bg-blue-400",
  },
  {
    name: "JavaScript",
    className: "bg-yellow-300",
  },
  {
    name: "TypeScript",
    className: "bg-sky-400",
  },
  {
    name: "React",
    className: "bg-sky-500",
  },
  {
    name: "Node.js",
    className: "bg-green-400",
  },
  {
    name: "PHP",
    className: "bg-purple-400 ",
  },
  {
    name: "Arduino",
    className: "bg-teal-400",
  },
  {
    name: "NestJS",
    className: "bg-red-400",
  },
  {
    name: "Express.js",
    className: "bg-gray-200",
  },
  {
    name: "MySQL",
    className: "bg-orange-300",
  },
  {
    name: "GitHub",
    className: "bg-stone-600 text-white",
  },
];

export const tools = [
  {
    name: "Visual Studio Code",
    className: "bg-blue-400 ",
  },
  {
    name: "Figma",
    className: "bg-pink-400 ",
  },
  {
    name: "Adobe Photoshop",
    className: "bg-blue-300  ",
  },
  {
    name: "Canva",
    className: "bg-violet-400 ",
  },
  {
    name: "Blender",
    className: "bg-orange-400 ",
  },
  {
    name: "Filmora",
    className: "bg-teal-200  ",
  },
  {
    name: "Clip Studio Paint",
    className: "bg-gray-200 ",
  },
];

export const projects = [
  {
    title: "Truck Rental Management System with 3D-Interactive Truck",
    description:
      "A web-based application designed to streamline the rental process for truck rental businesses. It allows users to browse available trucks, make reservations, and manage their rentals efficiently.",
    image: TruckRentalPH,
    liveLink: "https://truckrentalph.online",
    githubLink: "https://github.com/MGChristian/truckrental",
    technologies: [
      "ReactJS",
      "React Native",
      "ExpressJS",
      "MySQL",
      "TailwindCSS",
      "Godot",
      "Blender",
      "MQTT",
    ],
  },
  {
    title: "Event Management System",
    description:
      "Provides a complete solution for managing events, registrations, and attendance verification. Organizers can create and manage events, set capacity limits, and monitor attendee counts inreal time. Attendees can browse available events, register online, and receive aunique QR code ticket upon successful registration.",
    image: EventManagement,
    liveLink: "",
    githubLink: "https://github.com/MGChristian/event-management-frontend",
    technologies: ["ReactJS", "NestJS", "MySQL", "TailwindCSS"],
  },
];
