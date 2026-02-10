import type { PopUpInterface } from "../../types/PopUpInterface";
import SignBoard from "../SignBoard";
import { pdfjs, Document, Page } from "react-pdf";
import myResume from "/cv-gutierrez.pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useCallback, useState } from "react";

interface ResumeProps extends PopUpInterface {}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const maxWidth = 800;

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
  return (
    <SignBoard
      title="resume.pdf"
      className="h-148 w-2xl overflow-x-hidden overflow-y-auto"
      onClose={onClose}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
    >
      <div
        ref={setContainerRef}
        className="relative flex h-full w-full flex-col gap-4"
      >
        <a
          href={myResume}
          download
          className="fixed right-8 bottom-8 z-10 w-fit cursor-pointer rounded-md border-2 border-stone-800 bg-teal-400 px-4 py-2"
        >
          {loading ? "Loading..." : "Download"}
        </a>
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
