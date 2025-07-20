// all cool :)
"use client"

import { useState } from "react"
import { Phone, Video, Mail, MessageCircle, MoreHorizontal, Star, Search, HeartHandshake} from "lucide-react"

const profilesData = [
  {
    id: "akmal-hossain",
    username: "ak-2045",
    name: "Akmal Hossain",
    avatar: "https://wallpapers-clan.com/wp-content/uploads/2022/06/one-piece-monkey-d-luffy-pfp-4.jpg",
    title: "B.Tech - ECE",
    organization: "NIT Agartala",
    email: "hossainakmal2045@gmail.com",
    phone: "+91 93726 65103",
    status: "Available",
    testimonials: [
      {
        from: "Ram Kumar",
        avatar: "https://i.pinimg.com/564x/5b/ee/5d/5bee5dd39a60d0b3206f80ac3a1a9811.jpg",
        role: "Student, IIIT Pune",
        rating: 5,
        text: "Working with Akmal has been super smooth. His attention to design and flow really brought life to our Windows themed portfolio. Super reliable teammate⚡",
        date: "1 day ago"
      },
      {
        from: "Navaneeth P",
        avatar: "https://i.pinimg.com/736x/b1/71/a0/b171a02564291271703dad1b5185b8ed.jpg",
        role: "Student, NIT Durgapur",
        rating: 5,
        text: "Ak is the kind of teammate who keeps things moving. His ideas are sharp and he’s really good at getting stuff done efficiently 😄",
        date: "2 days ago"
      }
    ]
  },
  {
    id: "ram-kumar",
    username: "RamK2006",
    name: "Ram Kumar",
    avatar: "https://i.pinimg.com/564x/5b/ee/5d/5bee5dd39a60d0b3206f80ac3a1a9811.jpg",
    title: "B.Tech - ECE",
    organization: "IIIT Pune",
    email: "itsyash23108@gmail.com",
    phone: "+91 77429 99357",
    status: "Busy",
    testimonials: [
      {
        from: "Akmal Hossain",
        avatar: "https://wallpapers-clan.com/wp-content/uploads/2022/06/one-piece-monkey-d-luffy-pfp-4.jpg",
        role: "Student, NIT Agartala",
        rating: 5,
        text: "Ram is always calm and focused. He took care of details that really mattered in our build. Super dependable and never hesitates to help when someone’s stuck 🤝",
        date: "1 day ago"
      },
      {
        from: "Navaneeth P",
        avatar: "https://i.pinimg.com/736x/b1/71/a0/b171a02564291271703dad1b5185b8ed.jpg",
        role: "Student, NIT Durgapur",
        rating: 4,
        text: "Ram’s consistency and patience stood out during this project. He's an expert in handling tricky UI parts and he just quietly got things done. A true team player 😁",
        date: "2 days ago"
      }
    ]
  },
  {
    id: "navaneeth-p",
    username: "Navaneeth187",
    name: "Navaneeth P",
    avatar: "https://i.pinimg.com/736x/b1/71/a0/b171a02564291271703dad1b5185b8ed.jpg",
    title: "B.Tech - ME",
    organization: "NIT Durgapur",
    email: "navaneeth.p@nitdgp.edu.in",
    phone: "+91 70750 63050",
    status: "Away",
    testimonials: [
      {
        from: "Akmal Hossain",
        avatar: "https://wallpapers-clan.com/wp-content/uploads/2022/06/one-piece-monkey-d-luffy-pfp-4.jpg",
        role: "Student, NIT Agartala",
        rating: 5,
        text: "Nav brings energy to the team. He’s creative, quick with ideas, and always ready to solve any issue. His enthusiasm really kept our momentum going 🚀",
        date: "1 day ago"
      },
      {
        from: "Ram Kumar",
        avatar: "https://i.pinimg.com/564x/5b/ee/5d/5bee5dd39a60d0b3206f80ac3a1a9811.jpg",
        role: "Student, IIIT Pune",
        rating: 5,
        text: "Navaneeth has been the spark in this team.He plans the layout and never forgets to add 'that' extra touch. Always thinking one step ahead 🙌",
        date: "2 days ago"
      }
    ]
  }
];

export default function TeamsTestimonials() {
  const [selectedProfile, setSelectedProfile] = useState(profilesData[0])
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-500"
      case "Busy": return "bg-red-500"
      case "Away": return "bg-yellow-500"
      default: return "bg-gray-500"
    }
  }

  const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
    />
  ));
};

const filteredProfiles = profilesData.filter(profile =>
  profile.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="h-full bg-gradient-to-br from-purple-800 via-gray-900 to-indigo-900 flex overflow-hidden">
    <div className="w-80 bg-gray-900 backdrop-blur-sm border-r border-purple-700/50 flex flex-col h-full">
      <div className="p-4 border-b border-purple-700/50 flex-shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-500 bg-opacity-20 rounded flex items-center justify-center">
            <HeartHandshake className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">Testimonials</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300" />
          <input
            type="text"
            placeholder="Search Members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(147, 51, 234, 0.5) rgba(107, 33, 168, 0.2)' }}>
        <div className="space-y-2">
          {filteredProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setSelectedProfile(profile)}
              className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                selectedProfile.id === profile.id
                  ? "bg-purple-600/40 border border-purple-500"
                  : "hover:bg-purple-800/30 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-600"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(
                      profile.status
                    )} rounded-full border-2 border-purple-950`}
                  ></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white truncate">{profile.name}</div>
                  <div className="text-sm text-purple-300 truncate">{profile.title}</div>
                  <div className="text-xs text-purple-400">{profile.status}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="bg-purple-900/50 backdrop-blur-sm border-b border-purple-700/50 p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={selectedProfile.avatar}
                alt={selectedProfile.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(
                  selectedProfile.status
                )} rounded-full border-2 border-purple-900`}
              ></div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{selectedProfile.name}</h2>
              <p className="text-purple-300">
                {selectedProfile.title} • {selectedProfile.organization}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-green-700 hover:bg-green-700 rounded-lg transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors">
              <Video className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-purple-800 hover:bg-purple-700 rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(147, 51, 234, 0.5) rgba(107, 33, 168, 0.2)' }}>
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600/30 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-300" />
              <div>
                <div className="text-sm text-purple-300">Email</div>
                <div className="text-white">{selectedProfile.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-300" />
              <div>
                <div className="text-sm text-purple-300">Phone</div>
                <div className="text-white">{selectedProfile.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600/30">
          <h3 className="text-lg font-semibold text-white mb-6">
            Testimonials ({selectedProfile.testimonials.length})
          </h3>

          <div className="space-y-6">
            {selectedProfile.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-purple-700/20 rounded-lg p-5 border border-purple-600/20"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.from}
                    className="w-12 h-12 rounded-full border-2 border-purple-400"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.from}</h4>
                        <p className="text-sm text-purple-300">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-purple-400">{testimonial.date}</span>
                      </div>
                    </div>
                    <p className="text-purple-100 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-purple-600/30">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Add Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}