export default function Programs() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'gold',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Programs</h1>
      <p style={{ fontSize: '18px', marginTop: '20px', lineHeight: '1.6' }}>
        Choose the program that fits your lifestyle and goals:
      </p>

      <ul style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
        <li><strong>Starter:</strong> Beginner-friendly program to build foundation and consistency.</li>
        <li><strong>Pro:</strong> Intermediate program focusing on strength, conditioning, and skill.</li>
        <li><strong>Elite:</strong> Advanced program for high-performance training and results.</li>
      </ul>
    </div>
  );
}export default function Programs() {
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
