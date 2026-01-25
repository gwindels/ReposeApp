interface ColorSwatchProps {
  name: string;
  value: string;
  description?: string;
}

export function ColorSwatch({ name, value, description }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="h-24 rounded-2xl border border-black/5 shadow-sm"
        style={{ backgroundColor: value }}
      />
      <div>
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-black/50 font-mono">{value}</div>
        {description && (
          <div className="text-xs text-black/60 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
}
