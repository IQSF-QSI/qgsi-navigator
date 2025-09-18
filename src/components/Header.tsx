import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#0d0d0f] text-white border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/irm-favicon-48.png" alt="IQSF" className="h-8 w-8" />
          <Link to="/" className="text-sm sm:text-base font-semibold tracking-wide">
            International Queer Safety Foundation
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/initiatives" className="hover:text-white">Initiatives</Link>
          <Link to="/binder" className="hover:text-white">Founders Binder</Link>
          <a href="https://vectorforgood.com" className="hover:text-white" target="_blank" rel="noopener">Vector For Good</a>
        </nav>
        <div className="flex items-center gap-3">
          <img src="/assets/badges/nvidia-inception.svg" alt="NVIDIA Inception Member" className="h-6 md:h-8 w-auto" />
          <img src="/assets/icons/berlin.svg" alt="Berlin" className="h-6 md:h-8 w-auto" />
          <img src="/assets/icons/tallinn.svg" alt="Tallinn" className="h-6 md:h-8 w-auto" />
        </div>
      </div>
    </header>
  );
}
