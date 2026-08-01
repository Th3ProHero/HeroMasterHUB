/**
 * Master list of all applications displayed in the HeroHUB dashboard.
 *
 * ──────────────────────────────────────────────────────
 *  HOW TO ADD A NEW APP:
 *  1. Add a new object to this array.
 *  2. Pick an emoji for the icon field.
 *  3. Save. That's it — the dashboard updates automatically.
 * ──────────────────────────────────────────────────────
 */

export interface AppInfo {
  /** Display name shown on the card */
  nombre: string;
  /** Full URL to the application */
  url: string;
  /** Port the app runs on */
  port: number;
  /** Short description of the app's purpose */
  descripcion: string;
  /** Emoji icon displayed on the card */
  icon: string;
}

export const apps: AppInfo[] = [
  {
    nombre: "Finance Hero",
    url: "https://finance.mbautistahub.com",
    port: 3005,
    descripcion: "Sistema de gestión financiera y control de gastos.",
    icon: "💰",
  },
  {
    nombre: "Marvel Degrees",
    url: "https://marveldegrees.com",
    port: 8088,
    descripcion: "Plataforma de títulos y certificaciones Marvel.",
    icon: "🦸‍♂️",
  },
  {
    nombre: "Jenny Dentista",
    url: "https://jennydentista.com",
    port: 8083,
    descripcion: "Sitio web del consultorio dental Jenny.",
    icon: "🦷",
  },
  {
    nombre: "Abarrotes Las Flores",
    url: "https://abarroteslasflores.com",
    port: 8081,
    descripcion: "Tienda en línea de abarrotes Las Flores.",
    icon: "🛒",
  },
  {
    nombre: "AudioSpace",
    url: "http://192.168.0.220:8082",
    port: 8082,
    descripcion: "Plataforma de streaming y gestión de audio.",
    icon: "🎵",
  },
  {
    nombre: "Portainer",
    url: "http://192.168.0.220:9000",
    port: 9000,
    descripcion: "Gestión visual de contenedores Docker y stacks.",
    icon: "🐳",
  },
  {
    nombre: "Netdata",
    url: "http://192.168.0.220:9090",
    port: 9090,
    descripcion: "Monitor de rendimiento y métricas del servidor.",
    icon: "📈",
  },
];
