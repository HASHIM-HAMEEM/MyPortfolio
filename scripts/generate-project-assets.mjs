import { mkdirSync, writeFileSync } from "node:fs"

const outDir = new URL("../public/projects/generated/", import.meta.url)
mkdirSync(outDir, { recursive: true })

const projects = [
  {
    id: "my-rental-find",
    title: "My Rental Find",
    subtitle: "Property SaaS",
    metric: "$14.6k",
    label: "Available balance",
    accent: "#0f766e",
    secondary: "#2563eb",
    panels: ["Tenants", "Maintenance", "Leases", "Payments"],
  },
  {
    id: "billexpert",
    title: "BillExpert",
    subtitle: "Invoice manager",
    metric: "$8,240",
    label: "Paid this month",
    accent: "#2563eb",
    secondary: "#f59e0b",
    panels: ["Invoices", "Clients", "PDF", "Reports"],
  },
  {
    id: "iqra-library",
    title: "IQRA Library",
    subtitle: "Mobile + dashboard",
    metric: "1,240",
    label: "Student entries",
    accent: "#7c3aed",
    secondary: "#0f766e",
    panels: ["QR Scan", "Members", "Sessions", "Sync"],
  },
  {
    id: "library-dashboard",
    title: "Library Dashboard",
    subtitle: "Admin access system",
    metric: "96%",
    label: "Attendance accuracy",
    accent: "#0891b2",
    secondary: "#7c3aed",
    panels: ["Access", "Analytics", "Roles", "Alerts"],
  },
  {
    id: "flutter-welcome-kit",
    title: "Flutter Welcome Kit",
    subtitle: "Onboarding package",
    metric: "pub.dev",
    label: "Published package",
    accent: "#22c55e",
    secondary: "#2563eb",
    panels: ["Tours", "Tooltips", "Overlay", "A11y"],
  },
  {
    id: "islamic-kit",
    title: "Islamic Kit",
    subtitle: "Flutter toolkit",
    metric: "4 APIs",
    label: "Prayer, qibla, hijri",
    accent: "#0d9488",
    secondary: "#d97706",
    panels: ["Prayer", "Qibla", "Hijri", "Zakat"],
  },
  {
    id: "maududi-library",
    title: "Maududi Library",
    subtitle: "Knowledge app",
    metric: "Offline",
    label: "Books and media",
    accent: "#a16207",
    secondary: "#0f766e",
    panels: ["Books", "AI", "Video", "Notes"],
  },
  {
    id: "iqbal-literature",
    title: "Iqbal Literature",
    subtitle: "Poetry analysis",
    metric: "AI",
    label: "Bilingual insights",
    accent: "#db2777",
    secondary: "#2563eb",
    panels: ["Poems", "Meaning", "Share", "Search"],
  },
  {
    id: "file-management",
    title: "File Management",
    subtitle: "Document organizer",
    metric: "SQLite",
    label: "Local first storage",
    accent: "#475569",
    secondary: "#0f766e",
    panels: ["PDF", "Folders", "Tags", "Themes"],
  },
  {
    id: "qatar-al-nada",
    title: "Qatar Al Nada",
    subtitle: "Arabic text study",
    metric: "Offline",
    label: "Classical reading",
    accent: "#b45309",
    secondary: "#0f766e",
    panels: ["Text", "Search", "Notes", "Reader"],
  },
  {
    id: "hms",
    title: "HMS",
    subtitle: "Hostel management",
    metric: "QR",
    label: "Student operations",
    accent: "#4f46e5",
    secondary: "#dc2626",
    panels: ["Rooms", "Fees", "Email", "IDs"],
  },
  {
    id: "iqbal-poetry",
    title: "Iqbal Poetry",
    subtitle: "Digital library",
    metric: "Search",
    label: "Responsive poetry archive",
    accent: "#9333ea",
    secondary: "#0891b2",
    panels: ["Poems", "Auth", "Library", "Filter"],
  },
  {
    id: "kamoos-app",
    title: "Kamoos",
    subtitle: "Arabic dictionary",
    metric: "A-Z",
    label: "Definitions and lookup",
    accent: "#0f766e",
    secondary: "#6d28d9",
    panels: ["Words", "Roots", "Search", "Save"],
  },
  {
    id: "tafaseer",
    title: "Tafaseer",
    subtitle: "Quran tafseer app",
    metric: "10",
    label: "Tafseer sources",
    accent: "#16a34a",
    secondary: "#0e7490",
    panels: ["Quran", "Sources", "Marks", "Offline"],
  },
  {
    id: "iqbal-app",
    title: "Iqbal",
    subtitle: "Poetry and philosophy",
    metric: "Curated",
    label: "Focused mobile reader",
    accent: "#c2410c",
    secondary: "#2563eb",
    panels: ["Life", "Poetry", "Books", "Notes"],
  },
]

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")

function asset(project) {
  const chips = project.panels
    .map((panel, index) => {
      const x = 72 + (index % 2) * 168
      const y = 238 + Math.floor(index / 2) * 48
      return `
        <g>
          <rect x="${x}" y="${y}" width="142" height="30" rx="7" fill="#ffffff" opacity="0.9"/>
          <circle cx="${x + 17}" cy="${y + 15}" r="4" fill="${index % 2 ? project.secondary : project.accent}"/>
          <text x="${x + 30}" y="${y + 20}" font-size="12" font-weight="600" fill="#20242b">${escapeXml(panel)}</text>
        </g>`
    })
    .join("")

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-label="${escapeXml(project.title)} project preview">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#f8f5ee"/>
      <stop offset="1" stop-color="#e8edf4"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${project.accent}"/>
      <stop offset="1" stop-color="${project.secondary}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="24" flood-color="#101828" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="1200" height="720" fill="url(#bg)"/>
  <rect x="54" y="54" width="1092" height="612" rx="34" fill="#ffffff" opacity="0.72"/>
  <g filter="url(#shadow)">
    <rect x="110" y="108" width="654" height="438" rx="28" fill="#111827"/>
    <rect x="110" y="108" width="654" height="76" rx="28" fill="#171f2c"/>
    <circle cx="154" cy="146" r="8" fill="#ef4444"/>
    <circle cx="180" cy="146" r="8" fill="#f59e0b"/>
    <circle cx="206" cy="146" r="8" fill="#22c55e"/>
    <rect x="138" y="214" width="280" height="116" rx="22" fill="url(#accent)"/>
    <text x="164" y="256" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" fill="#ffffff">${escapeXml(project.metric)}</text>
    <text x="166" y="294" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#e8fff9">${escapeXml(project.label)}</text>
    <rect x="452" y="214" width="252" height="116" rx="22" fill="#202b3a"/>
    <path d="M482 294 C512 252, 546 282, 574 244 C604 204, 632 252, 678 224" fill="none" stroke="${project.secondary}" stroke-width="10" stroke-linecap="round"/>
    <rect x="138" y="374" width="566" height="118" rx="22" fill="#202b3a"/>
    <rect x="166" y="408" width="144" height="12" rx="6" fill="#475569"/>
    <rect x="166" y="440" width="438" height="12" rx="6" fill="${project.accent}" opacity="0.9"/>
    <rect x="166" y="466" width="318" height="12" rx="6" fill="#64748b"/>
  </g>
  <g filter="url(#shadow)">
    <rect x="724" y="162" width="330" height="438" rx="42" fill="#101828"/>
    <rect x="746" y="198" width="286" height="366" rx="26" fill="#f8fafc"/>
    <rect x="782" y="226" width="96" height="14" rx="7" fill="${project.accent}"/>
    <text x="782" y="282" font-family="Arial, Helvetica, sans-serif" font-size="33" font-weight="700" fill="#111827">${escapeXml(project.title)}</text>
    <text x="782" y="314" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#64748b">${escapeXml(project.subtitle)}</text>
    ${chips}
    <rect x="782" y="488" width="214" height="42" rx="12" fill="url(#accent)"/>
    <text x="836" y="515" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#ffffff">OPEN PROJECT</text>
  </g>
  <text x="108" y="622" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#111827">${escapeXml(project.title)}</text>
  <text x="108" y="650" font-family="Arial, Helvetica, sans-serif" font-size="15" fill="#64748b">${escapeXml(project.subtitle)}</text>
</svg>`
}

for (const project of projects) {
  writeFileSync(new URL(`${project.id}.svg`, outDir), asset(project), "utf8")
}

console.log(`Generated ${projects.length} project assets in ${outDir.pathname}`)
