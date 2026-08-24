import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Search, Globe } from "lucide-react";
import { LANGUAGES, LANGUAGE_ENGLISH_NAMES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  value: string;
  onChange: (lang: string) => void;
  label?: string;
  className?: string;
};

export function LanguageSelector({ value, onChange, label, className }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const filtered = LANGUAGES.filter((lang) => {
    const q = query.toLowerCase();
    return (
      lang.toLowerCase().includes(q) ||
      LANGUAGE_ENGLISH_NAMES[lang]?.toLowerCase().includes(q)
    );
  });

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {label && (
        <label className="ml-1 text-sm font-medium text-zinc-500">{label}</label>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 flex min-h-12 w-full items-center justify-between rounded-xl bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        <span className="flex items-center gap-2">
          <Globe className="size-4 text-zinc-400" strokeWidth={1.5} />
          <span className="text-base">{value}</span>
          <span className="text-xs text-zinc-400">({LANGUAGE_ENGLISH_NAMES[value]})</span>
        </span>
        <ChevronDown
          className={cn("size-4 text-zinc-400 transition-transform", open && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-zinc-950/10">
          <div className="border-b border-zinc-100 p-2">
            <div className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2">
              <Search className="size-4 text-zinc-400" strokeWidth={1.5} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search language..."
                className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <p className="px-3 py-4 text-center text-sm text-zinc-400">No languages found</p>
            ) : (
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {filtered.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      onChange(lang);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-zinc-50",
                      value === lang && "bg-clinical-teal/5",
                    )}
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-zinc-900">{lang}</span>
                      <span className="text-xs text-zinc-400">{LANGUAGE_ENGLISH_NAMES[lang]}</span>
                    </span>
                    {value === lang && <Check className="size-4 text-clinical-teal" strokeWidth={2} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
