export default function Home() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'gold',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>YL Fitness Training</h1>
      <p style={{ fontSize: '20px', margin: '16px 0' }}>
        Personal training for everyone — from non-athletic to elite.
      </p>
      <button style={{
        backgroundColor: 'gold',
        color: 'black',
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
      onClick={() => window.location.href='/contact'}>
        Book Your Free Consultation
      </button>
    </div>
  );
}
