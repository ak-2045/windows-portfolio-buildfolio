// no errors :)
"use client"

import {
  Folder,
  Settings,
  Power,
  User,
  HelpCircle,
  Code,
  Globe,
  FileText,
  Palette,
  Terminal,
  Github,
  Gamepad2,
} from "lucide-react"

interface StartMenuProps {
  onClose: () => void
}

export default function StartMenu({ onClose }: StartMenuProps) {
  const openApp = (app: string) => {
    const event = new CustomEvent("openApp", { detail: app })
    window.dispatchEvent(event)
    onClose()
  }

const handleShutdown = () => {
  if (confirm("Are you sure you want to shut down the portfolio?")) {
    let countdown = 15;

    document.body.innerHTML = `
  <div style="
    background: black;
    color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  ">
    <div style="
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    ">
      <img 
        src="/start-logo.png" 
        alt="Windows XP" 
        style="width: 200px; margin-bottom: 10px; margin-left: -10px" 
      />
      <h1 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Thank you for Visiting!</h1>
      <p id="shutdown-timer" style="opacity: 0.8;">Shutting down in ${countdown} seconds...</p>
      <button 
        onclick="location.reload()" 
        style="
          margin-top: 30px;
          padding: 10px 24px;
          background: #0050a4;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Restart Portfolio
      </button>
    </div>
  </div>
`;

    const timerInterval = setInterval(() => {
      countdown--;
      const timerText = document.getElementById("shutdown-timer");
      if (timerText) {
        timerText.textContent = `Shutting down in ${countdown} seconds...`;
      }
      if (countdown === 0) {
        clearInterval(timerInterval);
        window.close();
      }
    }, 1000);
  }

  onClose();
};


  return (
    <div className="absolute bottom-0 left-0 w-96 bg-gradient-to-b from-gray-50 to-gray-100 border border-blue-300 shadow-lg z-999 flex rounded-tr-lg overflow-hidden">
      <div className="w-5/12 bg-blue-100 border-r border-blue-300">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-200 bg-opacity-20 rounded border-2 border-white flex items-center justify-center">
          <img
            src="https://clipart-library.com/images/8i6oer5KT.png"
            alt="Icon"
            className="w-8 h-8"
          />
        </div>

          <div>
            <div className="font-bold">User</div>
            <div className="text-sm opacity-90">Administrator</div>
          </div>
        </div>

        <div className="p-2 max-h-80 overflow-y-auto">
          <div className="font-bold p-2 border-b border-blue-300 mb-2">All Programs</div>
          <div className="mb-3">
            <div className="font-semibold p-1 text-sm text-gray-700">Accessories</div>
            <button
              onClick={() => openApp("notepad")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Notepad</span>
            </button>
            <button
              onClick={() => openApp("mspaint")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Palette className="w-4 h-4" />
              <span>Paint</span>
            </button>
            <button
              onClick={() => openApp("cmd")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Terminal className="w-4 h-4" />
              <span>cmd</span>
            </button>
          </div>

          <div className="mb-3">
            <div className="font-semibold p-1 text-sm text-gray-700">Games</div>
            <button
              onClick={() => alert("Minesweeper coming soon!")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Minesweeper</span>
            </button>
            <button
              onClick={() => alert("Solitaire coming soon!")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Solitaire</span>
            </button>
          </div>

          <div className="mb-3">
            <div className="font-semibold p-1 text-sm text-gray-700">Developer Tools</div>
            <button
              onClick={() => openApp("vscode")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Code className="w-4 h-4" />
              <span>VS Code</span>
            </button>
            <button
              onClick={() => openApp("github")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </button>
            <button
              onClick={() => openApp("ie")}
              className="w-full flex items-center gap-2 p-1 hover:bg-blue-200 rounded text-left text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>Internet</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-7/12 p-2">
        <button
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left"
        >
          <User className="w-4 h-4" />
          <span>My Computer</span>
        </button>
        <button
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left"
        >
          <Folder className="w-4 h-4" />
          <span>My Documents</span>
        </button>
        <button
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left"
        >
          <Settings className="w-4 h-4" />
          <span>Control Panel</span>
        </button>
        <button
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Help and Support</span>
        </button>

        <div className="border-t border-blue-300 my-2"></div>

        <button
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left"
        >
          <Power className="w-4 h-4" />
          <span>Log Off</span>
        </button>

        <button
          onClick={handleShutdown}
          className="w-full flex items-center gap-3 p-2 hover:bg-blue-200 rounded text-left font-semibold"
        >
          <Power className="w-4 h-4" />
          <span>Turn Off Computer</span>
        </button>
      </div>
    </div>
  )
}