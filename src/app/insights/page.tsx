"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BusinessRow = {
  date: string;
  revenue: number;
  orders: number;
  customers: number;
  source: string;
};

export default function InsightsPage() {
  const [data, setData] = useState<BusinessRow[]>([]);
  const [aiResult, setAiResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("insightiq-data");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const totalRevenue = data.reduce((sum, row) => sum + row.revenue, 0);
  const totalOrders = data.reduce((sum, row) => sum + row.orders, 0);
  const totalCustomers = data.reduce((sum, row) => sum + row.customers, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  async function generateInsights() {
    try {
      setLoading(true);
      setAiResult("");

      const res = await fetch("/api/insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const result = await res.json();

      console.log("API response:", result);

      if (!res.ok) {
        setAiResult(result.error || "Something went wrong with the API.");
        return;
      }

      setAiResult(result.result || "No result was returned from the AI API.");
    } catch (error) {
      console.error("Frontend error:", error);
      setAiResult("Unable to generate insights. Check the console or terminal.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <aside className="hidden min-h-screen w-64 border-r border-slate-800 bg-slate-900 p-6 md:block">
          <h1 className="text-2xl font-bold">InsightIQ</h1>

          <nav className="mt-10 space-y-3 text-sm text-slate-300">
            <Link href="/dashboard" className="block px-4 py-2 hover:text-white">
              Dashboard
            </Link>

            <Link href="/upload" className="block px-4 py-2 hover:text-white">
              Upload Data
            </Link>

            <Link
              href="/insights"
              className="block rounded-lg bg-slate-800 px-4 py-2 text-white"
            >
              AI Insights
            </Link>

            <p className="px-4 py-2">Reports</p>
          </nav>
        </aside>

        <section className="flex-1 p-8">
          <div className="mb-8">
            <p className="text-sm text-cyan-400">AI Insights</p>
            <h2 className="mt-2 text-4xl font-bold">
              Business recommendations
            </h2>
            <p className="mt-2 text-slate-400">
              Generate AI-powered recommendations based on your uploaded data.
            </p>
          </div>

          {data.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">No data available</h3>
              <p className="mt-2 text-slate-400">
                Upload a CSV file first.
              </p>

              <Link
                href="/upload"
                className="mt-5 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Upload Data
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Total Revenue</p>
                <h3 className="mt-2 text-3xl font-bold">
                  ${totalRevenue.toLocaleString()}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Avg. Order Value</p>
                <h3 className="mt-2 text-3xl font-bold">
                  ${averageOrderValue.toFixed(2)}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Customers</p>
                <h3 className="mt-2 text-3xl font-bold">
                  {totalCustomers.toLocaleString()}
                </h3>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6 lg:col-span-3">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-semibold">
                    Generated Insight
                  </h3>

                  <button
                    onClick={generateInsights}
                    disabled={loading}
                    className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:opacity-60"
                  >
                    {loading ? "Generating..." : "Generate AI Insights"}
                  </button>
                </div>

                {loading ? (
                  <p className="mt-6 text-slate-400">
                    Generating insights...
                  </p>
                ) : (
                  <p className="mt-6 whitespace-pre-line text-slate-300">
                    {aiResult || "No AI insights generated yet."}
                  </p>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}