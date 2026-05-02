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
