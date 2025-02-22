import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X, User, Mail, Phone, Calendar, Users, Lock } from 'lucide-react';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    universityName: '',
    arrivalDate: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: '', message: '' });
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ ...toast, visible: false });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ visible: true, type, message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || 
        !formData.phone || !formData.universityName || !formData.arrivalDate || !formData.role) {
      setError('Please fill in all fields');
      showToast('error', 'Registration failed. Please fill in all required fields.');
      setLoading(false);
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      showToast('error', 'Invalid email format. Please check your email address.');
      setLoading(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number');
      showToast('error', 'Invalid phone number. Please enter a 10-digit number.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setSuccess(true);
      setError('');
      setLoading(false);
      showToast('success', 'Registration successful! Welcome to E-Summit\'25.');
    }, 1200);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      universityName: '',
      arrivalDate: '',
      role: ''
    });
    setSuccess(false);
    setError('');
  };

  const Toast = () => {
    if (!toast.visible) return null;
    
    const bgColor = toast.type === 'success' ? 'bg-green-900/90' : 'bg-red-900/90';
    const borderColor = toast.type === 'success' ? 'border-green-500' : 'border-red-500';
    const icon = toast.type === 'success' ? 
      <CheckCircle className="h-5 w-5 text-green-400" /> : 
      <AlertCircle className="h-5 w-5 text-red-400" />;
    
    return (
      <div className={`fixed top-4 right-4 z-50 max-w-sm p-4 rounded-md border ${borderColor} ${bgColor} shadow-lg transform transition-all duration-500 ease-in-out translate-y-0 opacity-100 flex items-center`}>
        {icon}
        <p className="ml-3 text-white">{toast.message}</p>
        <button 
          onClick={() => setToast({ ...toast, visible: false })}
          className="ml-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  };

  const LoginForm = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      setLoginLoading(true);
      
      if (!loginData.email || !loginData.password) {
        setLoginError('Please fill in all fields');
        showToast('error', 'Login failed. Please fill in all required fields.');
        setLoginLoading(false);
        return;
      }
      
      if (!validateEmail(loginData.email)) {
        setLoginError('Please enter a valid email address');
        showToast('error', 'Invalid email format. Please check your email address.');
        setLoginLoading(false);
        return;
      }

      setTimeout(() => {
        setLoginSuccess(true);
        setLoginError('');
        setLoginLoading(false);
        showToast('success', 'Login successful! Welcome back.');
      }, 1200);
    };

    const handleLoginChange = (e) => {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
      });
    };

    const handleLoginClose = () => {
      setShowLogin(false);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <div className="bg-gray-950 p-8 rounded-xl w-full max-w-md relative shadow-2xl border-t border-l border-gray-800 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gray-800/30 rounded-full blur-3xl"></div>
          
          <button 
            onClick={handleLoginClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white bg-gray-900 hover:bg-gray-800 rounded-md p-1.5 transition-all duration-200"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-start mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="text-red-500 mr-2">//</span>
              Login
            </h2>
          </div>
          
          {loginError && (
            <div className="mb-6 bg-red-950/40 border-l-4 border-red-600 text-red-200 pl-4 py-2 flex items-center">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div className="ml-2">{loginError}</div>
            </div>
          )}
          
          {loginSuccess ? (
            <div className="text-center py-6 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-green-950/30 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <h3 className="text-green-500 text-xl font-bold mb-4">Login Successful!</h3>
              <p className="text-gray-300 mb-8">Welcome back to E-Summit'25.</p>
              <button 
                onClick={handleLoginClose}
                className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-medium py-3 rounded-md transition-all duration-200"
              >
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-5 relative z-10">
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full p-2.5 pl-10 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full p-2.5 pl-10 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Forgot password?
                </button>
              </div>
              
              <button 
                type="submit" 
                className={`w-full mt-6 bg-red-700 hover:bg-red-600 text-white font-medium py-3 rounded-md transition-all duration-200 flex items-center justify-center ${loginLoading ? 'opacity-70 cursor-wait' : ''}`}
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Login'
                )}
              </button>

              <div className="flex items-center justify-center mt-6 pt-4">
                <p className="text-gray-400">
                  Don't have an account?
                  <button 
                    type="button" 
                    onClick={() => setShowLogin(false)}
                    className="ml-2 text-white font-medium hover:underline"
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <Toast />
        
        <div className="bg-gray-950 p-8 rounded-xl w-full max-w-md relative shadow-2xl border-t border-l border-gray-800 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gray-800/30 rounded-full blur-3xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white bg-gray-900 hover:bg-gray-800 rounded-md p-1.5 transition-all duration-200"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-start mb-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="text-red-500 mr-2">//</span>
                Register
              </h2>
            </div>
          </div>
          
          {error && (
            <div variant="destructive" className="mb-6 bg-red-950/40 border-l-4 border-red-600 text-red-200 pl-4">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div className="ml-2">{error}</div>
            </div>
          )}
          
          {success ? (
            <div className="text-center py-6 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-green-950/30 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <h3 className="text-green-500 text-xl font-bold mb-4">Registration Successful!</h3>
              <p className="text-gray-300 mb-8">Thank you for registering. We'll send all event details to your email soon.</p>
              <div className="flex space-x-4">
                <button 
                  onClick={resetForm} 
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-md transition-all duration-200"
                >
                  Register Another
                </button>
                <button 
                  onClick={onClose} 
                  className="flex-1 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-medium py-3 rounded-md transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="flex space-x-4">
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    University Name
                  </label>
                  <input
                    type="text"
                    name="universityName"
                    value={formData.universityName}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
                <div className="relative group flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    placeholder="mm/dd/yyyy"
                    className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Campus Ambassador</option>
                  <option value="speaker">Start Up</option>
                  <option value="mentor">Mentor</option>
                  <option value="investor">Investor</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className={`w-full mt-6 bg-red-700 hover:bg-red-600 text-white font-medium py-3 rounded-md transition-all duration-200 flex items-center justify-center ${loading ? 'opacity-70 cursor-wait' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Register'
                )}
              </button>

              <div className="flex items-center justify-center mt-6 pt-4">
                <p className="text-gray-400">
                  Already have an account?
                  <button 
                    type="button" 
                    onClick={() => setShowLogin(true)}
                    className="ml-2 text-white font-medium hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
      {showLogin && <LoginForm />}
    </>
  );
};

export default RegistrationForm;