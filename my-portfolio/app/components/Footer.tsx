"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full py-10 bg-black text-gray-300 border-t border-cyan-500/30 shadow-[0_-0_20px_#00ffff40]">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Copyright */}
        <div>
          <p className="text-lg font-semibold text-cyan-400">
            © {new Date().getFullYear()} Rodrigo
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          
          {/* Information */}
          <div>
            <h3 className="text-cyan-300 font-bold mb-3 tracking-wide">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.instagram.com/rod232709/"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Rodrigo237"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/rodrigo-moreno-barrientos-a245bb183/"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cyan-300 font-bold mb-3 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:rodri@example.com?subject=Collaboration%20Inquiry&body=Hi%20Rodrigo,%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20idea!"
                  className="hover:text-cyan-400 transition"
                >
                  Message
                </a>
              </li>
              <li>
                <a
                  href="/Rodrigo Moreno - Resume.pdf"
                  download
                  className="hover:text-cyan-400 transition"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
