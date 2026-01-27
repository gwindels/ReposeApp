import { Logo } from "@/app/components/Logo";
import { AppStoreButton } from "@/app/components/AppStoreButton";
import {
  BrainWaveIcon,
  AffirmationIcon,
  SunIcon,
  LeafIcon,
  PurposeIcon,
  BirdIcon,
  PlayIcon,
  InstantIcon,
  LocalStorageIcon,
  PrivacyIcon,
} from "@/app/components/Icons";

export function MarketingSite() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #FAFAF8, #F5F5F2, #EFEFE8)' }}>
      {/* Header */}
      <header className="border-b border-black/5 sticky top-0 z-10" style={{ backgroundColor: 'rgba(255,255,255,0.85)', WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}>
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
            Change Without Effort
          </h1>
          <p className="text-2xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
            Neuroscience-backed frequencies quiet your mind and open you to change. 
            Pair with affirmations that actually land, whether releasing old doubts or inviting something new.
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
                <PurposeIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                1. Create Your Session
              </h3>
              <p className="text-black/60 leading-relaxed">
                Choose a purpose—falling asleep, waking up, a midday reset, or deep meditation. Each one sequences brainwave states differently based on what you need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <BirdIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                2. Make It Yours
              </h3>
              <p className="text-black/60 leading-relaxed">
                Pick a nature soundscape. Add affirmations from our library, type your own and hear them spoken back to you, record your own voice, or upload audio you already have.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <PlayIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                3. Press Play and Let Go
              </h3>
              <p className="text-black/60 leading-relaxed">
                The session guides your brain through targeted states. Works as you fall asleep, wake up, take a midday break, or settle into longer meditation.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl text-center mb-16" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              What Makes Repose Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl border border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <BrainWaveIcon className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Gamma Entrainment for Neuroplasticity
                </h3>
                <p className="text-black/60 leading-relaxed">
                  This isn't ambient noise. Repose uses layered frequencies to move your brain in and out of gamma states, the same brainwave pattern linked to heightened learning and neural flexibility. Your mind becomes more receptive to change.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <AffirmationIcon className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Affirmations That Land
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Affirmations work better when your brain is primed for them. Repose delivers them at the right moment, in the right state. Choose from a list, write your own, or record them in your own voice for deeper resonance.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <SunIcon className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Fits Your Day
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Use Repose when you wake up to prime your mind for the day. Reset during a break. Go deeper in a longer meditation session. Or use it as you fall asleep, when your brain is especially open to rewiring. Brainwave states are sequenced based on what that moment needs.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                  <LeafIcon className="w-8 h-8 text-[#756F63]" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400, color: '#2A2A28' }}>
                  Release and Receive
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Self-doubt, limiting beliefs, mental loops that won't quit. Gamma entrainment creates space for these patterns to soften and release. The same receptivity that lets go of what's stuck can welcome what you're ready to grow toward: confidence, connection, abundance, peace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mx-auto mb-8">
              <circle cx="60" cy="60" r="55" fill="#D4CDB8" opacity="0.15" />
              <circle cx="60" cy="60" r="40" fill="#C4BBA8" opacity="0.25" />
              <circle cx="60" cy="60" r="26" fill="#B8B0A0" opacity="0.4" />
              <circle cx="60" cy="60" r="11" fill="#E8DCC4" />
            </svg>
            <h2 className="text-4xl mb-6" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              The Approach
            </h2>
              <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
              Instead of willpower, Repose uses your brain's natural plasticity. Gamma entrainment opens receptivity, affirmations seed new patterns, rest lets them take hold. Change is easier when you stop forcing it. 
              </p>
          </div>
        </section>

        {/* Private */}
        <section className="py-24" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl text-center mb-16" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              Simple and Private
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <InstantIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                No Account Required
              </h3>
              <p className="text-black/60 leading-relaxed">
                Download and start immediately. No profile or account to set up.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <LocalStorageIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                Your Sessions Stay Yours
              </h3>
              <p className="text-black/60 leading-relaxed">
                Everything is stored locally on your device. Your affirmations, recordings, and sessions never leave your phone.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E8DCC4] to-[#FAFAF8] flex items-center justify-center">
                <PrivacyIcon className="w-10 h-10 text-[#756F63]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 400, color: '#2A2A28' }}>
                No Tracking
              </h3>
              <p className="text-black/60 leading-relaxed">
                What you do is never logged. Repose is personal tool, not a platform.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center p-16 rounded-3xl border border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
            <h2 className="text-4xl mb-6" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              Ready to Begin?
            </h2>
            <p className="text-xl text-black/60 mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
              Download Repose and create your first session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AppStoreButton platform="ios" />
              <AppStoreButton platform="mac" />
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6" style={{ fontWeight: 300, letterSpacing: '0.5px', color: '#2A2A28' }}>
              The Research
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
              Repose is built on peer-reviewed neuroscience. Here are a few starting points if you'd like to go deeper.
            </p>
          </div>
          <ul className="space-y-6 max-w-2xl mx-auto">
            <li>
              <a
                href="https://www.nature.com/articles/nature20587"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#756F63] hover:text-[#5a554b] transition-colors font-medium"
              >
                Gamma frequency entrainment attenuates amyloid load and modifies microglia
              </a>
              <p className="text-black/60 mt-1 leading-relaxed">
                The 2016 Nature paper from MIT that launched the field of gamma sensory stimulation research.
              </p>
            </li>
            <li>
              <a
                href="https://news.mit.edu/2025/evidence-40hz-gamma-stimulation-promotes-brain-health-expanding-0314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#756F63] hover:text-[#5a554b] transition-colors font-medium"
              >
                Evidence that 40Hz gamma stimulation promotes brain health is expanding
              </a>
              <p className="text-black/60 mt-1 leading-relaxed">
                MIT's 2025 review of a decade of research from labs worldwide on gamma entrainment benefits.
              </p>
            </li>
            <li>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10198548/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#756F63] hover:text-[#5a554b] transition-colors font-medium"
              >
                Binaural beats to entrain the brain? A systematic review
              </a>
              <p className="text-black/60 mt-1 leading-relaxed">
                A comprehensive review of studies on binaural beat stimulation and brainwave entrainment.
              </p>
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s41586-024-07132-6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#756F63] hover:text-[#5a554b] transition-colors font-medium"
              >
                Multisensory gamma stimulation promotes glymphatic clearance
              </a>
              <p className="text-black/60 mt-1 leading-relaxed">
                2024 Nature paper showing how 40Hz stimulation supports the brain's waste-clearing system.
              </p>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-3">
              <Logo variant="icon" size="sm" />
              <span className="text-black/40 text-sm">© 2026 Repose. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
