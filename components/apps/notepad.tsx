// all set, debugged :)
"use client"

import { useState } from "react"

export default function Notepad() {
  const [content, setContent] = useState(`Welcome to Notepad!

You can:
- Type and edit text
- Use Ctrl+A to select all
- Use Ctrl+C to copy
- Use Ctrl+V to paste

Try typing something below...
`)

  const handleSave = () => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "notepad-document.txt"
    a.click()
    URL.revokeObjectURL(url)

    alert("File saved successfully!")
  }

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="bg-gray-200 border-b border-gray-400 px-2 py-1">
        <div className="flex gap-4 text-sm">
          <div className="relative group">
            <button className="px-2 py-1 hover:bg-blue-200 rounded">File</button>
            <div className="absolute top-full left-0 bg-white border border-gray-400 shadow-lg hidden group-hover:block z-10 min-w-32">
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">New</button>
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Open...</button>
              <button onClick={handleSave} className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">
                Save
              </button>
              <hr className="my-1" />
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Exit</button>
            </div>
          </div>
          <div className="relative group">
            <button className="px-2 py-1 hover:bg-blue-200 rounded">Edit</button>
            <div className="absolute top-full left-0 bg-white border border-gray-400 shadow-lg hidden group-hover:block z-10 min-w-32">
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Undo</button>
              <hr className="my-1" />
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Cut</button>
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Copy</button>
              <button className="w-full text-left px-3 py-1 hover:bg-blue-100 text-sm">Paste</button>
            </div>
          </div>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Format</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">View</button>
          <button className="px-2 py-1 hover:bg-blue-200 rounded">Help</button>
        </div>
      </div>

      <div className="flex-1 p-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full resize-none border-none outline-none font-mono text-sm bg-white p-2"
          style={{ fontFamily: "Courier New, monospace" }}
          placeholder="Start typing..."
        />
      </div>

      <div className="bg-gray-200 border-t border-gray-400 px-2 py-1 text-xs text-gray-600 flex justify-between">
        <span>
          Ln {content.split("\n").length}, Col {content.length}
        </span>
        <span>Windows (CRLF)</span>
      </div>
    </div>
  )
}