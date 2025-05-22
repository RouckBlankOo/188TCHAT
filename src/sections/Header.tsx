import LogoIcon from "@/assets/Group.png";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/button";

export const Header = () => {
  return (
    <header
      className={`py-4 border-b border-white/15 md:border-none sticky top-0 z-10  `}
    >
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border rounded-lg border-white/15 md:py-2.5 md:px-5 max-w-2xl mx-auto relative">
          <div className="hidden md:block absolute inset-0 backdrop-blur -z-10"></div>
          <div>
            {/* Logo with white background and shadow for visibility */}
            <div className="inline-flex items-center justify-center p-3 ">
              <img src={LogoIcon.src} alt="Logo" className="h-14 w-16" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-9 text-md">
              <a
                className="text-white/70 hover:text-white transition"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-white/70 hover:text-white transition"
                href="#about"
              >
                About
              </a>
              <a
                className="text-white/70 hover:text-white transition"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button />
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
