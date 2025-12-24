export default function About() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'gold',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>About YL Fitness</h1>
      <p style={{ fontSize: '18px', marginTop: '20px', lineHeight: '1.6' }}>
        At YL Fitness Training, we specialize in coaching everyone — from beginners to elite athletes. 
        Our programs are tailored to your goals, schedule, and fitness level. 
        Join us and start transforming your body and mind today.
      </p>
    </div>
  );
}export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-gold">About YL Fitness</h1>
      <p className="text-lg mb-4">
        YL Fitness Training (YL) is led by Yarel Leon, providing personalized fitness coaching for both athletic and non-athletic clients. Our programs are designed to help you achieve your goals safely and effectively.
      </p>
      <p className="text-lg mb-4">
        We focus on functional strength, mobility, and progressive training plans tailored to your lifestyle.
      </p>
    </div>
  );
}
