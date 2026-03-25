import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="font-display text-white text-xl font-semibold tracking-tight"
        >
          ROOTS
        </Link>
        <div className="hidden items-center text-white gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Features
          </Link>
          <Link
            href="#library"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Library
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            FAQ
          </Link>
        </div>
      </nav>
    </header>
  );
}
