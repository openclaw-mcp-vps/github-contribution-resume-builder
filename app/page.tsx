export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          AI-Powered Resume Builder for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Your GitHub Activity Into{' '}
          <span className="text-[#58a6ff]">Resume Gold</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop underselling yourself. We analyze your commits, PRs, and issues then generate quantified resume bullets with real business impact language — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-base"
        >
          Get Started for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        {/* Example bullets */}
        <div className="mt-14 text-left bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8b949e] mb-2">Example output</p>
          {[
            '• Reduced API response time by 43% by refactoring database query layer, improving user retention for 12,000+ MAU product',
            '• Shipped 3 major features across 47 PRs in Q3, accelerating release cadence by 2 weeks ahead of schedule',
            '• Resolved 28 critical bugs in authentication flow, cutting support tickets by 60% and improving NPS score'
          ].map((bullet, i) => (
            <p key={i} className="text-sm text-[#c9d1d9] leading-relaxed border-l-2 border-[#58a6ff] pl-4">{bullet}</p>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Connect unlimited GitHub repos',
              'AI-generated resume bullets',
              'Quantified impact language',
              'PDF export ready',
              'New bullets as you ship code',
              'Cancel anytime'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it work?',
              a: 'Connect your GitHub account via OAuth. We analyze your commit messages, PR descriptions, and issue activity, then use AI to rewrite them as quantified resume bullets with business impact language.'
            },
            {
              q: 'Is my GitHub data safe?',
              a: 'We only request read-only access to your public and private repositories. Your code is never stored — only metadata like commit counts, PR titles, and issue summaries are processed.'
            },
            {
              q: 'What if I want to cancel?',
              a: 'Cancel anytime from your billing portal with one click. No questions asked, no hidden fees. Your subscription ends at the current billing period.'
            }
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GitResume. Built for developers who ship.
      </footer>
    </main>
  )
}
