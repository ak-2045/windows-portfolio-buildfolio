// checked, all working :)

"use client"

import type React from "react"
import { JSX, useState } from "react"
import { File, FolderOpen, Play } from "lucide-react"
import { useWindows } from "../window-context"
import InternetExplorer from "./internet-explorer"

const profiles = [
  {
    id: "profile1",
    name: "Akmal Hossain",
    title: "NIT Agartala",
    bio: "Passionate about creating seamless user experiences",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
    projects: [
      { name: "E-commerce Platform", description: "Modern shopping experience with React & Node.js" },
      { name: "Task Management App", description: "Collaborative workspace built with Next.js" },
    ],
  },
  {
    id: "profile2",
    name: "Ram Kumar",
    title: "IIIT Pune",
    bio: "Crafting beautiful and intuitive digital experiences",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    projects: [
      { name: "Banking App Redesign", description: "Complete UX overhaul for mobile banking" },
      { name: "Design System", description: "Comprehensive component library and guidelines" },
    ],
  },
  {
    id: "profile3",
    name: "P. Navaneeth",
    title: "NIT Durgapur",
    bio: "Building scalable infrastructure and automation",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    projects: [
      { name: "CI/CD Pipeline", description: "Automated deployment system for microservices" },
      { name: "Monitoring Dashboard", description: "Real-time infrastructure monitoring solution" },
    ],
  },
]

export default function VSCode() {
  const [activeTab, setActiveTab] = useState("profile1")
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 })
  const { openWindow } = useWindows()

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenuPos({ x: e.clientX, y: e.clientY })
    setShowContextMenu(true)
  }

  const handleLiveServer = () => {
    setShowContextMenu(false)
    const timestamp = Date.now()
    openWindow({
      id: `ie-live-${timestamp}`,
      title: `Internet Explorer - Live Server (${activeTab})`,
      component: <InternetExplorer activeProfile={activeTab} />,
      position: { x: 200, y: 150 },
      size: { width: 900, height: 600 },
    })
  }

  const activeProfile = profiles.find((p) => p.id === activeTab)

const generateCode = (profile: (typeof profiles)[0]) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${profile.name} - Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <header class="profile-header">
      <img src="https://via.placeholder.com/100" alt="${profile.name}" class="profile-img" />
      <div class="profile-info">
        <h1>${profile.name}</h1>
        <h2>${profile.title}</h2>
        <p>${profile.bio}</p>
      </div>
    </header>

    <section class="skills">
      <h3>Skills</h3>
      <div class="skill-tags">
        ${profile.skills
          .map((skill) => `<span class="skill-tag">${skill}</span>`)
          .join("\n        ")}
      </div>
    </section>

    <section class="projects">
      <h3>Featured Projects</h3>
      ${profile.projects
        .map(
          (project) => `
      <div class="project-card">
        <h4>${project.name}</h4>
        <p>${project.description}</p>
      </div>`
        )
        .join("\n      ")}
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>`;
};

const renderCodeWithSyntaxHighlighting = (code: string) => {
  const lines = code.split("\n");

  const highlightLine = (line: string) => {
    let html = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(
      /(&lt;!--.*?--&gt;)/g,
      `<span class="text-gray-400 italic">$1</span>`
    );

    html = html.replace(
      /(&lt;!DOCTYPE\s+html&gt;)/gi,
      `<span class="text-purple-400">$1</span>`
    );

    html = html.replace(
      /(&lt;\/?)([a-zA-Z0-9-]+)(\s[^&]*?)?(\/?&gt;)/g,
      (match, open, tag, attributes, close) => {
        let result = `<span class="text-blue-400">${open}${tag}</span>`;
        
        if (attributes) {
          let highlightedAttrs = attributes;
          


          highlightedAttrs = highlightedAttrs.replace(
            /=("[^"]*"|'[^']*')/g,
            `=<span class="text-yellow-300">$1</span>`
          );
          
          result += `<span class="text-green-400">${highlightedAttrs}</span>`;
        }
        
        result += `<span class="text-blue-400">${close}</span>`;
        return result;
      }
    );

    return html;
  };

  return (
    <div className="font-mono text-sm leading-relaxed text-left whitespace-pre-wrap">
      {lines.map((line, index) => (
        <div key={index} className="flex">
          <span className="text-gray-500 select-none w-6 text-right pr-2 text-xs">
            {index + 1}
          </span>
          <span
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: highlightLine(line) }}
          />
        </div>
      ))}
    </div>
  );
};

return (

    <div className="h-full bg-gray-900 text-white flex" onContextMenu={handleRightClick}>
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-2 border-b border-gray-700">
          <h3 className="text-sm font-medium text-gray-300">EXPLORER</h3>
        </div>
        <div className="p-2">
          <div className="flex items-center gap-1 text-sm text-gray-300 mb-2">
            <FolderOpen className="w-4 h-4" />
            <span>PORTFOLIO-WEBSITE</span>
          </div>
          <div className="ml-4 space-y-1">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white cursor-pointer"
                onClick={() => setActiveTab(profile.id)}
              >
                <File className="w-4 h-4" />
                <span>{profile.id}.html</span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <File className="w-4 h-4" />
              <span>styles.css</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <File className="w-4 h-4" />
              <span>script.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex bg-gray-800 border-b border-gray-700">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveTab(profile.id)}
              className={`px-4 py-2 text-sm border-r border-gray-700 flex items-center gap-2 ${
                activeTab === profile.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              <File className="w-3 h-3" />
              {profile.id}.html
            </button>
          ))}
        </div>

        <div className="flex-1 p-4 overflow-auto bg-gray-900">
          {activeProfile && renderCodeWithSyntaxHighlighting(generateCode(activeProfile))}
        </div>
      </div>

      {showContextMenu && (
        <div
          className="fixed bg-white border border-gray-300 shadow-lg py-1 z-50"
          style={{ left: contextMenuPos.x, top: contextMenuPos.y }}
          onClick={() => setShowContextMenu(false)}
        >
          <button
            onClick={handleLiveServer}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Open with Live Server
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100">
            Run HTML
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100">
            Copy Path
          </button>
        </div>
      )}
    </div>
);
}
