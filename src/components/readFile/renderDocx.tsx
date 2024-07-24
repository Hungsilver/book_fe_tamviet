// components/DocxPreview.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { renderAsync } from "docx-preview";
import "./renderFile.css";

interface DocxPreviewProps {
  fileUrl: string;
}

const DocxPreview: React.FC<DocxPreviewProps> = ({
  fileUrl,
}: {
  fileUrl: string;
}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAndRenderDocx = async () => {
      try {
        const response = await fetch(`/doc/${fileUrl}.docx`);
        const blob = await response.blob();

        if (previewRef.current) {
          await renderAsync(blob, previewRef.current, undefined, {
            inWrapper: false,
            ignoreWidth: true,
          });
        }
      } catch (error) {
        console.error("Error fetching and rendering DOCX file:", error);
      }
    };

    fetchAndRenderDocx();
  }, [fileUrl]);

  return (
    <div className="flex justify-center overflow-y-auto h-auto sm:h-[830px] sm:w-auto w-fit render-docx">
      <div className="p-0" ref={previewRef}></div>
    </div>
  );
};

export default DocxPreview;
