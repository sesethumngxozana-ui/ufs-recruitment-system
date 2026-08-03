import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-ufs-dark)' }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 35%, rgba(0,122,77,.17), transparent 48%)' }} />

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-ufs-dark))',
        }}
      />

      <div
        className="relative z-20"
        style={{
          maxWidth: '900px',
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '48px',
            marginTop: '60px',
            background: 'rgba(0, 122, 77, 0.15)',
            border: '1px solid rgba(0, 122, 77, 0.4)',
            color: 'var(--color-ufs-green)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-ufs-green)',
              display: 'inline-block',
            }}
          />
          University of the Free State · Official Recruitment Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--color-ufs-text)',
            marginBottom: '20px',
          }}
        >
          Your Skills.{' '}
          <span style={{ color: 'var(--color-ufs-green)' }}>Your Future.</span>
          <br />
          <span style={{ color: 'var(--color-ufs-gold)', fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            One Platform.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: '1.15rem',
            color: 'var(--color-ufs-muted)',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          UniConnect connects UFS students with verified employers through
          intelligent matching, AI-powered CV building, and real-time
          opportunity tracking.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <Link
            to="/register"
            style={{
              padding: '15px 28px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              color: 'white',
              background: 'var(--color-ufs-green)',
              boxShadow: '0 0 30px rgba(0, 122, 77, 0.35)',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.85'
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            I'm a Student &#8594;
          </Link>
          <Link
            to="/register"
            style={{
              padding: '15px 28px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              color: 'var(--color-ufs-gold)',
              background: 'rgba(255, 184, 28, 0.1)',
              border: '2px solid var(--color-ufs-gold)',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.85'
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            I'm an Employer &#8594;
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '64px',
            paddingTop: '40px',
            borderTop: '1px solid var(--color-ufs-border)',
            width: '100%',
          }}
        >
          {[
            { number: '16',  label: 'Core Features' },
            { number: '3',   label: 'User Roles' },
            { number: 'AI',  label: 'CV Builder' },
            { number: 'UFS', label: 'Verified Data' },
          ].map(({ number, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-ufs-text)' }}>
                {number}
              </div>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-ufs-muted)',
              }}>
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
