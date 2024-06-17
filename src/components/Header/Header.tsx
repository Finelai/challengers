import Image from "next/image";

export default function Header() {
  return (
    <header>
      Header
      <div>
        Challenges that improve you{" "}
        <Image
          src="/challenge-complete.svg"
          alt="Challengers Logo"
          width={24}
          height={24}
          priority
        />
      </div>
    </header>
  );
}
