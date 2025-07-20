// tried my best :)
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function CMD() {
  const [history, setHistory] = useState([
    "Microsoft Windows XP [Version 5.1.2600]",
    "(C) Copyright 1985-2001 Microsoft Corp.",
    " ",
    "try <i>help</i> to get started"
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [currentPath] = useState("C:\\Documents and Settings\\User")
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    let output: string[] = []

    switch (cmd) {
      case "help":
        output = [
          " ",
          "[INFO] You are using XP Portfolio Desktop.",
          "Available commands:",
          " ",
          "help      - Show this help message",
          "clear     - Clear the terminal",
          "view-team - Show team info",
          "apps      - Shows all apps menu",
          "echo      - Echo text back",
          "whoami    - Display current user",
          "date      - Show current date",
          "time      - Show current time",
          "ver       - Show Windows version",
          " ",
        ]
        break
      case "clear":
        setHistory(["Microsoft Windows XP [Version 5.1.2600]", "(C) Copyright 1985-2001 Microsoft Corp.", ""])
        return
      case "dir":
        output = [
          "",
          "Directory of " + currentPath,
          "",
          "12/07/2024  10:30 AM    <DIR>          .",
          "12/07/2024  10:30 AM    <DIR>          ..",
          "12/07/2024  09:15 AM    <DIR>          Desktop",
          "12/07/2024  09:15 AM    <DIR>          My Documents",
          "12/07/2024  11:45 AM         2,048 portfolio.html",
          "12/07/2024  11:45 AM         1,024 styles.css",
          "12/07/2024  11:45 AM           512 script.js",
          "               3 File(s)          3,584 bytes",
          "               4 Dir(s)  15,728,640 bytes free",
          "",
        ]
        break
      case "whoami":
        output = ["", "DESKTOP-XP\\Portfolio User", ""]
        break
      case "date":
        output = ["", new Date().toDateString(), ""]
        break
      case "time":
        output = ["", new Date().toTimeString(), ""]
        break
      case "ver":
        output = ["", "Microsoft Windows XP [Version 5.1.2600]", ""]
        break
      case "view-team":
        output = [
          " ",
          "Microsoft-XP Portfolio Desktop v1.0",
          " ",
          "Submitted By:",
          "- Akmal Hossain (NIT Agartala)",
          "- Ram Kumar (IIIT Pune)",
          "- P. Navaneeth (NIT Durgapur)",
          " ",
          "Built with React, TypeScript, and lots of nostalgia!",
          " ",
        ]
        break
            case "apps":
        output = [
          " ",
          "Available Applications:",
          " ",
          "VSCode            - Open the portfolio source code in VS Code. Right-click and select “Open Live Server” to preview",
          "Internet Explorer - Browse the web or preview your code in the browser",
          "LinkedIn          - View LinkedIn profiles of team members",
          "Github            - Explore team projects and repositories on GitHub",
          "Teams             - Read testimonials from the team",
          "Adobe             - View resumes of the team members (PDF format)",
          "Outlook           - See team contact details",
          "cmd               - Just for fun – type and run terminal commands",
          "MS Paint          - Just for fun – doodle in MS Paint",
          "Notepad           - Just for fun – jot down notes (and maybe scores ;)",
          " ",
        ]
        break

      default:
        if (cmd.startsWith("echo ")) {
          output = ["", command.substring(5), ""]
        } else if (cmd === "") {
          output = [""]
        } else {
          output = [
            "",
            `'${command}' is not recognized as an internal or external command,`,
            "operable program or batch file.",
            "",
          ]
        }
    }

    setHistory((prev) => [...prev, `${currentPath}>${command}`, ...output])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className="h-full bg-black text-green-400 font-mono text-sm p-2 overflow-auto cursor-text"
      onClick={handleClick}
      ref={containerRef}
    >
      <div className="whitespace-pre-wrap">
        {history.map((line, index) => (
          <div key={index} className={line.startsWith("C:\\") ? "text-white" : ""} dangerouslySetInnerHTML={{__html: line}}>
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-white">{currentPath}&gt;</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-green-400 w-full caret-transparent"
              autoFocus
            />
            <span 
              className="absolute top-0 left-0 text-green-400 pointer-events-none"
              style={{transform: `translateX(${currentInput.length * 0.6}em)`}}
            >
              <span className="animate-pulse">_</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}