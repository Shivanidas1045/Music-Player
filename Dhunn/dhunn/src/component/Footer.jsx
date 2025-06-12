import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 text-center pt-15">
      <h2 className="text-2xl font-bold mb-2 text-pink-500">🎵 Dhunn - Feel the Beat 🎵</h2>

      <p className="text-sm max-w-xl mx-auto text-gray-300">
        Dhunn is your ultimate music companion – stream trending songs, discover new artists,
        and create your own musical vibe. Enjoy seamless playback and curated experiences.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-white transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="#" aria-label="Twitter" className="text-pink-500 hover:text-white transition-colors duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" aria-label="YouTube" className="text-pink-500 hover:text-white transition-colors duration-300">
          <Youtube size={24} />
        </a>
        <a href="#" aria-label="Facebook" className="text-pink-500 hover:text-white transition-colors duration-300">
          <Facebook size={24} />
        </a>
      </div>

      <p className="text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} Dhunn. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
