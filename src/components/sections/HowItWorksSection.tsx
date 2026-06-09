import { motion } from 'framer-motion'

const steps = [
  {
    role: 'Students',
    color: 'var(--color-ufs-green)',
    colorFaint: 'rgba(0, 122, 77, 0.08)',
    colorBorder: 'rgba(0, 122, 77, 0.25)',
    emoji: '🎓',
    journey: [
      {
        step: '01',
        title: 'Register & Verify',
        desc: 'Sign up with your UFS student number. Your academic data is pulled automatically from the UFS database.',
      },
      {
        step: '02',
        title: 'Build Your SkillStack',
        desc: 'Add your skills, projects, and experience. Use the AI CV Builder to generate a professional CV in minutes.',
      },
      {
        step: '03',
        title: 'Match & Apply',
        desc: 'Get intelligently matched to jobs that fit your profile. Track every application in one place.',
      },
      {
        step: '04',
        title: 'Get Hired',
        desc: 'Schedule interviews, share your academic records securely, and land your first opportunity.',
      },
    ],
  },
  {
    role: 'Employers',
    color: 'var(--color-ufs-gold)',
    colorFaint: 'rgba(255, 184, 28, 0.08)',
    colorBorder: 'rgba(255, 184, 28, 0.25)',
    emoji: '🏢',
    journey: [
      {
        step: '01',
        title: 'Register Company',
        desc: 'Create a verified employer profile. AfriNova reviews and approves your account for platform access.',
      },
      {
        step: '02',
        title: 'Post Opportunities',
        desc: 'List full-time roles, internships, or contracts. Set skill requirements and let the system match candidates.',
      },
      {
        step: '03',
        title: 'Search Candidates',
        desc: 'Filter by degree, GPA, skills, and faculty. View verified academic records with student consent.',
      },
      {
        step: '04',
        title: 'Hire with Confidence',
        desc: 'Schedule interviews directly on the platform. All credentials are UFS-verified — no guesswork.',
      },
    ],
  },
]

function HowItWorksSection() {
  return (
    <section
      className="py-24 px-6"
      id="how-it-works"
      style={{
        background: 'var(--color-ufs-surface)',
        borderTop: '1px solid var(--color-ufs-border)',
        borderBottom: '1px solid var(--color-ufs-border)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              color: 'var(--color-ufs-green)',
              background: 'rgba(0, 122, 77, 0.1)',
              border: '1px solid rgba(0, 122, 77, 0.2)',
            }}
          >
            Simple Process
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-4"
            style={{ color: 'var(--color-ufs-text)' }}
          >
            How{' '}
            <span style={{ color: 'var(--color-ufs-gold)' }}>UniConnect</span>{' '}
            works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-ufs-muted)' }}
          >
            From registration to hiring — a clear, guided journey for every user.
          </p>
        </motion.div>

        {/* ===== TWO COLUMN JOURNEY ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((column, colIndex) => (
            <motion.div
              key={column.role}
              initial={{ opacity: 0, x: colIndex === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              // left column slides in from left, right column from right
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: colIndex * 0.15 }}
            >
              {/* Column header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{column.emoji}</span>
                <h3
                  className="text-xl font-bold"
                  style={{ color: column.color }}
                >
                  {column.role}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: column.colorBorder }}
                />
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-6">
                {column.journey.map((item, stepIndex) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.4,
                      delay: colIndex * 0.15 + stepIndex * 0.1,
                    }}
                    className="flex gap-4"
                  >
                    {/* Step number + connecting line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                        style={{
                          background: column.colorFaint,
                          border: `2px solid ${column.color}`,
                          color: column.color,
                        }}
                      >
                        {item.step}
                      </div>
                      {/* Vertical line connecting steps — hidden on last item */}
                      {stepIndex < column.journey.length - 1 && (
                        <div
                          className="w-px flex-1 mt-2"
                          style={{
                            background: column.colorBorder,
                            minHeight: '24px',
                          }}
                        />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="pb-6">
                      <h4
                        className="font-bold text-base mb-1"
                        style={{ color: 'var(--color-ufs-text)' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-ufs-muted)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorksSection