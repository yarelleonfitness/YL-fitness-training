import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/logo.jpg"
          alt="YL Fitness Logo"
          width="60"
          height="60"
        />
        <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '20px' }}>
          YL Fitness
        </span>
      </div>

      <div>
        <Link href="/">Home</Link>{" "}
        <Link href="/about">About</Link>{" "}
        <Link href="/programs">Programs</Link>{" "}
        <Link href="/results">Results</Link>{" "}
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
