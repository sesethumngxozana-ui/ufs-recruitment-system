
// ===== USER ROLES =====
// These are the three roles from your use case document
export type UserRole = 'student' | 'employer' | 'admin'

// ===== USER =====
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string        // optional profile photo
  createdAt: string
}

// ===== STUDENT PROFILE =====
export interface StudentProfile {
  userId: string
  studentNumber: string
  faculty: string
  degree: string
  graduationYear: number
  gpa?: number
  skills: string[]
  bio?: string
}

// ===== EMPLOYER PROFILE =====
export interface EmployerProfile {
  userId: string
  companyName: string
  industry: string
  location: string
  website?: string
  description?: string
  verified: boolean
}

// ===== JOB =====
export interface Job {
  id: string
  employerId: string
  companyName: string
  title: string
  description: string
  requirements: string[]
  location: string
  type: 'full-time' | 'part-time' | 'internship' | 'contract'
  salary?: string
  postedAt: string
  deadline: string
  status: 'open' | 'closed'
}

// ===== APPLICATION =====
export interface Application {
  id: string
  jobId: string
  studentId: string
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired'
  appliedAt: string
  coverLetter?: string
}
