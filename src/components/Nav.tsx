"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  // { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-6">
        <Link href="/" className="font-bold text-brand-navy">Khairun Najmi Mukaffa - Software QA Engineer</Link>
        <ul className="ml-auto flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                className={
                  pathname === l.href
                    ? "font-semibold text-brand-navy"
                    : "text-zinc-600 hover:text-brand-navy"
                }
                href={l.href}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
