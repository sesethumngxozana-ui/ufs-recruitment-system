import { motion } from 'framer-motion'
//import { section } from 'framer-motion/m'

const features = [
  {
    role: 'Students',
    emoji: '🎓',
    color: 'var(--color-ufs-green)',
    colorFaint: 'rgba(0, 122, 77, 0.08)',
    colorBorder: 'rgba(0, 122, 77, 0.25)',
    tagline: 'Launch your career from campus',
    points: [
      'Build a verified SkillStack portfolio',
      'AI-powered CV builder',
      'Intelligent job matching',
      'Skill gap analysis tool',
      'Track all your applications',
      'Request academic record sharing',
    ],
    cta: 'Join as Student',
    path: '/register',
  },
  {
    role: 'Employers',
    emoji: '🏢',
    color: 'var(--color-ufs-gold)',
    colorFaint: 'rgba(255, 184, 28, 0.08)',
    colorBorder: 'rgba(255, 184, 28, 0.25)',
    tagline: 'Find verified UFS talent fast',
    points: [
      'Post job opportunities',
      'Search candidates by skill & GPA',
      'View verified academic records',
      'Schedule interviews in-platform',
      'Manage your talent pipeline',
      'Direct access to UFS graduates',
    ],
    cta: 'Join as Employer',
    path: '/register',
  },
  {
    role: 'Administrators',
    emoji: '⚙️',
    color: '#8B949E',
    colorFaint: 'rgba(139, 148, 158, 0.08)',
    colorBorder: 'rgba(139, 148, 158, 0.25)',
    tagline: 'Full oversight of the platform',
    points: [
      'Manage all user accounts & roles',
      'Analytics dashboard',
      'Monitor employment trends',
      'Oversee skill tags & badges',
      'Approve employer registrations',
      'Generate graduate reports',
    ],
    cta: 'Admin Access',
    path: '/login',
  },
]

function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        background: 'var(--color-ufs-dark)',
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge — same pill style as hero badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              background: 'rgba(255, 184, 28, 0.12)',
              border: '1px solid rgba(255, 184, 28, 0.35)',
              color: 'var(--color-ufs-gold)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--color-ufs-gold)',
                display: 'inline-block',
              }}
            />
            Built for Everyone
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-ufs-text)',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            One platform,{' '}
            <span style={{ color: 'var(--color-ufs-green)' }}>
              three experiences
            </span>
          </h2>

          {/* Single centred line */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-ufs-muted)',
              margin: '0 auto',
            }}
          >
            UniConnect is designed around the student, the employer, and the university.
          </p>
        </motion.div>

        {/* ===== FEATURE CARDS ===== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            // auto-fit means: fit as many 280px columns as possible
            // on wide screens = 3 columns, on narrow = 1
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                background: feature.colorFaint,
                border: `1px solid ${feature.colorBorder}`,
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Emoji icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '20px',
                  background: feature.colorFaint,
                  border: `1px solid ${feature.colorBorder}`,
                }}
              >
                {feature.emoji}
              </div>

              {/* Role title */}
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: feature.color,
                  marginBottom: '6px',
                }}
              >
                {feature.role}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ufs-muted)',
                  marginBottom: '24px',
                }}
              >
                {feature.tagline}
              </p>

              {/* Points list */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 28px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: 1,
                }}
              >
                {feature.points.map(point => (
                  <li
                    key={point}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: 'var(--color-ufs-text)',
                    }}
                  >
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: `1px solid ${feature.color}`,
                        color: feature.color,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={feature.path}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  background: feature.color,
                  color: feature.role === 'Employers' ? '#0D1117' : 'white',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              > 
                {feature.cta} &#8594;
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturesSection