import Link from "next/link"

const footerLinks = [
  { label: "Home", href: "/home" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Foodi</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            Fresh, fast, and flavorful meals delivered with a friendly experience.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gray-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>support@foodi.com</li>
            <li>+1 (555) 012-3456</li>
            <li>123 Food Street</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
