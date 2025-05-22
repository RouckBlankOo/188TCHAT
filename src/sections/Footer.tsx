import LogoIcon from "@/assets/LogoX.svg";
import XSocial from "@/assets/social-x.svg";
import INstaSocial from "@/assets/social-instagram.svg";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/15 bg-[#1a0505]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6">
          {/* Left: Logo and Copyright */}
          <div className="flex items-center gap-x-4">
            <LogoIcon className="h-8 w-8" />
            <span className="font-medium text-white/80">
              © {new Date().getFullYear()} 188TCHAT. All rights reserved.
            </span>
          </div>
          {/* Right: Social Media */}
          <div className="flex gap-x-6">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <XSocial className="h-6 w-6 text-white/40 hover:text-[#B62706] transition" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <INstaSocial className="h-6 w-6 text-white/40 hover:text-[#B62706] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
