import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X, Mail, Lock } from 'lucide-react';

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: '', message: '' });

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
    
    // Form validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      showToast('error', 'Login failed. Please fill in all required fields.');
      setLoading(false);
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      showToast('error', 'Invalid email format. Please check your email address.');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setError('');
      setLoading(false);
      showToast('success', 'Login successful! Welcome back.');
    }, 1200);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Toast component
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

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
      {/* Toast notification */}
      <Toast />
      
      <div className="bg-gray-950 p-8 rounded-xl w-full max-w-md relative shadow-2xl border-t border-l border-gray-800 overflow-hidden">
        {/* Red accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
        
        {/* Background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gray-800/30 rounded-full blur-3xl"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white bg-gray-900 hover:bg-gray-800 rounded-md p-1.5 transition-all duration-200"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Header */}
        <div className="flex items-start mb-8 relative z-10">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="text-red-500 mr-2">//</span>
              Login
            </h2>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 bg-red-950/40 border-l-4 border-red-600 text-red-200 pl-4 py-2 flex items-center">
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
            <h3 className="text-green-500 text-xl font-bold mb-4">Login Successful!</h3>
            <p className="text-gray-300 mb-8">Welcome back to E-Summit'25.</p>
            <button 
              onClick={onClose} 
              className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-medium py-3 rounded-md transition-all duration-200"
            >
              Continue
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Email Field */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 pl-10 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-300 mb-1.5 group-hover:text-gray-200 transition-colors duration-200">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 pl-10 rounded-md bg-gray-900 text-white border border-gray-800 focus:border-red-600 focus:outline-none transition-all duration-200 hover:border-gray-700"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button type="button" className="text-sm text-gray-400 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>
            
            {/* Submit Button */}
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
                'Login'
              )}
            </button>

            {/* Register Link */}
            <div className="flex items-center justify-center mt-6 pt-4">
              <p className="text-gray-400">
                Don't have an account?
                <button type="button" className="ml-2 text-white font-medium hover:underline">
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

export default LoginForm;