import {
  Share2,
  PenTool,
  Sparkles,
  Users,
  Target,
  Compass,
  MessagesSquare,
  BarChart3,
  LineChart,
  TrendingUp,
  Eye,
  Heart,
  Search,
  Rocket,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Share2,
  PenTool,
  Sparkles,
  Users,
  Target,
  Compass,
  MessagesSquare,
  BarChart3,
  LineChart,
  TrendingUp,
  Eye,
  Heart,
  Search,
  Rocket,
  RefreshCw,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
