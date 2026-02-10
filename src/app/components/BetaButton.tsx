import { useState } from 'react';

interface BetaButtonProps {
  className?: string;
}

// Replace with your actual TestFlight public link
const TESTFLIGHT_URL = "https://testflight.apple.com/join/RptbMP1e";
const TESTFLIGHT_APP_URL = "https://apps.apple.com/app/testflight/id899247664";

export function BetaButton({ className = '' }: BetaButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-4 px-5 py-3 rounded-2xl transition-all hover:scale-105 cursor-pointer"
        style={{
          backgroundColor: '#5d584e',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-xl">
          <g clipPath="url(#clip0_app)">
            <path d="M409.6 0H102.4C45.846 0 0 45.846 0 102.4V409.6C0 466.154 45.846 512 102.4 512H409.6C466.154 512 512 466.154 512 409.6V102.4C512 45.846 466.154 0 409.6 0Z" fill="url(#paint0_app)"/>
            <path d="M117 380.5C117 352.75 135.533 336.562 172.6 331.938C209.667 327.312 237.467 325 256 325C274.533 325 302.333 327.312 339.4 331.938C376.467 336.562 395 352.75 395 380.5C395 408.25 376.467 424.438 339.4 429.062C302.333 433.688 274.533 436 256 436C237.467 436 209.667 433.688 172.6 429.062C135.533 424.438 117 408.25 117 380.5Z" fill="#9B9488"/>
            <path d="M158 297.5C158 274.405 173.077 260.548 203.231 255.929C233.385 251.31 256 249 271.077 249C286.154 249 303.744 251.31 323.846 255.929C343.949 260.548 354 274.405 354 297.5C354 320.595 343.949 334.452 323.846 339.071C303.744 343.69 286.154 346 271.077 346C256 346 233.385 343.69 203.231 339.071C173.077 334.452 158 320.595 158 297.5Z" fill="#B8B0A0"/>
            <path d="M184.287 190.19C185.962 171.822 196.237 161.183 215.112 158.274C233.987 155.364 250.346 154.54 264.189 155.802C278.032 157.064 291.665 160.622 305.089 166.476C318.513 172.33 324.388 184.441 322.713 202.81C321.038 221.178 313.071 232.027 298.809 235.357C284.548 238.687 270.496 239.721 256.654 238.46C242.811 237.198 226.871 233.429 208.832 227.155C190.794 220.88 182.612 208.558 184.287 190.19Z" fill="#C4BBA8"/>
            <path d="M254 135C281.062 135 303 119.33 303 100C303 80.67 281.062 65 254 65C226.938 65 205 80.67 205 100C205 119.33 226.938 135 254 135Z" fill="#DBCEB4"/>
          </g>
          <defs>
            <linearGradient id="paint0_app" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5F5F2"/>
              <stop offset="0.5" stopColor="#EFEFE8"/>
              <stop offset="1" stopColor="#E8DCC4"/>
            </linearGradient>
            <clipPath id="clip0_app">
              <rect width="512" height="512" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div className="text-left text-white">
          <div className="text-xs opacity-70">Beta Available</div>
          <div className="text-base font-medium">Join on TestFlight</div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden">
          <div
            className="p-6 rounded-2xl border border-black/10 max-w-md text-left"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          >
            <h3 className="text-lg font-medium mb-4" style={{ color: '#2A2A28' }}>
              How to join the Beta
            </h3>
            <ol className="space-y-4 text-black/70">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8DCC4] flex items-center justify-center text-sm font-medium" style={{ color: '#2A2A28' }}>1</span>
                <div>
                  <p>Get Apple's <a href={TESTFLIGHT_APP_URL} target="_blank" rel="noopener noreferrer" className="text-[#756F63] hover:text-[#5a554b] font-medium underline">TestFlight</a> app from the App Store if you don't have it yet</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8DCC4] flex items-center justify-center text-sm font-medium" style={{ color: '#2A2A28' }}>2</span>
                <p>Return here to</p>
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105 text-white text-sm font-medium"
                  style={{ backgroundColor: '#5d584e' }}
                >
                  Install the App
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
