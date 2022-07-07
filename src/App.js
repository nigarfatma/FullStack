import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';



import Register from './register/Register';
import ForgotPassword from './ForgotPassword';
import EmployerLogin from './Employ page/EmployLogin';
import EmployerRegisteration from './Employ page/EmployerRegisteration';

import Admin from './admin/AdminPage/Admin';
import Jobview from './Jobs/jobview';
import AddJobs from './Jobs/AddJobs';
import Mainpage from './jobseeker/Mainpage';
import Candidate from './admin/Candidate/candidate';
import AddCandidate from './admin/Candidate/AddCandidate';
import Private from './Private.jsx';
import Company from './admin/Company/Company';
import AddCompany from './admin/Company/AddCompany';
import Invoice from './admin/Invoice/Invoice';
import AddInvoice from './admin/Invoice/AddInvoice';
import CandidateUpdate from './admin/Candidate/CandidateUpdate';
import AdminDashboard from './admin/AdminPage/AdminDashboard';
import ViewResume from './admin/LettersPDF/ViewResume';
import ViewAppointment from './admin/LettersPDF/ViewAppointment';
import ViewInvoice from './admin/LettersPDF/ViewInvoice';
import CompanyUpdate from './admin/Company/CompanyUpdate';
import InvoiceUpdate from './admin/Invoice/InvoiceUpdate';
import FileUpload from './admin/FileUpload.jsx';
import ViewOffer from './admin/LettersPDF/ViewOfffer';
import ViewOffer1 from './admin/LettersPDF/ViewOffer1';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="employerLogin" element={<EmployerLogin />} />
        <Route path="employerRegisteration" element={<EmployerRegisteration />} />
        <Route path="jobview" element={<Jobview />} />
        <Route path="addJobs" element={<AddJobs />} />
        <Route path="mainpage" element={<Mainpage />} />
        <Route path="admin" element={<Admin />} />
        <Route path="FileUpload" element={<FileUpload />} />
        <Route element={<Private />} >

          <Route path="AdminDashboard" element={<AdminDashboard />} />
          <Route path="Company" element={<Company />} />
          <Route path="AddCompany" element={<AddCompany />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="AddInvoice" element={<AddInvoice />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="AddCandidate" element={<AddCandidate />} />
          <Route path="CandidateUpdate/:id" element={<CandidateUpdate />} />
          <Route path="ViewResume/:id" element={<ViewResume />} />
          <Route path="ViewAppointment/:id" element={<ViewAppointment />} />
          <Route path="ViewInvoice/:id" element={<ViewInvoice />} />
          <Route path="CompanyUpdate/:id" element={<CompanyUpdate />} />
          <Route path="InvoiceUpdate/:id" element={<InvoiceUpdate />} />
          <Route path="ViewOffer/:id" element={<ViewOffer />} />
          <Route path="ViewOffer1/:id" element={<ViewOffer1 />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
