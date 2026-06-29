import React, { useEffect } from 'react';
import { 
  Routes, 
  Route, 
  NavLink, 
  Navigate, 
  useNavigate, 
  useLocation 
} from 'react-router-dom';
import {
    Sprout,
    MapPin,
    AlertTriangle,
    CloudRain,
    Plus,
    Layers,
    Award,
    MessageSquare,
    LayoutDashboard,
    CloudSun,
    User,
    LogOut
} from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';


// Import action creators and store from main.jsx
import { 
  logout,
  setDemoMode
} from './main.jsx';

// Import raw components from pages via namespace to support empty files
import * as RawHomeModule from './pages/Home';
import * as RawLoginModule from './pages/Login';
import * as RawDashboardModule from './pages/Dashboard';
import * as RawCropsModule from './pages/Crops';
import * as RawSchemesModule from './pages/Schemes';
import * as RawWeatherModule from './pages/Weather';
import * as RawChatbotModule from './pages/Chatbot';
import * as RawOfficerPortalModule from './pages/OfficerPortal';
import * as RawProfileModule from './pages/Profile';

const RawHome = RawHomeModule.default;
const RawLogin = RawLoginModule.default;
const RawDashboard = RawDashboardModule.default;
const RawCrops = RawCropsModule.default;
const RawSchemes = RawSchemesModule.default;
const RawWeather = RawWeatherModule.default;
const RawChatbot = RawChatbotModule.default;
const RawOfficerPortal = RawOfficerPortalModule.default;
const RawProfile = RawProfileModule.default;

// ==========================================
// SAFE PAGE WRAPPER FOR PLACEHOLDERS
// ==========================================

const safePage = (Component, name) => {
  if (Component && (typeof Component === 'function' || typeof Component === 'object') && Object.keys(Component).length > 0 || (Component && Component.name)) {
    return <Component />;
  }
  return (
    <div className="glass-card" style={{ padding: '35px', textAlign: 'center', marginTop: '20px', animation: 'fadeIn 0.4s ease-out' }}>
      <div style={{ display: 'inline-flex', background: 'var(--primary-glow)', padding: '12px', borderRadius: '12px', marginBottom: '16px' }}>
        <Sprout size={32} color="var(--primary)" />
      </div>
      <h3 style={{ color: 'var(--text-main)', fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>{name} Page (Draft Layout)</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '25px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.4' }}>
        This page component is currently empty. You and your team can edit <code>src/pages/{name}.jsx</code> to start building this page.
      </p>
      
      <div style={{ padding: '20px', background: '#f8faf9', border: '1px dashed var(--border-hover)', borderRadius: '10px', display: 'inline-block', textAlign: 'left', fontFamily: 'var(--font-family)', fontSize: '13.5px', width: '100%', maxWidth: '550px' }}>
        <p style={{ margin: 0, fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>💡 Quick Redux Toolkit Integration Cheat Sheet:</p>
        <div style={{ background: '#1c1e21', padding: '12px 16px', borderRadius: '6px', color: '#e3e3e3', fontFamily: 'monospace', overflowX: 'auto', fontSize: '12px', lineHeight: '1.5' }}>
          <div><span style={{ color: '#ff7b72' }}>import</span> {'{ useSelector, useDispatch }'} <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'react-redux'</span>;</div>
          <div><span style={{ color: '#ff7b72' }}>const</span> user = <span style={{ color: '#d2a8ff' }}>useSelector</span>(state =&gt; state.agri.user);</div>
          <div style={{ color: '#8b949e', marginTop: '6px' }}>// Render user design mock data:</div>
          <div>{'user ? <p>Hello {user.name}!</p> : <p>Guest</p>'}</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => safePage(RawHome, 'Home');
const Login = () => safePage(RawLogin, 'Login');
const Dashboard = () => safePage(RawDashboard, 'Dashboard');
const Crops = () => safePage(RawCrops, 'Crops');
const Schemes = () => safePage(RawSchemes, 'Schemes');
const Weather = () => safePage(RawWeather, 'Weather');
const Chatbot = () => safePage(RawChatbot, 'Chatbot');
const OfficerPortal = () => safePage(RawOfficerPortal, 'OfficerPortal');
const Profile = () => safePage(RawProfile, 'Profile');

// Basic routing guard
const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.agri.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(state => state.agri.user);
  const demoMode = useSelector(state => state.agri.demoMode);

  const getTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'AgriSmart Hub';
    if (path === '/login') return 'Account Gateway';
    if (path === '/dashboard') return user ? `Welcome, ${user.name}` : 'Welcome, Guest';
    if (path === '/crops') return 'Crop Cultivation Log';
    if (path === '/weather') return 'Weather Intelligence';
    if (path === '/chatbot') return 'AgriSmart AI Assistant';
    if (path === '/schemes') return 'Government Schemes & Eligibility';
    if (path === '/officer-portal') return 'Agriculture Officer Hub';
    if (path === '/profile') return 'Profile & Farming Achievements';
    return 'AgriSmart';
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div style={{ background: '#e2f3e9', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
            <Sprout size={24} color="var(--primary)" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.5px' }}>AgriSmart</span>
        </div>

        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <Sprout size={18} /> Home
          </NavLink>

          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink 
            to="/crops" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <Layers size={18} /> Crop Records
          </NavLink>

          {(!user || user.role === 'FARMER') && (
            <NavLink 
              to="/schemes" 
              className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
            >
              <Award size={18} /> Schemes
            </NavLink>
          )}

          <NavLink 
            to="/weather" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <CloudSun size={18} /> Weather
          </NavLink>

          <NavLink 
            to="/chatbot" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <MessageSquare size={18} /> AI Chatbot
          </NavLink>

          {user && (user.role === 'OFFICER' || user.role === 'ADMIN') && (
            <NavLink 
              to="/officer-portal" 
              className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
            >
              <Users size={18} /> Officer Portal
            </NavLink>
          )}

          <NavLink 
            to="/profile" 
            className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
          >
            <User size={18} /> Profile
          </NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {user ? (
            <>
              <div 
                style={{ textAlign: 'right', cursor: 'pointer' }} 
                onClick={() => navigate('/profile')}
              >
                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-main)', margin: 0 }}>{user.name}</p>
                <span className={`badge badge-${user.role.toLowerCase()}`} style={{ fontSize: '9px', padding: '2px 6px', display: 'inline-block' }}>
                  {user.role}
                </span>
              </div>
              <button 
                onClick={() => {
                  dispatch(logout());
                  navigate('/');
                }} 
                className="btn-secondary" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', fontSize: '13px', border: '1px solid var(--border-color)' }}
              >
                <LogOut size={13} /> Exit
              </button>
            </>
          ) : (
            <button onClick={() => navigate('/login')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '13.5px' }}>
              Sign In
            </button>
          )}
        </div>
      </header>

      <main className="main-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-main)' }}>
              {getTitle()}
            </h2>
          </div>

          {/* Sync Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '9999px', background: demoMode ? '#fef3c7' : '#dcfce7', border: `1px solid ${demoMode ? 'var(--warning)' : 'var(--primary)'}` }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: demoMode ? 'var(--warning)' : 'var(--primary)' }}></div>
            <span style={{ fontSize: '12px', fontWeight: '700', color: demoMode ? 'var(--warning)' : 'var(--primary)' }}>
              {demoMode ? 'Local Offline Mode' : 'Connected to Cloud'}
            </span>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/crops" element={<ProtectedRoute><Crops /></ProtectedRoute>} />
          <Route path="/schemes" element={<ProtectedRoute><Schemes /></ProtectedRoute>} />
          <Route path="/weather" element={<ProtectedRoute><Weather /></ProtectedRoute>} />
          <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
          <Route path="/officer-portal" element={<ProtectedRoute><OfficerPortal /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
