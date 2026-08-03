import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function DashboardLayout({ role, links }: { role: string, links: { to: string, label: string, end?: boolean }[] }) {
  return <div style={{ minHeight: '100vh', background: 'var(--color-ufs-dark)', display: 'flex' }}>
    <aside style={{ position: 'fixed', inset: '0 auto 0 0', width: '250px', padding: '28px 14px', background: 'var(--color-ufs-surface)', borderRight: '1px solid var(--color-ufs-border)', zIndex: 2 }}>
      <div style={{ padding: '0 14px 28px', fontSize: '1.35rem', fontWeight: 800 }}>Uni<span style={{ color: 'var(--color-ufs-gold)' }}>Connect</span><div style={{ fontSize: '0.72rem', color: 'var(--color-ufs-muted)', fontWeight: 500, marginTop: '2px' }}>{role} portal</div></div>
      <nav style={{ display: 'grid', gap: '4px' }}>{links.map(link => <NavLink key={link.to} to={link.to} end={link.end} style={({ isActive }) => ({ padding: '11px 14px', textDecoration: 'none', color: isActive ? 'var(--color-ufs-text)' : 'var(--color-ufs-muted)', background: isActive ? 'rgba(0,122,77,.16)' : 'transparent', borderLeft: `3px solid ${isActive ? 'var(--color-ufs-green)' : 'transparent'}`, borderRadius: '0 7px 7px 0', fontSize: '0.92rem' })}>{link.label}</NavLink>)}</nav>
    </aside>
    <main style={{ marginLeft: '250px', width: 'calc(100% - 250px)', padding: 'clamp(24px, 4vw, 52px)', overflow: 'hidden' }}><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Outlet /></motion.div></main>
  </div>
}
