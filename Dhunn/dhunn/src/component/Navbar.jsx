import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Heart, User, User2, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-500">
          Dhun<span className="text-white"> 🎵</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center gap-2 hover:text-pink-400">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link to="/library" className="flex items-center gap-2 hover:text-pink-400">
            <Heart className="w-5 h-5" />
            <span>Library</span>
          </Link>

<Link to="/signup" className="flex items-center gap-2 hover:text-pink-400">
            <UserPlus className="w-5 h-5" />
            <span>Sign up</span></Link>

            <Link to="/login" className="flex items-center gap-2 hover:text-pink-400">
            <User2 className="w-5 h-5" />
            <span>Log In</span></Link>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 flex flex-col">
          <Link to="/" className="flex items-center gap-2 hover:text-pink-400">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link to="/library" className="flex items-center gap-2 hover:text-pink-400">
            <Heart className="w-5 h-5" />
            <span>Library</span>
          </Link>

          <Link to="/signup" className="flex items-center hover:text-pink-400">Sign Up</Link>
          <Link to="/login" className="flex items-center hover:text-pink-400">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
