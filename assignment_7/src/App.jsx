import React, { useEffect, useState } from "react";

/*
  Fetches IPL data from:
  https://my-json-server.typicode.com/FreSauce/json-ipl/data
  Sorts ascending by NRR and displays a simple table.
*/

const DATA_URL = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

export default function App() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Ensure NRR is numeric and sort ascending (smallest -> largest)
        const sorted = data
          .map(item => ({ ...item, NRR: Number(item.NRR) }))
          .sort((a, b) => a.NRR - b.NRR);

        if (!cancelled) {
          setRows(sorted);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Fetch failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="page">
      <div className="container">
        <header className="title">
          <h1>IPL Season 2022 Points</h1>
          <p className="subtitle">Sorted ascending by NRR (lowest → highest)</p>
        </header>

        <main className="card">
          {loading && <div className="status">Loading data…</div>}
          {error && <div className="status error">Error: {error}</div>}

          {!loading && !error && rows && (
            <div className="table-wrap">
              <table className="points-table" role="table" aria-label="IPL points table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Tied</th>
                    <th>NRR</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.No + "-" + r.Team}>
                      <td className="num">{r.No}</td>
                      <td className="team">{r.Team}</td>
                      <td className="num">{r.Matches}</td>
                      <td className="num">{r.Won}</td>
                      <td className="num">{r.Lost}</td>
                      <td className="num">{r.Tied}</td>
                      <td className="num">{Number(r.NRR).toFixed(3)}</td>
                      <td className="num">{r.Points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        <footer className="foot muted">Data source: my-json-server.typicode.com/FreSauce/json-ipl</footer>
      </div>
    </div>
  );
}
