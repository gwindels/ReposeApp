import { Logo } from "@/app/components/Logo";
import { AppStoreButton } from "@/app/components/AppStoreButton";
import { Moon, Volume2, Sparkles, Clock } from "lucide-react";

export function MarketingSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F5F5F2] to-[#EFEFE8]">
      {/* Header */}
      <header className="border-b border-black/5 bg-white/60 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Logo size="md" />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="mb-12 flex justify-center">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7_29)">
                <path d="M144 0H36C16.1178 0 0 16.1178 0 36V144C0 163.882 16.1178 180 36 180H144C163.882 180 180 163.882 180 144V36C180 16.1178 163.882 0 144 0Z" fill="url(#paint0_linear_7_29)"/>
                <path d="M41.1328 133.77C41.1328 124.014 47.6484 118.323 60.6797 116.697C73.7109 115.071 83.4844 114.258 90 114.258C96.5156 114.258 106.289 115.071 119.32 116.697C132.352 118.323 138.867 124.014 138.867 133.77C138.867 143.525 132.352 149.216 119.32 150.842C106.289 152.468 96.5156 153.281 90 153.281C83.4844 153.281 73.7109 152.468 60.6797 150.842C47.6484 149.216 41.1328 143.525 41.1328 133.77Z" fill="#9B9488"/>
                <path d="M55.5469 104.59C55.5469 96.4704 60.8474 91.5988 71.4483 89.9749C82.0493 88.351 90 87.5391 95.3005 87.5391C100.601 87.5391 106.785 88.351 113.852 89.9749C120.919 91.5988 124.453 96.4704 124.453 104.59C124.453 112.709 120.919 117.581 113.852 119.205C106.785 120.829 100.601 121.641 95.3005 121.641C90 121.641 82.0493 120.829 71.4483 119.205C60.8474 117.581 55.5469 112.709 55.5469 104.59Z" fill="#B8B0A0"/>
                <path d="M64.7883 66.8638C65.377 60.4062 68.9893 56.666 75.6252 55.6431C82.2611 54.6203 88.0123 54.3307 92.8789 54.7743C97.7454 55.218 102.538 56.4688 107.258 58.5269C111.977 60.5849 114.042 64.8428 113.454 71.3004C112.865 77.7579 110.064 81.5721 105.05 82.7429C100.036 83.9136 95.0963 84.2772 90.2297 83.8335C85.3632 83.3899 79.7591 82.0651 73.4176 79.8591C67.0761 77.6532 64.1996 73.3214 64.7883 66.8638Z" fill="#C4BBA8"/>
                <path d="M89.2969 47.4609C98.8108 47.4609 106.523 41.9519 106.523 35.1562C106.523 28.3606 98.8108 22.8516 89.2969 22.8516C79.7829 22.8516 72.0703 28.3606 72.0703 35.1562C72.0703 41.9519 79.7829 47.4609 89.2969 47.4609Z" fill="#DFD3BB"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_7_29" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F5F5F2"/>
                <stop offset="0.5" stop-color="#EFEFE8"/>
                <stop offset="1" stop-color="#E8DCC4"/>
                </linearGradient>
                <clipPath id="clip0_7_29">
                <rect width="180" height="180" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="text-6xl mb-6" style={{ fontWeight: 300, letterSpacing: '1px', color: '#2A2A28' }}>
            Change by Doing Less
          </h1>
          <p className="text-2xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
            Effortless transformation with a custom blend of binaural frequencies. 
            Set once, then let go. Works during sleep or rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AppStoreButton platform="ios" />
            <AppStoreButton platform="mac" />
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl text-center mb-16" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
            How Repose Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <Volume2 className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                1. Choose Your Session
              </h3>
              <p className="text-black/60 leading-relaxed">
                Select from curated binaural frequency programs designed for sleep, rest, or gentle awakening.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <Moon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                2. Press Play & Rest
              </h3>
              <p className="text-black/60 leading-relaxed">
                No focus required. Just play and relax. The frequencies work passively while you sleep or rest.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                3. Let Transformation Happen
              </h3>
              <p className="text-black/60 leading-relaxed">
                Binaural frequencies lower internal noise, creating receptive states for affirmations and change.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white/40 backdrop-blur py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl text-center mb-16" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              Designed for Effortless Use
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/70 backdrop-blur rounded-3xl border border-black/5">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <Moon className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Works During Sleep
                </h3>
                <p className="text-black/60 leading-relaxed">
                  No need to stay awake or concentrate. Repose is designed for passive listening that works 
                  while you sleep, rest, or simply exist in a relaxed state.
                </p>
              </div>
              <div className="p-8 bg-white/70 backdrop-blur rounded-3xl border border-black/5">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Set Once, Let Go
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Minimal interaction by design. Choose your session, press play, and let the app do the rest. 
                  No complicated settings or constant adjustments needed.
                </p>
              </div>
              <div className="p-8 bg-white/70 backdrop-blur rounded-3xl border border-black/5">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <Volume2 className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Binaural Frequencies
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Scientifically-tuned binaural beats lower internal noise and create receptive states. 
                  Your mind quiets naturally, making space for positive change.
                </p>
              </div>
              <div className="p-8 bg-white/70 backdrop-blur rounded-3xl border border-black/5">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Gentle Affirmations
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Optional affirmations layer seamlessly into the soundscape, delivered when your mind is 
                  most receptive. No forcing, just natural absorption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mx-auto mb-8">
              <circle cx="60" cy="60" r="55" fill="#D4CDB8" opacity="0.15" />
              <circle cx="60" cy="60" r="40" fill="#C4BBA8" opacity="0.25" />
              <circle cx="60" cy="60" r="26" fill="#B8B0A0" opacity="0.4" />
              <circle cx="60" cy="60" r="11" fill="#E8DCC4" />
            </svg>
            <h2 className="text-4xl mb-6" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              Change Through Non-Resistance
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
              Repose embodies a different approach to personal transformation. Rather than forcing change through 
              willpower and effort, we create conditions for natural release. Self-doubt dissolves when given space, 
              not when fought against.
            </p>
          </div>
        </section>

        {/* Download CTA */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center p-16 bg-white/70 backdrop-blur rounded-3xl border border-black/5">
            <h2 className="text-4xl mb-6" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              Ready to Begin?
            </h2>
            <p className="text-xl text-black/60 mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
              Download Repose and experience effortless transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AppStoreButton platform="ios" />
              <AppStoreButton platform="mac" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Logo variant="icon" size="sm" />
              <span className="text-black/40 text-sm">© 2025 Repose. All rights reserved.</span>
            </div>
            <div className="flex gap-8 text-sm text-black/60">
              <a href="#" className="hover:text-[#756F63] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#756F63] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#756F63] transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
