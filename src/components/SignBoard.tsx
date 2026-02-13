import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

import PopOnSfx from "../assets/sounds/pop-on-sfx.mp3";
import PopOffSfx from "../assets/sounds/pop-off-sfx.mp3";

gsap.registerPlugin(useGSAP, Draggable);

interface SignBoardProps {
  title: string;
  children: React.ReactNode;
  coordinates: { x: number; y: number };
  setCoordinates: (x: number, y: number) => void;
  width?: string;
  height?: string;
  className?: string;
  isDraggable?: boolean;
  isPopup?: boolean;
  onClose?: () => void;
}

function SignBoard({
  title,
  children,
  className = "",
  coordinates,
  setCoordinates,
  isDraggable = true,
  isPopup = true,
  onClose,
  width,
  height,
}: SignBoardProps) {
  const Main = useRef<HTMLDivElement>(null);
  const [playOn] = useSound(PopOnSfx);
  const [playOff] = useSound(PopOffSfx);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [prevCoordinates, setPrevCoordinates] = useState(coordinates);

  useGSAP(() => {
    if (isDraggable) {
      Draggable.create(Main.current, {
        cursor: "default",
        type: "x,y",
        edgeResistance: 1,
        bounds: "body",
        onDragEnd: function () {
          setCoordinates(this.x, this.y);
        },
      });
      gsap.set(Main.current, {
        x: coordinates?.x || 0,
        y: coordinates?.y || 0,
      });
    }
    if (isPopup) {
      gsap.from(Main.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "back.out",
      });
    }
  });

  useEffect(() => {
    if (isPopup) playOn();

    return () => {
      if (isPopup) playOff();
    };
  }, [isPopup, playOn, playOff]);

  function handleFullScreen() {
    const fullscreen = isFullscreen; //false at initialization
    setIsFullscreen(!fullscreen);
    if (!fullscreen) {
      setPrevCoordinates(coordinates);
      setCoordinates(0, 0);
      gsap.set(Main.current, { x: 0, y: 0 });
    } else {
      setCoordinates(prevCoordinates.x, prevCoordinates.y);
      gsap.set(Main.current, { x: prevCoordinates.x, y: prevCoordinates.y });
    }
  }

  return (
    <>
      <div
        ref={Main}
        className={`absolute z-10 h-screen max-h-screen w-screen max-w-screen md:h-auto md:w-auto`}
      >
        {/* MAIN BOARD */}
        <div
          className={`relative z-20 h-full w-full rounded-md border-3 border-stone-800 bg-white`}
        >
          {/* TITLE */}
          <div className="flex h-8 items-center justify-between border-b-2 border-stone-800 bg-cyan-800 px-4 text-lg text-white">
            <h1>{title}</h1>
            <div className="flex items-center gap-2">
              {onClose && (
                <>
                  <button
                    onClick={handleFullScreen}
                    className="flex items-center justify-center hover:cursor-pointer hover:text-rose-400"
                  >
                    [□]
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center hover:cursor-pointer hover:text-rose-400"
                  >
                    [x]
                  </button>
                </>
              )}
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div
            className={`${isFullscreen ? "h-full w-full" : `${width} ${height}`} ${className} flex max-h-full max-w-full flex-col overflow-y-auto`}
          >
            {children}
          </div>
        </div>

        {/* SHADOW */}
        <div
          className={`absolute top-0 left-0 -z-10 h-full w-full -translate-x-2 translate-y-2 rounded-md bg-stone-800/60`}
        />
      </div>
    </>
  );
}

export default SignBoard;
