"use client";


import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {

  const contactLinks = [
        {
        icon: "/Icons/github_blanco.png",
        text: "UlisesYlave",
        href: "https://github.com/UlisesYlave",
        },
        {
        icon: "/Icons/linkedin.png",
        text: "Braulio Antayhua",
        href: "https://www.linkedin.com/in/braulioantayhua",
        },
        {
        icon: "/Icons/gmail.png",
        text: "braulises1606@gmail.com",
        href: "mailto:braulises1606@gmail.com",
        }
    ];

  const progressBarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 1;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Llamar una vez para inicializar
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="principal-footer-container bg-black text-[#e3e3db] py-20 px-5 md:px-10 flex flex-col items-center w-full box-border min-h-[50vh]"
      ref={footerRef}
    >
      <div className="footer-content flex flex-col items-center w-full max-w-screen-xl px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center md:gap-x-10 w-full">
          {/* COLUMNA 1: GIA + Logo PUCP */}
          <div className="footer-col flex flex-col items-center mb-12 md:mb-0 flex-1 min-w-[220px]">
            <h3 className="text-xl md:text-2xl font-bold text-white font-barlow-condensed mb-8">
              Braulio Ulises
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 500 500">
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
            <p className="contact-link-item">
              El secreto de una vida feliz es el respeto
            </p>
          </div>
          {/* COLUMNA 2: Contacto + Detalles */}
          <div className="footer-col flex flex-col items-center mb-12 md:mb-0 flex-1 min-w-[220px]">
            <h3 className="text-xl md:text-2xl font-bold text-white font-barlow-condensed mb-8">
              Contacto
            </h3>
            <div className="contact-links-list">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <Image
                    src={link.icon}
                    alt={link.text}
                    width={50}
                    height={50}
                  />
                  <span className="contact-link-text">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-20 text-center w-full text-sm text-[#a0a0a0] font-barlow-condensed">
        <p>©2025 Reservado todos los derechos</p>
      </div>
    </div>
  );
};

export default Footer;
