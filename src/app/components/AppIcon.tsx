interface AppIconProps {
  size: number;
  platform: 'ios' | 'macos';
  showLabel?: boolean;
  label?: string;
}

export function AppIcon({ size, platform, showLabel = false, label }: AppIconProps) {
  const cornerRadius = platform === 'ios' 
    ? size * 0.2237 // iOS uses ~22.37% radius
    : size * 0.2; // macOS uses ~20% radius

  // Logo extends to edges with minimal padding
  const maxRadius = size * 0.46; // Outer circle nearly touches edges
  const centerOffset = size / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background with gradient */}
        <defs>
          <linearGradient id={`iconBg-${size}-${platform}`} x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F5F2" />
            <stop offset="0.5" stopColor="#EFEFE8" />
            <stop offset="1" stopColor="#E8DCC4" />
          </linearGradient>
          
          {/* Logo gradients */}
          <linearGradient id={`iconGrad1-${size}-${platform}`} x1={centerOffset} y1={centerOffset - maxRadius/2} x2={centerOffset} y2={centerOffset + maxRadius/2} gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4CDB8" />
            <stop offset="1" stopColor="#B8B0A0" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`iconGrad2-${size}-${platform}`} x1={centerOffset} y1={centerOffset - maxRadius/2.5} x2={centerOffset} y2={centerOffset + maxRadius/2.5} gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4BBA8" />
            <stop offset="1" stopColor="#A8A090" />
          </linearGradient>
          <linearGradient id={`iconGrad3-${size}-${platform}`} x1={centerOffset} y1={centerOffset - maxRadius/3} x2={centerOffset} y2={centerOffset + maxRadius/3} gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8B0A0" />
            <stop offset="1" stopColor="#9B9488" />
          </linearGradient>
          <linearGradient id={`iconGrad4-${size}-${platform}`} x1={centerOffset} y1={centerOffset - maxRadius/6} x2={centerOffset} y2={centerOffset + maxRadius/6} gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8DCC4" />
            <stop offset="1" stopColor="#D4CDB8" />
          </linearGradient>
        </defs>

        {/* Rounded rectangle background */}
        <rect
          width={size}
          height={size}
          rx={cornerRadius}
          fill={`url(#iconBg-${size}-${platform})`}
        />

        {/* Logo circles centered */}
        <circle cx={centerOffset} cy={centerOffset} r={maxRadius} fill={`url(#iconGrad1-${size}-${platform})`} opacity="0.15" />
        <circle cx={centerOffset} cy={centerOffset} r={maxRadius * 0.73} fill={`url(#iconGrad2-${size}-${platform})`} opacity="0.25" />
        <circle cx={centerOffset} cy={centerOffset} r={maxRadius * 0.47} fill={`url(#iconGrad3-${size}-${platform})`} opacity="0.4" />
        <circle cx={centerOffset} cy={centerOffset} r={maxRadius * 0.20} fill={`url(#iconGrad4-${size}-${platform})`} />
      </svg>
      {showLabel && label && (
        <div className="text-xs text-black/60 text-center">{label}</div>
      )}
    </div>
  );
}