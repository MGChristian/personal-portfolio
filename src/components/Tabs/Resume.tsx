import type { PopUpInterface } from "../../types/PopUpInterface";
import SignBoard from "../SignBoard";
import { pdfjs, Document, Page } from "react-pdf";
import myResume from "/cv-gutierrez.pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useCallback, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

interface ResumeProps extends PopUpInterface {}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const maxWidth = 1000;

function Resume({ onClose, coordinates, setCoordinates }: ResumeProps) {
  const [loading, setLoading] = useState(true);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);
  useResizeObserver(containerRef, {}, onResize);

  function onDocumentLoadSuccess(): void {
    setLoading(false);
  }

  useGSAP(() => {
    const split = new SplitText(".loading", { type: "chars" });
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power2.out",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });
  });
  return (
    <SignBoard
      title="resume.pdf"
      className="h-148 w-4xl overflow-x-hidden overflow-y-auto"
      onClose={onClose}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
    >
      <div
        ref={setContainerRef}
        className="relative flex h-full w-full flex-col gap-4"
      >
        {loading ? (
          <div className="absolute flex h-full w-full items-center justify-center bg-white">
            <p className="loading text-4xl">Loading...</p>
          </div>
        ) : (
          <a
            href={myResume}
            download
            className="fixed right-8 bottom-8 z-10 w-fit cursor-pointer rounded-md border-2 border-stone-800 bg-teal-400 px-4 py-2"
          >
            Download
          </a>
        )}
        <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={1}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
          />
        </Document>
      </div>
    </SignBoard>
  );
}

export default Resume;
