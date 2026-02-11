import type { PopUpInterface } from "../../types/PopUpInterface";
import ProjectItem from "../ProjectItem";
import SignBoard from "../SignBoard";
import { useState } from "react";
import PhotoViewer from "../PhotoViewer";
import { development, projects, tools } from "../../constants/works";

interface WorksProps extends PopUpInterface {}

function Works({ onClose, coordinates, setCoordinates }: WorksProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
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
