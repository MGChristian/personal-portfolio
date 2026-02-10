import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

import PopOnSfx from "../assets/sounds/pop-on-sfx.mp3";
import PopOffSfx from "../assets/sounds/pop-off-sfx.mp3";
import useSound from "use-sound";
gsap.registerPlugin(useGSAP);

interface PhotoViewerProps {
  image: string;
  onClose: () => void;
}

function PhotoViewer({ image, onClose }: PhotoViewerProps) {
  const [playOn] = useSound(PopOnSfx);
  const [playOff] = useSound(PopOffSfx);
  const projectPhoto = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.from(projectPhoto.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "back.out",
    });
  });

  useEffect(() => {
    playOn();

    return () => {
      playOff();
    };
  }, [playOn, playOff]);
  return (
    <>
      {image &&
        createPortal(
          <div
            className="fixed top-0 left-0 z-50 flex h-dvh w-dvw items-center justify-center bg-black/60"
            onClick={onClose}
          >
            <img
              ref={projectPhoto}
              src={image}
              alt="Photo"
              className="max-h-[calc(80vh)] max-w-[calc(80vw)] rounded-lg object-contain"
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default PhotoViewer;
