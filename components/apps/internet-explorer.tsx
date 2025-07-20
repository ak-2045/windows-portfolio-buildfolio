// all functional, no errors :)
"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, Home, Search, ExternalLink } from "lucide-react"
import { motion } from "framer-motion";

const profiles = [
  {
  id: "profile1",
  name: "Akmal Hossain",
  title: "Aspiring Data Analyst",
  avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGbYVA1_buWwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698069165071?e=1755734400&v=beta&t=TeLGxdq4txEie0Li5PqonEPzoK3S7OtEnQfeiWrUNSs",
  bio: "Lazy is such an ugly word. I prefer selective participation.",
  aboutMe: "Pre-final year B.Tech student in Electronics and Communication Engineering at NIT Agartala, with a growing passion for data analytics. Outside the classroom, I lead the Student Alumni Relations Cell, managing communications and organizing events to strengthen alumni engagement. I'm also the General Secretary of Aaveg, the official dramatics club, where I’ve been actively involved in stage plays, monoacts, and street performances. Currently running SochWorks, a digital marketing startup, and exploring other startup ideas.",
  hobbiesOrExtracurriculars: [
    "Theatre",
    "Debating & MUNs",
    "Pitching Case Decks",
    "Data Storytelling",
    "Data visualization",
    "Creative Writing",
    "Event management",
    "Team Leadership"
  ],
  skills: [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "PostgreSQL",
    "Data Cleaning",
    "Data Visualization",
    "Machine Learning"
  ]
},
  {
  id: "profile2",
  name: "Ram Kumar",
  title: "Budding Software Developer",
  avatar: "https://d8it4huxumps7.cloudfront.net/uploads/profile/67ac64e8e7963.png",
  bio: "They say good things take time ... That's why I am always late.",
  aboutMe: "Sophomore at IIIT Pune who enjoys building fast, scalable web applications. I like writing clean backend logic and designing systems that can handle real-world load. I'm a regular hackathon participant, a team player, and someone who thrives under deadlines. Outside of tech, I love organizing events, creating content, and being active in campus life — whether it's playing cricket or leading a team.",
  hobbiesOrExtracurriculars: [
    "Hackathons",
    "Tech Blogging",
    "Cricket",
    "Team Leadership",
    "Event Management",
    "Robotics",
    "Competitive Programming",
    "Social Media Content Creation"
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Redis",
    "AWS",
    "Leadership",
    "Presentation Skills",
    "Event Organizing",
    "Digital Marketing",
    "Market Research"
  ]
},
  {
  id: "profile3",
  name: "P. Navaneeth",
  title: "Generative AI Enthusiast",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQHaqDWKxL2nSQ/profile-displayphoto-crop_800_800/B56Zfzt9rKGUAM-/0/1752140607336?e=1755734400&v=beta&t=HgNWYBt4ju-LKZZKqFbuEc2uI8TRcZ2MJy73JaIf6Gk",
  bio: "When Cardi B said, \"From the top, make it drop\" my grades took it seriously.",
  aboutMe: "I'm a B.Tech student at NIT Durgapur who’s deeply interested in generative AI and prompt engineering. I love building smart systems that can understand and create language or images, and I enjoy experimenting with LLMs for creative and impactful solutions.\n\nOutside of tech, I'm an active NSS volunteer involved in social service, community awareness drives, and crowdfunding initiatives to support those in need. I also enjoy sharing knowledge through AI study groups and staying curious by reading the latest in AI research.",
  hobbiesOrExtracurriculars: [
    "Reading Papers",
    "Socializing Groups",
    "NSS Volunteering",
    "Community Service",
    "Social Awareness",
    "Crowdfunding",
    "Photography",
    "Open-source Contributions"
  ],
  skills: [
    "Python",
    "Prompt Engineering",
    "Large Language Models",
    "LangChain",
    "Generative AI",
    "NLP",
    "Computer Vision",
    "PyTorch",
    "TensorFlow",
    "Docker",
    "Kubernetes"
  ]
},
];



interface InternetExplorerProps {
  activeProfile?: string
}

export default function InternetExplorer({ activeProfile }: InternetExplorerProps) {
  const [currentUrl, setCurrentUrl] = useState(
    activeProfile ? `http://localhost:3000/${activeProfile}.html` : "http://www.msn.com",
  )
  const [searchQuery, setSearchQuery] = useState("")

  const profile = activeProfile ? profiles.find((p) => p.id === activeProfile) || profiles[0] : null

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank")
    }
  }

  const renderHomepage = () => (
    <div className="bg-gray-900 text-white min-h-full">
  <div className="max-w-4xl mx-auto p-8">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4 text-gray-500 bg-clip-text">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/IE11_Cyan_rgb_vertical.svg/800px-IE11_Cyan_rgb_vertical.svg.png"
          alt="Internet Explorer Logo"
          className="mx-auto h-24 mt-8"
        />
      </h1>
    </div>
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-gray-800 rounded-lg border border-gray-600 overflow-hidden">
              <div className="flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="You can search here..."
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600 transition-colors">
            <div className="text-4xl mb-4">

            </div>
            <h3 className="text-xl font-bold mb-4">GitHub</h3>
            <p className="text-gray-300 mb-4">Explore code repositories and developer profiles</p>
            <button
            onClick={() => window.open("https://github.com", "_blank")}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white transition-colors flex items-center gap-2"
          >
            Visit GitHub <ExternalLink className="w-4 h-4" />

          </button>

          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600 transition-colors">
            <div className="text-4xl mb-4">
            </div>
            <h3 className="text-xl font-bold mb-4">YouTube</h3>
            <p className="text-gray-300 mb-4">Watch videos and entertainment content</p>
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white transition-colors flex items-center gap-2"

            >
              Visit YouTube <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600 transition-colors">
            <div className="text-4xl mb-4">

            </div>
            <h3 className="text-xl font-bold mb-4">Unstop</h3>
            <p className="text-gray-300 mb-4">Exciting competitions and career opportunities</p>
            <button
              onClick={() => window.open("https://unstop.com", "_blank")}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white transition-colors flex items-center gap-2"
            >
              Visit Unstop <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const skillColors = [
  "from-red-500 to-red-400",
  "from-blue-500 to-blue-400",
  "from-yellow-500 to-yellow-400",
  "from-green-500 to-green-400",
  "from-purple-500 to-purple-400",
  "from-teal-500 to-teal-400",
  "from-pink-500 to-pink-400",
];

const renderProfile = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-full">
    <div className="max-w-5xl mx-auto p-8">
      <motion.div
        className="flex items-start gap-8 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={profile!.avatar}
          alt={profile!.name}
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          style={{ width: "176px", height: "176px" }}
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 tracking-wide">{profile!.name}</h1>
          <h2 className="text-2xl text-blue-400 mb-4">{profile!.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed italic">{profile!.bio}</p>
        </div>
      </motion.div>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400 underline underline-offset-4">About Me</h3>
        <p className="text-gray-200 text-lg leading-relaxed bg-gray-800 p-6 rounded-xl shadow-inner border border-gray-700 text-justify">
          {profile!.aboutMe}
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-blue-400 underline underline-offset-4">Skills & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {profile!.skills.map((skill, index) => {
            const colorClass = skillColors[index % skillColors.length];
            return (
              <motion.span
                key={index}
                className={`px-4 py-2 bg-gradient-to-br ${colorClass} text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200`}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400 underline underline-offset-4">
          Extracurriculars
        </h3>
        <ul className="space-y-3">
          {profile!.hobbiesOrExtracurriculars.map((item, index) => (
            <motion.li
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 text-gray-200"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  </div>
);

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-b border-gray-300 p-2">
        <div className="flex items-center gap-2 mb-2">
          <button className="p-1 hover:bg-blue-200 rounded" title="Back">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-blue-200 rounded" title="Forward">
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-blue-200 rounded" title="Refresh">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-blue-200 rounded" title="Home">
            <Home className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Address</span>
          <input
            type="text"
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-400 text-sm"
          />
          <button className="px-3 py-1 bg-blue-500 text-white text-sm hover:bg-blue-600">Go</button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">{activeProfile ? renderProfile() : renderHomepage()}</div>
    </div>
  )
}
