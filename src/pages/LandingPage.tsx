import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'

function LandingPage() {
  return (
    <div style={{ background: 'var(--color-ufs-dark)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />

      {/* More sections coming next session:
          - Features (Student / Employer / Admin cards)
          - How It Works
          - Footer
      */}
    </div>
  )
}

export default LandingPage