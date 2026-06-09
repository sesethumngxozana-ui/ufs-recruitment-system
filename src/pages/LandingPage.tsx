import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'

function LandingPage() {
  return (
    <div style={{ background: 'var(--color-ufs-dark)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />

       {/* Spacer between Hero and Features */}
         <div style={{ height: '80px' }} />

      <FeaturesSection />
        {/* Spacer between Features and How It Works */}
       <div style={{ height: '80px' }} />

      <HowItWorksSection />

      {/* More sections coming next session:
          - Features (Student / Employer / Admin cards)
          - How It Works
          - Footer
      */}
    </div>
  )
}

export default LandingPage