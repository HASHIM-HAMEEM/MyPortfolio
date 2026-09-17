export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  readTime: number;
  slug: string;
}

export const blogs: BlogPost[] = [
  {
    id: "19",
    title: "Fiqh.ai: Hybrid Search Without Hallucinated Citations",
    date: "September 10, 2026",
    description: "Why I refused to let an LLM answer Fiqh questions directly, and how BM25 + Arabic sentence embeddings fused with Reciprocal Rank Fusion give scholars exact volume and page references instead.",
    content: `# Fiqh.ai: Hybrid Search Without Hallucinated Citations

A chatbot that invents a book title, a fake author, and a wrong page number is a nuisance in most domains. In Islamic jurisprudence it is unacceptable. That single constraint shaped every decision in Fiqh.ai.

## Retrieval, not generation

Fiqh.ai never generates a legal ruling. It retrieves the **exact text, page, volume, and section** from a curated corpus of verified classical Hanafi prints (currently seven books, 115,000+ passages). Every result is traceable to a physical print. I call this Retrieval-Augmented *Reference*: the model helps you find, it never speaks for the scholars.

## Two engines, one ranking

Lexical search alone misses meaning. Search for \`بئر\` (well) and a page that uses the classical \`الركيّ\` is invisible. Semantic search alone drifts and loses exact phrases, names, and Quranic quotations. So both run on every query:

- **Lexical** — SQLite FTS5 with BM25 and a custom Arabic orthographic normalizer (tashkeel stripped, alef/yaa/taa-marbuta variants folded).
- **Semantic** — \`asafaya/bert-base-arabic\` sentence embeddings (768-d) compared by cosine similarity against precomputed vectors stored as float32 blobs.

The two candidate lists are merged with **Reciprocal Rank Fusion**:

\`\`\`
score(d) = Σ 1 / (k + rank_m(d))      k = 60
\`\`\`

Because RRF only looks at *ranks*, BM25 and cosine scores never need to be on the same scale. Exact matches stay at the top; conceptually relevant pages with zero keyword overlap get pulled into the top results.

## The workbench

The frontend (Next.js 16, React 19, vanilla CSS with Parchment / Night / Emerald themes) is built like a manuscript desk: a split-screen context pane slides in from the right, typography controls switch between Amiri, Noto Naskh, and Cairo, and a citation menu copies Chicago, Markdown, or plain-text references. A small text-to-speech layer strips diacritics and parentheticals so the browser reads classical Arabic fluently.

## What I'd tell my past self

Pick the hardest correctness constraint first and let it prune the design space. "No hallucinated citations" removed a whole category of clever-looking features and left a tool scholars can actually trust.

`,
    tags: ["AI", "Search", "Next.js", "FastAPI", "Arabic NLP"],
    readTime: 6,
    slug: "fiqhai-hybrid-search-without-hallucinated-citations",
  },
  {
    id: "20",
    title: "Six Portals, One Product: RBAC in Nile Learn",
    date: "August 27, 2026",
    description: "Designing role-aware portals for students, teachers, registrars, HODs, branch admins, and super admins without forking the UI, and why Moodle stays the source of truth for learning workflows.",
    content: `# Six Portals, One Product: RBAC in Nile Learn

Nile Learn is the learning platform for Nile Center. Public course discovery on the outside; six protected portals on the inside. The trap with multi-role products is to build six apps that slowly drift apart. Here is how I avoided it.

## One shell, role-scoped surfaces

Every portal shares the same layout, tokens, and component library (Vite + React + TypeScript, Tailwind, shadcn/ui). Roles change *which* panels appear and *what* actions are allowed, never the visual language. A registrar and a teacher should feel like they are in the same product because they are.

## Authorization lives on the server

Client-side role checks are hints for rendering, not security. Every protected read and write goes through Express handlers that evaluate the role, branch scope, and ownership before touching Supabase. Browser code only ever sees publishable keys; the service-role key is server-only and never prefixed with \`VITE_\`.

## Let Moodle own learning state

Quizzes, attempts, attendance, and grading are Moodle-owned workflows. Nile Learn integrates through normalized adapters rather than re-implementing an LMS. That decision kept the platform small and gave us an isolated sandbox for synthetic CRUD during QA.

## i18n and RTL from day one

Arabic support is not a post-launch translation task. The layout primitives, iconography, and tables were built with logical properties so flipping direction is a config change, not a redesign.

## Lesson

Role-based products succeed when roles are *permissions* on one system, not *personas* with their own codebase.

`,
    tags: ["React", "TypeScript", "Supabase", "RBAC", "Education"],
    readTime: 5,
    slug: "six-portals-one-product-rbac-in-nile-learn",
  },
  {
    id: "21",
    title: "Faiz E Aam: A Modular Monolith for a Real School",
    date: "August 12, 2026",
    description: "Admissions, fees, results, timetables, notices, and audit trails in one codebase. Why I chose a modular monolith on Supabase/PostgreSQL over microservices, and the rules that keep financial data honest.",
    content: `# Faiz E Aam: A Modular Monolith for a Real School

Schools do not need microservices. They need admissions that never lose an application, fees that reconcile to the paisa, and results that cannot be silently edited after publication. Faiz E Aam is built around those three promises.

## Architecture in one sentence

A modular TypeScript web application (Next.js 15, React 19) backed by one PostgreSQL database on Supabase, one private object store, and a small database-backed outbox for asynchronous work. Public website, applicant centre, guardian portal, and staff workspace live in the same repo with strict route and permission boundaries.

## Rules that shaped the data model

- **Money is integer paise.** No floats, ever. Timestamps are UTC and rendered in Asia/Kolkata.
- **Append-only where it matters.** Financial entries, submitted applications, published results, and audit events are versioned or immutable. History is never overwritten.
- **Forward-only migrations.** Live migrations are never edited; corrections ship as new numbered migrations.
- **Server-side authorization on every protected read and write.** Guardians see only the students linked to them; staff see only their scope.

## Portals, not roles-in-a-dropdown

Administrators manage access and configuration and independently approve consequential work. Principals do daily operational work. Guardians activate access only through a school-initiated invitation bound to the exact guardian record; a student number or a name alone never grants access.

## The design contract

The UI follows a paper-and-ink editorial system: warm paper ground, ink navy type, one saffron accent, fine 1px rules, 4px radii, no drop shadows or gradients. A written anti-slop list forbids the usual generic patterns (checkmark bullets, three-card pricing rows, glassmorphism) so the product stays institutional and calm.

## Takeaway

Constraints written down before code are the cheapest form of quality. The blueprint, status ledger, and design contract did more for correctness than any framework choice.

`,
    tags: ["Next.js", "Supabase", "PostgreSQL", "Architecture", "Education"],
    readTime: 6,
    slug: "faiz-e-aam-modular-monolith-for-a-real-school",
  },
  {
    id: "22",
    title: "Poshsaaz: Motion That Respects the Craft",
    date: "July 22, 2026",
    description: "Building an editorial storefront for a Kashmiri handmade floral brand: scroll-triggered reveals that stay purposeful, Cloudinary-hosted product media, and WhatsApp as the checkout.",
    content: `# Poshsaaz: Motion That Respects the Craft

Poshsaaz makes handcrafted botanical accessories in Kashmir: everlasting bouquets, curtain holdbacks, phone and car charms, currency-origami wedding bouquets. The brief for the website was simple: make the product feel as considered as it is.

## Editorial over grid

Instead of a centered e-commerce grid, the homepage flows like a fashion editorial. A full-bleed hero with left-aligned type, alternating asymmetric sections, a staggered product grid, and hand-drawn SVG curves between sections instead of hard rules. Palette: warm cream, soft blush, sage, lavender, deep plum type, and gold accents that echo the pieces themselves.

## Motion rules

Every animation had to answer "what does this reveal?" Entrance reveals run 300 to 500 ms with ease-out curves, images parallax slightly slower than text for depth, and hover lifts are subtle. Nothing bounces, nothing loops for attention. Framer Motion handles the choreography; \`prefers-reduced-motion\` disables the non-essential layers.

## Media pipeline

Product photography is uploaded once to Cloudinary through a small Node script and referenced by stable public IDs. That keeps the repo free of binaries and lets the boutique swap photos without a deploy.

## Checkout is a conversation

Small artisan brands sell through conversation, not carts. Each product card deep-links to WhatsApp with a pre-filled message naming the piece, price, and category. It converts better than a form and matches how the owner already works with customers.

## Stack

Vite + React + TypeScript, Tailwind CSS 4, Framer Motion, a thin Express server, deployed on Vercel.

`,
    tags: ["React", "Vite", "Framer Motion", "Tailwind CSS", "E-commerce"],
    readTime: 4,
    slug: "poshsaaz-motion-that-respects-the-craft",
  },
  {
    id: "15",
    title: "Flutter: Error Messages People Actually Read",
    date: "May 1, 2026",
    description: "Users do not live in the console. I keep on-screen copy short, add retry when failure is usually temporary, and save stack traces for logs and crash tools.",
    content: `# Flutter: Error Messages People Actually Read

A failed network call is not an excuse to dump a \`SocketException\` into a snackbar.

## What I aim for

- **One plain sentence** — what broke, in ordinary language.
- **Retry** when the problem is often transient (timeouts, flaky Wi‑Fi).
- **Technical detail** elsewhere: expander, support sheet, or your crash reporter — not the default screen.

## Structure

Model async UI as loading / success / error. Give the error branch copy, optional secondary action, and do not block the rest of the app.

## Habits

Log the full exception for yourself. Show the human a path forward when one exists.

`,
    tags: ["Flutter", "UX", "Errors", "Mobile"],
    readTime: 4,
    slug: "flutter-error-messages-people-actually-read",
  },
  {
    id: "16",
    title: "Next.js App Router: Layouts, Loading, and Boundaries",
    date: "April 18, 2026",
    description: "How I use nested layouts, route-level loading UI, and clear server vs client boundaries so pages stay fast and easy to change.",
    content: `# Next.js App Router: Layouts, Loading, and Boundaries

The App Router pays off when structure matches how teams think about screens.

## Layouts

Shared chrome (nav, shell) lives in nested \`layout.tsx\` files. I avoid duplicating headers per page when the route tree already tells the story.

## Loading

\`loading.tsx\` next to a slow segment beats a global spinner. Users see where the work is happening.

## Server and client

Default to Server Components. I mark \`'use client'\` only where interaction or browser APIs require it — smaller bundles, less accidental waterfalls.

## Takeaway

Let the filesystem carry structure; keep components honest about where they run.

`,
    tags: ["Next.js", "React", "App Router", "Web"],
    readTime: 5,
    slug: "nextjs-app-router-layouts-loading-boundaries",
  },
  {
    id: "17",
    title: "Choosing Local Storage in Flutter",
    date: "March 26, 2026",
    description: "Hive, SQLite (Drift), or SharedPreferences — not a popularity contest. A practical split by shape of data, queries, and how often you ship migrations.",
    content: `# Choosing Local Storage in Flutter

There is no universal best store. There is a best fit for the shape of your data.

## SharedPreferences (or secure storage)

Small flags, tokens, last-selected account, theme key. Key–value, read rarely in bulk, no complex queries.

## Hive

Typed boxes, offline cache, medium-sized objects, sync queues. You want structure without SQL and can accept careful migration planning.

## SQLite / Drift

Relational data, reporting-style queries, large tables, integrity constraints. Up-front schema work pays off here.

## Offline-first stacks

My bias: write locally first, sync when online, surface sync state honestly in the UI — whatever engine sits underneath.

`,
    tags: ["Flutter", "Hive", "SQLite", "Architecture"],
    readTime: 5,
    slug: "choosing-local-storage-in-flutter",
  },
  {
    id: "18",
    title: "Flutter Theming: Light, Dark, and System",
    date: "March 4, 2026",
    description: "One ThemeData pipeline: Material 3 color roles, listening to platform brightness, and avoiding hard-coded colors in leaf widgets.",
    content: `# Flutter Theming: Light, Dark, and System

Hard-coded \`Colors.grey\` in fourteen files guarantees a painful redesign.

## Single source

Define light and dark \`ThemeData\` (or \`ColorScheme.fromSeed\`) in one place. Read semantic roles — \`surface\`, \`onSurface\`, \`primary\` — in widgets.

## System setting

\`MediaQuery.platformBrightnessOf(context)\` or \`themeMode: ThemeMode.system\` in MaterialApp respects user choice without extra toggles — optional in-app override comes later.

## Accessibility

Contrast matters in both schemes. Test charts and icons in dark mode, not only the home screen.

`,
    tags: ["Flutter", "UI", "Dark Mode", "Material"],
    readTime: 4,
    slug: "flutter-theming-light-dark-and-system",
  },
  {
    id: "1",
    title: "Riverpod on BillExpert: State That Survived Shipping",
    date: "January 28, 2025",
    description: "How Riverpod handled invoices, rates, PDF flow, and offline sync in a live app — patterns we kept because they survived real users and tests.",
    content: `# Riverpod on BillExpert: State That Survived Shipping

When I started building BillExpert, state management was the bottleneck for invoices, rates, and sync.

## Why Riverpod?

Riverpod offers compile-time safety, excellent testing capabilities, and a clean architecture that scales with your app. In BillExpert, we manage complex state including:
- Multi-currency invoice data
- Real-time exchange rates
- PDF generation states
- Offline synchronization

## Key Patterns

\`\`\`dart
// Provider for invoice state
final invoiceProvider = StateNotifierProvider<InvoiceNotifier, InvoiceState>((ref) {
  return InvoiceNotifier();
});

// Async provider for exchange rates
final exchangeRateProvider = FutureProvider<Map<String, double>>((ref) {
  return ref.watch(apiServiceProvider).getExchangeRates();
});
\`\`\`

## Lessons Learned

- **Use StateNotifierProvider for complex state**
- **Leverage FutureProvider for async data**
- **Keep providers focused and single-responsibility**
- **Test your providers thoroughly**

Riverpod fit that work: compile-time safety, testable providers, and room to grow without rewriting the world.`,
    tags: ["Flutter", "Riverpod", "State Management", "Mobile Development"],
    readTime: 5,
    slug: "building-production-ready-flutter-apps-with-riverpod"
  },
  {
    id: "2",
    title: "Gemini in the Maududi Library App",
    date: "January 21, 2025",
    description: "Hooking up Gemini for on-device help with dense text: prompts, rate limits, offline behavior, and not promising more than the model can safely give.",
    content: `# Gemini in the Maududi Library App

The Maududi Library app needed a calm way to orient readers inside long, difficult passages.

## The Challenge

Users needed help understanding complex Islamic texts. An AI assistant could provide context, translations, and explanations on-demand.

## Implementation Strategy

\`\`\`dart
class AIService {
  Future<String> generateResponse(String prompt) async {
    final response = await _geminiClient.generateContent(
      Content.text(prompt),
    );
    return response.text ?? '';
  }
}
\`\`\`

## Key Considerations

- **Rate limiting and error handling**
- **Offline fallbacks**
- **Privacy and data security**
- **Performance optimization**

The assistant helped engagement without turning every screen into a chat app.`,
    tags: ["Flutter", "AI", "Gemini API", "Mobile Development"],
    readTime: 4,
    slug: "integrating-ai-apis-in-flutter-apps"
  },
  {
    id: "3",
    title: "Offline-First in BillExpert with Hive",
    date: "January 15, 2025",
    description: "Local writes first, sync when the network returns, and honest UI when two devices disagree — Hive as the spine for invoices in the field.",
    content: `# Offline-First in BillExpert with Hive

BillExpert had to run where connectivity does not.

## Why Offline-First?

- Users in areas with poor connectivity
- Critical business operations can't wait
- Better user experience
- Reduced server load

## Hive Implementation

\`\`\`dart
@HiveType(typeId: 0)
class Invoice extends HiveObject {
  @HiveField(0)
  String id;
  
  @HiveField(1)
  String clientName;
  
  @HiveField(2)
  double amount;
}
\`\`\`

## Sync Strategy

- Store all data locally first
- Sync when connection is available
- Handle conflicts gracefully
- Show sync status to users

That recipe beat asking users to find perfect signal before logging a sale.`,
    tags: ["Flutter", "Hive", "Offline", "Database", "Architecture"],
    readTime: 6,
    slug: "offline-first-architecture-in-mobile-apps"
  },
  {
    id: "4",
    title: "From Idea to pub.dev: Flutter Welcome Kit & Islamic Kit",
    date: "January 8, 2025",
    description: "Shipping packages is half API design and half documentation. What I learned publishing Flutter Welcome Kit and Islamic Kit for others to depend on.",
    content: `# From Idea to pub.dev: Flutter Welcome Kit & Islamic Kit

Welcome Kit and Islamic Kit started as repeated code across apps.

## The Idea Phase

- Identify common problems developers face
- Research existing solutions
- Define clear package scope
- Plan the API design

## Development Process

\`\`\`dart
// Example from Flutter Welcome Kit
class WelcomeKit extends StatefulWidget {
  final List<WelcomeStep> steps;
  final VoidCallback? onComplete;
  
  const WelcomeKit({
    Key? key,
    required this.steps,
    this.onComplete,
  }) : super(key: key);
}
\`\`\`

## Testing Strategy

- Unit tests for core logic
- Widget tests for UI components
- Integration tests for complete flows
- Example app for demonstration

## Publication Process

- Write comprehensive documentation
- Create example app
- Follow semantic versioning
- Submit to pub.dev

Pub is unforgiving about breaking changes — plan semver and changelogs like you mean them.`,
    tags: ["Flutter", "Dart", "Package Development", "Open Source"],
    readTime: 7,
    slug: "building-flutter-packages-from-idea-to-publication"
  },
  {
    id: "5",
    title: "Multi-Currency Invoices in Flutter",
    date: "December 30, 2024",
    description: "Rates, formatting, caches, and user defaults so totals stay honest when the network fails or a user switches currency mid-session.",
    content: `# Multi-Currency Invoices in Flutter

International invoices mean rates move, symbols differ, and rounding fights you if you are careless.

## The Requirements

- Support 20+ currencies
- Real-time exchange rates
- Offline currency conversion
- Proper currency formatting
- User currency preferences

## Implementation

\`\`\`dart
class CurrencyService {
  static const String _apiKey = 'YOUR_API_KEY';
  
  Future<Map<String, double>> getExchangeRates() async {
    final response = await http.get(
      Uri.parse('https://api.exchangerate-api.com/v4/latest/USD'),
    );
    return Map<String, double>.from(response.data['rates']);
  }
}
\`\`\`

## Key Features

- **Caching for offline support**
- **Automatic rate updates**
- **Proper number formatting**
- **Currency symbol display**

Solid formatting and cached rates keep trust high when APIs stall.`,
    tags: ["Flutter", "API Integration", "Currency", "Internationalization"],
    readTime: 5,
    slug: "multi-currency-support-in-flutter-apps"
  },
  {
    id: "6",
    title: "IQRA Library: Next.js, Supabase, and Realtime",
    date: "December 18, 2024",
    description: "Admin dashboard paired with the mobile app: Supabase auth, live rows, and avoiding two sources of truth for student records.",
    content: `# IQRA Library: Next.js, Supabase, and Realtime

The IQRA Library stack needed the web admin and the mobile app to read the same truth.

## Architecture Overview

- **Frontend**: Next.js with TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Styling**: Tailwind CSS
- **State Management**: React Context + Hooks

## Key Features

\`\`\`typescript
// Real-time subscription
const { data, error } = useSubscription(
  'students',
  (payload) => {
    console.log('Change received!', payload);
  }
);
\`\`\`

## Implementation Highlights

- **Real-time data synchronization**
- **Role-based authentication**
- **QR code generation**
- **Analytics dashboard**

Supabase carried auth, Postgres, and realtime channels without reinventing sockets.`,
    tags: ["Next.js", "Supabase", "TypeScript", "Full-Stack", "React"],
    readTime: 6,
    slug: "full-stack-development-with-nextjs-and-supabase"
  },
  {
    id: "7",
    title: "PDF Invoices in Flutter (Without Freezing the UI)",
    date: "December 9, 2024",
    description: "BillExpert document pipeline: templates, pagination, and moving PDF work off the main isolate when exports get heavy.",
    content: `# PDF Invoices in Flutter (Without Freezing the UI)

Invoices must look sharp and export reliably — not block gestures while building.

## The Challenge

- Generate professional-looking invoices
- Support multiple templates
- Handle different currencies
- Provide download and sharing options

## PDF Generation

\`\`\`dart
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

Future<Uint8List> generateInvoicePDF(Invoice invoice) async {
  final pdf = pw.Document();
  
  pdf.addPage(
    pw.Page(
      build: (pw.Context context) {
        return pw.Column(
          children: [
            pw.Text('INVOICE', style: pw.TextStyle(fontSize: 24)),
            pw.SizedBox(height: 20),
            pw.Text('Client: \${invoice.clientName}'),
            pw.Text('Amount: \${invoice.amount}'),
          ],
        );
      },
    ),
  );
  
  return pdf.save();
}
\`\`\`

## Key Features

- **Custom invoice templates**
- **Multi-currency support**
- **Company branding**
- **Email integration**

Clear loading states beat a frozen screen during big exports.`,
    tags: ["Flutter", "PDF", "Document Generation", "Templates"],
    readTime: 5,
    slug: "pdf-generation-and-document-handling-in-flutter"
  },
  {
    id: "8",
    title: "Flutter Feature Folders That Stay Navigable",
    date: "November 29, 2024",
    description: "Layers for data, domain, and UI per feature — where I split modules, how I name them, and what I stop importing across feature lines.",
    content: `# Flutter Feature Folders That Stay Navigable

Clean architecture is not a certificate — it is a way to find files six months later.

## Project Structure

\`\`\`
lib/
├── core/
│   ├── constants/
│   ├── errors/
│   └── utils/
├── features/
│   └── invoice/
│       ├── data/
│       ├── domain/
│       └── presentation/
└── shared/
    ├── widgets/
    └── services/
\`\`\`

## Key Principles

- **Separation of concerns**
- **Dependency inversion**
- **Single responsibility**
- **Testability**

## Implementation

\`\`\`dart
// Domain layer
abstract class InvoiceRepository {
  Future<List<Invoice>> getInvoices();
}

// Data layer
class InvoiceRepositoryImpl implements InvoiceRepository {
  final InvoiceDataSource dataSource;
  
  InvoiceRepositoryImpl(this.dataSource);
  
  @override
  Future<List<Invoice>> getInvoices() async {
    return await dataSource.getInvoices();
  }
}
\`\`\`

Tests and refactors hurt less when boundaries stay boring.`,
    tags: ["Flutter", "Architecture", "Clean Code", "Best Practices"],
    readTime: 6,
    slug: "clean-architecture-in-flutter-lessons-learned"
  },
  {
    id: "9",
    title: "Next.js Performance: What I Actually Ship",
    date: "November 18, 2024",
    description: "next/image, dynamic imports for heavy charts, and Server Components where they cut real bytes to the browser — practical Core Web Vitals work.",
    content: `# Next.js Performance: What I Actually Ship

Performance work is boring until users stop bouncing.

## Image Optimization

Next.js provides a powerful Image component that automatically optimizes images.

\`\`\`tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <Image
      src="/hero.png"
      alt="Hero Image"
      width={800}
      height={600}
      priority
    />
  )
}
\`\`\`

## Server Components

Leveraging React Server Components allows us to reduce the client-side bundle size significantly.

- **Fetch data on the server**
- **Keep sensitive logic on the server**
- **Send less JavaScript to the client**

## Code Splitting

Next.js automatically code-splits pages, but we can also use dynamic imports for heavy components.

\`\`\`tsx
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading...</p>,
})
\`\`\`

Small habits compound into green metrics.`,
    tags: ["Next.js", "Performance", "React", "Web Development"],
    readTime: 5,
    slug: "optimizing-nextjs-applications-for-performance"
  },
  {
    id: "10",
    title: "TypeScript on Web Projects by Default",
    date: "November 6, 2024",
    description: "Types pay rent at refactor time: props match APIs, renames are complete, and deploys stop being roulette when the backend shifts shape.",
    content: `# TypeScript on Web Projects by Default

JavaScript is fine until a vendor changes a field name on Friday afternoon.

## Type Safety

Catching errors at compile-time instead of runtime saves countless hours of debugging.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function sendEmail(user: User) {
  // We know exactly what properties user has
  console.log(\`Sending email to \${user.email}\`);
}
\`\`\`

## Better Developer Experience

Autocompletion and IntelliSense make exploring new libraries and APIs a breeze.

## Refactoring with Confidence

When changing a component's props or a function's signature, TypeScript immediately highlights all the places that need to be updated.

## Conclusion

The learning curve exists; the alternative is production surprise.`,
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    readTime: 4,
    slug: "the-power-of-typescript-in-modern-web-development"
  }
];
