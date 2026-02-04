import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
