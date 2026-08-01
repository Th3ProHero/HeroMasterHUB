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
    nombre: "Abarrotes Las Flores",
    url: "https://abarroteslasflores.com",
    port: 8082,
    descripcion: "Tienda en línea de abarrotes Las Flores.",
    icon: "🛒",
  },
  {
    nombre: "Jenny Dentista",
    url: "https://jennydentista.com",
    port: 8083,
    descripcion: "Sitio web del consultorio dental Jenny.",
    icon: "🦷",
  },
  {
    nombre: "Marvel Degrees",
    url: "https://marveldegrees.com",
    port: 8088,
    descripcion: "Plataforma de títulos y certificaciones Marvel.",
    icon: "🦸‍♂️",
  },
  {
    nombre: "HeroMaster HUB",
    url: "https://hub.mbautistahub.com",
    port: 3000,
    descripcion: "Hub centralizado de aplicaciones y servicios locales.",
    icon: "⚡",
  },
  {
    nombre: "Finance Hero",
    url: "https://finance.mbautistahub.com",
    port: 3005,
    descripcion: "Sistema de gestión financiera y control de gastos.",
    icon: "💰",
  },
  {
    nombre: "UbuntuDashboard Server",
    url: "https://dashboard.mbautistahub.com",
    port: 9091,
    descripcion: "Panel de control y monitoreo del servidor Ubuntu.",
    icon: "🖥️",
  },
  {
    nombre: "HeroGPT",
    url: "https://herogpt.mbautistahub.com",
    port: 8084,
    descripcion: "Asistente IA local y procesamiento de lenguaje.",
    icon: "🤖",
  },
  {
    nombre: "Server Statics",
    url: "https://statics.mbautistahub.com",
    port: 9091,
    descripcion: "Servidor de archivos estáticos y recursos web.",
    icon: "📁",
  },
  {
    nombre: "Food and Matcha",
    url: "https://foodandmatcha.mbautistahub.com",
    port: 3010,
    descripcion: "Plataforma gastronómica y tienda especial de Matcha.",
    icon: "🍵",
  },
];
