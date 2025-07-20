// everything working :)
"use client"

import { useState } from "react"
import { Star, GitFork, ExternalLink, User, MapPin, Link } from "lucide-react"

const githubProfiles = [
  {
    id: "akmal-hossain",
    username: "ak-2045",
    name: "Akmal Hossain",
    avatar: "https://i.pinimg.com/736x/ed/69/58/ed69588b4855a0f25680813a5f2f2671.jpg",
    bio: "B.Tech in Electronics and Communication Engineering at NIT Agartala, actively building projects in computer vision, machine learning, and MERN stack",
    linktoprofile: "https://github.com/ak-2045",
    location: "Mumbai, India",
    website: "https://github.com/ak-2045",
    followers: 2,
    following: 3,
    repos: [
      {
        name: "qr-detection-on-products-api",
        description: "Scans uploaded images for QR codes, that may contain sensitive information and automatically blurs them",
        stars: 1,
        forks: 2,
        language: "Pyton",
        updated: "5 days ago",
        linktorepo: "https://github.com/ak-2045/qr-detection-on-products-api"
      },
      {
        name: "croptop-web-demo",
        description: "Suggests the optimal crop to cultivate based on soil nutrients and environmental conditions using ML",
        stars: 2,
        forks: 0,
        language: "Python",
        updated: "2 weeks ago",
        linktorepo: "https://github.com/ak-2045/croptop-web-demo"
      },
      {
        name: "backloop-demo",
        description: " Circular return and recycling system for e-commerce, using AI-assisted photo-based price estimation",
        stars: 3,
        forks: 1,
        language: "React",
        updated: "3 weeks ago",
        linktorepo: "https://github.com/ak-2045/backloop-demo"
      },
    ],
  },
  {
    id: "ram-kumar",
    username: "RamK2006",
    name: "Ram Kumar",
    avatar: "https://avatars.githubusercontent.com/u/185917449?v=4",
    bio: " B.Tech in Electronics and Communication Engineering at IIIT Pune, with a focus on creating clean, user-friendly web designs and contributing to social cause",
    linktoprofile: "https://github.com/RamK2006",
    location: "Pune, India",
    website: "https://github.com/RamK2006",
    followers: 34,
    following: 10,
    repos: [
      {
        name: "caremitra.vercel.app",
        description: "Comprehensive, disease-responsive web platform built to empower patients facing chronic and critical health challenges",
        stars: 17,
        forks: 6,
        language: "React",
        updated: "2 weeks ago",
        linktorepo: "https://github.com/RamK2006/caremitra.vercel.app"
      },
      {
        name: "FixFast_NEW",
        description: "Designed to make tech repair hassle-free, with easy booking and fast service for smartphones and other devices at your convenience",
        stars: 9,
        forks: 5,
        language: "HTML",
        updated: "3 days ago",
        linktorepo: "https://github.com/RamK2006/FixFast_NEW"
      },
      {
        name: "Vaxify_cfc",
        description: "Set up and used the new Single Page Application SDK, and authenticate a user in your application using Auth0's Universal Login Page",
        stars: 11,
        forks: 13,
        language: "JavaScript",
        updated: "1 week ago",
        linktorepo: "https://github.com/RamK2006/Vaxify_cfc"
      },
    ],
  },
  {
    id: "navaneeth-p",
    username: "Navaneeth187",
    name: "Navaneeth P",
    avatar: "https://avatars.githubusercontent.com/u/78336201?v=4",
    bio: "B.Tech in Mechanical Engineering at NIT Durgapur, specializing in algorithmic problem-solving and clean coding practices and mastering C , Python",
    linktoprofile: "https://github.com/Navaneeth187",
    location: "Durgapur, India",
    website: "https://github.com/Navaneeth187",
    followers: 2,
    following: 11,
    repos: [
      {
        name: "JavaScript-Project-1-Weather-App",
        description: "Displays real-time weather details including temperature, humidity, and wind speed for any selected city with a  responsive design",
        stars: 13,
        forks: 7,
        language: "JavaScript",
        updated: "4 weeks ago",
        linktorepo: "https://github.com/ak-2045/JavaScript-Project-1-Weather-App"
      },
      {
        name: "JavaScript-Project-2-ToDo-App",
        description: "Simple, clean to-do list application designed to help you keep track of tasks while adding a touch of fun to your day",
        stars: 22,
        forks: 4,
        language: "JavaScript",
        updated: "7 weeks ago",
        linktorepo: "https://github.com/ak-2045/JavaScript-Project-2-ToDo-App"
      },
      {
        name: "hyperparameter-cuda-code",
        description: "A CUDA-accelerated program for tuning hyperparameters in machine learning models, enabling faster computation on GPUs",
        stars: 9,
        forks: 1,
        language: "Pytorch",
        updated: "8 weeks ago",
        linktorepo: "https://github.com/ak-2045/hyperparameter-cuda-code"
      },
    ],
  },
];

export default function GitHub() {
  const [selectedProfile, setSelectedProfile] = useState(githubProfiles[0])

  const openInBrowser = (url: string) => {
    console.log('Opening:', url)
  }

  return (
    <div className="h-full bg-gray-900 flex">
      <div className="w-64 bg-black border-r border-gray-800 p-4">
        <h2 className="text-lg font-semibold mb-4 text-white">GitHub Profiles</h2>
        <div className="space-y-2">
          {githubProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setSelectedProfile(profile)}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                selectedProfile.id === profile.id
                  ? "bg-gray-900 border-gray-600 border"
                  : "hover:bg-gray-900 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={profile.avatar || "/placeholder.svg"} alt={profile.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-medium text-sm text-white">{profile.name}</div>
                  <div className="text-xs text-gray-400">@{profile.username}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex items-start gap-6 mb-8">
          <img
            src={selectedProfile.avatar || "/placeholder.svg"}
            alt={selectedProfile.name}
            className="w-32 h-32 rounded-full border-4 border-gray-800"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{selectedProfile.name}</h1>
            <p className="text-xl text-gray-300 mb-3">@{selectedProfile.username}</p>
            <p className="text-gray-400 mb-4">{selectedProfile.bio}</p>

            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              {selectedProfile.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProfile.location}</span>
                </div>
              )}
              {selectedProfile.website && (
                <div className="flex items-center gap-1">
                  <Link className="w-4 h-4" />
                  <a href={selectedProfile.website} className="text-blue-400 hover:underline">
                    {selectedProfile.website}
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <strong>{selectedProfile.followers}</strong> followers
              </span>
              <span>
                <strong>{selectedProfile.following}</strong> following
              </span>
            </div>

{selectedProfile?.linktoprofile && (

            <button
               onClick={() => window.open(`${selectedProfile.linktoprofile}`, "_blank")}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 border border-gray-700"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Profile
            </button>
)}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Project Repositories</h2>
          <div className="grid gap-4">
            {selectedProfile.repos.map((repo, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors bg-gray-900"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-blue-400 hover:underline cursor-pointer">{repo.name}</h3>
                  <button
                    onClick={() =>
                      window.open(`${repo.linktorepo}`, "_blank")
                    }
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>

                </div>
                <p className="text-gray-300 mb-3">{repo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}