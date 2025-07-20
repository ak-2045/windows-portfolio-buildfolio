//debugged :)
"use client"

import type { ReactNode } from "react"

interface DesktopIconProps {
  icon: ReactNode
  label: string
  onClick: () => void
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onClick}
      className="flex flex-col items-center gap-1 p-2 hover:bg-blue-200 hover:bg-opacity-40 rounded group"
    >
      <div className="w-12 h-12 bg-gray-300 bg-opacity-30 rounded border border-gray-300 flex items-center justify-center shadow-sm group-hover:bg-opacity-40">
        {icon}
      </div>
      <span className="text-gray-100 opacity-90 text-xs font-medium text-center drop-shadow max-w-20 leading-tight">
        {label}
      </span>
    </button>
  );
}

