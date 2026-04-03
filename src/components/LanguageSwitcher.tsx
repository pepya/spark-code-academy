import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "bg", flag: "🇧🇬", label: "Български" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select value={i18n.language?.substring(0, 2)} onValueChange={(v) => i18n.changeLanguage(v)}>
      <SelectTrigger className="w-auto gap-2 border-sidebar-border bg-sidebar text-sidebar-foreground text-sm h-9">
        <Globe size={14} />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
