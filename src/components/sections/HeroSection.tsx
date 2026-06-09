import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

function HeroSection() {
  // useRef to store the particles engine — we don't want re-renders when it changes
  const engineRef = useRef<Engine | null>(null)

  const particlesInit = async (engine: Engine) => {
    engineRef.current = engine
    // loadSlim loads only what we need — smaller bundle than loadFull
    await loadSlim(engine)
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-ufs-dark)' }}
    >

      {/* ===== PARTICLE BACKGROUND ===== */}
      {/* This renders behind everything (z-0) */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true } },
            color: { value: ['#007A4D', '#FFB81C', '#30363D'] }, // UFS green, gold, border grey
            links: {
              enable: true,
              color: '#30363D',   // subtle connecting lines
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,         // slow and calm, not distracting
              direction: 'none',
              outModes: { default: 'bounce' },
            },
            opacity: { value: 0.6 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* ===== GRADIENT OVERLAY ===== */}
      {/* Fades the bottom of the hero into the page — smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-ufs-dark))',
        }}
      />

      {/* ===== HERO CONTENT ===== */}
      {/* z-20 puts it above the particles and gradient */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

        {/* Badge — animated fade in from top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: 'rgba(0, 122, 77, 0.15)',
            border: '1px solid rgba(0, 122, 77, 0.4)',
            color: 'var(--color-ufs-green)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-ufs-green)' }}
          />
          University of the Free State · Official Recruitment Platform
        </motion.div>

        {/* Main heading — staggered word animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          style={{ color: 'var(--color-ufs-text)' }}
        >
          Your Skills.{' '}
          <span style={{ color: 'var(--color-ufs-green)' }}>Your Future.</span>
          <br />
          <span
            className="text-4xl md:text-6xl"
            style={{ color: 'var(--color-ufs-gold)' }}
          >
            One Platform.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--color-ufs-muted)' }}
        >
          SkillStack connects UFS students with verified employers through
          intelligent matching, AI-powered CV building, and real-time
          opportunity tracking.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/register"
            className="px-8 py-4 rounded-xl font-bold text-white no-underline text-base transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: 'var(--color-ufs-green)',
              boxShadow: '0 0 30px rgba(0, 122, 77, 0.35)',
            }}
          >
            I'm a Student →
          </Link>
          <Link
            to="/register"
            className="px-8 py-4 rounded-xl font-bold no-underline text-base transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: 'rgba(255, 184, 28, 0.1)',
              border: '1px solid var(--color-ufs-gold)',
              color: 'var(--color-ufs-gold)',
            }}
          >
            I'm an Employer →
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-10 mt-16"
        >
          {[
            { number: '16',    label: 'Core Features' },
            { number: '3',     label: 'User Roles' },
            { number: 'AI',    label: 'CV Builder' },
            { number: 'UFS',   label: 'Verified Data' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl font-extrabold"
                style={{ color: 'var(--color-ufs-text)' }}
              >
                {number}
              </div>
              <div
                className="text-xs font-medium mt-1 uppercase tracking-widest"
                style={{ color: 'var(--color-ufs-muted)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection