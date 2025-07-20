// looks good :)
"use client"

import { useState, useEffect } from "react"
import Taskbar from "./taskbar"
import StartMenu from "./start-menu"
import DesktopIcon from "./desktop-icon"
import Window from "./window"
import VSCode from "./apps/vscode"
import InternetExplorer from "./apps/internet-explorer"
import { useWindows } from "./window-context"
import Notepad from "./apps/notepad"
import MSPaint from "./apps/mspaint"
import CMD from "./apps/cmd"
import GitHub from "./apps/github"
import LinkedIn from "./apps/linkedin"
import AdobeAcrobat from "./apps/adobe"
import TeamsTestimonials from "./apps/teams"
import Outlook from "./apps/outlook"

export default function Desktop() {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { windows, openWindow } = useWindows()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === "Delete") {
        alert("No BSOD today :)")
      }
    }

    const handleOpenApp = (e: CustomEvent) => {
      const app = e.detail
      switch (app) {
        case "vscode":
          openVSCode()
          break
        case "ie":
          openIE()
          break
        case "notepad":
          openNotepad()
          break
        case "mspaint":
          openMSPaint()
          break
        case "cmd":
          openCMD()
          break
        case "github":
          openGitHub()
          break
        case "linkedin":
          openLinkedIn()
          break
        case "adobe":
          openAdobe()
          break
        case "outlook":
          openOutlook()
          break
        case "teams":
          openTeams()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("openApp", handleOpenApp as EventListener)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("openApp", handleOpenApp as EventListener)
    }
  }, [])

  const handleDesktopClick = () => {
    setShowStartMenu(false)
  }

  const openVSCode = () => {
    openWindow({
      id: "vscode",
      title: "Visual Studio Code",
      component: <VSCode />,
      position: { x: 100, y: 50 },
      size: { width: 1000, height: 700 },
    })
  }

  const openIE = () => {
    openWindow({
      id: "ie",
      title: "Internet Explorer",
      component: <InternetExplorer />,
      position: { x: 150, y: 100 },
      size: { width: 900, height: 600 },
    })
  }

  const openNotepad = () => {
    openWindow({
      id: "notepad",
      title: "untitled - Notepad",
      component: <Notepad />,
      position: { x: 200, y: 100 },
      size: { width: 600, height: 400 },
    })
  }

  const openMSPaint = () => {
    openWindow({
      id: "mspaint",
      title: "untitled - Paint",
      component: <MSPaint />,
      position: { x: 250, y: 150 },
      size: { width: 800, height: 600 },
    })
  }

  const openCMD = () => {
    openWindow({
      id: "cmd",
      title: "Command Prompt",
      component: <CMD />,
      position: { x: 300, y: 200 },
      size: { width: 600, height: 400 },
    })
  }

  const openGitHub = () => {
    openWindow({
      id: "github",
      title: "GitHub Desktop",
      component: <GitHub />,
      position: { x: 150, y: 80 },
      size: { width: 900, height: 650 },
    })
  }

  const openLinkedIn = () => {
    openWindow({
      id: "linkedin",
      title: "LinkedIn",
      component: <LinkedIn />,
      position: { x: 150, y: 80 },
      size: { width: 900, height: 650 },
    })
  }

    const openAdobe = () => {
    openWindow({
      id: "adobe",
      title: "Adobe Acrobat",
      component: <AdobeAcrobat />,
      position: { x: 150, y: 80 },
      size: { width: 900, height: 650 },
    })
  }

    const openTeams = () => {
    openWindow({
      id: "teams",
      title: "Microsoft Teams",
      component: <TeamsTestimonials />,
      position: { x: 150, y: 80 },
      size: { width: 900, height: 650 },
    })
  }

   const openOutlook = () => {
    openWindow({
      id: "outlook",
      title: "Outlook",
      component: <Outlook />,
      position: { x: 150, y: 80 },
      size: { width: 900, height: 650 },
    })
  }

  const openRecycleBin = () => {
    alert("Please don't delete anything :/")
  }

  const desktopIcons = [
    {
      icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-visual-studio-code-icon-download-in-svg-png-gif-file-formats--technology-logo-social-media-vol-7-pack-logos-icons-3030282.png" alt="VS Code" className="w-8 h-8" />,
      label: "VS Code",
      action: openVSCode
    },
    {
      icon: <img src="https://static.wikia.nocookie.net/logopedia/images/2/21/Ie-wowthisisclosetoedge.png" alt="Internet Explorer" className="w-8 h-8" />,
      label: "Internet",
      action: openIE
    },
    {
      icon: <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-6491025.png" alt="GitHub" className="w-8 h-8" />,
      label: "GitHub",
      action: openGitHub
    },
    {
      icon: <img src="https://www.iconshock.com/image/Vista/General/notepad" alt="Notepad" className="w-8 h-8" />,
      label: "Notepad",
      action: openNotepad
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-8 h-8" />,
      label: "LinkedIn",
      action: openLinkedIn
    },
    {
      icon: <img src="https://static.wikia.nocookie.net/logopedia/images/4/42/MSPaint.png" alt="MS Paint" className="w-8 h-8" />,
      label: "MS Paint",
      action: openMSPaint
    },
    {
      icon: <img src="https://icon-library.com/images/command-prompt-icon/command-prompt-icon-22.jpg" alt="Command Prompt" className="w-8 h-8" />,
      label: "cmd",
      action: openCMD
    },
    {
      icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/027/179/349/small_2x/microsoft-teams-icon-logo-symbol-free-png.png" alt="Microsoft Teams" className="w-8 h-8" />,
      label: "Teams",
      action: openTeams
    },
    {
      icon: <img src="https://img.utdstc.com/icon/69d/098/69d09858fb3acb7f53fa535e739d7613ddec5d847bd617623ec09dc9b7c55622:200" alt="Adobe Acrobat" className="w-8 h-8" />,
      label: "Acrobat",
      action: openAdobe
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png?20230309112740" alt="Recycle Bin" className="w-8 h-8" />,
      label: "Outlook",
      action: openOutlook
    },
    {
      icon: <img src="https://static.wikia.nocookie.net/windows/images/7/73/Recycle_bin_full.png" alt="Recycle Bin" className="w-8 h-8" />,
      label: "Recycle Bin",
      action: openRecycleBin
    }
  ];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      onClick={handleDesktopClick}
      style={{
        backgroundImage: `url('https://archive.org/download/bliss-600dpi/bliss-600dpi.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-4 left-4 grid grid-cols-2 gap-x-1 gap-y-4">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon 
            key={index} 
            icon={icon.icon}       
            label={icon.label}     
            onClick={icon.action} 
          />
        ))}
      </div>

      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          position={window.position}
          size={window.size}
          isMinimized={window.isMinimized}
          isMaximized={window.isMaximized}
          zIndex={window.zIndex}
        >
          {window.component}
        </Window>
      ))}

      {showStartMenu && (
        <div className="absolute bottom-10 left-0 z-[9999]">
          <StartMenu onClose={() => setShowStartMenu(false)} />
        </div>
      )}

      <div onClick={(e) => e.stopPropagation()}>
        <Taskbar onStartClick={() => setShowStartMenu(!showStartMenu)} currentTime={currentTime} />
      </div>
    </div>
  )
}
