import type { PopUpInterface } from "../../types/PopUpInterface";
import ProjectItem from "../ProjectItem";
import SignBoard from "../SignBoard";
import TruckRentalPH from "../../assets/projects/truckrentalph.png";
import EventManagement from "../../assets/projects/eventmanagement.png";
import { useState } from "react";
import PhotoViewer from "../PhotoViewer";

interface WorksProps extends PopUpInterface {}

function Works({ onClose, coordinates, setCoordinates }: WorksProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const development = [
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
  const tools = [
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
  const projects = [
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
  return (
    <>
      {activeImage && (
        <PhotoViewer image={activeImage} onClose={() => setActiveImage(null)} />
      )}
      <SignBoard
        title="works.txt"
        className="h-148 w-3xl overflow-y-scroll"
        onClose={onClose}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      >
        <div className="flex flex-col gap-6 px-6 py-8 text-lg">
          <p className="text-2xl">Development</p>
          <ul className="flex list-inside flex-wrap gap-4">
            {development.map((item, index) => (
              <li
                key={index}
                className={`box-item rounded-md border-2 border-stone-800 px-4 py-2 text-sm duration-75 ease-in-out hover:-translate-y-1 ${item.className}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <p className="text-2xl">Tools</p>
          <ul className="flex list-inside flex-wrap gap-4">
            {tools.map((item, index) => (
              <li
                key={index}
                className={`box-item rounded-md border-2 border-stone-800 px-4 py-2 text-sm duration-75 ease-in-out hover:-translate-y-1 ${item.className}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <p className="text-2xl">Projects</p>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                {...project}
                onClick={() => setActiveImage(project.image)}
              />
            ))}
          </div>
        </div>
      </SignBoard>
    </>
  );
}

export default Works;
