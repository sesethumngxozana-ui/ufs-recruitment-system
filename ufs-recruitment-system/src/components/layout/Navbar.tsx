import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// useLocation tells us which page we're currently on
// so we can highlight the active nav link

function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  // Controls the scrolled style — navbar gets a background once you scroll
  const [scrolled, setScrolled] = useState(false)

  // useLocation gives us the current URL path e.g. "/" or "/login"
  const location = useLocation()

  // Listen for scroll events — same pattern as your Boulder Inc project!
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the listener when the component unmounts
    // This prevents memory leaks — always clean up event listeners
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // empty [] means "run this effect once, on mount"

  // Helper: returns true if the given path is the current page
  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(13, 17, 23, 0.92)'  // semi-transparent dark on scroll
          : 'transparent',             // invisible at top of page
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-ufs-border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ===== LOGO ===== */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          {/* Green circle with "S" — we'll swap this for your real logo later */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ background: 'var(--color-ufs-green)' }}
          >
            SS
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ color: 'var(--color-ufs-text)' }}
          >
            Skill<span style={{ color: 'var(--color-ufs-gold)' }}>Stack</span>
          </span>
        </Link>

        {/* ===== DESKTOP NAV LINKS ===== */}
        {/* hidden on mobile (hidden), flex on medium screens and up (md:flex) */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            { label: 'Home',     path: '/' },
            { label: 'For Students',  path: '/register' },
            { label: 'For Employers', path: '/register' },
            { label: 'About',    path: '/#about' },
          ].map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="text-sm font-medium no-underline transition-colors duration-200"
                style={{
                  color: isActive(path)
                    ? 'var(--color-ufs-gold)'     // gold if current page
                    : 'var(--color-ufs-muted)',   // grey otherwise
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ufs-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(path) ? 'var(--color-ufs-gold)' : 'var(--color-ufs-muted)')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ===== CTA BUTTONS ===== */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-lg no-underline transition-all duration-200"
            style={{
              color: 'var(--color-ufs-text)',
              border: '1px solid var(--color-ufs-border)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-ufs-green)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-ufs-border)')}
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-sm font-bold px-4 py-2 rounded-lg no-underline transition-all duration-200"
            style={{
              background: 'var(--color-ufs-green)',
              color: 'white',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Get Started
          </Link>
        </div>

        {/* ===== MOBILE HAMBURGER ===== */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {/* Three bars — each one animates when menu opens */}
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: 'var(--color-ufs-text)' }}
            />
          ))}
        </button>
      </div>

      {/* ===== MOBILE MENU (slides down when open) ===== */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: 'var(--color-ufs-surface)',
            borderTop: '1px solid var(--color-ufs-border)',
          }}
        >
          {[
            { label: 'Home',          path: '/' },
            { label: 'For Students',  path: '/register' },
            { label: 'For Employers', path: '/register' },
            { label: 'Sign In',       path: '/login' },
          ].map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-sm font-medium no-underline py-2"
              style={{ color: 'var(--color-ufs-text)' }}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {label}
            </Link>
          ))}
          <Link
            to="/register"
            className="text-sm font-bold px-4 py-2 rounded-lg no-underline text-center"
            style={{ background: 'var(--color-ufs-green)', color: 'white' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar