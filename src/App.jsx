import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LoansListingPage from './pages/LoansListingPage';
import LoanDetailPage from './pages/LoanDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import LendingPartnersPage from './pages/LendingPartnersPage';
import KnowledgeCentrePage from './pages/KnowledgeCentrePage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NewsPage from './pages/NewsPage';
import CibilScorePage from './pages/CibilScorePage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        
        {/* /loans Listing Page */}
        <Route path="loans" element={<LoansListingPage />} />

        {/* Dedicated Individual Loan Detail Routes */}
        <Route path="loans/:slug" element={<LoanDetailPage />} />
        
        <Route path="lending-partners" element={<LendingPartnersPage />} />
        <Route path="knowledge-centre" element={<KnowledgeCentrePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="cibil-score" element={<CibilScorePage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
