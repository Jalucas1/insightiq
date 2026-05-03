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
            <Link href="/insights" className="block rounded-lg bg-slate-800 px-4 py-2 text-white">
              AI Insights
            </Link>
            <p className="px-4 py-2">Reports</p>
          </nav>
        </aside>

        <section className="flex-1 p-8">
          <div className="mb-8">
            <p className="text-sm text-cyan-400">AI Insights</p>
            <h2 className="mt-2 text-4xl font-bold">Business recommendations</h2>
            <p className="mt-2 text-slate-400">
              Review AI-ready insights based on your uploaded business data.
            </p>
          </div>

          {data.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">No data available</h3>
              <p className="mt-2 text-slate-400">
                Upload a CSV file first so InsightIQ can generate recommendations.
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
                <h3 className="text-2xl font-semibold">Generated Insight</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Revenue is trending positively based on the uploaded dataset.
                  Email appears to be a strong-performing source, while average
                  order value should be monitored for opportunities to increase
                  customer spend.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900 p-6 lg:col-span-3">
                <h3 className="text-2xl font-semibold">Recommended Actions</h3>

                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>• Increase focus on high-performing traffic sources.</li>
                  <li>• Test bundled offers to improve average order value.</li>
                  <li>• Compare revenue growth against customer growth monthly.</li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}