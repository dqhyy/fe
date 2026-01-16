import { Route, Routes } from 'react-router-dom'

import PublicLayout from '../components/PublicLayout'
import AdminLayout from '../pages/admin/layout/AdminLayout'

import Home from '../pages/Home'
import Specialties from '../pages/Specialties'
import Emergency from '../pages/Emergency'
import CardiologyCenter from '../pages/CardiologyCenter'
import OncologyCenter from '../pages/OncologyCenter'
import ImmunologyAllergy from '../pages/ImmunologyAllergy'
import GastroenterologyHepatology from '../pages/GastroenterologyHepatology'
import PediatricsCenter from '../pages/PediatricsCenter'
import WomenHealthCenter from '../pages/WomenHealthCenter'

import Dentistry from '../pages/Dentistry'
import VaccinationCenter from '../pages/VaccinationCenter'
import Neurology from '../pages/Neurology'
import Orthopedics from '../pages/Orthopedics'
import AestheticCenter from '../pages/AestheticCenter'
import GeneralHealth from '../pages/GeneralHealth'
import Ophthalmology from '../pages/Ophthalmology'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Booking from '../pages/Booking'
import Professionals from '../pages/Professionals'
import About from '../pages/About'
import ProfessionalsCard from '../pages/ProfessionalsCard'

import Dashboard from '../pages/admin/Dashboard'
import DashboardDoctor from '../pages/doctor/DashboardDoctor'

import UserManagement from '../pages/admin/UserManagement'
import Services from '../pages/admin/Services'
import DoctorLayout from '../pages/doctor/layout/DoctorLayout'
import Patients from '../pages/doctor/Patients'
import PatientDetail from '../pages/doctor/PatientDetail'
import MedicalRecords from '../pages/doctor/MedicalRecords'
import MedicalRecordDetail from '../pages/doctor/MedicalRecordDetail'
import DashboardStaff from '../pages/staff/DashboardStaff'
import StaffLayout from '../pages/staff/layout/StaffLayout'
import CheckIn from '../pages/staff/CheckIn'
import Invoices from '../pages/staff/Invoices'
import Chat from '../pages/staff/Chat'
import AppoitmentsStaff from '../pages/staff/AppoitmentsStaff'
import PatientLayout from '../pages/patient/layout/PatientLayout'
import PatientProfile from '../pages/patient/PatientProfile'
import BookingHistory from '../pages/patient/BookingHistory'
import MedicalResult from '../pages/patient/MedicalResult'
import NotFound from '../pages/NotFound'
import HumanResourceManagement from '../pages/admin/HumanResourceManagement'
import AppointmentsDoctor from '../pages/doctor/AppointmentsDoctor'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
    return (
        <Routes>

            {/* ===== PUBLIC & PROTECTED MIXED ===== */}
            <Route element={<PublicLayout />}>
                {/* Pages everyone can see */}
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/about" element={<About />} />

                {/* Protect Home and Booking */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/myprofile" element={<PatientLayout />}>
                        <Route index element={<PatientProfile />} />
                        <Route path="bookinghistory" element={<BookingHistory />} />
                        <Route path="medicalresults" element={<MedicalResult />} />
                    </Route>
                </Route>

                {/* Specialties Subpages (Keeping public for now) */}
                <Route path="/specialties/emergency" element={<Emergency />} />
                <Route path="/specialties/cardiology-center" element={<CardiologyCenter />} />
                <Route path="/specialties/oncology-center" element={<OncologyCenter />} />
                <Route path="/specialties/immunology-allergy" element={<ImmunologyAllergy />} />
                <Route path="/specialties/gastroenterology-hepatology" element={<GastroenterologyHepatology />} />
                <Route path="/specialties/pediatrics-center" element={<PediatricsCenter />} />
                <Route path="/specialties/women-health-center" element={<WomenHealthCenter />} />
                <Route path="/specialties/dentistry" element={<Dentistry />} />
                <Route path="/specialties/vaccination-center" element={<VaccinationCenter />} />
                <Route path="/specialties/neurology" element={<Neurology />} />
                <Route path="/specialties/orthopedics" element={<Orthopedics />} />
                <Route path="/specialties/aesthetic-center" element={<AestheticCenter />} />
                <Route path="/specialties/general-health" element={<GeneralHealth />} />
                <Route path="/specialties/ophthalmology" element={<Ophthalmology />} />

                <Route path="/professionals" element={<Professionals />} />
                <Route path="/professionals/:id" element={<ProfessionalsCard />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* ===== AUTH (không Navbar/Footer nếu muốn) ===== */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* ===== PROTECTED ROUTES ===== */}
            <Route element={<ProtectedRoute />}>
                {/* ===== ADMIN ===== */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="humanresources" element={<HumanResourceManagement />} />
                    <Route path="services" element={<Services />} />
                </Route>

                {/* ===== DOCTOR ===== */}
                <Route path="/doctor" element={<DoctorLayout />}>
                    <Route index element={<DashboardDoctor />} />

                    <Route path="patients" element={<Patients />} />
                    <Route path="appointments" element={<AppointmentsDoctor />} />

                    <Route path="patients/:patientId" element={<PatientDetail />} />
                    <Route
                        path="patients/:patientId/records"
                        element={<MedicalRecords />}
                    />
                    <Route
                        path="records/:recordId"
                        element={<MedicalRecordDetail />}
                    />
                </Route>

                {/* ===== STAFF ===== */}
                <Route path="/staff" element={<StaffLayout />}>
                    <Route index element={<DashboardStaff />} />

                    <Route path="appointments" element={<AppoitmentsStaff />} />
                    <Route path="check-in" element={<CheckIn />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="chat" element={<Chat />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default AppRoutes
