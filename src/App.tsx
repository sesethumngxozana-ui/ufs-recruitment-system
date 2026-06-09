import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages — we'll build each of these together
import LandingPage   from './pages/LandingPage'
import LoginPage     from './pages/auth/LoginPage'
import RegisterPage  from './pages/auth/RegisterPage'
import StudentDashboard  from './pages/student/StudentDashboard'
import EmployerDashboard from './pages/employer/EmployerDashboard'
import AdminDashboard    from './pages/admin/AdminDashboard'
import NotFoundPage  from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/"         element={<LandingPage />} />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Role-based dashboards */}
        <Route path="/student/*"  element={<StudentDashboard />} />
        <Route path="/employer/*" element={<EmployerDashboard />} />
        <Route path="/admin/*"    element={<AdminDashboard />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App