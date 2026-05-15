import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  function applyTheme(newTheme: 'light' | 'dark') {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newTheme)
  }

  function toggleMenu() { setMenuOpen(prev => !prev) }

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  return (
    <nav className="flex items-center justify-between px-8 py-3.5 bg-[#3E2723] text-[#FAF3E0] sticky top-0 z-[100] shadow-[0_2px_10px_rgba(0,0,0,0.15)] dark:bg-[#1a1a1a] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-[#D4AF37] tracking-widest no-underline"
      >
        SweetBite
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden bg-transparent text-[#D4AF37] border border-[#D4AF37] text-[22px] px-3 py-1 cursor-pointer"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`
          md:flex md:flex-wrap md:static md:flex-row md:bg-transparent md:border-0 md:p-0 md:gap-1 md:items-center
          list-none m-0 p-0
          ${menuOpen
            ? 'flex flex-col absolute top-full left-0 right-0 bg-[#3E2723] border-t-2 border-[#D4AF37] py-2.5 gap-0 dark:bg-[#1a1a1a]'
            : 'hidden md:flex'}
        `}
      >
        <li className="md:w-auto w-full text-center">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            Home
          </Link>
        </li>

        <li className="md:w-auto w-full text-center">
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            Menu
          </Link>
        </li>

        {/* Dropdown */}
        <li
          className="relative md:w-auto w-full text-center"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a
            href="#"
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            More ▼
          </a>
          {dropdownOpen && (
            <ul className="md:absolute md:top-full md:left-0 static flex flex-col bg-[#5D4037] border border-[#D4AF37] rounded min-w-[180px] py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.25)] list-none m-0 p-0 dark:bg-[#2a2a2a]">
              <li>
                <Link
                  to="/gallery"
                  onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}
                  className="block px-4 py-2.5 text-[#FAF3E0] no-underline hover:text-[#D4AF37] transition-all duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}
                  className="block px-4 py-2.5 text-[#FAF3E0] no-underline hover:text-[#D4AF37] transition-all duration-300"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}
                  className="block px-4 py-2.5 text-[#FAF3E0] no-underline hover:text-[#D4AF37] transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}
                  className="block px-4 py-2.5 text-[#FAF3E0] no-underline hover:text-[#D4AF37] transition-all duration-300"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}
                  className="block px-4 py-2.5 text-[#FAF3E0] no-underline hover:text-[#D4AF37] transition-all duration-300"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="md:w-auto w-full text-center">
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            Cart
          </Link>
        </li>

        <li className="md:w-auto w-full text-center">
          <Link
            to="/order"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            Order
          </Link>
        </li>

        <li className="md:w-auto w-full text-center">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 text-[#FAF3E0] no-underline font-medium rounded hover:text-[#D4AF37] transition-all duration-300 md:border-b-0 border-b border-[#5D4037]"
          >
            Contact
          </Link>
        </li>

        {/* Login */}
        <li className="md:w-auto w-full text-center px-1">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-3.5 py-1.5 text-sm font-semibold text-[#D4AF37] border border-[#D4AF37] rounded bg-transparent no-underline hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:text-[#1a1a1a]"
          >
            Login
          </Link>
        </li>

        {/* Signup */}
        <li className="md:w-auto w-full text-center px-1">
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-3.5 py-1.5 text-sm font-semibold text-[#3E2723] bg-[#D4AF37] border border-[#D4AF37] rounded no-underline hover:bg-transparent hover:text-[#D4AF37] transition-all duration-300 dark:text-[#1a1a1a] dark:hover:bg-transparent dark:hover:text-[#D4AF37]"
          >
            Signup
          </Link>
        </li>

        {/* Profile */}
        <li className="md:w-auto w-full text-center px-1">
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-3.5 py-1.5 text-sm font-semibold text-[#D4AF37] border border-[#D4AF37] rounded bg-transparent no-underline hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:text-[#1a1a1a]"
          >
            Profile
          </Link>
        </li>

        {/* Theme toggle */}
        <li className="md:w-auto w-full text-center">
          <button
            onClick={toggleTheme}
            className="bg-transparent text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 text-sm cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:text-[#1a1a1a]"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
