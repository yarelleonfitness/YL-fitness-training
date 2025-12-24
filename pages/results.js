export default function Results() {
  // Example client results
  const results = [
    { name: "Client A", desc: "Lost 10 lbs in 2 months with customized workouts." },
    { name: "Client B", desc: "Gained 5 lbs of muscle and improved endurance." },
    { name: "Client C", desc: "Increased flexibility and overall strength." },
  ];

  return (
    <div className="min-h-screen bg-black text-gold px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Client Results</h1>
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
