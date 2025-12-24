import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: 'black',
      borderBottom: '1px solid gold',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span style={{ color: 'gold', fontWeight: 'bold', fontSize: '20px' }}>
        YL FITNESS
      </span>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/results">Results</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
