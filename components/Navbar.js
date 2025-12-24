import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center">
        <Image src="/logo.png" alt="YL Fitness Logo" width={50} height={50} />
        <span className="ml-2 font-bold text-xl">YL Fitness</span>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/results">Results</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
