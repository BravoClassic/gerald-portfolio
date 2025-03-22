"use client";



interface HtmlViewerProps {
  htmlContent: string;
}

export function HtmlViewer({ htmlContent }: HtmlViewerProps) {



  return (
    <iframe
      title="HTML Viewer"
      src={htmlContent}
      className="p-6 w-full h-full border-none"
    ></iframe>
  );
}
