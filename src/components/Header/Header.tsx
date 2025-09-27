"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar-simple fixed top-0 w-full bg-black text-white flex justify-between items-center z-50 shadow-lg px-[50px] py-[10px]">
        {/* Logo GIA a la izquierda */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 500 500">

            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#2EA062" />
                <stop offset="100%" stop-color="#020919" />
              </linearGradient>
            </defs>

            <rect x="25" y="25" width="450" height="450" rx="60" ry="60" fill="url(#grad)" />

            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" 
                  font-family="Arial, Helvetica, sans-serif" font-size="220" font-weight="bold" fill="white">
              :)
            </text>
          </svg>
          <span className="logo-text text-2xl ml-2 font-bold"> Braulio Ulises</span>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          className="burger-menu md:hidden z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" style={{ color: "#ffffff" }} />
          ) : (
            <Menu
              size={24}
              className="text-white"
              style={{ color: "#ffffff" }}
            />
          )}
        </button>

        {/* Navegación desktop */}
        <nav className="nav-links hidden md:block">
          <ul className="flex gap-8 text-lg m-0 p-0 list-none">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <span className="nav-text">Inicio</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/proyectos" className="nav-link">
                <span className="nav-text">Proyectos</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menú móvil */}
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link href="/" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="mobile-nav-text">Inicio</span>
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link
                  href="/proyectos"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-text">Proyectos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay para cerrar el menú */}
        {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
      </header>
    </>
  );
};

export default Header;
