import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      Header
      <div>
        Challenges that improve you
        <Image src="/challenge-complete.svg" alt="Challengers Logo" width={24} height={24} priority />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/add-user">Sign Up</Link>
      </nav>
    </header>
  );
}
