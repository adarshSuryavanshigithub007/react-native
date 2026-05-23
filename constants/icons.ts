/**
 * Icon names for @expo/vector-icons (Ionicons).
 * Pair with global.css tokens: text-icon, text-icon-muted, bg-icon-nav-active-bg, etc.
 *
 * @example
 * <Ionicons name={Icons.home} size={22} className="text-icon" />
 * <Ionicons name={Icons.wallet} size={22} color="var(--color-icon-on-dark)" />
 */
import type { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

/** Default icon size — matches --spacing-icon-md in global.css */
export const ICON_SIZE = {
  xs: 16,
  sm: 20,
  md: 22,
  lg: 28,
  xl: 32,
} as const;

export const Icons = {
  home: "home",
  wallet: "wallet-outline",
  chart: "bar-chart-outline",
  person: "person-outline",
  add: "add",
  back: "chevron-back",
  menu: "ellipsis-horizontal",
  notion: "document-text-outline",
  dropbox: "folder-open-outline",
  spotify: "musical-notes-outline",
  github: "logo-github",
  claude: "chatbubble-ellipses-outline",
  canva: "color-palette-outline",
} as const satisfies Record<string, IconName>;
