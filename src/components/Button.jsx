import React from "react";

const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg focus:ring-blue-500 focus:ring-offset-black",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black hover:shadow-lg focus:ring-white focus:ring-offset-black",
    primary: "bg-white text-black hover:bg-blue-100 hover:shadow-lg focus:ring-white focus:ring-offset-black",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white focus:ring-offset-black",
    success: "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg focus:ring-green-500 focus:ring-offset-black",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg focus:ring-red-500 focus:ring-offset-black",
  };

  // Additional size variants if needed
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;