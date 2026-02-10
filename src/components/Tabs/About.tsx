import type { PopUpInterface } from "../../types/PopUpInterface";
import SignBoard from "../SignBoard";
import Profile from "../../assets/about/Profile.jpg";
import HorizontalLine from "../HorizontalLine";

interface AboutProps extends PopUpInterface {}

function About({ onClose, coordinates, setCoordinates }: AboutProps) {
  return (
    <SignBoard
      title="about.txt"
      className="h-136 w-3xl overflow-y-scroll"
      onClose={onClose}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
    >
      <div className="flex flex-col gap-6 px-6 py-8 text-lg">
        <div className="flex items-center gap-8">
          <img
            src={Profile}
            alt="profile"
            className="h-50 w-50 rounded-full border-3 border-stone-800"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-rose-500 md:text-4xl">
              Christian M. Gutierrez
            </h1>
            <p>BSIT Student • Web Developer • Illustrator</p>
          </div>
        </div>
        <HorizontalLine />
        <div className="flex flex-col gap-4">
          <p className="text-2xl">hello! i'm christian, i...</p>
          <ul className="list-inside list-disc">
            <li>create web applications</li>
            <li>illustrate digital art</li>
            <li>edit videos and photos</li>
          </ul>
        </div>
        <p className="text-2xl">Education</p>
        <ul className="flex list-inside flex-col gap-4">
          <li className="border-l-4 border-gray-300 px-4">
            College
            <p className="text-base text-gray-600">
              Cavite State University - Imus Campus
            </p>
            <p className="text-base text-gray-600">
              BS in Information Technology (2022 - present)
            </p>
          </li>

          <li className="border-l-4 border-gray-300 px-4">
            Senior High School
            <p className="text-base text-gray-600">
              Theresian School of Cavite
            </p>
            <p className="text-base text-gray-600">
              Academic Track: ICT (2019 - 2021)
            </p>
          </li>
        </ul>
      </div>
    </SignBoard>
  );
}

export default About;
