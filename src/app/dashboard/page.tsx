"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
    { month: "Jan", revenue: 28000, orders: 720 },
    { month: "Feb", revenue: 31500, orders: 810 },
    { month: "Mar", revenue: 29800, orders: 760 },
    { month: "Apr", revenue: 38200, orders: 940 },
    { month: "May", revenue: 48920, orders: 1248 },
  ];
  
  const categoryData = [
    { category: "Email", value: 42 },
    { category: "Ads", value: 28 },
    { category: "Organic", value: 18 },
    { category: "Referral", value: 12 },
  ];

export default function DashboardPage() {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden min-h-screen w-64 border-r border-slate-800 bg-slate-900 p-6 md:block">
            <h1 className="text-2xl font-bold">InsightIQ</h1>
  
            <nav className="mt-10 space-y-3 text-sm text-slate-300">
              <p className="rounded-lg bg-slate-800 px-4 py-2 text-white">Dashboard</p>
              <p className="px-4 py-2">Upload Data</p>
              <p className="px-4 py-2">AI Insights</p>
              <p className="px-4 py-2">Reports</p>
            </nav>
          </aside>
  
          {/* Main Content */}
          <section className="flex-1 p-8">
            <div className="mb-8">
              <p className="text-sm text-cyan-400">Business Intelligence Dashboard</p>
              <h2 className="mt-2 text-4xl font-bold">Welcome back</h2>
              <p className="mt-2 text-slate-400">
                Track business performance, upload data, and generate AI-powered insights.
              </p>
            </div>
  
            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Total Revenue</p>
                <h3 className="mt-2 text-3xl font-bold">$48,920</h3>
                <p className="mt-2 text-sm text-green-400">+18.4%</p>
              </div>
  
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Orders</p>
                <h3 className="mt-2 text-3xl font-bold">1,248</h3>
                <p className="mt-2 text-sm text-green-400">+9.2%</p>
              </div>
  
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Conversion Rate</p>
                <h3 className="mt-2 text-3xl font-bold">12.8%</h3>
                <p className="mt-2 text-sm text-green-400">+3.1%</p>
              </div>
  
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Avg. Order Value</p>
                <h3 className="mt-2 text-3xl font-bold">$39.20</h3>
                <p className="mt-2 text-sm text-red-400">-2.4%</p>
              </div>
            </div>
  
            {/* Placeholder Panels */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-slate-900 p-6 lg:col-span-2">
                <h3 className="text-xl font-semibold">Revenue Trend</h3>
                <div className="mt-6 h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#22d3ee"
                            strokeWidth={3}
                        />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
              </div>
  
              <div className="rounded-2xl bg-slate-900 p-6">
                <h3 className="text-xl font-semibold">AI Insight</h3>
                <p className="mt-4 text-slate-300">
                  Revenue is trending upward, but average order value has dropped slightly.
                  Consider bundling offers to increase customer spend.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Traffic Source Breakdown</h3>
                <div className="mt-6 h-72">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData}>
                        <XAxis dataKey="category" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#22d3ee" />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
          </section>
        </div>
      </main>
    );
  }