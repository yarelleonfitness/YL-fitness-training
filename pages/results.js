export default function Results() {
  const results = [
    { name: "Client A", desc: "Lost 10 lbs in 2 months." },
    { name: "Client B", desc: "Gained 5 lbs of muscle." },
    { name: "Client C", desc: "Improved flexibility and endurance." },
  ];

  return (
    <div className="container">
      <h1>Client Results</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {results.map((r) => (
          <div key={r.name} className="bg-gray-900 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">{r.name}</h2>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
