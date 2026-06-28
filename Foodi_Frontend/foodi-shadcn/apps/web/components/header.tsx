import Link from "next/link"

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
]

export default function Header() {
  return (
    <header className="border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/home" className="text-xl font-semibold tracking-tight text-gray-900">
          Foodi
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}