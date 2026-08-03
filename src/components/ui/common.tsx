import { useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'

export const inputStyle = (focused = false): CSSProperties => ({ width: '100%', padding: '12px 16px', borderRadius: '8px', border: `1px solid ${focused ? 'var(--color-ufs-green)' : 'var(--color-ufs-border)'}`, background: 'var(--color-ufs-dark)', color: 'var(--color-ufs-text)', fontSize: '0.95rem', outline: 'none' })
export const buttonStyle: CSSProperties = { border: 0, borderRadius: '8px', padding: '12px 18px', background: 'var(--color-ufs-green)', color: 'var(--color-ufs-text)', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem' }

export function Field({ label, children }: { label: string, children: ReactNode }) { return <label style={{ display: 'grid', gap: '7px', color: 'var(--color-ufs-muted)', fontSize: '0.86rem' }}>{label}{children}</label> }
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) { const [focus, setFocus] = useState(false); return <input {...props} onFocus={(e) => { setFocus(true); props.onFocus?.(e) }} onBlur={(e) => { setFocus(false); props.onBlur?.(e) }} style={{ ...inputStyle(focus), ...props.style }} /> }
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) { const [focus, setFocus] = useState(false); return <select {...props} onFocus={(e) => { setFocus(true); props.onFocus?.(e) }} onBlur={(e) => { setFocus(false); props.onBlur?.(e) }} style={{ ...inputStyle(focus), ...props.style }} /> }
export function Section({ title, children }: { title: string, children: ReactNode }) { return <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} style={{ display: 'grid', gap: '20px' }}><h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{title}</h1>{children}</motion.section> }
export function Card({ children, style }: { children: ReactNode, style?: CSSProperties }) { return <div style={{ padding: '22px', background: 'var(--color-ufs-surface)', border: '1px solid var(--color-ufs-border)', borderRadius: '12px', ...style }}>{children}</div> }
