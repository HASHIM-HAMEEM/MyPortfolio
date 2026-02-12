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
    id: "1",
    title: "Building Production-Ready Flutter Apps with Riverpod",
    date: "January 28, 2025",
    description: "State management lessons learned from building BillExpert with 10,000+ users. How Riverpod transformed our app architecture and improved maintainability.",
    content: `# Building Production-Ready Flutter Apps with Riverpod

When I started building BillExpert, I knew state management would be crucial for a complex invoice management app. After trying various approaches, Riverpod proved to be the game-changer.

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

Riverpod made our codebase more maintainable and our team more productive.`,
    tags: ["Flutter", "Riverpod", "State Management", "Mobile Development"],
    readTime: 5,
    slug: "building-production-ready-flutter-apps-with-riverpod"
  },
  {
    id: "2",
    title: "Integrating AI APIs in Flutter Apps",
    date: "January 21, 2025",
    description: "My experience integrating Gemini API in Maududi Library app. Learn how to build AI-powered features that enhance user experience without compromising performance.",
    content: `# Integrating AI APIs in Flutter Apps

Building Maududi Library taught me valuable lessons about integrating AI APIs in mobile applications. Here's how I implemented Gemini API for an AI-powered assistant.

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

The AI integration significantly improved user engagement and made complex content more accessible.`,
    tags: ["Flutter", "AI", "Gemini API", "Mobile Development"],
    readTime: 4,
    slug: "integrating-ai-apis-in-flutter-apps"
  },
  {
    id: "3",
    title: "Offline-First Architecture in Mobile Apps",
    date: "January 15, 2025",
    description: "How I implemented offline-first architecture in BillExpert using Hive database. Learn strategies for building apps that work seamlessly without internet connection.",
    content: `# Offline-First Architecture in Mobile Apps

BillExpert needed to work reliably even with poor internet connectivity. Here's how I implemented offline-first architecture using Hive.

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

This approach ensured BillExpert worked reliably for users worldwide.`,
    tags: ["Flutter", "Hive", "Offline", "Database", "Architecture"],
    readTime: 6,
    slug: "offline-first-architecture-in-mobile-apps"
  },
  {
    id: "4",
    title: "Building Flutter Packages: From Idea to Publication",
    date: "January 8, 2025",
    description: "The complete journey of creating Flutter Welcome Kit and Islamic Kit packages. Learn how to build, test, and publish packages that serve the community.",
    content: `# Building Flutter Packages: From Idea to Publication

Creating Flutter Welcome Kit and Islamic Kit taught me the complete package development lifecycle. Here's my process for building packages that serve the community.

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

Both packages now serve thousands of developers worldwide.`,
    tags: ["Flutter", "Dart", "Package Development", "Open Source"],
    readTime: 7,
    slug: "building-flutter-packages-from-idea-to-publication"
  },
  {
    id: "5",
    title: "Multi-Currency Support in Flutter Apps",
    date: "December 30, 2024",
    description: "Implementing real-time exchange rates and multi-currency support in BillExpert. Learn how to handle currency conversion, formatting, and user preferences.",
    content: `# Multi-Currency Support in Flutter Apps

BillExpert needed to support multiple currencies for international clients. Here's how I implemented real-time exchange rates and currency conversion.

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

This feature made BillExpert truly international.`,
    tags: ["Flutter", "API Integration", "Currency", "Internationalization"],
    readTime: 5,
    slug: "multi-currency-support-in-flutter-apps"
  },
  {
    id: "6",
    title: "Full-Stack Development with Next.js and Supabase",
    date: "December 18, 2024",
    description: "Building the IQRA Library Dashboard with Next.js and Supabase. Learn how to create modern web applications with real-time features and authentication.",
    content: `# Full-Stack Development with Next.js and Supabase

The IQRA Library Dashboard required real-time synchronization with the mobile app. Here's how I built it using Next.js and Supabase.

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

This full-stack approach ensured seamless integration between mobile and web platforms.`,
    tags: ["Next.js", "Supabase", "TypeScript", "Full-Stack", "React"],
    readTime: 6,
    slug: "full-stack-development-with-nextjs-and-supabase"
  },
  {
    id: "7",
    title: "PDF Generation and Document Handling in Flutter",
    date: "December 9, 2024",
    description: "Creating professional invoices and documents in BillExpert. Learn how to generate PDFs, handle templates, and provide download functionality.",
    content: `# PDF Generation and Document Handling in Flutter

BillExpert needed to generate professional invoices and receipts. Here's how I implemented PDF generation with custom templates.

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

Professional document generation significantly improved user experience.`,
    tags: ["Flutter", "PDF", "Document Generation", "Templates"],
    readTime: 5,
    slug: "pdf-generation-and-document-handling-in-flutter"
  },
  {
    id: "8",
    title: "Clean Architecture in Flutter: Lessons Learned",
    date: "November 29, 2024",
    description: "How I structured my Flutter projects for maintainability and scalability. Learn about folder organization, dependency injection, and testing strategies.",
    content: `# Clean Architecture in Flutter: Lessons Learned

After building multiple Flutter apps, I've learned the importance of clean architecture. Here's how I structure my projects for long-term maintainability.

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

Clean architecture makes code more maintainable and teams more productive.`,
    tags: ["Flutter", "Architecture", "Clean Code", "Best Practices"],
    readTime: 6,
    slug: "clean-architecture-in-flutter-lessons-learned"
  },
  {
    id: "9",
    title: "Optimizing Next.js Applications for Performance",
    date: "November 18, 2024",
    description: "Deep dive into Next.js performance optimization techniques. From image optimization to code splitting and server components.",
    content: `# Optimizing Next.js Applications for Performance

Performance is key for user retention. Here is how I optimize Next.js applications for maximum speed and efficiency.

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

By implementing these strategies, we can achieve excellent Core Web Vitals scores.`,
    tags: ["Next.js", "Performance", "React", "Web Development"],
    readTime: 5,
    slug: "optimizing-nextjs-applications-for-performance"
  },
  {
    id: "10",
    title: "The Power of TypeScript in Modern Web Development",
    date: "November 6, 2024",
    description: "Why I use TypeScript for all my projects. Exploring type safety, developer experience, and how it prevents bugs before they happen.",
    content: `# The Power of TypeScript in Modern Web Development

TypeScript has become an indispensable tool in my development workflow. It's not just about types; it's about confidence.

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

While there is a learning curve, the long-term benefits of TypeScript far outweigh the initial setup cost.`,
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    readTime: 4,
    slug: "the-power-of-typescript-in-modern-web-development"
  }
];
