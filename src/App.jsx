import { useState } from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'rice', label: 'RICE Method' },
  { id: 'geo', label: 'GEO / AI Training' },
  { id: 'competitor', label: 'Competitor Research' },
  { id: 'keywords', label: 'Keyword Research' },
  { id: 'citations', label: 'AI Citations' },
  { id: 'brand', label: 'Brand Memory' },
]

function NavBar({ active, onNav }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="text-purple-400 font-bold text-lg tracking-tight">AI SEO</span>
        <div className="hidden md:flex gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                active === s.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => { onNav(s.id); setOpen(false) }}
              className={`block w-full text-left px-3 py-2 rounded text-sm font-medium mt-1 transition-colors ${
                active === s.id ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

function Badge({ children, color = 'purple' }) {
  const colors = {
    purple: 'bg-purple-900/50 text-purple-300 border border-purple-700/50',
    blue: 'bg-blue-900/50 text-blue-300 border border-blue-700/50',
    green: 'bg-green-900/50 text-green-300 border border-green-700/50',
    yellow: 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50',
    red: 'bg-red-900/50 text-red-300 border border-red-700/50',
    cyan: 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/50',
  }
  return (
    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-gray-800/60 border border-gray-700/60 rounded-xl p-5 ${className}`}>
      {children}
    </div>
  )
}

function SectionHeader({ id, title, subtitle, badge }) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      {badge && <Badge color="purple">{badge}</Badge>}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-1">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>}
      <div className="mt-4 h-px bg-gradient-to-r from-purple-600/60 to-transparent" />
    </div>
  )
}

function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 mb-16">
      <div className="text-center mb-10">
        <Badge color="purple">R&D Reference</Badge>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-3 leading-tight">
          Search Everywhere<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Optimization
          </span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          The new SEO strategy — going beyond Google to establish presence across every platform where your audience searches, including AI models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-600/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Visibility</h3>
              <p className="text-gray-400 text-sm">Being findable — showing up in Google search, having active platform accounts, making what you do clear across channels.</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-600/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Validation</h3>
              <p className="text-gray-400 text-sm">Being <em>trusted</em> — your product/service is mentioned by AI, recommended by others, and has social proof across platforms.</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="border-l-4 border-l-yellow-500">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-yellow-200 text-sm font-medium">
            <span className="font-bold">Key Insight:</span> You don&apos;t need to be everywhere — use the RICE method to prioritize which platforms are worth your time and investment.
          </p>
        </div>
      </Card>
    </section>
  )
}

const platforms = [
  { name: 'LinkedIn', icon: '💼', category: 'Social', desc: 'Professional network — strong for B2B visibility and thought leadership.', color: 'blue' },
  { name: 'TikTok', icon: '🎵', category: 'Video', desc: 'Massive discovery engine — great for brand awareness and younger audiences.', color: 'red' },
  { name: 'YouTube', icon: '▶️', category: 'Video', desc: 'Second-largest search engine — long-form video builds authority and SEO.', color: 'red' },
  { name: 'Instagram', icon: '📸', category: 'Social', desc: 'Visual storytelling — good for product showcase and brand identity.', color: 'purple' },
  { name: 'Reddit', icon: '🤖', category: 'Community', desc: 'High-trust community discussions — AI models frequently cite Reddit answers.', color: 'yellow' },
  { name: 'ChatGPT', icon: '🧠', category: 'AI Model', desc: 'Train via published content — when users ask about your niche, appear in responses.', color: 'green' },
  { name: 'Amazon', icon: '📦', category: 'AI Model', desc: 'Product search + Alexa — critical for e-commerce visibility in AI search.', color: 'yellow' },
  { name: 'Google AI', icon: '✨', category: 'AI Model', desc: 'AI Overviews and AI Mode — the new battleground for search dominance.', color: 'cyan' },
]

function PlatformsSection() {
  return (
    <section id="platforms" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="platforms-header"
        title="Platform Presence"
        subtitle="Where your brand needs to exist to achieve full Search Everywhere Optimization"
        badge="Channels"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((p) => (
          <Card key={p.name} className="hover:border-purple-600/60 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <div className="text-white font-semibold text-sm">{p.name}</div>
                <Badge color={p.color}>{p.category}</Badge>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

const riceItems = [
  {
    letter: 'R',
    label: 'Reach',
    color: 'from-purple-600 to-purple-800',
    textColor: 'text-purple-300',
    desc: 'How many people actively search on this platform?',
    questions: ['What is the monthly active user count?', 'Is your target audience using it?', 'Is search behavior dominant here?'],
  },
  {
    letter: 'I',
    label: 'Impact',
    color: 'from-blue-600 to-blue-800',
    textColor: 'text-blue-300',
    desc: 'How much business impact could this platform drive for you?',
    questions: ['Does this lead to conversions or revenue?', 'Is there high buyer intent here?', 'Could it create compounding brand authority?'],
  },
  {
    letter: 'C',
    label: 'Confidence',
    color: 'from-cyan-600 to-cyan-800',
    textColor: 'text-cyan-300',
    desc: 'How confident are you that you can succeed here?',
    questions: ['Do you have skills or content for this medium?', 'Have competitors succeeded here?', 'Do you have data to validate the hypothesis?'],
  },
  {
    letter: 'E',
    label: 'Ease',
    color: 'from-green-600 to-green-800',
    textColor: 'text-green-300',
    desc: 'How easy is it for you to execute on this platform?',
    questions: ['How much time/budget does it require?', 'Can it be repurposed from existing content?', 'How steep is the learning curve?'],
  },
]

function RiceSection() {
  return (
    <section id="rice" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="rice-header"
        title="RICE Prioritization Method"
        subtitle="Use this framework to decide which platforms deserve your attention before committing resources."
        badge="Framework"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {riceItems.map((item) => (
          <Card key={item.letter} className="hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xl font-black">{item.letter}</span>
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${item.textColor}`}>{item.label}</h3>
                <p className="text-gray-300 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.questions.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-gray-400 text-xs">
                      <span className="text-gray-600 mt-0.5">›</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-700/50">
        <p className="text-center text-sm text-gray-300">
          <span className="text-white font-bold">RICE Score Formula:</span>{' '}
          <code className="bg-gray-800 px-2 py-0.5 rounded text-purple-300 text-xs">(Reach × Impact × Confidence) ÷ Ease</code>
          {' '}— Rank platforms by score and focus your top 2–3.
        </p>
      </Card>
    </section>
  )
}

function GeoSection() {
  return (
    <section id="geo" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="geo-header"
        title="GEO — Generative Engine Optimization"
        subtitle="Training AI models to recognize and recommend your business when users ask relevant questions."
        badge="AI Training"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <Card>
          <Badge color="cyan">What is GEO?</Badge>
          <h3 className="text-white font-semibold mt-2 mb-2">Optimizing for AI-Powered Search</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            GEO is the practice of structuring your content so that AI models (ChatGPT, Google AI Mode, Perplexity, etc.) cite your brand when answering user queries — similar to traditional SEO but for AI-generated answers.
          </p>
        </Card>
        <Card>
          <Badge color="purple">Google AI Mode</Badge>
          <h3 className="text-white font-semibold mt-2 mb-2">Query Fan-out Technique</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Google AI Mode uses &quot;Query Fan-out&quot; — it breaks one query into dozens of sub-queries, pulling answers from multiple sources and synthesizing a response.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.youtube.com/watch?v=rszIeAbuZHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-900/40 border border-red-700/50 rounded-lg text-red-300 text-xs hover:bg-red-900/60 transition-colors"
            >
              <span>▶</span> YouTube Explainer
            </a>
            <a
              href="https://www.jcchouinard.com/chatgpt-query-fanout-analyzer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/40 border border-blue-700/50 rounded-lg text-blue-300 text-xs hover:bg-blue-900/60 transition-colors"
            >
              🔗 Fan-out Analyzer Tool
            </a>
          </div>
        </Card>
      </div>

      <Card className="mb-5">
        <Badge color="green">Prompt Strategy</Badge>
        <h3 className="text-white font-semibold mt-2 mb-3">Extract AI-Answerable Questions from Your Content</h3>
        <p className="text-gray-400 text-sm mb-3">Use this prompt to identify which questions your content directly and completely answers — these are your GEO goldmines:</p>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-xs text-gray-300 leading-relaxed">
          <span className="text-purple-400">Prompt:</span> Read the document and extract a list of questions that are directly and
          completely answered by full sentences in the text. Only include questions if the
          document contains a full sentence that clearly answers it. Do not include any
          questions that are answered only partially, implicitly, or by inference.{' '}
          <span className="text-cyan-400">{'{{Your Content Here}}'}</span>
        </div>
        <p className="text-gray-500 text-xs mt-3">→ Use GPT-4 or Claude with this prompt to map your content to AI-answerable queries.</p>
      </Card>
    </section>
  )
}

function CompetitorSection() {
  const steps = [
    {
      step: '01',
      title: 'Identify Competitors',
      desc: 'Search competitor domain names for your product/service category. Find who AI is already citing.',
      color: 'text-purple-400',
      bg: 'bg-purple-900/30 border-purple-700/50',
    },
    {
      step: '02',
      title: 'Analyze Their Traffic',
      desc: 'Use tools like Semrush, Ahrefs, or Similarweb to pull estimated monthly visits and traffic sources.',
      color: 'text-blue-400',
      bg: 'bg-blue-900/30 border-blue-700/50',
    },
    {
      step: '03',
      title: 'Find Top SEO Pages',
      desc: 'Identify their highest-traffic pages, top SEO titles, backlink sources, and most shared content.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/30 border-cyan-700/50',
    },
    {
      step: '04',
      title: 'Extract High-Value Keywords',
      desc: 'Find keywords with the most traffic — Google sees these as valuable, credible, and engaging signals.',
      color: 'text-green-400',
      bg: 'bg-green-900/30 border-green-700/50',
    },
    {
      step: '05',
      title: 'Plan Content Around Gaps',
      desc: 'These are your content opportunities — create better, deeper, multimedia-rich content around these exact terms.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/30 border-yellow-700/50',
    },
  ]

  return (
    <section id="competitor" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="competitor-header"
        title="Competitor Research & Reverse Engineering"
        subtitle="Find who AI is already pulling from — then out-create them."
        badge="Research"
      />
      <div className="space-y-3">
        {steps.map((s) => (
          <Card key={s.step} className={`border ${s.bg} hover:brightness-110 transition-all`}>
            <div className="flex items-start gap-4">
              <div className={`text-2xl font-black font-mono ${s.color} opacity-60 flex-shrink-0 w-8`}>{s.step}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function KeywordsSection() {
  return (
    <section id="keywords" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="keywords-header"
        title="Keyword Research Strategy"
        subtitle="Build a keyword foundation that can surface in both traditional search and AI Overviews."
        badge="Keywords"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <Card className="col-span-1">
          <Badge color="blue">Step 1</Badge>
          <h3 className="text-white font-semibold mt-2 mb-2">Find Similar Websites</h3>
          <p className="text-gray-400 text-sm">Use SEO tools to discover websites similar to yours and build an initial list of competitors to analyze.</p>
        </Card>
        <Card className="col-span-1">
          <Badge color="purple">Step 2</Badge>
          <h3 className="text-white font-semibold mt-2 mb-2">Scan & Compare</h3>
          <p className="text-gray-400 text-sm">Scan your site and competitor sites together to surface the <strong className="text-purple-300">Keyword Gap</strong> — terms competitors rank for that you don&apos;t.</p>
        </Card>
        <Card className="col-span-1">
          <Badge color="green">Step 3</Badge>
          <h3 className="text-white font-semibold mt-2 mb-2">Build Better Content</h3>
          <p className="text-gray-400 text-sm">Create deeper, richer, multimedia content around the exact gap terms — targeting AI Overview and AI Mode visibility.</p>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Keyword Gap = Opportunity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A <span className="text-purple-300 font-semibold">Keyword Gap</span> is a list of keywords that your competitors are getting traffic from — but you aren&apos;t. These represent proven demand with an established audience. Building content around these terms gives you the best chance of appearing in both Google&apos;s AI Overview and AI Mode results.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

const contentTypes = [
  { icon: '🎥', label: 'Video Summary', desc: 'A short video that summarizes the key points of the article', badge: 'High Impact', badgeColor: 'green' },
  { icon: '📊', label: 'Diagram', desc: 'A visual diagram that simplifies the core concept', badge: 'AI-Cited', badgeColor: 'cyan' },
  { icon: '📋', label: 'Infographic', desc: 'An infographic that makes data easy to scan and share', badge: 'Shareable', badgeColor: 'blue' },
  { icon: '📝', label: 'Deep Article', desc: 'Long-form, authoritative text paired with keyword gap terms', badge: 'SEO Core', badgeColor: 'purple' },
]

function CitationsSection() {
  return (
    <section id="citations" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="citations-header"
        title="How to Get Cited by Google AI"
        subtitle="AI doesn't pull from plain text articles alone — it selects multi-format, multi-layered content."
        badge="AI Citations"
      />
      <Card className="mb-5 border-cyan-700/50 bg-cyan-900/10">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <h3 className="text-cyan-300 font-bold mb-1">The Blueprint</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              It&apos;s not enough to write an article — you need to <strong className="text-white">enrich the content experience</strong>. AI systems scan for multi-format, multi-layered content that proves depth and authority. One article with all four formats below becomes the most trusted source for a given query.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {contentTypes.map((ct) => (
          <Card key={ct.label} className="hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-3xl">{ct.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">{ct.label}</h3>
                  <Badge color={ct.badgeColor}>{ct.badge}</Badge>
                </div>
                <p className="text-gray-400 text-xs">{ct.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-700/50">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-2">
            <span className="text-white font-bold">The Goal:</span> Transform your content into Authority → Authority into Customer Demand
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 flex-wrap">
            <span className="text-purple-300">Keyword Gaps</span>
            <span>+</span>
            <span className="text-cyan-300">Multi-format Content</span>
            <span>=</span>
            <span className="text-green-300">AI Preferred Source</span>
            <span>=</span>
            <span className="text-yellow-300">Customer Demand</span>
          </div>
        </div>
      </Card>
    </section>
  )
}

function BrandMemorySection() {
  return (
    <section id="brand" className="scroll-mt-20 mb-16">
      <SectionHeader
        id="brand-header"
        title="Brand Memory"
        subtitle="The long game — consistent visibility builds subconscious recognition."
        badge="Brand Strategy"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="border-yellow-700/50 bg-yellow-900/10">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🏎️</span>
            <div>
              <h3 className="text-yellow-300 font-bold mb-1">The Formula 1 Effect</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Most people can&apos;t name all the sponsors on an F1 car — but they&apos;ve seen those logos 500 times. Repetition builds subconscious brand memory.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                You&apos;re not always converting immediately. You&apos;re playing for <span className="text-yellow-300 font-semibold">recognition</span>.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-white font-semibold mb-3">Brand Memory Pillars</h3>
          <ul className="space-y-2">
            {[
              { icon: '🔄', text: 'Consistent presence across platforms — same logo, tone, message' },
              { icon: '📈', text: 'Frequency over perfection — showing up repeatedly matters more than one viral post' },
              { icon: '🤝', text: 'Being mentioned by AI builds passive trust — even without clicks' },
              { icon: '🎯', text: 'Cross-platform touchpoints compound over time into authority' },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2 text-gray-400 text-sm list-none">
                <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-5 text-center bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
        <p className="text-gray-300 text-sm mb-1">
          <span className="text-white font-bold">The Strategy in One Line:</span>
        </p>
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          &quot;Be Everywhere Your Audience Searches — Then Train AI to Find You First.&quot;
        </p>
      </Card>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-10 py-8 text-center">
      <p className="text-gray-600 text-sm">
        AI SEO R&D Reference · Search Everywhere Optimization ·{' '}
        <span className="text-purple-500">GEO</span> + <span className="text-cyan-500">RICE</span> + <span className="text-green-500">Brand Memory</span>
      </p>
    </footer>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('overview')

  function handleNav(id) {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <NavBar active={activeSection} onNav={handleNav} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <OverviewSection />
        <PlatformsSection />
        <RiceSection />
        <GeoSection />
        <CompetitorSection />
        <KeywordsSection />
        <CitationsSection />
        <BrandMemorySection />
      </main>
      <Footer />
    </div>
  )
}
