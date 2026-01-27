interface BetaButtonProps {
  className?: string;
}

// Replace with your actual TestFlight public link
const TESTFLIGHT_URL = "https://testflight.apple.com/join/YOUR_CODE_HERE";

export function BetaButton({ className = '' }: BetaButtonProps) {
  return (
    <a
      href={TESTFLIGHT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:scale-105 ${className}`}
      style={{
        backgroundColor: '#2A2A28',
        color: '#ffffff'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-70">Join the Beta</div>
        <div className="text-base font-medium">Download on TestFlight</div>
      </div>
    </a>
  );
}
