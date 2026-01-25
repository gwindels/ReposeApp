import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Moon } from "lucide-react";

interface ColorScheme {
  name: string;
  description: string;
  logo: {
    outer: string;
    mid: string;
    inner: string;
    core: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    bg1: string;
    bg2: string;
    bg3: string;
    text: string;
  };
}

interface ColorSchemeOptionProps {
  scheme: ColorScheme;
}

export function ColorSchemeOption({ scheme }: ColorSchemeOptionProps) {
  return (
    <Card className="overflow-hidden">
      {/* Header with gradient */}
      <div 
        className="p-8 border-b border-black/5"
        style={{ 
          background: `linear-gradient(135deg, ${scheme.colors.bg1} 0%, ${scheme.colors.bg2} 50%, ${scheme.colors.bg3} 100%)` 
        }}
      >
        <div className="flex items-center justify-center mb-6">
          {/* Logo */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" fill={scheme.logo.outer} opacity="0.15" />
            <circle cx="60" cy="60" r="37" fill={scheme.logo.mid} opacity="0.3" />
            <circle cx="60" cy="60" r="24" fill={scheme.logo.inner} opacity="0.5" />
            <circle cx="60" cy="60" r="12" fill={scheme.logo.core} />
          </svg>
        </div>
        <h3 className="text-center text-2xl mb-2" style={{ fontWeight: 300, letterSpacing: '1px', color: scheme.colors.text }}>
          {scheme.name}
        </h3>
        <p className="text-center text-sm opacity-70" style={{ color: scheme.colors.text }}>
          {scheme.description}
        </p>
      </div>

      {/* Color Swatches */}
      <div className="p-6 bg-white space-y-4">
        <div>
          <div className="text-xs mb-2 text-black/50">Primary Colors</div>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <div className="h-12 rounded-lg mb-1" style={{ backgroundColor: scheme.colors.primary }} />
              <div className="text-xs text-black/40">Primary</div>
            </div>
            <div>
              <div className="h-12 rounded-lg mb-1" style={{ backgroundColor: scheme.colors.secondary }} />
              <div className="text-xs text-black/40">Secondary</div>
            </div>
            <div>
              <div className="h-12 rounded-lg mb-1" style={{ backgroundColor: scheme.colors.accent1 }} />
              <div className="text-xs text-black/40">Accent 1</div>
            </div>
            <div>
              <div className="h-12 rounded-lg mb-1" style={{ backgroundColor: scheme.colors.accent2 }} />
              <div className="text-xs text-black/40">Accent 2</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs mb-2 text-black/50">Backgrounds</div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <div className="h-12 rounded-lg border border-black/5 mb-1" style={{ backgroundColor: scheme.colors.bg1 }} />
              <div className="text-xs text-black/40">BG 1</div>
            </div>
            <div>
              <div className="h-12 rounded-lg border border-black/5 mb-1" style={{ backgroundColor: scheme.colors.bg2 }} />
              <div className="text-xs text-black/40">BG 2</div>
            </div>
            <div>
              <div className="h-12 rounded-lg border border-black/5 mb-1" style={{ backgroundColor: scheme.colors.bg3 }} />
              <div className="text-xs text-black/40">BG 3</div>
            </div>
          </div>
        </div>

        {/* Sample UI */}
        <div className="pt-4 space-y-3">
          <div className="text-xs mb-2 text-black/50">Sample UI</div>
          <Button 
            className="w-full rounded-full"
            style={{ 
              background: `linear-gradient(135deg, ${scheme.colors.primary} 0%, ${scheme.colors.secondary} 100%)`,
              border: 'none',
              color: 'white'
            }}
          >
            Start Session
          </Button>
          <div 
            className="p-4 rounded-xl border"
            style={{ 
              backgroundColor: scheme.colors.bg1,
              borderColor: `${scheme.colors.primary}20`
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${scheme.colors.accent1}30` }}
              >
                <Moon className="w-4 h-4" style={{ color: scheme.colors.primary }} />
              </div>
              <div>
                <div className="text-sm" style={{ fontWeight: 400, color: scheme.colors.text }}>
                  Deep Rest
                </div>
                <div className="text-xs opacity-60" style={{ color: scheme.colors.text }}>
                  45-minute session
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
