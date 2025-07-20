// all clear :)
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Brush, Square, Circle, Eraser } from "lucide-react"

export default function MSPaint() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentTool, setCurrentTool] = useState("brush")
  const [currentColor, setCurrentColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(2)

  const overlayRef = useRef<HTMLCanvasElement | null>(null)

  const colors = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#C0C0C0",
    "#808080",
    "#FFA500",
    "#A52A2A",
    "#DDA0DD",
    "#98FB98",
    "#F0E68C",
    "#DEB887",
    "#5F9EA0",
    "#FF1493",
  ]
const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}, []);
const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  setIsDrawing(true);
  setStartPoint({ x, y });

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = currentColor;

  if (currentTool === "brush") {
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
};

const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
  if (!isDrawing || !startPoint) return;

  const canvas = canvasRef.current;
  const overlay = overlayRef.current;
  if (!canvas || !overlay) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const width = x - startPoint.x;
  const height = y - startPoint.y;

  const canvasCtx = canvas.getContext("2d");
  const overlayCtx = overlay.getContext("2d");

  if (!canvasCtx || !overlayCtx) return;

  if (currentTool === "brush") {
  canvasCtx.globalCompositeOperation = "source-over";
  canvasCtx.strokeStyle = currentColor;
  canvasCtx.lineTo(x, y);
  canvasCtx.stroke();
  canvasCtx.beginPath();
  canvasCtx.moveTo(x, y);

} else if (currentTool === "eraser") {
  canvasCtx.globalCompositeOperation = "source-over"; 
  canvasCtx.fillStyle = "white"; 
  canvasCtx.beginPath();
  canvasCtx.arc(x, y, brushSize, 0, 2 * Math.PI);
  canvasCtx.fill();


} else if (currentTool === "rectangle" || currentTool === "circle") {
  overlayCtx.globalCompositeOperation = "source-over"; 
  overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
  overlayCtx.lineWidth = brushSize;
  overlayCtx.strokeStyle = currentColor;

if (currentTool === "rectangle") {
    overlayCtx.strokeRect(startPoint.x, startPoint.y, width, height);
  } else if (currentTool === "circle") {
    overlayCtx.beginPath();
    const radius = Math.sqrt(width * width + height * height) / 2;
    const centerX = startPoint.x + width / 2;
    const centerY = startPoint.y + height / 2;
    overlayCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    overlayCtx.stroke();
    }
  }
};

const stopDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
  if (!isDrawing || !startPoint) return;
  setIsDrawing(false);

  const canvas = canvasRef.current;
  const overlay = overlayRef.current;
  if (!canvas || !overlay) return;

  const canvasCtx = canvas.getContext("2d");
  const overlayCtx = overlay.getContext("2d");
  if (!canvasCtx || !overlayCtx) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const width = x - startPoint.x;
  const height = y - startPoint.y;

  canvasCtx.lineWidth = brushSize;
  canvasCtx.strokeStyle = currentColor;

  canvasCtx.globalCompositeOperation = "source-over"; 
canvasCtx.strokeStyle = currentColor;
canvasCtx.lineWidth = brushSize;

if (currentTool === "rectangle") {
  canvasCtx.strokeRect(startPoint.x, startPoint.y, width, height);
} else if (currentTool === "circle") {
  canvasCtx.beginPath();
  const radius = Math.sqrt(width * width + height * height) / 2;
  const centerX = startPoint.x + width / 2;
  const centerY = startPoint.y + height / 2;
  canvasCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  canvasCtx.stroke();
}

  overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
  setStartPoint(null);
};

const clearCanvas = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const saveImage = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const link = document.createElement("a");
  link.download = "mspaint.png";
  link.href = canvas.toDataURL();
  link.click();

  alert("Your art has been saved!");
};
  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="bg-gray-200 border-b border-gray-400 px-2 py-1">
        <div className="flex gap-4 text-sm">
          <div className="relative group">
            <button className="px-2 py-1 hover:bg-blue-200 rounded">File</button>
            <div className="absolute top-full left-0 bg-white border border-gray-400 shadow-lg hidden group-hover:block z-10 min-w-32">
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">New</button>
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Open...</button>
              <button onClick={saveImage} className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">
                Save
              </button>
            </div>
          </div>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Edit</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">View</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Image</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Colors</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Help</button>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-13 bg-gray-200 border-r border-gray-400 p-2 justify-center">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setCurrentTool("brush")}
              className={`pl-7 p-1 border ${currentTool === "brush" ? "bg-blue-200 border-blue-400" : "bg-gray-100 border-gray-400"} hover:bg-blue-100 justify-center`}
              title="Brush"
            >
              <Brush className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentTool("eraser")}
              className={`pl-7 p-1 border ${currentTool === "eraser" ? "bg-blue-200 border-blue-400" : "bg-gray-100 border-gray-400"} hover:bg-blue-100`}
              title="Eraser"
            >
              <Eraser className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentTool("rectangle")}
              className={`pl-7 p-1 border ${currentTool === "rectangle" ? "bg-blue-200 border-blue-400" : "bg-gray-100 border-gray-400"} hover:bg-blue-100`}
              title="Rectangle"
            >
              <Square className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentTool("circle")}
              className={`pl-7 p-1 border ${currentTool === "circle" ? "bg-blue-200 border-blue-400" : "bg-gray-100 border-gray-400"} hover:bg-blue-100`}
              title="Circle"
            >
              <Circle className="w-4 h-4" />
            </button>
            <button
              onClick={clearCanvas}
              className="p-2 border bg-gray-100 border-gray-400 hover:bg-blue-100 col-span-2 text-xs"
              title="Clear All"
            >
              Clear
            </button>
          </div>

          <div className="mt-4">
            <label className="text-xs">Size:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-center">{brushSize}px</div>
          </div>
        </div>

        <div className="flex-1 p-4 bg-gray-300">
          <div className="bg-white border-0 shadow-inner">
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              className="cursor-crosshair absolute z-0 border"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={(e) => stopDrawing(e)}
            />
              <canvas
              ref={overlayRef}
              width={600}
              height={400}
              className="absolute z-10 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 border-t border-gray-400 p-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">Colors:</span>
          <div className="flex gap-1">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setCurrentColor(color)}
                className={`w-6 h-6 border-2 ${currentColor === color ? "border-black" : "border-gray-400"}`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}