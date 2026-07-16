import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminModelsPage from './pages/AdminModelsPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/admin/modeles"
          element={
            <ProtectedRoute requireRole="admin">
              <AdminModelsPage />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="accueil" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="produits" element={<ProductsPage />} />
          <Route path="produits/:id" element={<ProductDetailPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
