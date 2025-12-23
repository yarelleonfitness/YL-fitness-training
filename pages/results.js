export default function Results() {
  const results = [
    { name: "Client A", desc: "Lost 15 lbs in 8 weeks" },
    { name: "Client B", desc: "Gained 10 lbs of muscle in 12 weeks" },
    { name: "Client C", desc: "Improved mobility and strength significantly" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-12 text-gold">Client Results</h1>
      <div className="grid md:grid-cols-3 gap-8">
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
