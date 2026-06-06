import React from "react"
import { useParams } from "@tanstack/react-router"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

const DocumentPage: React.FC = () => {
  const { slug, filename } = useParams({ strict: false })
  const pdfUrl = `/docs/projects/${slug}/${filename}`
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        border: "none",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={pdfUrl}
          theme="dark"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  )
}

export default DocumentPage
