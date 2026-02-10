import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { useEffect, useRef } from "react";
import useSound from "use-sound";

import PopOnSfx from "../assets/sounds/pop-on-sfx.mp3";
import PopOffSfx from "../assets/sounds/pop-off-sfx.mp3";

gsap.registerPlugin(useGSAP, Draggable);

interface SignBoardProps {
  title: string;
  children: React.ReactNode;
  coordinates?: { x: number; y: number };
  setCoordinates?: (x: number, y: number) => void;
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
}: SignBoardProps) {
  const Main = useRef<HTMLDivElement>(null);
  const [playOn] = useSound(PopOnSfx);
  const [playOff] = useSound(PopOffSfx);

  useGSAP(() => {
    if (isDraggable) {
      Draggable.create(Main.current, {
        cursor: "default",
        type: "x,y",
        edgeResistance: 1,
        bounds: "body",
        onDragEnd: function () {
          if (setCoordinates) setCoordinates(this.x, this.y);
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

  return (
    <>
      <div ref={Main} className={`absolute z-10 max-w-full`}>
        {/* MAIN BOARD */}
        <div
          className={`relative z-20 max-w-full rounded-md border-3 border-stone-800 bg-white`}
        >
          <div className="flex h-8 items-center justify-between border-b-2 border-stone-800 bg-cyan-800 px-4 text-lg text-white">
            <h1>{title}</h1>
            {onClose && (
              <p
                onClick={onClose}
                className="hover:cursor-pointer hover:text-rose-400"
              >
                [x]
              </p>
            )}
          </div>
          <div className={`${className} flex max-w-full flex-col`}>
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
