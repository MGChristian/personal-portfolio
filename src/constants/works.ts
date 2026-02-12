import TruckRentalPH from "../assets/projects/truckrentalph.png";
import EventManagement from "../assets/projects/eventmanagement.png";
import Ayaka from "../assets/projects/genshin-art/ayaka.png";
import Ayato from "../assets/projects/genshin-art/ayato.png";
import Heizou from "../assets/projects/genshin-art/heizou.png";
import Kazuha from "../assets/projects/genshin-art/kazuha.png";
import Kuki from "../assets/projects/genshin-art/kuki.png";
import Xiao from "../assets/projects/genshin-art/xiao.png";
import Zhongli from "../assets/projects/genshin-art/zhongli.png";
import HildaOne from "../assets/projects/personal-art/hilda1.jpeg";
import HildaTwo from "../assets/projects/personal-art/hilda2.jpg";
import PersonalArt from "../assets/projects/personal-art/personal.png";
import drivewayPoster from "../assets/projects/posters/driveway-poster-1.jpg";
import drivewayPosterTwo from "../assets/projects/posters/driveway-poster-2.jpg";
import driveway from "../assets/projects/posters/driveway.jpg";
import bambooSMP from "../assets/projects/bamboo-smp/bamboo-smp-logo.png";
import bambooSMPMain from "../assets/projects/bamboo-smp/bamboo-smp_no_background.png";

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
    image: {
      src: TruckRentalPH,
      alt: "Screenshot of the Truck Rental Management System",
    },
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
    image: {
      src: EventManagement,
      alt: "Screenshot of the Event Management System",
    },
    liveLink: "",
    githubLink: "https://github.com/MGChristian/event-management-frontend",
    technologies: ["ReactJS", "NestJS", "MySQL", "TailwindCSS"],
  },
];

export const artworks = [
  {
    image: {
      src: Ayaka,
      alt: "Fanart of Ayaka from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Ayato,
      alt: "Fanart of Ayato from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Heizou,
      alt: "Fanart of Heizou from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Kazuha,
      alt: "Fanart of Kazuha from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Kuki,
      alt: "Fanart of Kuki from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Xiao,
      alt: "Fanart of Xiao from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: Zhongli,
      alt: "Fanart of Zhongli from Genshin Impact for Popsocket design",
    },
  },
  {
    image: {
      src: HildaOne,
      alt: "Fanart artwork of Hilda. https://facebook.com/izmehchristian",
    },
  },
  {
    image: {
      src: HildaTwo,
      alt: "Fanart artwork of Hilda. https://facebook.com/izmehchristian",
    },
  },
  {
    image: {
      src: PersonalArt,
      alt: "Personal artwork. https://facebook.com/izmehchristian",
    },
  },
];

export const posters = [
  {
    image: {
      src: drivewayPoster,
      alt: "Sample poster design for a driveway.",
    },
  },
  {
    image: {
      src: drivewayPosterTwo,
      alt: "Sample poster design for a driveway.",
    },
  },
  {
    image: {
      src: driveway,
      alt: "Sample poster design for a driveway.",
    },
  },

  {
    image: {
      src: bambooSMP,
      alt: "Logo design for Bamboo SMP, a Minecraft server.",
    },
  },
  {
    image: {
      src: bambooSMPMain,
      alt: "Main graphic design for Bamboo SMP, a Minecraft server.",
    },
  },
];
