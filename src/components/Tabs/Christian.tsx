import { useState } from "react";
import ButtonLink from "../ButtonLink";
import SignBoard from "../SignBoard";
import About from "./About";
import Works from "./Works";
import AboutIcon from "../../assets/icons/about-icon.svg?react";
import ContactIcon from "../../assets/icons/contact-icon.svg?react";
import ResumeIcon from "../../assets/icons/resume-icon.svg?react";
import WorksIcon from "../../assets/icons/works-icon.svg?react";
import Resume from "./Resume";
import Contacts from "./Contacts";

function Christian() {
  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  const [coordinates, setCoordinates] = useState({
    about: { x: -60, y: 40 },
    works: { x: -60, y: 40 },
    resume: { x: -20, y: 20 },
    contacts: { x: 0, y: 0 },
  });

  function toggleTab(tab: string) {
    setActiveTabs((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab],
    );
  }

  function updateCoordinates(tab: string): (x: number, y: number) => void {
    return (x: number, y: number) => {
      setCoordinates((prev) => ({
        ...prev,
        [tab]: { x, y },
      }));
    };
  }
  return (
    <>
      <SignBoard
        title="christian.exe"
        className="h-112 w-2xl"
        isDraggable={false}
        isPopup={false}
      >
        <div className="flex h-full flex-col p-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
            <h1 className="rounded-md text-center text-5xl md:text-6xl lg:text-7xl">
              yo!, i'm <span className="text-rose-500">chris</span>
            </h1>
            <p className="rounded-md bg-gray-200 px-4 py-2 text-lg md:text-xl lg:text-2xl">
              a passionate web developer
            </p>
          </div>
          <div className="grid h-fit grid-cols-2 justify-between gap-4 p-4 md:grid-cols-4">
            <ButtonLink
              icon={AboutIcon}
              text="about"
              onClick={() => toggleTab("about")}
            />
            <ButtonLink
              icon={ResumeIcon}
              text="resume"
              onClick={() => toggleTab("resume")}
            />
            <ButtonLink
              icon={WorksIcon}
              text="works"
              onClick={() => toggleTab("works")}
            />
            <ButtonLink
              icon={ContactIcon}
              text="contacts"
              onClick={() => toggleTab("contacts")}
            />
          </div>
        </div>
      </SignBoard>
      {activeTabs.includes("about") && (
        <About
          onClose={() => toggleTab("about")}
          coordinates={coordinates.about}
          setCoordinates={updateCoordinates("about")}
        />
      )}
      {activeTabs.includes("resume") && (
        <Resume
          onClose={() => toggleTab("resume")}
          coordinates={coordinates.resume}
          setCoordinates={updateCoordinates("resume")}
        />
      )}
      {activeTabs.includes("works") && (
        <Works
          onClose={() => toggleTab("works")}
          coordinates={coordinates.works}
          setCoordinates={updateCoordinates("works")}
        />
      )}
      {activeTabs.includes("contacts") && (
        <Contacts
          onClose={() => toggleTab("contacts")}
          coordinates={coordinates.contacts}
          setCoordinates={updateCoordinates("contacts")}
        />
      )}
    </>
  );
}

export default Christian;
