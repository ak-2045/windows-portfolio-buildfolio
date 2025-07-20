// no bugs, everything working :)
"use client"

import { useState } from "react"
import { MapPin, Building, GraduationCap, Award, ExternalLink, Users, MessageCircle } from "lucide-react"
import { useWindows } from "../window-context"
import InternetExplorer from "./internet-explorer"

const linkedinProfiles = [
  {
    id: "akmal-hossain",
    name: "Akmal Hossain",
    linkedIn: "https://www.linkedin.com/in/akmal-hossain-72a7b5277/",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGbYVA1_buWwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698069165071?e=1755734400&v=beta&t=TeLGxdq4txEie0Li5PqonEPzoK3S7OtEnQfeiWrUNSs",
    headline: "Digital Marketing || Web Development || Orator ",
    location: "Navi Mumbai, Maharashtra, India",
    connections: "500+",
    bio: "BTech in Electronics and Communication Engineering at the National Institute of Technology Agartala. Gaining hands-on experience as a Brand Development Intern at WDCweb.",
    currentPosition: {
      title: "Founder's Associate",
      company: "Skillsvest",
      duration: "Dec 2024 - Present",
      location: "San Francisco, United States - Remote"
    },
    education: [
      {
        institution: "National Institute of Technology Agartala",
        degree: "Bachelor of Technology in Electronics Engineering",
        duration: "2023 - 2027",
        gpa: "8.2/10",
        activities: "Head of Management (SARC), General Secretary (Aaveg)"
      },
      {
        institution: "North Point ICSE School",
        degree: "Indian School Certificate",
        duration: "2021 - 2023",
        gpa: "92.5%",
        activities: "Quiz Club, Volleyball"
      }
    ],
    extracurriculars: [
      {
        title: "Event & Operations Intern",
        organization: "Flipkart Glam Up '25",
        duration: "May 2025 - Jun 2025",
        description: "Assisting with influencer data management and backend event operations (via Walnut Food Groups)"
      },
      {
        title: "FMCG Sales Intern",
        organization: "PepsiCo India",
        duration: "May 2025 - Jun 2025",
        description: "Conducted local area reasearch on PepsiCo's packaged product sales (via InternShala)"
      },
      {
        title: "Community Manager",
        organization: "SARAS AI",
        duration: "Apr 2024 - Sep 2024",
        description: "Acted as the central point of contact, facilitating student engagement and communication"
      }
    ]
  },
  {
    id: "ram-kumar",
    name: "Ram Kumar",
    linkedIn: "https://unstop.com/u/22052650",
    avatar: "https://d8it4huxumps7.cloudfront.net/uploads/profile/67ac64e8e7963.png",
    headline: "MERN Stack || Web Design || Market Researchh ",
    location: "Pune, Maharashtra, India",
    connections: "200+",
    bio: "Dynamic and results-driven professional. Proficient in website design and market research, I excel in team collaboration and project management.",
    currentPosition: {
      title: "Founder-in-Residence",
      company: "The Idea Company",
      duration: "June 2025 - Present",
      location: "Pune, India"
    },
    education: [
      {
        institution: "Indian Institute of Information Technology Pune",
        degree: "Bachelor of Technology in Electronics Engineering",
        duration: "2024 - 2028",
        gpa: "9.2/10",
        activities: "Google Developer Student Club, UI/UX Lead"
      },
      {
        institution: "Sacred Heart High School",
        degree: "Higher Secondary Certificate",
        duration: "2022 - 2024",
        gpa: "95.7%",
        activities: "Student Council, Football"
      }
    ],
    extracurriculars: [
      {
        title: "Campus Ambassador",
        organization: "Peerhub",
        duration: "May 2025 - Jun 2025",
        description: "Collaborated with student organizations to enhance brand visibility on campus and raise awareness"
      },
      {
        title: "Campus Ambassador",
        organization: "Wuwb Technologies",
        duration: "Mar 2025 - Apr 2025",
        description: "Assisted in developing social media content to connect with the student community"
      },
      {
        title: "CS50 Cybersecurity",
        organization: "Havard University",
        duration: "Jun 2024 - Dec 2024",
        description: "Learned about securing accounts, data, systems, and software against today’s and tommorrow's threats"
      }
    ]
  },
  {
    id: "navaneeth-p",
    name: "Navaneeth P",
    linkedIn: "https://www.linkedin.com/in/p-navaneeth-4a351535b/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHaqDWKxL2nSQ/profile-displayphoto-crop_800_800/B56Zfzt9rKGUAM-/0/1752140607336?e=1755734400&v=beta&t=HgNWYBt4ju-LKZZKqFbuEc2uI8TRcZ2MJy73JaIf6Gk",
    headline: "Prompt Engineer || Web Development",
    location: "Durgapur, West Bengal, India ",
    connections: "100+",
    bio: "I am P. Navaneeth, a current undergraduate student at NIT Durgapur, pursuing my BTech in Mechanical Engineering. I am a member of the NSS Society.",
    currentPosition: {
      title: "Brand Development Intern",
      company: "WDCweb",
      duration: "June 2025 - Present",
      location: "Pune, India - Remote"
    },
    education: [
      {
        institution: "National Institute of Technology Durgapur",
        degree: "Bachelor of Technology in Mechanical Engineering",
        duration: "2024 - 2028",
        gpa: "9.2",
        activities: "AutoCAD, Data Structures"
      },
      {
        institution: "Narayana Junior College",
        degree: "Higher Secondary Certificate",
        duration: " 2022 - 2024",
        gpa: "94.4%",
        activities: "C(Programming Language), Football"
      }
    ],
    extracurriculars: [
      {
        title: "Volunteer",
        organization: "National Service Scheme (NSS) , NIT Durgapur",
        duration: "Jun 2024 - Present",
        description: "Actively involved in organizing social awareness drives, blood donation camps, and community outreach programs, "
      },
      {
        title: "Prompt Engineer",
        organization: "DeepLearning.AI",
        duration: "May 2025 - Jun 2025",
        description: "Certification and Training Course in Prompt Engineering for AI Applications "
      },
      {
        title: "Quantum Computing Trainee",
        organization: "IISER Bhopal",
        duration: "Jun 2025 - Jun 2025",
        description: "Completed an NPTEL Certification Course with on-campus practical training in Pennylane"
      }
    ]
  }
];

export default function LinkedIn() {
  const [selectedProfile, setSelectedProfile] = useState(linkedinProfiles[0])
  const { openWindow } = useWindows()

  const openInBrowser = (url: string) => {
    openWindow({
      id: "ie-linkedin",
      title: "Internet Explorer - LinkedIn",
      component: <InternetExplorer />,
      position: { x: 200, y: 100 },
      size: { width: 900, height: 600 },
    })
  }

  return (
    <div className="h-full bg-gray-50 flex">
      <div className="w-64 bg-white border-r border-gray-200 p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">LinkedIn Profiles</h2>
        <div className="space-y-2">
          {linkedinProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setSelectedProfile(profile)}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                selectedProfile.id === profile.id
                  ? "bg-blue-50 border-blue-200 border"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={profile.avatar || "/placeholder.svg"} alt={profile.name} className="w-10 h-10 rounded-full border" />
                <div>
                  <div className="font-medium text-sm text-gray-900">{profile.name}</div>
                  <div className="text-xs text-gray-500 truncate">{profile.headline.split('|')[0].trim()}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-start gap-6">
            <img
              src={selectedProfile.avatar || "/placeholder.svg"}
              alt={selectedProfile.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProfile.name}</h1>
              <p className="text-lg text-gray-700 mb-3">{selectedProfile.headline}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProfile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{selectedProfile.connections} connections</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{selectedProfile.bio}</p>
              
              <div className="flex gap-3">
                <div className="flex gap-3">
                <button
                    onClick={() =>
                        window.open(`${selectedProfile.linkedIn}`, "_blank")
                    }
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
                    >
                    <ExternalLink className="w-4 h-4" />
                    View Profile
                    </button>

                </div>

                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium">
                  <MessageCircle className="w-4 h-4" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building className="w-5 h-5" />
              Experience
            </h2>
            <div className="border-l-2 border-blue-200 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">{selectedProfile.currentPosition.title}</h3>
              <p className="text-blue-600 font-medium">{selectedProfile.currentPosition.company}</p>
              <p className="text-sm text-gray-600 mb-2">{selectedProfile.currentPosition.duration}</p>
              <p className="text-sm text-gray-500">{selectedProfile.currentPosition.location}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
            <div className="space-y-4">
              {selectedProfile.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-200 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-600 mb-2">{edu.duration}</p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Grade:</strong> {edu.gpa}</p>
                    <p><strong>Activities:</strong> {edu.activities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Extracurricular & Volunteering Activities
            </h2>
            <div className="space-y-4">
              {selectedProfile.extracurriculars.map((activity, index) => (
                <div key={index} className="border-l-2 border-orange-200 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                  <p className="text-blue-600 font-medium">{activity.organization}</p>
                  <p className="text-sm text-gray-600 mb-2">{activity.duration}</p>
                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}