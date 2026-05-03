"use client";

import { useState } from "react";
import Papa from "papaparse";

type BusinessRow = {
  date: string;
  revenue: number;
  orders: number;
  customers: number;
  source: string;
};

export default function UploadPage() {
  const [data, setData] = useState<BusinessRow[]>([]);

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    Papa.parse<BusinessRow>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        setData(results.data);
        localStorage.setItem("insightiq-data", JSON.stringify(results.data));
      },
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-cyan-400">Upload Data</p>
        <h1 className="mt-2 text-4xl font-bold">Upload business data</h1>
        <p className="mt-3 text-slate-400">
          Upload a CSV file to begin analyzing revenue, orders, customers, and traffic sources.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-400 file:px-5 file:py-2 file:font-semibold file:text-slate-950 hover:file:bg-cyan-300"
          />
        </div>

        {data.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Preview</h2>
            <p className="mt-2 text-slate-400">
              Showing {data.length} uploaded rows.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-400">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Revenue</th>
                    <th className="p-3">Orders</th>
                    <th className="p-3">Customers</th>
                    <th className="p-3">Source</th>
                  </tr>
                </thead>

                <tbody>
                  {data.slice(0, 10).map((row, index) => (
                    <tr key={index} className="border-t border-slate-800">
                      <td className="p-3">{row.date}</td>
                      <td className="p-3">${row.revenue}</td>
                      <td className="p-3">{row.orders}</td>
                      <td className="p-3">{row.customers}</td>
                      <td className="p-3">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}