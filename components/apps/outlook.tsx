"use client"

import { SetStateAction, useState } from "react"
import { Mail, Send, Paperclip, Bold, Italic, Underline, List, Phone, MapPin, Calendar, ExternalLink, Settings } from "lucide-react"

const contactProfiles = [
  {
    id: "akmal-hossain",
    name: "Akmal Hossain",
    email: "hossainakmal2045@gmail.com",
    phone: "+91 93726 65103",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGbYVA1_buWwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698069165071?e=1755734400&v=beta&t=TeLGxdq4txEie0Li5PqonEPzoK3S7OtEnQfeiWrUNSs",
    position: "Founder's Associate, Skillsvest",
    location: "Navi Mumbai, Maharashtra, India",
    linkedIn: "https://www.linkedin.com/in/akmal-hossain-72a7b5277/",
    availability: "Mon - Fri, 9 AM - 6 PM IST",
    expertise: "Digital Marketing, Full Stack Development, Python"
  },
  {
    id: "ram-kumar",
    name: "Ram Kumar",
    email: "itsyash23108@gmail.com",
    phone: "+91 77429 99357",
    avatar: "https://d8it4huxumps7.cloudfront.net/uploads/profile/67ac64e8e7963.png",
    position: "Founder, The Idea Company",
    location: "Pune, Maharashtra, India",
    linkedIn: "https://unstop.com/u/22052650",
    availability: "Mon - Sat, 8 AM - 7 PM IST",
    expertise: "MERN Stack, UI/UX Design, Business Development"
  },
  {
    id: "navaneeth-p",
    name: "Navaneeth P",
    email: "navaneeth.p@nitdgp.edu.in",
    phone: "+91 70750 63050",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHaqDWKxL2nSQ/profile-displayphoto-crop_800_800/B56Zfzt9rKGUAM-/0/1752140607336?e=1755734400&v=beta&t=HgNWYBt4ju-LKZZKqFbuEc2uI8TRcZ2MJy73JaIf6Gk",
    position: "Development Intern, WDCweb",
    location: "Durgapur, West Bengal, India",
    linkedIn: "https://www.linkedin.com/in/p-navaneeth-4a351535b/",
    availability: "Mon - Fri, 8 AM - 5 PM IST",
    expertise: "Prompt Engineering, Generative AI, Tensorflow"
  }
];

const emailTemplates = [
  {
    id: "collaboration",
    name: "Collaboration Proposal",
    subject: "Collaboration Opportunity - Let's Connect!",
    body: `Hi [Name],

I hope this email finds you well. I came across your profile and was impressed by your work in [expertise area].

I'm reaching out to explore potential collaboration opportunities. I believe our skills could complement each other well for future projects.

Would you be interested in having a brief conversation to discuss this further?

Looking forward to hearing from you.

Best regards,`
  },
  {
    id: "networking",
    name: "Professional Networking",
    subject: "Professional Networking - Introduction",
    body: `Hello [Name],

I hope you're doing great! I'm reaching out to expand my professional network and connect with talented individuals like yourself.

Your expertise in [expertise area] caught my attention, and I'd love to learn more about your work and experiences.

Would you be open to connecting and perhaps having a virtual coffee chat sometime?

Best regards,`
  },
  {
    id: "project",
    name: "Project Inquiry",
    subject: "Project Collaboration Inquiry",
    body: `Dear [Name],

I hope this message finds you well. I'm currently working on a project that could benefit from your expertise in [expertise area].

I'd love to discuss the project details and see if there's an opportunity for collaboration.

Are you available for a quick call or meeting this week?

Thank you for your time.

Warm regards,`
  }
];

export default function Outlook() {
  const [selectedContact, setSelectedContact] = useState(contactProfiles[0])
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")

  const handleTemplateSelect = (templateId: SetStateAction<string>) => {
    const template = emailTemplates.find(t => t.id === templateId)
    if (template) {
      setEmailSubject(template.subject)
      setEmailBody(template.body.replace(/\[Name\]/g, selectedContact.name)
                                  .replace(/\[expertise area\]/g, selectedContact.expertise))
      setSelectedTemplate(templateId)
    }
  }

  const handleSendEmail = () => {
    if (!senderName || !senderEmail || !emailSubject || !emailBody) {
      alert("Please fill in all required fields (Your Name, Email, Subject, and Message)");
      return;
    }

    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(`From: ${senderName} (${senderEmail})\n\n${emailBody}`);
    const recipient = encodeURIComponent(selectedContact.email);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };


  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  const openLinkedIn = (url: string | URL | undefined) => {
    window.open(url, "_blank")
  }

  return (
    <div className="h-full bg-gray-50 flex">
      <div className="w-80 bg-white border-r border-gray-200 shadow-sm flex-shrink-0">
        <div className="p-4 border-b border-gray-200 bg-gray-200 text-white">
          <h2 className="text-lg text-gray-800 font-semibold flex items-center gap-2">
            <Mail className="w-5 h-5 flex-shrink-0" />
            Contact Details
          </h2>
        </div>
        
        <div className="p-4 space-y-3">
          {contactProfiles.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 rounded-lg text-left transition-colors ${
                selectedContact.id === contact.id
                  ? "bg-blue-50 border-blue-200 border-2"
                  : "hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="w-12 h-12 rounded-full border-2 border-gray-200 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{contact.name}</div>
                  <div className="text-sm text-gray-600 truncate">{contact.position}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{contact.location}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <img
              src={selectedContact.avatar || "/placeholder.svg"}
              alt={selectedContact.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0 w-full">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedContact.name}</h1>
              <p className="text-blue-600 font-medium mb-4">{selectedContact.position}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium break-all">{selectedContact.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{selectedContact.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{selectedContact.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{selectedContact.availability}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{selectedContact.expertise}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleCall(selectedContact.phone)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Call
                </button>
                <button
                  onClick={() => openLinkedIn(selectedContact.linkedIn)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="border-b border-gray-200 p-4 bg-blue-50">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Send className="w-5 h-5 flex-shrink-0" />
                Compose Email to {selectedContact.name}
              </h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Templates</label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => handleTemplateSelect(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a template (optional)</option>
                  {emailTemplates.map((template) => (
                    <option key={template.id} value={template.id}>{template.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  value={`${selectedContact.name} <${selectedContact.email}>`}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-300 p-2 flex gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Underline className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <List className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Paperclip className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    className="w-full h-64 p-4 resize-none focus:outline-none"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="text-sm text-gray-500">
                  * Required fields
                </div>
                <button
                  onClick={handleSendEmail}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <Send className="w-4 h-4 flex-shrink-0" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}