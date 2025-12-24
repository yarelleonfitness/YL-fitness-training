export default function Home() {
  return (
    <div>
      {/* HERO VIDEO */}
      <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4)'
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'gold'
          }}
        >
          <h1 style={{ fontSize: '56px' }}>YL FITNESS TRAINING</h1>
          <p style={{ fontSize: '22px', margin: '20px 0' }}>
            Train Different. Move Different. Live Different.
          </p>
          <button>Book Free Consultation</button>
        </div>
      </div>
    </div>
  );
}
