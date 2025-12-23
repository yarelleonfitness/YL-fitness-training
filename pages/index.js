import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="YL Fitness Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center py-40 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">
            YL Fitness Training
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Personalized Fitness Coaching for Every Body
          </p>
          <Link href="/programs">
            <a className="px-8 py-4 bg-gold text-black font-bold rounded hover:opacity-90">
              View Programs
            </a>
          </Link>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Book a Free Consultation</h2>
        <p className="mb-6">Start your fitness journey today!</p>
        <a
          href="https://calendly.com/YOUR_CALENDLY_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gold text-black font-bold rounded"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
