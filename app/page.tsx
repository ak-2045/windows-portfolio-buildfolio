"use client"

import { useState, useEffect } from "react"
import Desktop from "@/components/desktop"
import { WindowProvider } from "@/components/window-context"

export default function Home() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isBooting) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center animate-fadeInSlow">
        <img
          src="/start-logo.png"
          alt="Windows XP"
          className="mx-auto w-60 mb-8 drop-shadow-lg"
        />

        <div className="relative w-72 h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-gray-800">
          <div className="absolute h-full w-1/4 bg-gray-300 rounded-full animate-bootBar" />
        </div>

        <div className="text-white text-xl mt-4 font-light tracking-wider animate-pulse">Loading...</div>
      </div>

      <style>{`
        @keyframes bootBar {
          0% { left: -30%; }
          50% { left: 50%; }
          100% { left: 110%; }
        }

        @keyframes fadeInSlow {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-bootBar {
          animation: bootBar 1.8s ease-in-out infinite;
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

  return (
    <WindowProvider>
      <Desktop />
    </WindowProvider>
  )
}
