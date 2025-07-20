"use client"

import type React from "react"
import { type ReactNode, useRef, useEffect, useState } from "react"
import { useWindows } from "./window-context"
import { Minus, Square, X } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  children: ReactNode
  position: { x: number; y: number }
  size: { width: number; height: number }
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
}

export default function Window({ id, title, children, position, size, isMinimized, isMaximized, zIndex}: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition, updateWindowSize } =
    useWindows()
  const windowRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      focusWindow(id)
      setIsDragging(true)
      const rect = windowRef.current?.getBoundingClientRect()
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
  }

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y

        const constrainedX = Math.max(0, Math.min(newX, window.innerWidth - 200)) 
        const constrainedY = Math.max(0, Math.min(newY, window.innerHeight - 100)) 

        updateWindowPosition(id, {
          x: constrainedX,
          y: constrainedY,
        })
      }

      if (isResizing && !isMaximized) {
        const deltaX = e.clientX - resizeStart.x
        const deltaY = e.clientY - resizeStart.y

        const newWidth = Math.max(300, resizeStart.width + deltaX)
        const newHeight = Math.max(200, resizeStart.height + deltaY)

        updateWindowSize(id, {
          width: Math.min(newWidth, window.innerWidth - position.x),
          height: Math.min(newHeight, window.innerHeight - position.y - 40), 
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [
    isDragging,
    isResizing,
    dragOffset,
    resizeStart,
    id,
    isMaximized,
    updateWindowPosition,
    updateWindowSize,
    position,
  ])

  if (isMinimized) return null

  const windowStyle = isMaximized
    ? {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        zIndex,
      }
    : {
        position: "fixed" as const,
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      className="bg-gray-100 border border-gray-400 shadow-lg flex flex-col window-enter"
      onClick={() => focusWindow(id)}
    >
      <div
  className={`h-8 ${"bg-gradient-to-b from-blue-800 to-blue-900"} border-0 flex items-center justify-between px-1 cursor-move select-none`}
  onMouseDown={handleMouseDown}
>
        <span className="text-white font-medium text-sm">{title}</span>
        <div className="flex gap-1 ">
          <button
            onClick={() => minimizeWindow(id)}
            className="w-6 h-6 bg-gray-400 hover:bg-gray-200 border border-gray-400 flex items-center justify-center"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={() => maximizeWindow(id)}
            className="w-6 h-6 bg-gray-400 hover:bg-gray-200 border border-gray-400 flex items-center justify-center"
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            onClick={() => closeWindow(id)}
            className="w-6 h-6 bg-red-700 hover:bg-red-400 border border-gray-400 flex items-center justify-center"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative">
        {children}


        {!isMaximized && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-gray-300 border-l border-t border-gray-400"
            onMouseDown={handleResizeStart}
          >
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-gray-600"></div>
          </div>
        )}
      </div>
    </div>
  )
}
