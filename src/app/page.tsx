export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">InsightIQ</h1>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how-it-works" className="hover:text-white">How It Works</a>
          <a href="#demo" className="hover:text-white">Demo</a>
        </div>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI-Powered Business Intelligence
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Turn raw business data into decisions.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          InsightIQ helps businesses upload data, visualize performance, and
          generate AI-powered insights in plain English.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Start Analyzing
          </button>

          <button className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-white hover:bg-slate-900">
            View Demo
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="demo" className="mx-auto max-w-6xl px-8 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Revenue Overview</h3>
              <p className="text-sm text-slate-400">AI-generated business snapshot</p>
            </div>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Live Insight
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Revenue</p>
              <h4 className="mt-2 text-3xl font-bold">$48,920</h4>
              <p className="mt-2 text-sm text-green-400">+18.4% this month</p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Conversion Rate</p>
              <h4 className="mt-2 text-3xl font-bold">12.8%</h4>
              <p className="mt-2 text-sm text-green-400">+3.1% improvement</p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <p className="text-sm text-slate-400">AI Recommendation</p>
              <h4 className="mt-2 text-lg font-semibold">
                Increase spend on email campaigns.
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                Email generated the highest ROI this period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-8 pb-24">
        <h3 className="mb-10 text-center text-3xl font-bold">
          A smarter way to analyze your business data
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h4 className="text-xl font-semibold">Upload Data</h4>
            <p className="mt-3 text-slate-400">
              Upload CSV files and transform raw business data into structured insights.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h4 className="text-xl font-semibold">Visualize Trends</h4>
            <p className="mt-3 text-slate-400">
              View KPIs, charts, and performance trends in a clean dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h4 className="text-xl font-semibold">Ask Your Data</h4>
            <p className="mt-3 text-slate-400">
              Use AI to ask natural language questions and receive actionable answers.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-8 pb-24 text-center">
        <h3 className="text-3xl font-bold">How it works</h3>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-4xl font-bold text-cyan-400">1</p>
            <h4 className="mt-3 font-semibold">Upload</h4>
            <p className="mt-2 text-sm text-slate-400">Add your CSV business data.</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">2</p>
            <h4 className="mt-3 font-semibold">Analyze</h4>
            <p className="mt-2 text-sm text-slate-400">View charts and KPI trends.</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">3</p>
            <h4 className="mt-3 font-semibold">Decide</h4>
            <p className="mt-2 text-sm text-slate-400">Get AI-powered recommendations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}