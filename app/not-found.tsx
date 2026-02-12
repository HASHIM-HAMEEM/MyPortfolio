import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Glitchy 404 number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[160px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#64FFDA] to-[#64FFDA]/20">
            404
          </h1>
          <div className="absolute inset-0 text-[120px] md:text-[160px] font-bold leading-none tracking-tighter text-[#64FFDA]/5 blur-xl">
            404
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#E1E3E5] mb-3">
          Page not found
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#64FFDA] text-[#0a0a0a] font-semibold text-sm hover:bg-[#52e8c8] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700/80 text-zinc-300 text-sm font-medium hover:border-[#64FFDA]/30 hover:text-[#64FFDA] transition-all"
          >
            Read Blogs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Decorative dots */}
        <div className="mt-16 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/25" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/15" />
        </div>
      </div>
    </div>
  )
}
