export default function Contact() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'gold',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Contact YL Fitness</h1>
      <p style={{ fontSize: '18px', marginTop: '20px', lineHeight: '1.6' }}>
        Ready to start your fitness journey? Book a free consultation below.
      </p>

      <button 
        style={{
          backgroundColor: 'gold',
          color: 'black',
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
        onClick={() => window.open('https://calendly.com/YOUR-CALENDLY-LINK', '_blank')}
      >
        Book Free Consultation
      </button>

      <p style={{ fontSize: '16px', marginTop: '30px' }}>
        Or email us at <a href="mailto:contact@yarelleonfitness.com" style={{ color: 'gold' }}>contact@yarelleonfitness.com</a>
      </p>
    </div>
  );
}export default function Contact() {
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
