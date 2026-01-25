interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 40, iconSize: 32 },
    md: { width: 160, height: 50, iconSize: 40 },
    lg: { width: 200, height: 60, iconSize: 48 },
    xl: { width: 280, height: 80, iconSize: 64 }
  };

  const { width, height, iconSize } = sizes[size];

  if (variant === 'icon') {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Dissolving wave layers - representing binaural frequencies */}
        <circle cx="32" cy="32" r="30" fill="url(#gradient1)" opacity="0.15" />
        <circle cx="32" cy="32" r="22" fill="url(#gradient2)" opacity="0.25" />
        <circle cx="32" cy="32" r="14" fill="url(#gradient3)" opacity="0.4" />
        
        {/* Center core - the still point */}
        <circle cx="32" cy="32" r="6" fill="url(#gradient4)" />
        
        <defs>
          <linearGradient id="gradient1" x1="32" y1="2" x2="32" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4CDB8" />
            <stop offset="1" stopColor="#B8B0A0" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="32" y1="10" x2="32" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4BBA8" />
            <stop offset="1" stopColor="#A8A090" />
          </linearGradient>
          <linearGradient id="gradient3" x1="32" y1="18" x2="32" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8B0A0" />
            <stop offset="1" stopColor="#9B9488" />
          </linearGradient>
          <linearGradient id="gradient4" x1="32" y1="26" x2="32" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8DCC4" />
            <stop offset="1" stopColor="#D4CDB8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon */}
      <circle cx="40" cy="40" r="30" fill="url(#fullGradient1)" opacity="0.15" />
      <circle cx="40" cy="40" r="22" fill="url(#fullGradient2)" opacity="0.25" />
      <circle cx="40" cy="40" r="14" fill="url(#fullGradient3)" opacity="0.4" />
      <circle cx="40" cy="40" r="6" fill="url(#fullGradient4)" />
      
      {/* Text */}
      <text
        x="90"
        y="52"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="32"
        fontWeight="300"
        letterSpacing="2"
        fill="#2A2A28"
      >
        REPOSE
      </text>
      
      <defs>
        <linearGradient id="fullGradient1" x1="40" y1="10" x2="40" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4CDB8" />
          <stop offset="1" stopColor="#B8B0A0" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="fullGradient2" x1="40" y1="18" x2="40" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4BBA8" />
          <stop offset="1" stopColor="#A8A090" />
        </linearGradient>
        <linearGradient id="fullGradient3" x1="40" y1="26" x2="40" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B8B0A0" />
          <stop offset="1" stopColor="#9B9488" />
        </linearGradient>
        <linearGradient id="fullGradient4" x1="40" y1="34" x2="40" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8DCC4" />
          <stop offset="1" stopColor="#D4CDB8" />
        </linearGradient>
      </defs>
    </svg>
  );
}