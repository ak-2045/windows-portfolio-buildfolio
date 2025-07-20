// all dope :)
"use client"

import { useState } from "react"
import { FileText, Download, Printer, ZoomIn, ZoomOut, RotateCw, Search, Menu } from "lucide-react"
import { jsPDF } from "jspdf";

const resumes = [
  {
    id: "akmal-hossain-resume",
    name: "Akmal Hossain",
    filename: "akmal_hossain_resume.pdf",
    imageUrl: "/resume1.jpg", 
    fileSize: "675 KB",
    lastModified: "Jun 20, 2025"
  },
  {
    id: "ram-kumar-resume", 
    name: "Ram Kumar",
    filename: "ram_kumar_resume.pdf",
    imageUrl: "/resume2.jpg", 
    fileSize: "2085 KB",
    lastModified: "Jun 20, 2025"
  },
  {
    id: "navaneeth-p-resume",
    name: "Navaneeth P", 
    filename: "navaneeth_p_resume.pdf",
    imageUrl: "/resume3.jpg", 
    fileSize: "855 KB",
    lastModified: "Jun 20, 2025"
  }
];

export default function AdobeAcrobat() {
  const [selectedResume, setSelectedResume] = useState(resumes[0])
  const [zoomLevel, setZoomLevel] = useState(100)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50))
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

 const handleDownload = () => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = selectedResume.imageUrl;

  img.onload = () => {
    const pdf = new jsPDF({
      orientation: img.width > img.height ? 'l' : 'p',
      unit: 'pt',
      format: [img.width, img.height]
    });

    pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);
    pdf.save(selectedResume.filename.replace(/\.[^/.]+$/, ".pdf"));
  };

  img.onerror = () => {
    alert("Failed to load image for PDF conversion.");
  };
};

  const handlePrint = () => {
    window.print()
  }

  return (
  <div className="h-full bg-gray-100 flex flex-col">
    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white border rounded px-3 py-1">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search in document..."
              className="text-sm outline-none bg-transparent flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleZoomOut} className="p-2 hover:bg-gray-200 rounded">
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="px-3 py-1 bg-white border rounded text-sm min-w-16 text-center">
            {zoomLevel}%
          </div>
          <button onClick={handleZoomIn} className="p-2 hover:bg-gray-200 rounded">
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <button onClick={handleRotate} className="p-2 hover:bg-gray-200 rounded">
            <RotateCw className="w-4 h-4" />
          </button>
          <button onClick={handlePrint} className="p-2 hover:bg-gray-200 rounded">
            <Printer className="w-4 h-4" />
          </button>
          <button onClick={handleDownload} className="p-2 hover:bg-gray-200 rounded">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Resume Files</h3>
        </div>
        <div className="p-2">
          {resumes.map((resume) => (
            <button
              key={resume.id}
              onClick={() => {
                setSelectedResume(resume);
                setZoomLevel(100);
                setRotation(0);
              }}
              className={`w-full p-3 rounded-lg text-left transition-colors mb-2 ${
                selectedResume.id === resume.id
                  ? "bg-blue-50 border-blue-200 border"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">{resume.name}</div>
                  <div className="text-xs text-gray-500 truncate">{resume.filename}</div>
                  <div className="text-xs text-gray-400">{resume.fileSize} • {resume.lastModified}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-gray-200 overflow-auto">
        <div className="p-8 min-w-max">
          <div
            className="inline-block bg-white shadow-lg"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease'
            }}
          >
            <div
              style={{
                width: `${595 * zoomLevel / 100}px`,
                height: `${842 * zoomLevel / 100}px`,
                transition: 'width 0.2s ease, height 0.2s ease'
              }}
              className="bg-white border border-gray-300 flex items-center justify-center"
            >
              {selectedResume.imageUrl.includes('placeholder') ? (
                <div className="text-center text-gray-500 p-8">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">{selectedResume.name}'s Resume</h3>
                </div>
              ) : (
                <img
                  src={selectedResume.imageUrl}
                  alt={`${selectedResume.name} Resume`}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 text-xs text-gray-600 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span>Page 1 of 1</span>
        <span>•</span>
        <span>{selectedResume.fileSize}</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Ready</span>
        <span>•</span>
        <span>100% Complete</span>
      </div>
    </div>
  </div>
)
}