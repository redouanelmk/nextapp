import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <ul className="flex i">
        <li class="mr-6">
          <Link href="/">
            <a className="text-blue-500 no-underline hover:text-blue-800 text-accent-1 dark:text-blue-300">
              Home
            </a>
          </Link>
        </li>
        <li class="mr-6">
        <Link href="/mapage">
            <a className="text-blue-500 no-underline hover:text-blue-800 text-accent-1 dark:text-blue-300">
              ma page 4
              
                          </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
