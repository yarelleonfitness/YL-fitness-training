export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-gold">Contact Us</h1>
      <p className="mb-4">Email: <a href="mailto:hello@yarelleonfitness.com" className="text-gold">hello@yarelleonfitness.com</a></p>
      <p className="mb-6">Schedule a free consultation:</p>
      <a
        href="https://calendly.com/YOUR_CALENDLY_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gold text-black font-bold rounded"
      >
        Book Now
      </a>
    </div>
  );
}
