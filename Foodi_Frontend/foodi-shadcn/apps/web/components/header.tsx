import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
const navItems = [
  { label: "Home", href: "/home" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
]

export default function Header() {
  return (
    <header className="border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <SidebarTrigger  />
          <Link href="/home" className="text-xl font-semibold tracking-tight text-gray-900">
            Foodi
          </Link>
        </div>

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
            href="/cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100"
            aria-label="Go to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}