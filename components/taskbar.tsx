//debugged :)
"use client"

import { useWindows } from "./window-context"
import StartMenu from "./start-menu";
import {
  ComputerIcon as Windows,
  Volume2,
  Wifi,
  Battery,
  Bell,
  Code,
  Globe,
  FileText,
  Palette,
  Terminal,
  Github,
} from "lucide-react"

interface TaskbarProps {
  onStartClick: () => void
  currentTime: Date
}

const getAppIcon = (windowId: string) => {
  switch (windowId) {
    case "vscode":
      return <Code className="w-4 h-4" />
    case "ie":
    case "ie-github":
      return <Globe className="w-4 h-4" />
    case "notepad":
      return <FileText className="w-4 h-4" />
    case "mspaint":
      return <Palette className="w-4 h-4" />
    case "cmd":
      return <Terminal className="w-4 h-4" />
    case "github":
      return <Github className="w-4 h-4" />
    default:
      return <Windows className="w-4 h-4" />
  }
}

export default function Taskbar({ onStartClick, currentTime }: TaskbarProps) {
  const { windows, focusWindow, minimizeWindow } = useWindows()

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-600 to-blue-800 border-t border-blue-300 flex items-center px-2 z-50 shadow-inner">
  <button
    onClick={onStartClick}
    className="flex items-center gap-2 px-3 h-8 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 border border-green-300 rounded shadow-sm text-white font-semibold text-sm"
  >
    <Windows className="w-4 h-4" />
    Start
  </button>


      <div className="flex-1 flex items-center gap-1 px-2">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => focusWindow(window.id)}
            className={`h-8 px-3 bg-gradient-to-b border shadow-sm flex items-center gap-2 ${
              window.isMinimized
                ? "from-blue-200 to-blue-400 border-blue-100"
                : "from-blue-300 to-blue-500 border-blue-200"
            } hover:from-blue-200 hover:to-blue-400 text-white text-sm max-w-48`}
            title={window.title}
          >
            {getAppIcon(window.id)}
            <span className="truncate">{window.title}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 px-2">
        <div className="flex items-center gap-1 mr-2">
          <button className="p-1 hover:bg-blue-300 rounded" title="Volume: 96%">
            <Volume2 className="w-4 h-4 text-white" />
          </button>
          <button className="p-1 hover:bg-blue-300 rounded" title="Wireless Network Connection: Connected">
            <Wifi className="w-4 h-4 text-white" />
          </button>
          <button className="p-1 hover:bg-blue-300 rounded" title="Battery: 96%">
            <Battery className="w-4 h-4 text-white" />
          </button>
          <button className="p-1 hover:bg-blue-300 rounded" title="Notifications">
            <Bell className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="text-white text-sm font-medium">{formatTime(currentTime)}</div>
      </div>
    </div>
  )
}
