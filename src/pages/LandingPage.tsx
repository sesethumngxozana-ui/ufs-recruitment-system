import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function LandingPage() {
  return (
    <div style={{ background: 'var(--color-ufs-dark)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />

       {/* Spacer between Hero and Features */}
         <div style={{ height: '5px' }} />

      <FeaturesSection />
        {/* Spacer between Features and How It Works */}
       <div style={{ height: '5px' }} />

      <HowItWorksSection />
      <motion.section initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:false}} style={{padding:'96px 24px',textAlign:'center',background:'radial-gradient(circle at center, rgba(0,122,77,.24), transparent 58%)'}}>
        <h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',marginBottom:'12px'}}>Ready to connect?</h2><p style={{color:'var(--color-ufs-muted)',maxWidth:'630px',margin:'0 auto 28px'}}>Join thousands of UFS students and top employers already on the platform</p><div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}><Link to="/register" style={{padding:'12px 18px',background:'var(--color-ufs-green)',color:'var(--color-ufs-text)',borderRadius:'8px',textDecoration:'none',fontWeight:700}}>Get Started as Student</Link><Link to="/register" style={{padding:'11px 18px',border:'1px solid var(--color-ufs-gold)',color:'var(--color-ufs-gold)',borderRadius:'8px',textDecoration:'none',fontWeight:700}}>Register your Company</Link></div>
      </motion.section>
      <Footer />
    </div>
  )
}

export default LandingPage
