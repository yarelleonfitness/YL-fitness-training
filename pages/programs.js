export default function Programs() {
  const programs = [
    { title: "Starter", desc: "Beginner-friendly, full body programs.", price: "$49/month" },
    { title: "Pro", desc: "Intermediate programs with progression tracking.", price: "$99/month" },
    { title: "Elite", desc: "Advanced coaching with custom nutrition & training.", price: "$149/month" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-12 text-gold">Our Programs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p) => (
          <div key={p.title} className="bg-gray-900 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
            <p className="mb-4">{p.desc}</p>
            <p className="font-bold mb-4">{p.price}</p>
            <a
              href="https://checkout.stripe.com/YOUR_STRIPE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-black font-bold rounded"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
